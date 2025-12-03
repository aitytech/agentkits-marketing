# Security Policy

## Supported Versions

We release patches for security vulnerabilities in the following versions:

| Version | Supported          |
| ------- | ------------------ |
| 1.x.x   | :white_check_mark: |
| < 1.0   | :x:                |

## Reporting a Vulnerability

We take security seriously at AgentKits. If you discover a security vulnerability, please report it responsibly.

### How to Report

**Please do NOT report security vulnerabilities through public GitHub issues.**

Instead, please report them via one of these methods:

1. **Email:** Send details to [security@agentkits.net](mailto:security@agentkits.net)
2. **GitHub Security Advisories:** [Report a vulnerability](https://github.com/agentkits/agentkits-marketing/security/advisories/new)

### What to Include

Please include the following information:

- Type of vulnerability (e.g., command injection, XSS, etc.)
- Full path to the affected file(s)
- Step-by-step instructions to reproduce
- Proof-of-concept or exploit code (if possible)
- Impact assessment

### Response Timeline

- **Initial Response:** Within 48 hours
- **Status Update:** Within 7 days
- **Resolution Target:** Within 30 days (depending on complexity)

### Safe Harbor

We consider security research conducted in accordance with this policy to be:

- Authorized concerning any applicable anti-hacking laws
- Authorized concerning any relevant anti-circumvention laws
- Exempt from restrictions in our Terms of Service that would interfere with conducting security research

We will not pursue legal action against researchers who:

- Make a good faith effort to avoid privacy violations, data destruction, and service interruption
- Only interact with accounts they own or with explicit permission
- Report vulnerabilities responsibly (not publicly disclosed before a fix is available)

## Security Best Practices

When using AgentKits:

1. **Review plugins before installing** - Understand what commands, agents, and MCP servers a plugin includes
2. **Protect API keys** - Never commit API keys or tokens to version control
3. **Use environment variables** - Store sensitive configuration in `.env` files (gitignored)
4. **Keep updated** - Regularly update to the latest version for security patches

## Known Security Considerations

### MCP Server Integrations

AgentKits supports MCP (Model Context Protocol) server integrations. When connecting to external MCP servers:

- Only connect to trusted MCP servers
- Review the permissions requested by each server
- Be aware that MCP servers may have access to sensitive data

### Command Execution

Some commands may execute system operations. Always:

- Review command documentation before use
- Be cautious with commands that modify files or system settings
- Use sandboxed environments for testing unfamiliar commands

## Acknowledgments

We appreciate responsible disclosure and will acknowledge security researchers who help us improve AgentKits security (with permission).

---

Thank you for helping keep AgentKits and our community safe!
