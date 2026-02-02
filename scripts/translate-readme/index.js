/**
 * README Translation Tool using Claude Agent SDK
 * Converted to Node.js from TypeScript
 */

const { query } = require("@anthropic-ai/claude-agent-sdk");
const fs = require("fs/promises");
const path = require("path");
const { createHash } = require("crypto");

function hashContent(content) {
  return createHash("sha256").update(content).digest("hex").slice(0, 16);
}

async function readCache(cachePath) {
  try {
    const data = await fs.readFile(cachePath, "utf-8");
    return JSON.parse(data);
  } catch {
    return null;
  }
}

async function writeCache(cachePath, cache) {
  await fs.writeFile(cachePath, JSON.stringify(cache, null, 2), "utf-8");
}

const LANGUAGE_NAMES = {
  // Tier 1 - No-brainers
  zh: "Chinese (Simplified)",
  ja: "Japanese",
  "pt-br": "Brazilian Portuguese",
  ko: "Korean",
  es: "Spanish",
  de: "German",
  fr: "French",
  // Tier 2 - Strong tech scenes
  he: "Hebrew",
  ar: "Arabic",
  ru: "Russian",
  pl: "Polish",
  cs: "Czech",
  nl: "Dutch",
  tr: "Turkish",
  uk: "Ukrainian",
  // Tier 3 - Emerging/Growing fast
  vi: "Vietnamese",
  id: "Indonesian",
  th: "Thai",
  hi: "Hindi",
  bn: "Bengali",
  ro: "Romanian",
  sv: "Swedish",
  // Tier 4 - Why not
  it: "Italian",
  el: "Greek",
  hu: "Hungarian",
  fi: "Finnish",
  da: "Danish",
  no: "Norwegian",
  // Other supported
  bg: "Bulgarian",
  et: "Estonian",
  lt: "Lithuanian",
  lv: "Latvian",
  pt: "Portuguese",
  sk: "Slovak",
  sl: "Slovenian",
  "zh-tw": "Chinese (Traditional)",
};

function getLanguageName(code) {
  return LANGUAGE_NAMES[code.toLowerCase()] || code;
}

async function translateToLanguage(content, targetLang, options) {
  const languageName = getLanguageName(targetLang);

  const preserveCodeInstructions = options.preserveCode
    ? `
IMPORTANT: Preserve all code blocks exactly as they are. Do NOT translate:
- Code inside \`\`\` blocks
- Inline code inside \` backticks
- Command examples
- File paths
- Variable names, function names, and technical identifiers
- URLs and links
`
    : "";

  const prompt = `Translate the following README.md content from English to ${languageName} (${targetLang}).

${preserveCodeInstructions}
Guidelines:
- Maintain all Markdown formatting (headers, lists, links, etc.)
- Keep the same document structure
- Translate headings, descriptions, and explanatory text naturally
- Preserve technical accuracy
- Use appropriate technical terminology for ${languageName}
- Keep proper nouns (product names, company names) unchanged unless they have official translations

Here is the README content to translate:

---
${content}
---

CRITICAL OUTPUT RULES:
- Output ONLY the raw translated markdown content
- Do NOT wrap output in \`\`\`markdown code fences
- Do NOT add any preamble, explanation, or commentary
- Start directly with the translated content
- The output will be saved directly to a .md file`;

  let translation = "";
  let costUsd = 0;
  let charCount = 0;
  const startTime = Date.now();

  const stream = query({
    prompt,
    options: {
      model: options.model || "sonnet",
      systemPrompt: `You are an expert technical translator specializing in software documentation.
You translate README files while preserving Markdown formatting and technical accuracy.
Always output only the translated content without any surrounding explanation.`,
      permissionMode: "bypassPermissions",
      allowDangerouslySkipPermissions: true,
      includePartialMessages: true,
    },
  });

  const spinnerFrames = ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"];
  let spinnerIdx = 0;

  for await (const message of stream) {
    if (message.type === "stream_event") {
      const event = message.event;
      if (event.type === "content_block_delta" && event.delta?.type === "text_delta" && event.delta.text) {
        translation += event.delta.text;
        charCount += event.delta.text.length;

        if (options.verbose) {
          const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
          const spinner = spinnerFrames[spinnerIdx++ % spinnerFrames.length];
          process.stdout.write(`\r   ${spinner} Translating... ${charCount} chars (${elapsed}s)`);
        }
      }
    }

    if (message.type === "assistant") {
      for (const block of message.message.content) {
        if (block.type === "text" && !translation) {
          translation = block.text;
          charCount = translation.length;
        }
      }
    }

    if (message.type === "result") {
      if (message.subtype === "success") {
        costUsd = message.total_cost_usd;
        if (!translation && message.result) {
          translation = message.result;
          charCount = translation.length;
        }
      }
    }
  }

  if (options.verbose) {
    process.stdout.write("\r" + " ".repeat(60) + "\r");
  }

  let cleaned = translation.trim();
  if (cleaned.startsWith("```markdown")) {
    cleaned = cleaned.slice("```markdown".length);
  } else if (cleaned.startsWith("```md")) {
    cleaned = cleaned.slice("```md".length);
  } else if (cleaned.startsWith("```")) {
    cleaned = cleaned.slice(3);
  }
  if (cleaned.endsWith("```")) {
    cleaned = cleaned.slice(0, -3);
  }
  cleaned = cleaned.trim();

  return { translation: cleaned, costUsd };
}

async function translateReadme(options) {
  const {
    source,
    languages,
    outputDir,
    pattern = "README.{lang}.md",
    preserveCode = true,
    model,
    maxBudgetUsd,
    verbose = false,
    force = false,
  } = options;

  const parallel = Math.min(languages.length, 10);
  const sourcePath = path.resolve(source);
  const content = await fs.readFile(sourcePath, "utf-8");

  const outDir = outputDir ? path.resolve(outputDir) : path.dirname(sourcePath);
  await fs.mkdir(outDir, { recursive: true });

  const sourceHash = hashContent(content);
  const cachePath = path.join(outDir, ".translation-cache.json");
  const cache = await readCache(cachePath);
  const isHashMatch = cache?.sourceHash === sourceHash;

  const results = [];
  let totalCostUsd = 0;

  if (verbose) {
    console.log(`📖 Source: ${sourcePath}`);
    console.log(`📂 Output: ${outDir}`);
    console.log(`🌍 Languages: ${languages.join(", ")}`);
    console.log(`⚡ Running ${parallel} translations in parallel`);
    console.log("");
  }

  async function translateLang(lang) {
    const outputFilename = pattern.replace("{lang}", lang);
    const outputPath = path.join(outDir, outputFilename);

    if (!force && isHashMatch && cache?.translations[lang]) {
      const outputExists = await fs.access(outputPath).then(() => true).catch(() => false);
      if (outputExists) {
        if (verbose) {
          console.log(`   ✅ ${outputFilename} (cached, unchanged)`);
        }
        return { language: lang, outputPath, success: true, cached: true, costUsd: 0 };
      }
    }

    if (verbose) {
      console.log(`🔄 Translating to ${getLanguageName(lang)} (${lang})...`);
    }

    try {
      const { translation, costUsd } = await translateToLanguage(content, lang, {
        preserveCode,
        model,
        verbose: verbose && parallel === 1,
      });

      await fs.writeFile(outputPath, translation, "utf-8");

      if (verbose) {
        console.log(`   ✅ Saved to ${outputFilename} ($${costUsd.toFixed(4)})`);
      }

      return { language: lang, outputPath, success: true, costUsd };
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      if (verbose) {
        console.log(`   ❌ ${lang} failed: ${errorMessage}`);
      }
      return { language: lang, outputPath, success: false, error: errorMessage };
    }
  }

  async function runWithConcurrency(items, limit, fn) {
    const results = [];
    const executing = new Set();

    for (const item of items) {
      if (maxBudgetUsd && totalCostUsd >= maxBudgetUsd) {
        results.push({
          language: String(item),
          outputPath: "",
          success: false,
          error: "Budget exceeded",
        });
        continue;
      }

      const p = fn(item).then((result) => {
        results.push(result);
        if (result.costUsd) {
          totalCostUsd += result.costUsd;
        }
      });

      const wrapped = p.finally(() => {
        executing.delete(wrapped);
      });

      executing.add(wrapped);

      if (executing.size >= limit) {
        await Promise.race(executing);
      }
    }

    await Promise.all(executing);
    return results;
  }

  const translationResults = await runWithConcurrency(languages, parallel, translateLang);
  results.push(...translationResults);

  const newCache = {
    sourceHash,
    lastUpdated: new Date().toISOString(),
    translations: {
      ...(isHashMatch ? cache?.translations : {}),
      ...Object.fromEntries(
        results.filter(r => r.success && !r.cached).map(r => [
          r.language,
          { hash: sourceHash, translatedAt: new Date().toISOString(), costUsd: r.costUsd || 0 }
        ])
      ),
    },
  };
  await writeCache(cachePath, newCache);

  const successful = results.filter((r) => r.success).length;
  const failed = results.filter((r) => !r.success).length;

  if (verbose) {
    console.log("");
    console.log(`📊 Summary: ${successful} succeeded, ${failed} failed`);
    console.log(`💰 Total cost: $${totalCostUsd.toFixed(4)}`);
  }

  return {
    results,
    totalCostUsd,
    successful,
    failed,
  };
}

const SUPPORTED_LANGUAGES = Object.keys(LANGUAGE_NAMES);

module.exports = {
  translateReadme,
  SUPPORTED_LANGUAGES,
  LANGUAGE_NAMES,
};
