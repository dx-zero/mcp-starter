# MCP Server Starter

![mcp starter](/public/banner.png)
<a href="https://glama.ai/mcp/servers/@instructa/mcp-starter">
  <img width="380" height="200" src="https://glama.ai/mcp/servers/@instructa/mcp-starter/badge" alt="Starter MCP server" />
</a>
<p>
  <img src="https://img.shields.io/badge/License-MIT-yellow?style=flat&colorA=18181B&colorB=28CF8D" alt="License">
  <!-- Add other relevant badges here, e.g., build status, stars -->
  <!-- <a href="YOUR_REPO_LINK/stargazers"><img src="https://img.shields.io/github/stars/YOUR_USERNAME/YOUR_REPO.svg?style=flat&colorA=18181B&colorB=28CF8D" alt="Stars"></a> -->
</p>

**Want to build your own MCP server?**

MCP Server Starter gives you a basic structure to run local tools with Cursor, Claude, and others using the MCP standard.

---

## Features

- 📡 **Flexible Communication**
  - Supports multiple communication protocols between client and server,
  - `stdio`: Local usage
  - `Streamable HTTP`: Remote and local useage
  - `sse`: Remote and local usage (deprecated)~~

- 📦 **Minimal Setup** - Get started quickly with a basic server implementation.
- 🤖 **Cursor AI Integration** - Includes example `.cursor/mcp.json` configuration.
- ⌨️ **TypeScript** - Add type safety to your project.

## Todo

- [ ] Add option to publish your own packages
- [ ] Better CLI support for scaffolding
- [ ] Prompts to build tools on the fly

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (Specify version if necessary)
- An MCP-compatible client (e.g., [Cursor](https://cursor.com/))

## Usage

### Supported Transport Options

Model Context Protocol Supports multiple Transport methods.

### stdio

![mcp starter](/public/stdio-mcp-starter.jpg)

Recommend for local setups

#### Code Editor Support

Add the code snippets below

* Cursor: `.cursor/mcp.json`

**Local development/testing**

Use this if you want to test your mcp server locally

```json
{
  "mcpServers": {
    "my-starter-mcp-stdio": {
      "command": "node",
      "args": ["./bin/cli.mjs", "--stdio"]
    }
  }
}
```

**Published Package**

Use this when you have published your package in the npm registry

```json
{
  "mcpServers": {
    "my-starter-mcp-stdio": {
      "command": "npx",
      "args": ["my-mcp-server", "--stdio"]
    }
  }
}
```

### Streamable HTTP

![mcp starter](/public/mcp-sse-starter.jpg)

>Important: Streamable HTTP is not supported in Cursor yet

Recommend for remote server usage

**Important:** In contrast to stdio you need also to run the server with the correct flag

**Local development**
Use the `streamable http` transport

1. Start the MCP Server
  Run this in your terminal
  ```bash
  node ./bin/cli.mjs --http --port 4200
  ```

  Or with mcp inspector
  ```
  npm run dev-http
  # npm run dev-sse (deprecated)
  ```

  2. Add this to your config
  ```json
  {
    "mcpServers": {
      "my-starter-mcp-http": {
        "command": "node",
        "args": ["./bin/cli.mjs", "--http", "--port", "4001"]
        // "args": ["./bin/cli.mjs", "--sse", "--port", "4002"] (or deprecated sse usage)
      }
    }
  }
  ```

**Published Package**

Use this when you have published your package in the npm registry

Run this in your terminal
```bash
npx my-mcp-server --http --port 4200
# npx my-mcp-server --sse --port 4201 (deprecated)
```

```json
{
  "mcpServers": {
    "my-starter-mcp-http": {
      "url": "http://localhost:4200/mcp"
      // "url": "http://localhost:4201/sse"
    }
  }
}
```

## Use the Inspector

Use the `inspect` command to debug your mcp server

![mcp starter](/public/inspect.jpg)
![mcp starter](/public/streamable2.jpg)

## Command-Line Options

### Protocol Selection

| Protocol | Description            | Flags                                                | Notes           |
| :------- | :--------------------- | :--------------------------------------------------- | :-------------- |
| `stdio`  | Standard I/O           | (None)                                               | Default         |
| `http`   | HTTP REST              | `--port <num>` (def: 3000), `--endpoint <path>` (def: `/mcp`) |                 |
| `sse`    | Server-Sent Events     | `--port <num>` (def: 3000)                            | Deprecated      |

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## Links

- X/Twitter: [@kregenrek](https://x.com/kregenrek)
- Bluesky: [@kevinkern.dev](https://bsky.app/profile/kevinkern.dev)

## Courses
- Learn Cursor AI: [Ultimate Cursor Course](https://www.instructa.ai/en/cursor-ai)
- Learn to build software with AI: [instructa.ai](https://www.instructa.ai)

## See my other projects:

* [AI Prompts](https://github.com/instructa/ai-prompts/blob/main/README.md) - Curated AI Prompts for Cursor AI, Cline, Windsurf and Github Copilot
* [codefetch](https://github.com/regenrek/codefetch) - Turn code into Markdown for LLMs with one simple terminal command
* [aidex](https://github.com/regenrek/aidex) A CLI tool that provides detailed information about AI language models, helping developers choose the right model for their needs.