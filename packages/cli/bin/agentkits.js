#!/usr/bin/env node

/**
 * AgentKits Marketing CLI
 *
 * Main entry point for the AgentKits Marketing installer
 * Supports multiple AI IDEs: Claude Code, Cursor, Windsurf, GitHub Copilot, etc.
 *
 * Usage:
 *   npx @aitytech/agentkits-marketing install
 *   npx @aitytech/agentkits-marketing --help
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
${chalk.bold.magenta('╔════════════════════════════════════════════════════════════════════════════════╗')}
${chalk.bold.magenta('║')}                                                                                ${chalk.bold.magenta('║')}
${chalk.bold.magenta('║')}   ${chalk.bold.white('█████╗  ██████╗ ███████╗███╗   ██╗████████╗██╗  ██╗██╗████████╗███████╗')}      ${chalk.bold.magenta('║')}
${chalk.bold.magenta('║')}   ${chalk.bold.white('██╔══██╗██╔════╝ ██╔════╝████╗  ██║╚══██╔══╝██║ ██╔╝██║╚══██╔══╝██╔════╝')}      ${chalk.bold.magenta('║')}
${chalk.bold.magenta('║')}   ${chalk.bold.white('███████║██║  ███╗█████╗  ██╔██╗ ██║   ██║   █████╔╝ ██║   ██║   ███████╗')}      ${chalk.bold.magenta('║')}
${chalk.bold.magenta('║')}   ${chalk.bold.white('██╔══██║██║   ██║██╔══╝  ██║╚██╗██║   ██║   ██╔═██╗ ██║   ██║   ╚════██║')}      ${chalk.bold.magenta('║')}
${chalk.bold.magenta('║')}   ${chalk.bold.white('██║  ██║╚██████╔╝███████╗██║ ╚████║   ██║   ██║  ██╗██║   ██║   ███████║')}      ${chalk.bold.magenta('║')}
${chalk.bold.magenta('║')}   ${chalk.bold.white('╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚═╝  ╚═══╝   ╚═╝   ╚═╝  ╚═╝╚═╝   ╚═╝   ╚══════╝')}      ${chalk.bold.magenta('║')}
${chalk.bold.magenta('║')}                                                                                ${chalk.bold.magenta('║')}`;

// ASCII Art Banner for install
const banner = `
${asciiLogo}
${chalk.bold.magenta('║')}   ${chalk.bold.yellow('Marketing')} - ${chalk.dim('Enterprise AI Marketing Kit')}                                  ${chalk.bold.magenta('║')}
${chalk.bold.magenta('║')}                                                                                ${chalk.bold.magenta('║')}
${chalk.bold.magenta('║')}   ${chalk.bold.white('18')} Agents  ${chalk.bold.white('40+')} Skills  ${chalk.bold.white('76')} Commands  ${chalk.bold.white('128')} Workflows  ${chalk.bold.white('23')} Lessons       ${chalk.bold.magenta('║')}
${chalk.bold.magenta('║')}                                                                                ${chalk.bold.magenta('║')}
${chalk.bold.magenta('║')}   ${chalk.yellow('📊 SEO')} Content & Keywords      ${chalk.green('📧 Email')} Sequences & Campaigns       ${chalk.bold.magenta('║')}
${chalk.bold.magenta('║')}   ${chalk.cyan('📈 CRO')} Conversion Optimization  ${chalk.magenta('🎯 Ads')} Paid Advertising             ${chalk.bold.magenta('║')}
${chalk.bold.magenta('║')}                                                                                ${chalk.bold.magenta('║')}
${chalk.bold.magenta('║')}   ${chalk.dim('Not prompts - real marketing expertise. Funnel strategy, psychology, CRO.')}   ${chalk.bold.magenta('║')}
${chalk.bold.magenta('║')}   ${chalk.dim('by AityTech')}                                                               ${chalk.bold.magenta('║')}
${chalk.bold.magenta('╚════════════════════════════════════════════════════════════════════════════════╝')}
`;

// Custom version output
const versionOutput = `
${asciiLogo}
${chalk.bold.magenta('║')}   ${chalk.bold.yellow('Marketing')} ${chalk.bgGreen.black.bold(` v${VERSION} `)}                                                      ${chalk.bold.magenta('║')}
${chalk.bold.magenta('║')}                                                                                ${chalk.bold.magenta('║')}
${chalk.bold.magenta('║')}   ${chalk.yellow('SEO')} + ${chalk.green('CRO')} + ${chalk.cyan('Content')} + ${chalk.magenta('Analytics')} Architecture                              ${chalk.bold.magenta('║')}
${chalk.bold.magenta('║')}                                                                                ${chalk.bold.magenta('║')}
${chalk.bold.magenta('║')}   ${chalk.gray('Website:')}  ${chalk.white('https://agentkits.net')}                                            ${chalk.bold.magenta('║')}
${chalk.bold.magenta('║')}   ${chalk.gray('GitHub:')}   ${chalk.white('https://github.com/aitytech/agentkits-marketing')}               ${chalk.bold.magenta('║')}
${chalk.bold.magenta('║')}   ${chalk.gray('Author:')}   ${chalk.white('AityTech')}                                                         ${chalk.bold.magenta('║')}
${chalk.bold.magenta('║')}   ${chalk.gray('License:')}  ${chalk.white('MIT')}                                                              ${chalk.bold.magenta('║')}
${chalk.bold.magenta('║')}                                                                                ${chalk.bold.magenta('║')}
${chalk.bold.magenta('╚════════════════════════════════════════════════════════════════════════════════╝')}
`;

program
  .name('agentkits-marketing')
  .description('AgentKits Marketing - Multi-IDE AI Marketing Framework')
  .version(versionOutput, '-v, --version', 'Display version information');

program
  .command('install')
  .description('Install AgentKits Marketing to your project with 18 agents, 40+ skills, 76 commands')
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
  .description('Update existing AgentKits Marketing installation with new commands, agents, skills')
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
          { key: 'workflows', icon: '🔄', label: 'Workflows' },
        ];

        let hasUpdates = false;
        for (const category of categories) {
          const data = analysis[category.key];
          if (data && (data.new.length > 0 || data.updated.length > 0)) {
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
          console.log(chalk.dim('Run "npx @aitytech/agentkits-marketing update" to apply updates.\n'));
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
  .description('List available AgentKits Marketing modules')
  .action(async () => {
    console.log('');
    console.log(chalk.bold.magenta('╔════════════════════════════════════════════════════════════════════════════════╗'));
    console.log(chalk.bold.magenta('║                                                                                ║'));
    console.log(chalk.bold.magenta('║   ') + chalk.bold.white('█████╗  ██████╗ ███████╗███╗   ██╗████████╗██╗  ██╗██╗████████╗███████╗') + chalk.bold.magenta('      ║'));
    console.log(chalk.bold.magenta('║   ') + chalk.bold.white('██╔══██╗██╔════╝ ██╔════╝████╗  ██║╚══██╔══╝██║ ██╔╝██║╚══██╔══╝██╔════╝') + chalk.bold.magenta('      ║'));
    console.log(chalk.bold.magenta('║   ') + chalk.bold.white('███████║██║  ███╗█████╗  ██╔██╗ ██║   ██║   █████╔╝ ██║   ██║   ███████╗') + chalk.bold.magenta('      ║'));
    console.log(chalk.bold.magenta('║   ') + chalk.bold.white('██╔══██║██║   ██║██╔══╝  ██║╚██╗██║   ██║   ██╔═██╗ ██║   ██║   ╚════██║') + chalk.bold.magenta('      ║'));
    console.log(chalk.bold.magenta('║   ') + chalk.bold.white('██║  ██║╚██████╔╝███████╗██║ ╚████║   ██║   ██║  ██╗██║   ██║   ███████║') + chalk.bold.magenta('      ║'));
    console.log(chalk.bold.magenta('║   ') + chalk.bold.white('╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚═╝  ╚═══╝   ╚═╝   ╚═╝  ╚═╝╚═╝   ╚═╝   ╚══════╝') + chalk.bold.magenta('      ║'));
    console.log(chalk.bold.magenta('║                                                                                ║'));
    console.log(chalk.bold.magenta('║   ') + chalk.bold.yellow('Marketing Modules - All Included by Default') + chalk.bold.magenta('                               ║'));
    console.log(chalk.bold.magenta('║                                                                                ║'));
    console.log(chalk.bold.magenta('╚════════════════════════════════════════════════════════════════════════════════╝'));
    console.log('');

    const modules = [
      {
        name: 'CORE',
        fullName: 'Marketing Core',
        brand: 'Essential Marketing',
        icon: '⚡',
        required: true,
        features: [
          'Core marketing agents (18 specialists)',
          'Campaign planning and content workflows',
          'Essential skills and base commands',
        ],
      },
      {
        name: 'SEO',
        fullName: 'SEO Mastery',
        brand: 'Search Optimization',
        icon: '📊',
        required: false,
        features: [
          'Keyword research and competitor analysis',
          'Programmatic SEO and schema markup',
          'Content optimization workflows',
        ],
      },
      {
        name: 'CRO',
        fullName: 'Conversion Optimization',
        brand: 'CRO Excellence',
        icon: '📈',
        required: false,
        features: [
          'Page, form, and signup optimization',
          'Popup and onboarding CRO',
          'A/B testing frameworks',
        ],
      },
      {
        name: 'CONTENT',
        fullName: 'Content Marketing',
        brand: 'Content Engine',
        icon: '✍️',
        required: false,
        features: [
          'Blog, social, and email content creation',
          'Copywriting and editing workflows',
          'Brand voice consistency',
        ],
      },
      {
        name: 'EMAIL',
        fullName: 'Email Marketing',
        brand: 'Email Automation',
        icon: '📧',
        required: false,
        features: [
          'Welcome, nurture, and re-engagement sequences',
          'Email wizard and automation',
          'Deliverability optimization',
        ],
      },
      {
        name: 'ANALYTICS',
        fullName: 'Analytics & Reporting',
        brand: 'Data-Driven',
        icon: '📉',
        required: false,
        features: [
          'Campaign ROI and funnel analysis',
          'Weekly and monthly reports',
          'Attribution modeling',
        ],
      },
      {
        name: 'TRAINING',
        fullName: 'Marketing Training',
        brand: 'Skill Building',
        icon: '📚',
        required: false,
        features: [
          '23 interactive training modules',
          'Pattern library and best practices',
          '10x Marketer Framework',
        ],
      },
    ];

    modules.forEach((mod, index) => {
      const badge = mod.required
        ? chalk.bgRed.white.bold(' REQUIRED ')
        : chalk.bgGreen.white.bold(' INCLUDED ');

      console.log(chalk.magenta('┌─────────────────────────────────────────────────────────────────────────────┐'));
      console.log(chalk.magenta('│ ') + mod.icon + '  ' + chalk.bold.white(mod.fullName) + '  ' + chalk.yellow(`(${mod.brand})`) + '  ' + badge);
      console.log(chalk.magenta('│'));

      mod.features.forEach(feature => {
        console.log(chalk.magenta('│') + chalk.gray('    ▸ ') + chalk.white(feature));
      });

      console.log(chalk.magenta('└─────────────────────────────────────────────────────────────────────────────┘'));
      console.log('');
    });

    console.log(chalk.bold.magenta('════════════════════════════════════════════════════════════════════════════════'));
    console.log(chalk.bold.yellow('  💡 All modules are installed by default with: ') + chalk.white('npx @aitytech/agentkits-marketing install'));
    console.log(chalk.bold.magenta('════════════════════════════════════════════════════════════════════════════════'));
    console.log('');
  });

program
  .command('memory')
  .description('Manage the memory system')
  .option('-p, --path <path>', 'Project path (default: current directory)')
  .option('--setup', 'Set up or reset memory system')
  .option('--status', 'Show memory system status')
  .option('--clear', 'Clear memory database (keeps markdown files)')
  .action(async (options) => {
    const projectDir = options.path ? path.resolve(options.path) : process.cwd();
    const claudeDir = path.join(projectDir, '.claude');

    // Check if .claude directory exists
    if (!(await fs.pathExists(claudeDir))) {
      console.log(chalk.red('\nNo AgentKits Marketing installation found.'));
      console.log(chalk.dim('Run "npx @aitytech/agentkits-marketing install" first.\n'));
      process.exit(1);
    }

    const memorySetup = new MemorySetup();

    if (options.setup) {
      console.log(chalk.bold('\nSetting up memory system...\n'));

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

      console.log(chalk.bold('\nMemory System Status\n'));
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
        console.log(chalk.yellow('  Run "npx @aitytech/agentkits-marketing memory --setup" to configure.\n'));
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
  console.log(chalk.white('    npx @aitytech/agentkits-marketing install              ') + chalk.dim('# Interactive setup'));
  console.log(chalk.white('    npx @aitytech/agentkits-marketing install --with-memory') + chalk.dim('# With persistent memory'));
  console.log(chalk.white('    npx @aitytech/agentkits-marketing install -y           ') + chalk.dim('# Accept defaults'));
  console.log('');
  console.log(chalk.bold.yellow('  Platform-Specific:\n'));
  console.log(chalk.white('    npx @aitytech/agentkits-marketing install --platform claude  ') + chalk.dim('# Claude Code'));
  console.log(chalk.white('    npx @aitytech/agentkits-marketing install --platform cursor  ') + chalk.dim('# Cursor IDE'));
  console.log(chalk.white('    npx @aitytech/agentkits-marketing install --platform windsurf') + chalk.dim('# Windsurf'));
  console.log(chalk.white('    npx @aitytech/agentkits-marketing install --platform cline   ') + chalk.dim('# Cline'));
  console.log(chalk.white('    npx @aitytech/agentkits-marketing install --platform all     ') + chalk.dim('# All platforms'));
  console.log('');
  console.log(chalk.bold.yellow('  Other Commands:\n'));
  program.outputHelp();
}

program.parse();
