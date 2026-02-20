/**
 * IDE Manager
 *
 * Handles IDE-specific setup based on platform-codes.yaml configuration
 * Dynamically discovers and loads IDE handlers
 *
 * @author AityTech
 * @license MIT
 */

const fs = require('fs-extra');
const path = require('node:path');
const chalk = require('chalk');
const yaml = require('yaml');

class IdeManager {
  constructor() {
    this.handlers = new Map();
    this._initialized = false;
    this.agentkitsFolderName = '.claude';
    this.platformConfig = null;
  }

  /**
   * Set the AgentKits folder name for all IDE handlers
   */
  setAgentkitsFolderName(folderName) {
    this.agentkitsFolderName = folderName;
    for (const handler of this.handlers.values()) {
      if (typeof handler.setAgentkitsFolderName === 'function') {
        handler.setAgentkitsFolderName(folderName);
      }
    }
  }

  /**
   * Ensure handlers are loaded (lazy loading)
   */
  async ensureInitialized() {
    if (!this._initialized) {
      await this.loadPlatformConfig();
      await this.loadHandlers();
      this._initialized = true;
    }
  }

  /**
   * Load platform configuration from YAML
   */
  async loadPlatformConfig() {
    const configPath = path.join(__dirname, 'platform-codes.yaml');

    try {
      const content = await fs.readFile(configPath, 'utf8');
      this.platformConfig = yaml.parse(content);
    } catch (error) {
      console.error(chalk.red('Failed to load platform configuration:'), error.message);
      this.platformConfig = { platforms: {} };
    }
  }

  /**
   * Load handlers from platform configuration
   */
  async loadHandlers() {
    if (!this.platformConfig?.platforms) {
      return;
    }

    for (const [platformCode, platformInfo] of Object.entries(this.platformConfig.platforms)) {
      // Skip if no installer config
      if (!platformInfo.installer) continue;

      const handler = new ConfigDrivenIdeSetup(platformCode, platformInfo);
      handler.setAgentkitsFolderName(this.agentkitsFolderName);
      this.handlers.set(platformCode, handler);
    }
  }

  /**
   * Get all available IDEs
   */
  getAvailableIdes() {
    const ides = [];

    for (const [key, handler] of this.handlers) {
      ides.push({
        value: key,
        name: handler.displayName || handler.name || key,
        preferred: handler.preferred || false,
      });
    }

    // Sort: preferred first, then alphabetical
    ides.sort((a, b) => {
      if (a.preferred && !b.preferred) return -1;
      if (!a.preferred && b.preferred) return 1;
      return a.name.localeCompare(b.name);
    });

    return ides;
  }

  /**
   * Get preferred IDEs
   */
  getPreferredIdes() {
    return this.getAvailableIdes().filter((ide) => ide.preferred);
  }

  /**
   * Get non-preferred IDEs
   */
  getOtherIdes() {
    return this.getAvailableIdes().filter((ide) => !ide.preferred);
  }

  /**
   * Setup IDE configuration
   */
  async setup(ideName, projectDir, agentkitsDir, options = {}) {
    const handler = this.handlers.get(ideName.toLowerCase());

    if (!handler) {
      console.warn(chalk.yellow(`IDE '${ideName}' is not yet supported`));
      return { success: false, reason: 'unsupported' };
    }

    try {
      await handler.setup(projectDir, agentkitsDir, options);
      return { success: true, ide: ideName };
    } catch (error) {
      console.error(chalk.red(`Failed to setup ${ideName}:`), error.message);
      return { success: false, error: error.message };
    }
  }

  /**
   * Check if an IDE is supported
   */
  isSupported(ideName) {
    return this.handlers.has(ideName.toLowerCase());
  }
}

/**
 * Config-driven IDE setup handler
 */
class ConfigDrivenIdeSetup {
  constructor(platformCode, platformConfig) {
    this.name = platformCode;
    this.displayName = platformConfig.name;
    this.preferred = platformConfig.preferred || false;
    this.platformConfig = platformConfig;
    this.installerConfig = platformConfig.installer || null;
    this.agentkitsFolderName = '.claude';
  }

  setAgentkitsFolderName(folderName) {
    this.agentkitsFolderName = folderName;
  }

  /**
   * Main setup method
   */
  async setup(projectDir, agentkitsDir, options = {}) {
    console.log(chalk.cyan(`  Setting up ${this.displayName}...`));

    if (!this.installerConfig) {
      return { success: false, reason: 'no-config' };
    }

    // Handle multi-target installations (e.g., GitHub Copilot)
    if (this.installerConfig.targets) {
      return this.installToMultipleTargets(projectDir, agentkitsDir, options);
    }

    // Handle single-target installations
    if (this.installerConfig.target_dir) {
      return this.installToTarget(projectDir, agentkitsDir, this.installerConfig, options);
    }

    return { success: false, reason: 'invalid-config' };
  }

  /**
   * Install to a single target directory
   */
  async installToTarget(projectDir, agentkitsDir, config, options) {
    const { target_dir, template_type } = config;
    const targetPath = path.join(projectDir, target_dir);

    // Ensure target directory exists
    await fs.ensureDir(targetPath);

    // Generate launcher files
    const results = await this.generateLaunchers(targetPath, agentkitsDir, template_type, options);

    console.log(chalk.green(`    ✓ ${results.count} launchers created in ${target_dir}`));
    return { success: true, results };
  }

  /**
   * Install to multiple target directories
   */
  async installToMultipleTargets(projectDir, agentkitsDir, options) {
    const results = { count: 0 };

    for (const target of this.installerConfig.targets) {
      const result = await this.installToTarget(projectDir, agentkitsDir, target, options);
      if (result.success) {
        results.count += result.results?.count || 0;
      }
    }

    return { success: true, results };
  }

  /**
   * Generate launcher files for this IDE
   */
  async generateLaunchers(targetPath, agentkitsDir, templateType, options) {
    let count = 0;

    // Find all commands in the AgentKits directory
    const commandsDir = path.join(agentkitsDir, 'commands');
    if (await fs.pathExists(commandsDir)) {
      const files = await fs.readdir(commandsDir);

      for (const file of files) {
        if (!file.endsWith('.md')) continue;

        const commandPath = path.join(commandsDir, file);
        const content = await fs.readFile(commandPath, 'utf8');

        // Parse frontmatter to get name and description
        const frontmatter = this.parseFrontmatter(content);
        const name = frontmatter.name || path.basename(file, '.md');
        const description = frontmatter.description || `${name} command`;

        // Generate launcher content
        const launcherContent = await this.generateLauncherContent(
          name,
          description,
          `commands/${file}`,
          templateType
        );

        // Determine output filename (pass count for numbered files)
        const outputFilename = this.getOutputFilename(name, templateType, count);
        const outputPath = path.join(targetPath, outputFilename);

        await fs.writeFile(outputPath, launcherContent);
        count++;
      }
    }

    return { count };
  }

  /**
   * Parse YAML frontmatter from content
   */
  parseFrontmatter(content) {
    const match = content.match(/^---\n([\s\S]*?)\n---/);
    if (!match) return {};

    try {
      return yaml.parse(match[1]) || {};
    } catch {
      return {};
    }
  }

  /**
   * Generate launcher content based on template type
   */
  async generateLauncherContent(name, description, relativePath, templateType) {
    const templatesDir = path.join(__dirname, 'templates', 'combined');
    let template;

    // Try different template patterns
    const templatePatterns = [
      `${templateType}-command.md`,
      `${templateType}-command.toml`,
      `${templateType}-rule.md`,
      `${templateType}-steering.md`,
      `${templateType}-modes.yaml`,
      'default-command.md',
    ];

    for (const pattern of templatePatterns) {
      const templatePath = path.join(templatesDir, pattern);
      try {
        template = await fs.readFile(templatePath, 'utf8');
        break;
      } catch {
        // Try next pattern
      }
    }

    if (!template) {
      // Ultimate fallback
      template = `---\nname: '{{name}}'\ndescription: '{{description}}'\n---\n\nLOAD: {{agentkitsFolderName}}/{{path}}\n`;
    }

    // Create slug from name
    const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

    // Replace placeholders
    return template
      .replace(/\{\{name\}\}/g, name)
      .replace(/\{\{description\}\}/g, description)
      .replace(/\{\{slug\}\}/g, slug)
      .replace(/\{\{path\}\}/g, relativePath)
      .replace(/\{\{agentkitsFolderName\}\}/g, this.agentkitsFolderName);
  }

  /**
   * Get output filename based on template type
   */
  getOutputFilename(name, templateType, index = 0) {
    const config = this.installerConfig;
    const extension = config.file_extension || '.md';

    // Special handling for GitHub Copilot
    if (templateType === 'copilot_agents') {
      return `${name}.agent.md`;
    }
    if (templateType === 'copilot_instructions') {
      return `${name}.instructions.md`;
    }

    // Gemini uses TOML
    if (templateType === 'gemini') {
      return `agentkits-${name}.toml`;
    }

    // Cline uses numbered files
    if (templateType === 'cline') {
      const paddedIndex = String(index + 1).padStart(2, '0');
      return `${paddedIndex}-agentkits-${name}.md`;
    }

    return `agentkits-${name}${extension}`;
  }
}

module.exports = { IdeManager, ConfigDrivenIdeSetup };
