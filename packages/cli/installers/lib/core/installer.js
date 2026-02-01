/**
 * AgentKits Core Installer
 *
 * Handles the interactive installation of AgentKits to projects
 * Supports multiple AI IDEs through config-driven architecture
 *
 * @author AityTech
 * @license MIT
 */

const fs = require('fs-extra');
const path = require('node:path');
const chalk = require('chalk');
const inquirer = require('inquirer');
const ora = require('ora');
const { IdeManager } = require('../ide/manager');
const { LauncherGenerator } = require('./launcher-generator');
const { MemorySetup } = require('./memory-setup');

class Installer {
  constructor() {
    this.ideManager = new IdeManager();
    this.launcherGenerator = new LauncherGenerator();
    this.memorySetup = new MemorySetup();
    this.agentkitsFolderName = '.claude'; // Default folder name
  }

  /**
   * Main installation flow
   */
  async run(options = {}) {
    console.log(chalk.bold('\nWelcome to AgentKits Engineer!\n'));

    // Step 1: Initialize IDE handlers
    await this.ideManager.ensureInitialized();

    // Step 2: Determine installation path
    const projectDir = await this.getInstallPath(options);

    // Step 3: Check for existing installation
    const existingInstall = await this.checkExistingInstallation(projectDir, options);
    if (existingInstall === 'cancelled') {
      return;
    }

    // Step 4: Select AI IDEs
    const selectedIdes = await this.selectIdes(options);

    // Step 5: Select modules
    const selectedModules = await this.selectModules(options);

    // Step 6: Confirm installation
    const confirmed = await this.confirmInstallation(projectDir, selectedIdes, selectedModules, options, existingInstall);
    if (!confirmed) {
      console.log(chalk.yellow('\nInstallation cancelled.'));
      return;
    }

    // Step 7: Execute installation
    await this.executeInstallation(projectDir, selectedIdes, selectedModules, existingInstall);

    // Step 8: Show success and next steps
    this.showSuccess(projectDir, selectedIdes, existingInstall);
  }

  /**
   * Check for existing AgentKits installation
   */
  async checkExistingInstallation(projectDir, options) {
    const claudeDir = path.join(projectDir, this.agentkitsFolderName);
    const exists = await fs.pathExists(claudeDir);

    if (!exists) {
      return 'new'; // Fresh installation
    }

    // Check what's already installed
    const memoryStatus = await this.memorySetup.getStatus(claudeDir);

    console.log(chalk.yellow('⚠️  AgentKits is already installed in this project.\n'));

    if (options.yes) {
      // Auto mode: update existing
      console.log(chalk.dim('Auto-mode: Updating existing installation...\n'));
      return 'update';
    }

    // Show current installation status
    console.log(chalk.dim('Current installation:'));
    console.log(chalk.dim(`  • .claude/ directory exists`));
    if (memoryStatus.hooksFileExists) {
      console.log(chalk.dim(`  • Memory hooks configured`));
    }
    if (memoryStatus.templateFiles.length > 0) {
      console.log(chalk.dim(`  • ${memoryStatus.templateFiles.length} memory files`));
    }
    console.log('');

    const { action } = await inquirer.prompt([
      {
        type: 'list',
        name: 'action',
        message: 'What would you like to do?',
        choices: [
          {
            name: `${chalk.green('Update')} - Add new files, keep existing customizations`,
            value: 'update',
          },
          {
            name: `${chalk.yellow('Reinstall')} - Reset to fresh installation (preserves memory data)`,
            value: 'reinstall',
          },
          {
            name: `${chalk.cyan('Run update command')} - Use the dedicated update tool`,
            value: 'run-update',
          },
          {
            name: `${chalk.red('Cancel')} - Exit without changes`,
            value: 'cancel',
          },
        ],
      },
    ]);

    if (action === 'cancel') {
      console.log(chalk.yellow('\nInstallation cancelled.'));
      return 'cancelled';
    }

    if (action === 'run-update') {
      console.log(chalk.cyan('\nSwitching to update mode...\n'));
      const { Updater } = require('./updater');
      const updater = new Updater();
      await updater.run({ path: projectDir });
      return 'cancelled'; // Don't continue with install
    }

    return action;
  }

  /**
   * Get installation path
   */
  async getInstallPath(options) {
    if (options.path) {
      return path.resolve(options.path);
    }

    if (options.yes) {
      return process.cwd();
    }

    const { installPath } = await inquirer.prompt([
      {
        type: 'list',
        name: 'installPath',
        message: 'Where would you like to install AgentKits?',
        choices: [
          { name: `Current directory (${process.cwd()})`, value: process.cwd() },
          { name: 'Custom path...', value: 'custom' },
        ],
      },
    ]);

    if (installPath === 'custom') {
      const { customPath } = await inquirer.prompt([
        {
          type: 'input',
          name: 'customPath',
          message: 'Enter the installation path:',
          validate: (input) => {
            if (!input) return 'Path is required';
            return true;
          },
        },
      ]);
      return path.resolve(customPath);
    }

    return installPath;
  }

  /**
   * Select AI IDEs to install for
   */
  async selectIdes(options) {
    if (options.ide) {
      // Support comma-separated list of IDEs
      return options.ide.split(',').map(ide => ide.trim());
    }

    const preferred = this.ideManager.getPreferredIdes();
    const others = this.ideManager.getOtherIdes();

    const choices = [
      new inquirer.Separator(chalk.green('── Recommended ──')),
      ...preferred.map(ide => ({
        name: `${ide.name} ${chalk.dim(`(${ide.value})`)}`,
        value: ide.value,
        checked: ide.value === 'claude-code', // Default check Claude Code
      })),
      new inquirer.Separator(chalk.dim('── Other Supported ──')),
      ...others.map(ide => ({
        name: `${ide.name} ${chalk.dim(`(${ide.value})`)}`,
        value: ide.value,
        checked: false,
      })),
    ];

    if (options.yes) {
      return ['claude-code'];
    }

    const { selectedIdes } = await inquirer.prompt([
      {
        type: 'checkbox',
        name: 'selectedIdes',
        message: 'Which AI tools do you use? (select all that apply)',
        choices,
        validate: (answer) => {
          if (answer.length < 1) {
            return 'You must select at least one AI tool';
          }
          return true;
        },
      },
    ]);

    return selectedIdes;
  }

  /**
   * Select modules to install
   */
  async selectModules(options) {
    if (options.modules) {
      return options.modules.split(',').map(m => m.trim());
    }

    const moduleChoices = [
      {
        name: `${chalk.bold.cyan('⚡ AgentKits Core')} ${chalk.bgRed.white.bold(' REQUIRED ')}\n     ${chalk.white('PIE™ Project Intelligence Engine + CPS™ Context Persistence System')}\n     ${chalk.gray('• Essential agents • Skills • Base commands • Memory system')}\n`,
        value: 'core',
        checked: true,
        disabled: 'Required',
      },
      {
        name: `${chalk.bold.cyan('🗺️  AgentKits GDJ™')} ${chalk.yellow('Guided Developer Journeys')}\n     ${chalk.white('60+ implementation templates • 19 step-by-step guides')}\n     ${chalk.gray('• Multi-methodology (TDD, BDD, DDD) • Feature templates • Journey tracking')}\n`,
        value: 'gdj',
        checked: true,
      },
      {
        name: `${chalk.bold.cyan('✨ AgentKits Quality')} ${chalk.yellow('Code Excellence')}\n     ${chalk.white('Code review agents • TDD workflows • Test frameworks')}\n     ${chalk.gray('• Adversarial review • Best practices • Coverage analysis')}\n`,
        value: 'quality',
        checked: true,
      },
      {
        name: `${chalk.bold.cyan('🔒 AgentKits Security')} ${chalk.yellow('Security First')}\n     ${chalk.white('Security review agents • OWASP Top 10 • Vulnerability scanning')}\n     ${chalk.gray('• Authentication patterns • Secret detection • Dependency audit')}\n`,
        value: 'security',
        checked: true,
      },
      {
        name: `${chalk.bold.cyan('🛠️  AgentKits Development')} ${chalk.yellow('Dev Specialists')}\n     ${chalk.white('Architect agent • Debugger specialist • Refactoring expert')}\n     ${chalk.gray('• Build error resolver • Clean architecture • System design')}\n`,
        value: 'development',
        checked: true,
      },
      {
        name: `${chalk.bold.cyan('🤖 AgentKits Automation')} ${chalk.yellow('Workflow Tools')}\n     ${chalk.white('Documentation search • Repomix integration • CI/CD helpers')}\n     ${chalk.gray('• Workflow automation • Code generation • Task orchestration')}\n`,
        value: 'automation',
        checked: true,
      },
      {
        name: `${chalk.bold.cyan('📚 AgentKits Training')} ${chalk.yellow('Skill Building')}\n     ${chalk.white('Interactive training modules • Skill-building exercises')}\n     ${chalk.gray('• Best practices tutorials • Hands-on labs • Progress tracking')}\n`,
        value: 'training',
        checked: true,
      },
    ];

    if (options.yes) {
      // Install all modules by default
      return ['core', 'gdj', 'quality', 'security', 'development', 'automation', 'training'];
    }

    const { selectedModules } = await inquirer.prompt([
      {
        type: 'checkbox',
        name: 'selectedModules',
        message: 'Which modules would you like to install?',
        choices: moduleChoices,
      },
    ]);

    // Always include core
    if (!selectedModules.includes('core')) {
      selectedModules.unshift('core');
    }

    return selectedModules;
  }

  /**
   * Confirm installation
   */
  async confirmInstallation(projectDir, selectedIdes, selectedModules, options, installMode = 'new') {
    if (options.yes) {
      return true;
    }

    console.log(chalk.bold('\nInstallation Summary:\n'));
    console.log(chalk.dim('  Path:'), projectDir);
    console.log(chalk.dim('  IDEs:'), selectedIdes.join(', '));
    console.log(chalk.dim('  Modules:'), selectedModules.join(', '));

    if (installMode === 'update') {
      console.log(chalk.dim('  Mode:'), chalk.green('Update (preserve customizations)'));
    } else if (installMode === 'reinstall') {
      console.log(chalk.dim('  Mode:'), chalk.yellow('Reinstall (reset to fresh)'));
    }
    console.log('');

    const { confirmed } = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'confirmed',
        message: 'Proceed with installation?',
        default: true,
      },
    ]);

    return confirmed;
  }

  /**
   * Execute the installation
   */
  async executeInstallation(projectDir, selectedIdes, selectedModules, installMode = 'new') {
    const spinner = ora('Installing AgentKits...').start();
    const claudeDir = path.join(projectDir, this.agentkitsFolderName);
    const isReinstall = installMode === 'reinstall';

    try {
      // Step 1: Create base directories
      spinner.text = 'Creating directory structure...';
      await this.createDirectories(projectDir);

      // Step 2: Copy core files
      spinner.text = isReinstall ? 'Reinstalling AgentKits files...' : 'Copying AgentKits files...';
      await this.copyAgentKitsFiles(projectDir, selectedModules, isReinstall);

      // Step 3: Set up memory system (CPS™)
      spinner.text = 'Setting up memory system (CPS™)...';
      await this.memorySetup.setup(projectDir, claudeDir, { verbose: false });

      // Step 4: Generate launchers for each IDE
      for (const ide of selectedIdes) {
        spinner.text = `Configuring ${ide}...`;
        await this.ideManager.setup(ide, projectDir, claudeDir, {
          selectedModules,
        });
      }

      // Step 5: Create output directory
      spinner.text = 'Creating output directory...';
      await fs.ensureDir(path.join(projectDir, '_agentkits-output'));

      const successMsg = installMode === 'new'
        ? 'AgentKits installed successfully!'
        : installMode === 'update'
          ? 'AgentKits updated successfully!'
          : 'AgentKits reinstalled successfully!';

      spinner.succeed(chalk.green(successMsg));
    } catch (error) {
      spinner.fail(chalk.red('Installation failed'));
      throw error;
    }
  }

  /**
   * Create base directory structure
   */
  async createDirectories(projectDir) {
    const dirs = [
      path.join(projectDir, this.agentkitsFolderName),
      path.join(projectDir, this.agentkitsFolderName, 'agents'),
      path.join(projectDir, this.agentkitsFolderName, 'skills'),
      path.join(projectDir, this.agentkitsFolderName, 'commands'),
      path.join(projectDir, this.agentkitsFolderName, 'memory'),
      path.join(projectDir, this.agentkitsFolderName, 'journeys'),
      path.join(projectDir, '_agentkits-output'),
    ];

    for (const dir of dirs) {
      await fs.ensureDir(dir);
    }
  }

  /**
   * Copy AgentKits files to project
   */
  async copyAgentKitsFiles(projectDir, selectedModules, overwrite = false) {
    // Determine source directory (where AgentKits is installed)
    const sourceDir = path.resolve(__dirname, '../../../../..');

    // Check if source exists
    const claudeDir = path.join(sourceDir, '.claude');
    if (await fs.pathExists(claudeDir)) {
      // Copy .claude folder contents
      await fs.copy(claudeDir, path.join(projectDir, this.agentkitsFolderName), {
        overwrite: overwrite,
        filter: (src) => {
          // Filter based on selected modules
          const relativePath = path.relative(claudeDir, src);

          // Never overwrite user's memory markdown files (preserve their notes)
          if (overwrite && relativePath.startsWith('memory/') && relativePath.endsWith('.md')) {
            return false;
          }

          // Never overwrite hooks.json (will be merged by memorySetup)
          if (overwrite && relativePath === 'hooks.json') {
            return false;
          }

          // Always include core files
          if (relativePath.startsWith('memory') || relativePath.startsWith('workflows')) {
            return true;
          }

          // Filter by module
          if (relativePath.startsWith('journeys') && !selectedModules.includes('gdj')) {
            return false;
          }

          return true;
        },
      });
    }
  }

  /**
   * Show success message and next steps
   */
  showSuccess(projectDir, selectedIdes, installMode = 'new') {
    console.log('');

    const title = installMode === 'new'
      ? '  Installation Complete!                                       '
      : installMode === 'update'
        ? '  Update Complete!                                             '
        : '  Reinstallation Complete!                                     ';

    console.log(chalk.green('╔══════════════════════════════════════════════════════════════╗'));
    console.log(chalk.green('║') + chalk.bold.white(title) + chalk.green('║'));
    console.log(chalk.green('╚══════════════════════════════════════════════════════════════╝'));
    console.log('');

    console.log(chalk.bold('What was installed:\n'));
    console.log(chalk.dim('  .claude/') + '           - AgentKits core files');
    console.log(chalk.dim('  .claude/memory/') + '    - CPS™ memory system');
    console.log(chalk.dim('  .claude/hooks.json') + ' - Auto-capture hooks');

    for (const ide of selectedIdes) {
      const handler = this.ideManager.handlers.get(ide);
      if (handler && handler.installerConfig) {
        const targetDir = handler.installerConfig.target_dir || handler.installerConfig.targets?.[0]?.target_dir;
        if (targetDir) {
          console.log(chalk.dim(`  ${targetDir}/`) + `     - ${ide} commands`);
        }
      }
    }

    console.log(chalk.dim('  _agentkits-output/') + ' - Generated artifacts\n');

    console.log(chalk.bold('Memory System (CPS™):\n'));
    console.log(chalk.green('  ✓') + ' Session auto-capture enabled');
    console.log(chalk.green('  ✓') + ' Tool observations tracked');
    console.log(chalk.green('  ✓') + ' Context persistence ready');

    if (installMode === 'update' || installMode === 'reinstall') {
      console.log(chalk.green('  ✓') + ' Existing memory data preserved');
    }

    console.log(chalk.dim('    Memory files: .claude/memory/*.md'));
    console.log(chalk.dim('    Database: .claude/memory/.db/\n'));

    console.log(chalk.bold('Next steps:\n'));
    console.log('  1. Open your project in your AI IDE');
    console.log('  2. Run ' + chalk.cyan('/pie-init') + ' to analyze your project');
    console.log('  3. Try ' + chalk.cyan('/gdj') + ' to start a guided journey');
    console.log('  4. Run ' + chalk.cyan('/memory:status') + ' to view memory state');
    console.log('  5. Run ' + chalk.cyan('/help') + ' to see all available commands\n');

    console.log(chalk.dim('Documentation: https://agentkits.net'));
    console.log(chalk.dim('Support: https://github.com/agentkits/agentkits-engineer/issues\n'));
  }
}

module.exports = { Installer };
