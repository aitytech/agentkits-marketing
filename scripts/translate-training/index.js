/**
 * Training Folder Translation Tool using Claude Agent SDK
 * Translates all .md files in a training folder to multiple languages
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
    return {};
  }
}

async function writeCache(cachePath, cache) {
  await fs.writeFile(cachePath, JSON.stringify(cache, null, 2), "utf-8");
}

const LANGUAGE_NAMES = {
  zh: "Chinese (Simplified)",
  ja: "Japanese",
  "pt-br": "Brazilian Portuguese",
  ko: "Korean",
  es: "Spanish",
  de: "German",
  fr: "French",
  he: "Hebrew",
  ar: "Arabic",
  ru: "Russian",
  pl: "Polish",
  cs: "Czech",
  nl: "Dutch",
  tr: "Turkish",
  uk: "Ukrainian",
  vi: "Vietnamese",
  id: "Indonesian",
  th: "Thai",
  hi: "Hindi",
  bn: "Bengali",
  ro: "Romanian",
  sv: "Swedish",
  it: "Italian",
  el: "Greek",
  hu: "Hungarian",
  fi: "Finnish",
  da: "Danish",
  no: "Norwegian",
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

async function translateContent(content, targetLang, options) {
  const languageName = getLanguageName(targetLang);

  const prompt = `Translate the following training course content from English to ${languageName} (${targetLang}).

IMPORTANT: Preserve all code blocks exactly as they are. Do NOT translate:
- Code inside \`\`\` blocks
- Inline code inside \` backticks
- Command examples (like \`/training:start-0-0\`, \`/campaign:plan\`)
- Slash commands
- File paths
- Variable names, function names, and technical identifiers
- URLs and links
- Agent names (like \`attraction-specialist\`, \`lead-qualifier\`)

Guidelines:
- Maintain all Markdown formatting (headers, lists, links, etc.)
- Keep the same document structure
- Translate headings, descriptions, and explanatory text naturally
- Preserve technical accuracy
- Use appropriate technical terminology for ${languageName}
- Keep proper nouns (product names like "AgentKits", "Markit", "Claude Code") unchanged

Here is the content to translate:

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

  const stream = query({
    prompt,
    options: {
      model: options.model || "sonnet",
      systemPrompt: `You are an expert technical translator specializing in software documentation and training materials.
You translate course content while preserving Markdown formatting, technical accuracy, and educational tone.
Always output only the translated content without any surrounding explanation.`,
      permissionMode: "bypassPermissions",
      allowDangerouslySkipPermissions: true,
      includePartialMessages: true,
    },
  });

  for await (const message of stream) {
    if (message.type === "stream_event") {
      const event = message.event;
      if (event.type === "content_block_delta" && event.delta?.type === "text_delta" && event.delta.text) {
        translation += event.delta.text;
      }
    }

    if (message.type === "assistant") {
      for (const block of message.message.content) {
        if (block.type === "text" && !translation) {
          translation = block.text;
        }
      }
    }

    if (message.type === "result") {
      if (message.subtype === "success") {
        costUsd = message.total_cost_usd;
        if (!translation && message.result) {
          translation = message.result;
        }
      }
    }
  }

  // Clean up any code fences that might have been added
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

async function translateTraining(options) {
  const {
    sourceDir,
    languages,
    baseDir,
    model,
    maxBudgetUsd,
    verbose = false,
    force = false,
  } = options;

  const sourcePath = path.resolve(sourceDir);
  const basePath = baseDir ? path.resolve(baseDir) : path.dirname(sourcePath);

  // Get all .md files in source directory
  const files = await fs.readdir(sourcePath);
  const mdFiles = files.filter(f => f.endsWith(".md"));

  if (verbose) {
    console.log(`📂 Source: ${sourcePath}`);
    console.log(`📁 Base: ${basePath}`);
    console.log(`📄 Files: ${mdFiles.length} markdown files`);
    console.log(`🌍 Languages: ${languages.join(", ")}`);
    console.log("");
  }

  const results = [];
  let totalCostUsd = 0;

  // Process each language
  for (const lang of languages) {
    const targetDir = path.join(basePath, `training-${lang}`);
    await fs.mkdir(targetDir, { recursive: true });

    const cachePath = path.join(targetDir, ".translation-cache.json");
    const cache = await readCache(cachePath);

    if (verbose) {
      console.log(`\n🌐 Translating to ${getLanguageName(lang)} (${lang})...`);
      console.log(`   Output: ${targetDir}`);
    }

    let langCost = 0;
    let langSuccess = 0;
    let langCached = 0;
    let langFailed = 0;

    // Process files in parallel (max 5 concurrent)
    const concurrency = 5;
    const fileQueue = [...mdFiles];
    const executing = new Set();

    async function processFile(filename) {
      const sourceFile = path.join(sourcePath, filename);
      const targetFile = path.join(targetDir, filename);

      const content = await fs.readFile(sourceFile, "utf-8");
      const contentHash = hashContent(content);

      // Check cache
      if (!force && cache[filename]?.hash === contentHash) {
        const exists = await fs.access(targetFile).then(() => true).catch(() => false);
        if (exists) {
          if (verbose) {
            console.log(`   ✅ ${filename} (cached)`);
          }
          langCached++;
          return { file: filename, success: true, cached: true, costUsd: 0 };
        }
      }

      if (maxBudgetUsd && totalCostUsd >= maxBudgetUsd) {
        if (verbose) {
          console.log(`   ⏸️  ${filename} (budget exceeded)`);
        }
        return { file: filename, success: false, error: "Budget exceeded" };
      }

      try {
        if (verbose) {
          process.stdout.write(`   🔄 ${filename}...`);
        }

        const { translation, costUsd } = await translateContent(content, lang, { model });
        await fs.writeFile(targetFile, translation, "utf-8");

        // Update cache
        cache[filename] = {
          hash: contentHash,
          translatedAt: new Date().toISOString(),
          costUsd,
        };

        langCost += costUsd;
        totalCostUsd += costUsd;
        langSuccess++;

        if (verbose) {
          process.stdout.write(`\r   ✅ ${filename} ($${costUsd.toFixed(4)})\n`);
        }

        return { file: filename, success: true, costUsd };
      } catch (error) {
        langFailed++;
        const errorMessage = error instanceof Error ? error.message : String(error);
        if (verbose) {
          process.stdout.write(`\r   ❌ ${filename}: ${errorMessage}\n`);
        }
        return { file: filename, success: false, error: errorMessage };
      }
    }

    // Run with concurrency control
    for (const filename of fileQueue) {
      const p = processFile(filename).then(result => {
        results.push({ ...result, language: lang });
      });

      const wrapped = p.finally(() => executing.delete(wrapped));
      executing.add(wrapped);

      if (executing.size >= concurrency) {
        await Promise.race(executing);
      }
    }

    await Promise.all(executing);

    // Save cache
    await writeCache(cachePath, cache);

    if (verbose) {
      console.log(`   📊 ${lang}: ${langSuccess} translated, ${langCached} cached, ${langFailed} failed ($${langCost.toFixed(4)})`);
    }
  }

  const successful = results.filter(r => r.success).length;
  const cached = results.filter(r => r.cached).length;
  const failed = results.filter(r => !r.success).length;

  if (verbose) {
    console.log("");
    console.log(`📊 Total: ${successful} succeeded (${cached} cached), ${failed} failed`);
    console.log(`💰 Total cost: $${totalCostUsd.toFixed(4)}`);
  }

  return {
    results,
    totalCostUsd,
    successful,
    cached,
    failed,
  };
}

const SUPPORTED_LANGUAGES = Object.keys(LANGUAGE_NAMES);

module.exports = {
  translateTraining,
  SUPPORTED_LANGUAGES,
  LANGUAGE_NAMES,
};
