#!/usr/bin/env node

/**
 * README Translation CLI
 * Translate README.md files using Claude Agent SDK
 *
 * Usage:
 *   node scripts/translate-readme/cli.js README.md vi ja ko
 *   node scripts/translate-readme/cli.js --help
 */

const { translateReadme, SUPPORTED_LANGUAGES, LANGUAGE_NAMES } = require("./index.js");

function printHelp() {
  console.log(`
readme-translator - Translate README.md files using Claude Agent SDK

AUTHENTICATION:
  If Claude Code is installed and authenticated (Pro/Max subscription),
  no API key is needed. Otherwise, set ANTHROPIC_API_KEY environment variable.

USAGE:
  node scripts/translate-readme/cli.js [options] <source> <languages...>
  node scripts/translate-readme/cli.js --help
  node scripts/translate-readme/cli.js --list-languages

ARGUMENTS:
  source          Path to the source README.md file
  languages       Target language codes (e.g., es fr de ja zh)

OPTIONS:
  -o, --output <dir>      Output directory (default: same as source)
  -p, --pattern <pat>     Output filename pattern (default: README.{lang}.md)
  --no-preserve-code      Translate code blocks too (not recommended)
  -m, --model <model>     Claude model to use (default: sonnet)
  --max-budget <usd>      Maximum budget in USD
  -v, --verbose           Show detailed progress
  -f, --force             Force re-translation ignoring cache
  -h, --help              Show this help message
  --list-languages        List all supported language codes

EXAMPLES:
  # Translate to Spanish and French
  node scripts/translate-readme/cli.js README.md es fr

  # Translate to multiple languages with custom output
  node scripts/translate-readme/cli.js -v -o ./i18n README.md de ja ko zh

  # Translate to all major languages
  node scripts/translate-readme/cli.js -v README.md zh ja ko es de fr pt-br vi ru ar

PERFORMANCE:
  All translations run in parallel automatically (up to 10 concurrent).
  Cache prevents re-translating unchanged files.

SUPPORTED LANGUAGES:
  Run with --list-languages to see all supported language codes
`);
}

function printLanguages() {
  console.log("\nSupported Language Codes:\n");
  const sorted = Object.entries(LANGUAGE_NAMES).sort((a, b) =>
    a[1].localeCompare(b[1])
  );
  for (const [code, name] of sorted) {
    console.log(`  ${code.padEnd(8)} ${name}`);
  }
  console.log("");
}

function parseArgs(argv) {
  const args = {
    source: "",
    languages: [],
    preserveCode: true,
    verbose: false,
    force: false,
    help: false,
    listLanguages: false,
  };

  const positional = [];
  let i = 2; // Skip node and script path

  while (i < argv.length) {
    const arg = argv[i];

    switch (arg) {
      case "-h":
      case "--help":
        args.help = true;
        break;
      case "--list-languages":
        args.listLanguages = true;
        break;
      case "-v":
      case "--verbose":
        args.verbose = true;
        break;
      case "-f":
      case "--force":
        args.force = true;
        break;
      case "--no-preserve-code":
        args.preserveCode = false;
        break;
      case "-o":
      case "--output":
        args.outputDir = argv[++i];
        break;
      case "-p":
      case "--pattern":
        args.pattern = argv[++i];
        break;
      case "-m":
      case "--model":
        args.model = argv[++i];
        break;
      case "--max-budget":
        args.maxBudget = parseFloat(argv[++i]);
        break;
      default:
        if (arg.startsWith("-")) {
          console.error(`Unknown option: ${arg}`);
          process.exit(1);
        }
        positional.push(arg);
    }
    i++;
  }

  if (positional.length > 0) {
    args.source = positional[0];
    args.languages = positional.slice(1);
  }

  return args;
}

async function main() {
  const args = parseArgs(process.argv);

  if (args.help) {
    printHelp();
    process.exit(0);
  }

  if (args.listLanguages) {
    printLanguages();
    process.exit(0);
  }

  if (!args.source) {
    console.error("Error: No source file specified");
    console.error("Run with --help for usage information");
    process.exit(1);
  }

  if (args.languages.length === 0) {
    console.error("Error: No target languages specified");
    console.error("Run with --help for usage information");
    process.exit(1);
  }

  // Validate language codes
  const invalidLangs = args.languages.filter(
    (lang) => !SUPPORTED_LANGUAGES.includes(lang.toLowerCase())
  );
  if (invalidLangs.length > 0) {
    console.error(`Error: Unknown language codes: ${invalidLangs.join(", ")}`);
    console.error("Run with --list-languages to see supported codes");
    process.exit(1);
  }

  try {
    const result = await translateReadme({
      source: args.source,
      languages: args.languages,
      outputDir: args.outputDir,
      pattern: args.pattern,
      preserveCode: args.preserveCode,
      model: args.model,
      maxBudgetUsd: args.maxBudget,
      verbose: args.verbose,
      force: args.force,
    });

    if (result.failed > 0) {
      process.exit(1);
    }
  } catch (error) {
    console.error(
      "Translation failed:",
      error instanceof Error ? error.message : error
    );
    process.exit(1);
  }
}

main();
