#!/usr/bin/env node

/**
 * Training Folder Translation CLI
 * Translate training folders using Claude Agent SDK
 *
 * Usage:
 *   node scripts/translate-training/cli.js .claude/commands/training ko es de
 *   node scripts/translate-training/cli.js --help
 */

const { translateTraining, SUPPORTED_LANGUAGES, LANGUAGE_NAMES } = require("./index.js");

function printHelp() {
  console.log(`
translate-training - Translate training folders using Claude Agent SDK

AUTHENTICATION:
  If Claude Code is installed and authenticated (Pro/Max subscription),
  no API key is needed. Otherwise, set ANTHROPIC_API_KEY environment variable.

USAGE:
  node scripts/translate-training/cli.js [options] <source-dir> <languages...>
  node scripts/translate-training/cli.js --help
  node scripts/translate-training/cli.js --list-languages

ARGUMENTS:
  source-dir      Path to the source training folder (e.g., .claude/commands/training)
  languages       Target language codes (e.g., ko es de fr)

OPTIONS:
  -b, --base <dir>      Base directory for output folders (default: parent of source)
  -m, --model <model>   Claude model to use (default: sonnet)
  --max-budget <usd>    Maximum budget in USD
  -v, --verbose         Show detailed progress
  -f, --force           Force re-translation ignoring cache
  -h, --help            Show this help message
  --list-languages      List all supported language codes

OUTPUT:
  Creates folders named training-{lang} in the base directory.
  Example: .claude/commands/training-ko, .claude/commands/training-es

EXAMPLES:
  # Translate to Korean and Spanish
  node scripts/translate-training/cli.js .claude/commands/training ko es

  # Translate to all major languages
  node scripts/translate-training/cli.js -v .claude/commands/training zh ko es de fr pt-br ru ar

  # Force re-translation
  node scripts/translate-training/cli.js -f -v .claude/commands/training ko

CACHING:
  Each output folder has a .translation-cache.json file.
  Files are only re-translated if the source content changes.
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
    sourceDir: "",
    languages: [],
    verbose: false,
    force: false,
    help: false,
    listLanguages: false,
  };

  const positional = [];
  let i = 2;

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
      case "-b":
      case "--base":
        args.baseDir = argv[++i];
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
    args.sourceDir = positional[0];
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

  if (!args.sourceDir) {
    console.error("Error: No source directory specified");
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
    const result = await translateTraining({
      sourceDir: args.sourceDir,
      languages: args.languages,
      baseDir: args.baseDir,
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
