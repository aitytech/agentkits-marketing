/**
 * AgentKits Marketing Core Installer
 *
 * Handles the interactive installation of AgentKits Marketing to projects
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
    console.log(chalk.bold('\nWelcome to AgentKits Marketing!\n'));

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

    console.log(chalk.yellow('⚠️  AgentKits Marketing is already installed in this project.\n'));

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
        message: 'Where would you like to install AgentKits Marketing?',
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
        name: `${chalk.bold.magenta('⚡ Marketing Core')} ${chalk.bgRed.white.bold(' REQUIRED ')}\n     ${chalk.white('18 Marketing Agents + Campaign & Content Workflows')}\n     ${chalk.gray('• Core agents • Essential skills • Base commands • Workflows')}\n`,
        value: 'core',
        checked: true,
        disabled: 'Required',
      },
      {
        name: `${chalk.bold.magenta('📊 SEO Mastery')} ${chalk.yellow('Search Optimization')}\n     ${chalk.white('Keyword research • Competitor analysis • Content optimization')}\n     ${chalk.gray('• Programmatic SEO • Schema markup • Technical SEO')}\n`,
        value: 'seo',
        checked: true,
      },
      {
        name: `${chalk.bold.magenta('📈 CRO Excellence')} ${chalk.yellow('Conversion Optimization')}\n     ${chalk.white('Page CRO • Form optimization • Signup flows')}\n     ${chalk.gray('• Popup design • Onboarding CRO • A/B testing frameworks')}\n`,
        value: 'cro',
        checked: true,
      },
      {
        name: `${chalk.bold.magenta('✍️  Content Marketing')} ${chalk.yellow('Content Engine')}\n     ${chalk.white('Blog posts • Social content • Landing pages')}\n     ${chalk.gray('• Copywriting • Editing workflows • Brand voice')}\n`,
        value: 'content',
        checked: true,
      },
      {
        name: `${chalk.bold.magenta('📧 Email Marketing')} ${chalk.yellow('Email Automation')}\n     ${chalk.white('Welcome sequences • Nurture campaigns • Re-engagement')}\n     ${chalk.gray('• Email wizard • Deliverability • Personalization')}\n`,
        value: 'email',
        checked: true,
      },
      {
        name: `${chalk.bold.magenta('📉 Analytics & Reporting')} ${chalk.yellow('Data-Driven')}\n     ${chalk.white('Campaign ROI • Funnel analysis • Attribution')}\n     ${chalk.gray('• Weekly reports • Monthly reports • MCP integrations')}\n`,
        value: 'analytics',
        checked: true,
      },
      {
        name: `${chalk.bold.magenta('📚 Marketing Training')} ${chalk.yellow('Skill Building')}\n     ${chalk.white('23 interactive modules • Pattern library • Best practices')}\n     ${chalk.gray('• 10x Marketer Framework • Hands-on exercises')}\n`,
        value: 'training',
        checked: true,
      },
    ];

    if (options.yes) {
      // Install all modules by default
      return ['core', 'seo', 'cro', 'content', 'email', 'analytics', 'training'];
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
    const spinner = ora('Installing AgentKits Marketing...').start();
    const claudeDir = path.join(projectDir, this.agentkitsFolderName);
    const isReinstall = installMode === 'reinstall';

    try {
      // Step 1: Create base directories
      spinner.text = 'Creating directory structure...';
      await this.createDirectories(projectDir);

      // Step 2: Copy core files
      spinner.text = isReinstall ? 'Reinstalling marketing files...' : 'Copying marketing files...';
      await this.copyAgentKitsFiles(projectDir, selectedModules, isReinstall);

      // Step 3: Set up memory system
      spinner.text = 'Setting up memory system...';
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
        ? 'AgentKits Marketing installed successfully!'
        : installMode === 'update'
          ? 'AgentKits Marketing updated successfully!'
          : 'AgentKits Marketing reinstalled successfully!';

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
      path.join(projectDir, this.agentkitsFolderName, 'workflows'),
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
    // Determine source directory (where AgentKits Marketing is installed)
    const sourceDir = path.resolve(__dirname, '../../..');

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

          // Filter by module - training commands
          if (relativePath.startsWith('commands/training') && !selectedModules.includes('training')) {
            return false;
          }

          return true;
        },
      });
    }

    // Copy docs folder if it exists
    const docsDir = path.join(sourceDir, 'docs');
    if (await fs.pathExists(docsDir)) {
      await fs.copy(docsDir, path.join(projectDir, 'docs'), {
        overwrite: overwrite,
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

    console.log(chalk.magenta('╔══════════════════════════════════════════════════════════════╗'));
    console.log(chalk.magenta('║') + chalk.bold.white(title) + chalk.magenta('║'));
    console.log(chalk.magenta('╚══════════════════════════════════════════════════════════════╝'));
    console.log('');

    console.log(chalk.bold('What was installed:\n'));
    console.log(chalk.dim('  .claude/') + '           - Marketing agents, skills, commands');
    console.log(chalk.dim('  .claude/memory/') + '    - Memory system');
    console.log(chalk.dim('  .claude/hooks.json') + ' - Auto-capture hooks');
    console.log(chalk.dim('  docs/') + '              - Marketing documentation');

    for (const ide of selectedIdes) {
      const handler = this.ideManager.handlers.get(ide);
      if (handler && handler.installerConfig) {
        const targetDir = handler.installerConfig.target_dir || handler.installerConfig.targets?.[0]?.target_dir;
        if (targetDir) {
          console.log(chalk.dim(`  ${targetDir}/`) + `     - ${ide} commands`);
        }
      }
    }

    console.log(chalk.dim('  _agentkits-output/') + ' - Generated marketing assets\n');

    console.log(chalk.bold('Marketing Agents Ready:\n'));
    console.log(chalk.green('  ✓') + ' 18 specialized marketing agents');
    console.log(chalk.green('  ✓') + ' 40+ marketing skills');
    console.log(chalk.green('  ✓') + ' 76 slash commands');

    if (installMode === 'update' || installMode === 'reinstall') {
      console.log(chalk.green('  ✓') + ' Existing customizations preserved');
    }

    console.log(chalk.dim('    Documentation: docs/usage-guide.md\n'));

    console.log(chalk.bold('Next steps:\n'));
    console.log('  1. Open your project in your AI IDE');
    console.log('  2. Run ' + chalk.cyan('/training:start-0-0') + ' to begin the course');
    console.log('  3. Try ' + chalk.cyan('/campaign:plan') + ' to create a campaign');
    console.log('  4. Run ' + chalk.cyan('/content:blog') + ' to write a blog post');
    console.log('  5. Run ' + chalk.cyan('/training:help') + ' to see all commands\n');

    console.log(chalk.dim('Documentation: https://agentkits.net'));
    console.log(chalk.dim('Support: https://github.com/aitytech/agentkits-marketing/issues\n'));
  }
}

module.exports = { Installer };
