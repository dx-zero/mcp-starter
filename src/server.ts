import type { McpServerOptions } from './types'
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js'

export function createServer(options: McpServerOptions): McpServer {
  const { name, version } = options

  const server = new McpServer(
    {
      name,
      version,
    },
  )

  return server
}

export async function startServer(
  server: McpServer,
): Promise<void> {
  const transport = new StdioServerTransport()
  try {
    await server.connect(transport)
  }
  catch (err) {
    console.error('Error starting server:', err)
  }
}

export async function stopServer(server: McpServer) {
  try {
    await server.close()
  }
  catch (error) {
    console.error(`Error occured during server stop:`, error)
  }
  finally {
    process.exit(0)
  }
}
