/**
 * AgentKits Updater
 *
 * Handles updating existing AgentKits installations with new
 * commands, agents, skills, and other components
 *
 * @author AityTech
 * @license MIT
 */

const fs = require('fs-extra');
const path = require('node:path');
const chalk = require('chalk');
const inquirer = require('inquirer');
const ora = require('ora');
const { MemorySetup } = require('./memory-setup');

class Updater {
  constructor() {
    this.agentkitsFolderName = '.claude';
    this.sourceDir = path.resolve(__dirname, '../../../../..');
    this.memorySetup = new MemorySetup();
    this.preservePatterns = [
      // User customizations to preserve
      'memory/**/*',
      'config/**/*',
      'CLAUDE.md',
    ];
    this.stats = {
      added: [],
      updated: [],
      skipped: [],
      preserved: [],
      memoryMigrated: false,
    };
    this.isGitRepo = false;
    this.backupDir = null;
  }

  /**
   * Check if directory is a git repository
   */
  async checkGitRepo(projectDir) {
    const gitDir = path.join(projectDir, '.git');
    return fs.pathExists(gitDir);
  }

  /**
   * Main update flow
   */
  async run(options = {}) {
    console.log(chalk.bold('\nAgentKits Update\n'));

    // Step 1: Determine project path
    const projectDir = await this.getProjectPath(options);

    // Step 2: Check if AgentKits is installed
    const isInstalled = await this.checkInstallation(projectDir);
    if (!isInstalled) {
      console.log(chalk.red('\nAgentKits is not installed in this project.'));
      console.log(chalk.dim('Run: npx agentkits-engineer install\n'));
      return;
    }

    // Step 3: Analyze what needs updating
    const analysis = await this.analyzeChanges(projectDir);

    if (analysis.totalChanges === 0) {
      console.log(chalk.green('\n✓ Your AgentKits installation is up to date!\n'));
      return;
    }

    // Step 4: Show changes and let user select
    const selectedChanges = await this.selectChanges(analysis, options);

    if (selectedChanges.files.length === 0 && !selectedChanges.migrateMemory) {
      console.log(chalk.yellow('\nNo changes selected. Update cancelled.\n'));
      return;
    }

    // Step 5: Check if git repo (skip backup if yes)
    this.isGitRepo = await this.checkGitRepo(projectDir);

    // Step 6: Confirm update
    const confirmed = await this.confirmUpdate(selectedChanges, options);
    if (!confirmed) {
      console.log(chalk.yellow('\nUpdate cancelled.\n'));
      return;
    }

    // Step 7: Execute update (no backup needed for git repos)
    await this.executeUpdate(projectDir, selectedChanges);

    // Step 8: Show summary
    this.showSummary();
  }

  /**
   * Get project path
   */
  async getProjectPath(options) {
    if (options.path) {
      return path.resolve(options.path);
    }
    return process.cwd();
  }

  /**
   * Check if AgentKits is installed
   */
  async checkInstallation(projectDir) {
    const claudeDir = path.join(projectDir, this.agentkitsFolderName);
    return fs.pathExists(claudeDir);
  }

  /**
   * Analyze what files have changed
   */
  async analyzeChanges(projectDir) {
    const spinner = ora('Analyzing changes...').start();

    const sourceClaudeDir = path.join(this.sourceDir, '.claude');
    const targetClaudeDir = path.join(projectDir, this.agentkitsFolderName);

    const changes = {
      commands: { new: [], updated: [] },
      agents: { new: [], updated: [] },
      skills: { new: [], updated: [] },
      journeys: { new: [], updated: [] },
      workflows: { new: [], updated: [] },
      templates: { new: [], updated: [] },
      memory: { needsMigration: false, status: null },
      totalChanges: 0,
    };

    // Analyze each category
    const categories = [
      { name: 'commands', path: 'commands' },
      { name: 'agents', path: 'agents' },
      { name: 'skills', path: 'skills' },
      { name: 'journeys', path: 'journeys' },
      { name: 'workflows', path: 'workflows' },
    ];

    for (const category of categories) {
      const sourcePath = path.join(sourceClaudeDir, category.path);
      const targetPath = path.join(targetClaudeDir, category.path);

      if (await fs.pathExists(sourcePath)) {
        const categoryChanges = await this.compareDirectories(sourcePath, targetPath, category.path);
        changes[category.name] = categoryChanges;
        changes.totalChanges += categoryChanges.new.length + categoryChanges.updated.length;
      }
    }

    // Check if memory system needs migration
    const memoryStatus = await this.memorySetup.getStatus(targetClaudeDir);
    changes.memory.status = memoryStatus;
    changes.memory.needsMigration = !memoryStatus.hooksFileExists || memoryStatus.templateFiles.length < 7;

    if (changes.memory.needsMigration) {
      changes.totalChanges += 1; // Count memory migration as one change
    }

    spinner.succeed('Analysis complete');
    return changes;
  }

  /**
   * Compare source and target directories
   */
  async compareDirectories(sourceDir, targetDir, relativePath) {
    const result = { new: [], updated: [] };

    if (!(await fs.pathExists(sourceDir))) {
      return result;
    }

    const sourceFiles = await this.getAllFiles(sourceDir);

    for (const sourceFile of sourceFiles) {
      const relativeFile = path.relative(sourceDir, sourceFile);
      const targetFile = path.join(targetDir, relativeFile);

      if (!(await fs.pathExists(targetFile))) {
        // New file
        result.new.push({
          name: relativeFile,
          sourcePath: sourceFile,
          targetPath: targetFile,
          category: relativePath,
        });
      } else {
        // Check if file has changed
        const sourceContent = await fs.readFile(sourceFile, 'utf8');
        const targetContent = await fs.readFile(targetFile, 'utf8');

        if (sourceContent !== targetContent) {
          result.updated.push({
            name: relativeFile,
            sourcePath: sourceFile,
            targetPath: targetFile,
            category: relativePath,
          });
        }
      }
    }

    return result;
  }

  /**
   * Get all files in a directory recursively
   */
  async getAllFiles(dir) {
    const files = [];

    if (!(await fs.pathExists(dir))) {
      return files;
    }

    const items = await fs.readdir(dir, { withFileTypes: true });

    for (const item of items) {
      const fullPath = path.join(dir, item.name);

      if (item.isDirectory()) {
        const subFiles = await this.getAllFiles(fullPath);
        files.push(...subFiles);
      } else {
        files.push(fullPath);
      }
    }

    return files;
  }

  /**
   * Let user select which changes to apply
   */
  async selectChanges(analysis, options) {
    // Collect all file changes
    const allFileChanges = [];
    for (const category of ['commands', 'agents', 'skills', 'journeys', 'workflows']) {
      allFileChanges.push(...analysis[category].new, ...analysis[category].updated);
    }

    if (options.yes) {
      // Auto-select all changes including memory migration
      return {
        files: allFileChanges,
        migrateMemory: analysis.memory.needsMigration,
      };
    }

    console.log(chalk.bold('\nAvailable Updates:\n'));

    const choices = [];
    const categories = [
      { key: 'commands', icon: '📝', label: 'Commands' },
      { key: 'agents', icon: '🤖', label: 'Agents' },
      { key: 'skills', icon: '⚡', label: 'Skills' },
      { key: 'journeys', icon: '🗺️', label: 'Journeys' },
      { key: 'workflows', icon: '🔄', label: 'Workflows' },
    ];

    // Add memory migration option first if needed
    if (analysis.memory.needsMigration) {
      choices.push(new inquirer.Separator(chalk.bold(`\n💾 Memory System (CPS™)`)));
      choices.push({
        name: `${chalk.green('+ NEW')} Memory system with auto-capture hooks`,
        value: { type: 'memory-migration' },
        checked: true,
      });
    }

    for (const category of categories) {
      const data = analysis[category.key];
      const hasChanges = data.new.length > 0 || data.updated.length > 0;

      if (hasChanges) {
        choices.push(new inquirer.Separator(chalk.bold(`\n${category.icon} ${category.label}`)));

        for (const file of data.new) {
          choices.push({
            name: `${chalk.green('+ NEW')} ${file.name}`,
            value: file,
            checked: true,
          });
        }

        for (const file of data.updated) {
          choices.push({
            name: `${chalk.yellow('↻ UPD')} ${file.name}`,
            value: file,
            checked: true,
          });
        }
      }
    }

    if (choices.length === 0) {
      return { files: [], migrateMemory: false };
    }

    // Add select all/none options
    choices.unshift(
      new inquirer.Separator(chalk.dim('\n── Quick Select ──'))
    );

    const { selectedChanges } = await inquirer.prompt([
      {
        type: 'checkbox',
        name: 'selectedChanges',
        message: 'Select updates to apply:',
        choices,
        pageSize: 20,
      },
    ]);

    // Separate memory migration from file changes
    const migrateMemory = selectedChanges.some(c => c.type === 'memory-migration');
    const files = selectedChanges.filter(c => c.type !== 'memory-migration');

    return { files, migrateMemory };
  }

  /**
   * Confirm update
   */
  async confirmUpdate(selectedChanges, options) {
    if (options.yes) {
      return true;
    }

    const { files, migrateMemory } = selectedChanges;
    const newCount = files.filter(c => !c.targetPath || !(fs.existsSync(c.targetPath))).length;
    const updateCount = files.length - newCount;

    console.log(chalk.bold('\nUpdate Summary:\n'));

    if (migrateMemory) {
      console.log(chalk.cyan(`  💾 Memory system migration`));
    }

    if (files.length > 0) {
      console.log(chalk.green(`  + ${newCount} new files`));
      console.log(chalk.yellow(`  ↻ ${updateCount} updated files`));
    }

    if (this.isGitRepo) {
      console.log(chalk.dim(`\n  Git repo detected - use "git checkout .claude" to revert if needed\n`));
    } else {
      console.log(chalk.dim(`\n  No backup needed - files will be updated in place\n`));
    }

    const { confirmed } = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'confirmed',
        message: 'Proceed with update?',
        default: true,
      },
    ]);

    return confirmed;
  }

  /**
   * Execute the update
   */
  async executeUpdate(projectDir, selectedChanges) {
    const spinner = ora('Applying updates...').start();
    const claudeDir = path.join(projectDir, this.agentkitsFolderName);
    const { files, migrateMemory } = selectedChanges;

    try {
      // Step 1: Migrate memory system if selected
      if (migrateMemory) {
        spinner.text = 'Setting up memory system (CPS™)...';
        await this.memorySetup.setup(projectDir, claudeDir, { verbose: false });
        this.stats.memoryMigrated = true;
      }

      // Step 2: Apply file changes
      for (const change of files) {
        spinner.text = `Updating ${change.name}...`;

        // Ensure target directory exists
        await fs.ensureDir(path.dirname(change.targetPath));

        // Check if file exists (to track new vs updated)
        const isNew = !(await fs.pathExists(change.targetPath));

        // Copy file
        await fs.copy(change.sourcePath, change.targetPath, { overwrite: true });

        if (isNew) {
          this.stats.added.push(change.name);
        } else {
          this.stats.updated.push(change.name);
        }
      }

      spinner.succeed(chalk.green('Updates applied successfully!'));
    } catch (error) {
      spinner.fail('Update failed');

      if (this.isGitRepo) {
        console.log(chalk.yellow('\nTo revert changes, run:'));
        console.log(chalk.cyan('  git checkout .claude'));
      }

      throw error;
    }
  }

  /**
   * Show update summary
   */
  showSummary() {
    console.log('');
    console.log(chalk.green('╔══════════════════════════════════════════════════════════════╗'));
    console.log(chalk.green('║') + chalk.bold.white('  Update Complete!                                             ') + chalk.green('║'));
    console.log(chalk.green('╚══════════════════════════════════════════════════════════════╝'));
    console.log('');

    if (this.stats.memoryMigrated) {
      console.log(chalk.cyan.bold('Memory system (CPS™) installed:'));
      console.log(chalk.cyan('  💾 .claude/memory/ - Memory markdown files'));
      console.log(chalk.cyan('  💾 .claude/hooks.json - Auto-capture hooks'));
      console.log('');
    }

    if (this.stats.added.length > 0) {
      console.log(chalk.green.bold('New files added:'));
      this.stats.added.forEach(f => console.log(chalk.green(`  + ${f}`)));
      console.log('');
    }

    if (this.stats.updated.length > 0) {
      console.log(chalk.yellow.bold('Files updated:'));
      this.stats.updated.forEach(f => console.log(chalk.yellow(`  ↻ ${f}`)));
      console.log('');
    }

    if (this.isGitRepo) {
      console.log(chalk.dim('To revert: git checkout .claude\n'));
    }

    console.log(chalk.bold('Next steps:\n'));
    console.log('  1. Review the updated files');
    console.log('  2. Run ' + chalk.cyan('/pie-init') + ' to refresh project analysis');

    if (this.stats.memoryMigrated) {
      console.log('  3. Run ' + chalk.cyan('/memory:status') + ' to verify memory system');
      console.log('  4. Try new commands with ' + chalk.cyan('/help') + '\n');
    } else {
      console.log('  3. Try new commands with ' + chalk.cyan('/help') + '\n');
    }
  }
}

module.exports = { Updater };
