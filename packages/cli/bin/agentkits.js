#!/usr/bin/env node

/**
 * AgentKits Engineer CLI
 *
 * Main entry point for the AgentKits installer
 * Supports multiple AI IDEs: Claude Code, Cursor, Windsurf, GitHub Copilot, etc.
 *
 * Usage:
 *   npx agentkits-engineer install
 *   npx agentkits-engineer --help
 *
 * @author AityTech
 * @license MIT
 */

const { Command } = require('commander');
const chalk = require('chalk');
const path = require('node:path');
const fs = require('fs-extra');
const { Installer } = require('../installers/lib/core/installer');
const { Updater } = require('../installers/lib/core/updater');
const { MemorySetup } = require('../installers/lib/core/memory-setup');

// Read version from package.json
const pkg = require(path.join(__dirname, '../package.json'));
const VERSION = pkg.version;

const program = new Command();

// Big ASCII Art Logo
const asciiLogo = `
${chalk.bold.cyan('╔════════════════════════════════════════════════════════════════════════════════╗')}
${chalk.bold.cyan('║')}                                                                                ${chalk.bold.cyan('║')}
${chalk.bold.cyan('║')}   ${chalk.bold.white('█████╗  ██████╗ ███████╗███╗   ██╗████████╗██╗  ██╗██╗████████╗███████╗')}      ${chalk.bold.cyan('║')}
${chalk.bold.cyan('║')}   ${chalk.bold.white('██╔══██╗██╔════╝ ██╔════╝████╗  ██║╚══██╔══╝██║ ██╔╝██║╚══██╔══╝██╔════╝')}      ${chalk.bold.cyan('║')}
${chalk.bold.cyan('║')}   ${chalk.bold.white('███████║██║  ███╗█████╗  ██╔██╗ ██║   ██║   █████╔╝ ██║   ██║   ███████╗')}      ${chalk.bold.cyan('║')}
${chalk.bold.cyan('║')}   ${chalk.bold.white('██╔══██║██║   ██║██╔══╝  ██║╚██╗██║   ██║   ██╔═██╗ ██║   ██║   ╚════██║')}      ${chalk.bold.cyan('║')}
${chalk.bold.cyan('║')}   ${chalk.bold.white('██║  ██║╚██████╔╝███████╗██║ ╚████║   ██║   ██║  ██╗██║   ██║   ███████║')}      ${chalk.bold.cyan('║')}
${chalk.bold.cyan('║')}   ${chalk.bold.white('╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚═╝  ╚═══╝   ╚═╝   ╚═╝  ╚═╝╚═╝   ╚═╝   ╚══════╝')}      ${chalk.bold.cyan('║')}
${chalk.bold.cyan('║')}                                                                                ${chalk.bold.cyan('║')}`;

// ASCII Art Banner for install
const banner = `
${asciiLogo}
${chalk.bold.cyan('║')}   ${chalk.bold.yellow('Engineer')} - ${chalk.dim('Enterprise AI Development Kit')}                                  ${chalk.bold.cyan('║')}
${chalk.bold.cyan('║')}                                                                                ${chalk.bold.cyan('║')}
${chalk.bold.cyan('║')}   ${chalk.bold.white('28')} Agents  ${chalk.bold.white('100+')} Skills  ${chalk.bold.white('62')} Commands  ${chalk.bold.white('150+')} References  ${chalk.bold.white('22')} Lessons      ${chalk.bold.cyan('║')}
${chalk.bold.cyan('║')}                                                                                ${chalk.bold.cyan('║')}
${chalk.bold.cyan('║')}   ${chalk.yellow('⚡ PIE™')} Project Intelligence    ${chalk.green('💾 CPS™')} SQLite+HNSW Memory          ${chalk.bold.cyan('║')}
${chalk.bold.cyan('║')}   ${chalk.magenta('🗺️  GDJ™')} Guided Journeys         ${chalk.cyan('🌐 5+')} Platforms Supported          ${chalk.bold.cyan('║')}
${chalk.bold.cyan('║')}                                                                                ${chalk.bold.cyan('║')}
${chalk.bold.cyan('║')}   ${chalk.dim('Not prompts - real enterprise knowledge. OWASP, NIST, Clean Architecture.')}    ${chalk.bold.cyan('║')}
${chalk.bold.cyan('║')}   ${chalk.dim('by AityTech')}                                                               ${chalk.bold.cyan('║')}
${chalk.bold.cyan('╚════════════════════════════════════════════════════════════════════════════════╝')}
`;

// Custom version output
const versionOutput = `
${asciiLogo}
${chalk.bold.cyan('║')}   ${chalk.bold.yellow('Engineer')} ${chalk.bgGreen.black.bold(` v${VERSION} `)}                                                       ${chalk.bold.cyan('║')}
${chalk.bold.cyan('║')}                                                                                ${chalk.bold.cyan('║')}
${chalk.bold.cyan('║')}   ${chalk.yellow('PIE™')} + ${chalk.green('CPS™')} + ${chalk.magenta('GDJ™')} Architecture                                            ${chalk.bold.cyan('║')}
${chalk.bold.cyan('║')}                                                                                ${chalk.bold.cyan('║')}
${chalk.bold.cyan('║')}   ${chalk.gray('Website:')}  ${chalk.white('https://agentkits.net')}                                            ${chalk.bold.cyan('║')}
${chalk.bold.cyan('║')}   ${chalk.gray('GitHub:')}   ${chalk.white('https://github.com/agentkits/agentkits-engineer')}                 ${chalk.bold.cyan('║')}
${chalk.bold.cyan('║')}   ${chalk.gray('Author:')}   ${chalk.white('AityTech')}                                                         ${chalk.bold.cyan('║')}
${chalk.bold.cyan('║')}   ${chalk.gray('License:')}  ${chalk.white('MIT')}                                                              ${chalk.bold.cyan('║')}
${chalk.bold.cyan('║')}                                                                                ${chalk.bold.cyan('║')}
${chalk.bold.cyan('╚════════════════════════════════════════════════════════════════════════════════╝')}
`;

program
  .name('agentkits-engineer')
  .description('AgentKits Engineer - Multi-IDE AI Development Framework')
  .version(versionOutput, '-v, --version', 'Display version information');

program
  .command('install')
  .description('Install AgentKits to your project with 28 agents, 100+ skills, 62 commands')
  .option('-p, --path <path>', 'Installation path (default: current directory)')
  .option('-y, --yes', 'Skip prompts and use defaults')
  .option('--ide <ide>', 'Specify IDE (claude-code, cursor, windsurf, github-copilot, cline)')
  .option('--platform <platform>', 'Alias for --ide (claude, cursor, windsurf, copilot, cline, all)')
  .option('--with-memory', 'Include SQLite+HNSW persistent memory system (recommended)')
  .option('--modules <modules>', 'Comma-separated list of modules to install')
  .action(async (options) => {
    console.log(banner);

    // Handle --platform as alias for --ide
    if (options.platform && !options.ide) {
      // Map short names to full names
      const platformMap = {
        'claude': 'claude-code',
        'copilot': 'github-copilot',
        'all': 'all'
      };
      options.ide = platformMap[options.platform] || options.platform;
    }

    // Enable memory by default if --with-memory is passed
    if (options.withMemory) {
      options.setupMemory = true;
    }

    try {
      const installer = new Installer();
      await installer.run(options);

      // Auto-setup memory if requested
      if (options.setupMemory || options.withMemory) {
        console.log(chalk.bold('\n📦 Setting up SQLite+HNSW memory system...\n'));
        const projectDir = options.path ? path.resolve(options.path) : process.cwd();
        const claudeDir = path.join(projectDir, '.claude');
        const memorySetup = new MemorySetup();
        await memorySetup.setup(projectDir, claudeDir, { verbose: true });
        console.log(chalk.green('✓ Memory system configured!'));
      }
    } catch (error) {
      console.error(chalk.red('\nInstallation failed:'), error.message);
      process.exit(1);
    }
  });

program
  .command('update')
  .description('Update existing AgentKits installation with new commands, agents, skills')
  .option('-p, --path <path>', 'Project path (default: current directory)')
  .option('-y, --yes', 'Auto-accept all updates without prompting')
  .option('--list', 'List available updates without applying')
  .action(async (options) => {
    console.log(banner);

    try {
      const updater = new Updater();

      if (options.list) {
        // Just show what's available
        const projectDir = options.path ? path.resolve(options.path) : process.cwd();
        const analysis = await updater.analyzeChanges(projectDir);

        console.log(chalk.bold('\nAvailable Updates:\n'));

        const categories = [
          { key: 'commands', icon: '📝', label: 'Commands' },
          { key: 'agents', icon: '🤖', label: 'Agents' },
          { key: 'skills', icon: '⚡', label: 'Skills' },
          { key: 'journeys', icon: '🗺️', label: 'Journeys' },
          { key: 'workflows', icon: '🔄', label: 'Workflows' },
        ];

        let hasUpdates = false;
        for (const category of categories) {
          const data = analysis[category.key];
          if (data.new.length > 0 || data.updated.length > 0) {
            hasUpdates = true;
            console.log(chalk.bold(`${category.icon} ${category.label}:`));
            data.new.forEach(f => console.log(chalk.green(`  + NEW: ${f.name}`)));
            data.updated.forEach(f => console.log(chalk.yellow(`  ↻ UPD: ${f.name}`)));
            console.log('');
          }
        }

        if (!hasUpdates) {
          console.log(chalk.green('✓ Your installation is up to date!\n'));
        } else {
          console.log(chalk.dim('Run "npx agentkits-engineer update" to apply updates.\n'));
        }
      } else {
        await updater.run(options);
      }
    } catch (error) {
      console.error(chalk.red('\nUpdate failed:'), error.message);
      process.exit(1);
    }
  });

program
  .command('list-ides')
  .description('List all supported AI IDEs')
  .action(async () => {
    const { IdeManager } = require('../installers/lib/ide/manager');
    const ideManager = new IdeManager();
    await ideManager.ensureInitialized();

    console.log(chalk.bold('\nSupported AI IDEs:\n'));

    const preferred = ideManager.getPreferredIdes();
    const others = ideManager.getOtherIdes();

    console.log(chalk.green('Preferred (Recommended):'));
    preferred.forEach(ide => {
      console.log(chalk.green(`  ✓ ${ide.name}`), chalk.dim(`(${ide.value})`));
    });

    console.log(chalk.dim('\nOther Supported:'));
    others.forEach(ide => {
      console.log(chalk.dim(`  • ${ide.name}`), chalk.dim(`(${ide.value})`));
    });

    console.log('');
  });

program
  .command('list-modules')
  .description('List available AgentKits modules')
  .action(async () => {
    console.log('');
    console.log(chalk.bold.cyan('╔════════════════════════════════════════════════════════════════════════════════╗'));
    console.log(chalk.bold.cyan('║                                                                                ║'));
    console.log(chalk.bold.cyan('║   ') + chalk.bold.white('█████╗  ██████╗ ███████╗███╗   ██╗████████╗██╗  ██╗██╗████████╗███████╗') + chalk.bold.cyan('      ║'));
    console.log(chalk.bold.cyan('║   ') + chalk.bold.white('██╔══██╗██╔════╝ ██╔════╝████╗  ██║╚══██╔══╝██║ ██╔╝██║╚══██╔══╝██╔════╝') + chalk.bold.cyan('      ║'));
    console.log(chalk.bold.cyan('║   ') + chalk.bold.white('███████║██║  ███╗█████╗  ██╔██╗ ██║   ██║   █████╔╝ ██║   ██║   ███████╗') + chalk.bold.cyan('      ║'));
    console.log(chalk.bold.cyan('║   ') + chalk.bold.white('██╔══██║██║   ██║██╔══╝  ██║╚██╗██║   ██║   ██╔═██╗ ██║   ██║   ╚════██║') + chalk.bold.cyan('      ║'));
    console.log(chalk.bold.cyan('║   ') + chalk.bold.white('██║  ██║╚██████╔╝███████╗██║ ╚████║   ██║   ██║  ██╗██║   ██║   ███████║') + chalk.bold.cyan('      ║'));
    console.log(chalk.bold.cyan('║   ') + chalk.bold.white('╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚═╝  ╚═══╝   ╚═╝   ╚═╝  ╚═╝╚═╝   ╚═╝   ╚══════╝') + chalk.bold.cyan('      ║'));
    console.log(chalk.bold.cyan('║                                                                                ║'));
    console.log(chalk.bold.cyan('║   ') + chalk.bold.yellow('Available Modules - All Included by Default') + chalk.bold.cyan('                               ║'));
    console.log(chalk.bold.cyan('║                                                                                ║'));
    console.log(chalk.bold.cyan('╚════════════════════════════════════════════════════════════════════════════════╝'));
    console.log('');

    const modules = [
      {
        name: 'CORE',
        fullName: 'AgentKits Core',
        brand: 'PIE™ + CPS™',
        icon: '⚡',
        required: true,
        features: [
          'Project Intelligence Engine (PIE™) - Auto-detect tech stacks',
          'Context Persistence System (CPS™) - Memory that survives sessions',
          'Essential agents, skills, and base commands',
        ],
      },
      {
        name: 'GDJ™',
        fullName: 'AgentKits GDJ™',
        brand: 'Guided Developer Journeys',
        icon: '🗺️',
        required: false,
        features: [
          '60+ implementation templates for common features',
          '19 step-by-step journey guides',
          'Multi-methodology support (TDD, BDD, DDD)',
        ],
      },
      {
        name: 'QUALITY',
        fullName: 'AgentKits Quality',
        brand: 'Code Excellence',
        icon: '✨',
        required: false,
        features: [
          'Code review agents with best practices',
          'TDD workflows and test framework integration',
          'Adversarial review for edge cases',
        ],
      },
      {
        name: 'SECURITY',
        fullName: 'AgentKits Security',
        brand: 'Security First',
        icon: '🔒',
        required: false,
        features: [
          'Security review agents',
          'OWASP Top 10 vulnerability scanning',
          'Authentication patterns and best practices',
        ],
      },
      {
        name: 'DEVELOPMENT',
        fullName: 'AgentKits Development',
        brand: 'Dev Specialists',
        icon: '🛠️',
        required: false,
        features: [
          'Architect agent for system design',
          'Debugger specialist for troubleshooting',
          'Refactoring expert and build error resolver',
        ],
      },
      {
        name: 'AUTOMATION',
        fullName: 'AgentKits Automation',
        brand: 'Workflow Tools',
        icon: '🤖',
        required: false,
        features: [
          'Documentation search and generation',
          'Repomix integration for codebase analysis',
          'Workflow automation and CI/CD helpers',
        ],
      },
      {
        name: 'TRAINING',
        fullName: 'AgentKits Training',
        brand: 'Skill Building',
        icon: '📚',
        required: false,
        features: [
          'Interactive training modules',
          'Skill-building exercises',
          'Best practices tutorials',
        ],
      },
    ];

    modules.forEach((mod, index) => {
      const badge = mod.required
        ? chalk.bgRed.white.bold(' REQUIRED ')
        : chalk.bgGreen.white.bold(' INCLUDED ');

      console.log(chalk.cyan('┌─────────────────────────────────────────────────────────────────────────────┐'));
      console.log(chalk.cyan('│ ') + mod.icon + '  ' + chalk.bold.white(mod.fullName) + '  ' + chalk.yellow(`(${mod.brand})`) + '  ' + badge);
      console.log(chalk.cyan('│'));

      mod.features.forEach(feature => {
        console.log(chalk.cyan('│') + chalk.gray('    ▸ ') + chalk.white(feature));
      });

      console.log(chalk.cyan('└─────────────────────────────────────────────────────────────────────────────┘'));
      console.log('');
    });

    console.log(chalk.bold.cyan('════════════════════════════════════════════════════════════════════════════════'));
    console.log(chalk.bold.yellow('  💡 All modules are installed by default with: ') + chalk.white('npx agentkits-engineer install'));
    console.log(chalk.bold.cyan('════════════════════════════════════════════════════════════════════════════════'));
    console.log('');
  });

program
  .command('memory')
  .description('Manage the CPS™ memory system')
  .option('-p, --path <path>', 'Project path (default: current directory)')
  .option('--setup', 'Set up or reset memory system')
  .option('--status', 'Show memory system status')
  .option('--clear', 'Clear memory database (keeps markdown files)')
  .action(async (options) => {
    const projectDir = options.path ? path.resolve(options.path) : process.cwd();
    const claudeDir = path.join(projectDir, '.claude');

    // Check if .claude directory exists
    if (!(await fs.pathExists(claudeDir))) {
      console.log(chalk.red('\nNo AgentKits installation found.'));
      console.log(chalk.dim('Run "npx agentkits-engineer install" first.\n'));
      process.exit(1);
    }

    const memorySetup = new MemorySetup();

    if (options.setup) {
      console.log(chalk.bold('\nSetting up CPS™ memory system...\n'));

      const result = await memorySetup.setup(projectDir, claudeDir, { verbose: true });

      console.log(chalk.green('\n✓ Memory system configured!'));
      console.log(chalk.dim(`  Memory dir: ${result.memoryDir}`));
      console.log(chalk.dim(`  Hooks file: ${result.hooksFile}\n`));
    } else if (options.clear) {
      const dbDir = path.join(claudeDir, 'memory', '.db');
      const dbPath = path.join(dbDir, 'memory.db');

      if (await fs.pathExists(dbPath)) {
        await fs.remove(dbPath);
        console.log(chalk.green('\n✓ Memory database cleared.'));
        console.log(chalk.dim('  Markdown files preserved.\n'));
      } else {
        console.log(chalk.yellow('\nNo memory database found.\n'));
      }
    } else {
      // Default: show status
      const status = await memorySetup.getStatus(claudeDir);

      console.log(chalk.bold('\nCPS™ Memory System Status\n'));
      console.log(chalk.dim('  Project: ') + projectDir);
      console.log('');

      // Directory status
      console.log(chalk.bold('  Components:'));
      console.log(
        (status.memoryDirExists ? chalk.green('  ✓') : chalk.red('  ✗')) +
          ' Memory directory (.claude/memory/)'
      );
      console.log(
        (status.hooksFileExists ? chalk.green('  ✓') : chalk.red('  ✗')) +
          ' Hooks configuration (.claude/hooks.json)'
      );
      console.log(
        (status.databaseExists ? chalk.green('  ✓') : chalk.yellow('  ○')) +
          ' SQLite database (.claude/memory/.db/)'
      );
      console.log('');

      // Template files
      if (status.templateFiles.length > 0) {
        console.log(chalk.bold('  Memory Files:'));
        for (const file of status.templateFiles) {
          console.log(chalk.dim(`    • ${file}`));
        }
        console.log('');
      }

      // Recommendations
      if (!status.memoryDirExists || !status.hooksFileExists) {
        console.log(chalk.yellow('  Run "npx agentkits-engineer memory --setup" to configure.\n'));
      } else if (!status.databaseExists) {
        console.log(chalk.dim('  Database will be created on first Claude Code session.\n'));
      } else {
        console.log(chalk.green('  ✓ Memory system is fully operational.\n'));
      }
    }
  });

// Default action (no command) - run install
if (process.argv.length === 2) {
  console.log(banner);
  console.log(chalk.bold.yellow('\n  Quick Install:\n'));
  console.log(chalk.white('    npx @agentkits/cli install              ') + chalk.dim('# Interactive setup'));
  console.log(chalk.white('    npx @agentkits/cli install --with-memory') + chalk.dim('# With persistent memory'));
  console.log(chalk.white('    npx @agentkits/cli install -y           ') + chalk.dim('# Accept defaults'));
  console.log('');
  console.log(chalk.bold.yellow('  Platform-Specific:\n'));
  console.log(chalk.white('    npx @agentkits/cli install --platform claude  ') + chalk.dim('# Claude Code'));
  console.log(chalk.white('    npx @agentkits/cli install --platform cursor  ') + chalk.dim('# Cursor IDE'));
  console.log(chalk.white('    npx @agentkits/cli install --platform windsurf') + chalk.dim('# Windsurf'));
  console.log(chalk.white('    npx @agentkits/cli install --platform cline   ') + chalk.dim('# Cline'));
  console.log(chalk.white('    npx @agentkits/cli install --platform all     ') + chalk.dim('# All platforms'));
  console.log('');
  console.log(chalk.bold.yellow('  Other Commands:\n'));
  program.outputHelp();
}

program.parse();
