# Common Skill Utilities

Shared utilities used across multiple skills in the marketing kit.

## Language & Quality Standards

**CRITICAL**: Respond in the same language the user is using. If Vietnamese, respond in Vietnamese. If Spanish, respond in Spanish.

**Standards**: Token efficiency, sacrifice grammar for concision, list unresolved questions at end.

---

## Overview

This directory contains shared utilities and helpers used by skills that require API integrations, particularly with Google's Gemini AI.

## API Key Helper

`api_key_helper.py` provides standardized configuration for all Gemini-based skills, supporting both Google AI Studio and Vertex AI endpoints.

### Usage in Skills

```python
import sys
from pathlib import Path

# Add common directory to path
common_dir = Path(__file__).parent.parent.parent / 'common'
sys.path.insert(0, str(common_dir))

from api_key_helper import get_api_key_or_exit

# Get API key with automatic error handling
api_key = get_api_key_or_exit()
```

### API Key Lookup Order

The helper checks for `GEMINI_API_KEY` in this order (first found wins):

| Priority | Location | Use Case |
|----------|----------|----------|
| 1 | Process environment variable | Development, CI/CD |
| 2 | Project root `.env` file | Project-specific config |
| 3 | `.claude/.env` file | Claude Code config |
| 4 | `.claude/skills/.env` file | Shared across skills |
| 5 | Skill directory `.env` file | Skill-specific config |

**Set via environment variable (recommended for development)**:
```bash
export GEMINI_API_KEY='your-api-key'
```

**Set via .env file**:
```bash
echo 'GEMINI_API_KEY=your-api-key' > .env
```

### Vertex AI Support

For enterprise deployments using Vertex AI instead of Google AI Studio:

```bash
# Enable Vertex AI
export GEMINI_USE_VERTEX=true
export VERTEX_PROJECT_ID=your-gcp-project-id
export VERTEX_LOCATION=us-central1  # Optional, defaults to us-central1
```

Or in `.env` file:
```
GEMINI_USE_VERTEX=true
VERTEX_PROJECT_ID=your-gcp-project-id
VERTEX_LOCATION=us-central1
```

### Using get_client() Helper

For automatic client selection (AI Studio or Vertex AI):

```python
from api_key_helper import get_client

# Get appropriate client based on configuration
client_info = get_client()

if client_info['type'] == 'vertex':
    # Using Vertex AI
    from vertexai.generative_models import GenerativeModel
    model = GenerativeModel('gemini-2.5-flash')
    response = model.generate_content("Hello")
else:
    # Using AI Studio
    client = client_info['client']
    response = client.models.generate_content(
        model='gemini-2.5-flash',
        contents="Hello"
    )
```

### Using get_vertex_config() Helper

For checking Vertex AI configuration:

```python
from api_key_helper import get_vertex_config

vertex_config = get_vertex_config()
if vertex_config['use_vertex']:
    print(f"Using Vertex AI")
    print(f"Project: {vertex_config['project_id']}")
    print(f"Location: {vertex_config['location']}")
```

### Error Handling

If the API key is not found, the helper will:
1. Print a clear error message
2. Show all available methods to set the API key
3. Provide the URL to obtain an API key
4. Exit with status code 1

For Vertex AI, if `VERTEX_PROJECT_ID` is missing when `GEMINI_USE_VERTEX=true`, the helper will provide clear instructions.

This ensures users get immediate, actionable feedback when configuration is missing.

## Best Practices

### Security
1. **Never commit API keys**: Use `.env` files (gitignored) or environment variables
2. **Rotate keys regularly**: Especially for production
3. **Scope appropriately**: Use project-specific keys when possible

### Development
1. **Test locally first**: Validate API key before deploying
2. **Use appropriate model**: `gemini-2.5-flash` for most tasks, `gemini-2.5-pro` for complex
3. **Handle errors gracefully**: Catch API errors and provide helpful messages

### Production
1. **Use Vertex AI**: Better security, SLAs, and enterprise features
2. **Monitor usage**: Track API calls and costs
3. **Cache responses**: Reduce redundant API calls
