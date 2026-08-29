const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const test = require('node:test');
const { parse } = require('yaml');

const read = (file) => readFileSync(file, 'utf8');

test('configures Xquik as a remote HTTP MCP server', () => {
  const example = JSON.parse(read('.claude/.mcp.json.example'));
  const config = JSON.parse(read('skills/integrations/xquik/config.json'));

  assert.deepEqual(example.mcpServers.xquik, {
    type: 'http',
    url: 'https://xquik.com/mcp',
    headers: { 'x-api-key': '${XQUIK_API_KEY}' },
    _note: 'Public X research, monitoring, and account data',
  });
  assert.equal(config.transport, 'streamable-http');
  assert.equal(config.url, example.mcpServers.xquik.url);
  assert.equal(config.headers['x-api-key'], '${XQUIK_API_KEY}');
});

test('registers Xquik for social and competitor research', () => {
  const matrix = parse(read('skills/common/data/mcp-mapping-matrix.yaml'));
  const registry = JSON.parse(read('skills/skills-registry.json'));

  assert.equal(matrix.integrations.xquik.status, 'active');
  assert.equal(matrix.overview.total_integrations, Object.keys(matrix.integrations).length);
  assert.ok(matrix.integrations.xquik.skills.secondary.includes('competitor-alternatives'));
  assert.ok(matrix.skill_mcp_map['social-media'].optional.includes('xquik'));
  assert.deepEqual(registry.mcpIntegrationMatrix.xquik.dataTypes, [
    'posts',
    'engagement',
    'profiles',
    'mentions',
    'monitoring',
  ]);
});

test('limits research commands to discovered read-only endpoints', () => {
  for (const file of ['commands/competitor/deep.md', 'commands/research/market.md']) {
    const command = read(file);

    assert.match(command, /use the `xquik` MCP first/i);
    assert.match(command, /Call `explore`/);
    assert.match(command, /discovered `GET` endpoint/);
    assert.doesNotMatch(command, /TweetClaw/);
  }
});
