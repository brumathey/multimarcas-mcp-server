#!/usr/bin/env node
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { MultimarcasClient, ApiError } from "./api-client.js";
import { vehicleTools } from "./tools/vehicles.js";
import { leadTools } from "./tools/leads.js";
import { teamTools } from "./tools/team.js";
import { crmTools } from "./tools/crm.js";
import { blogTools } from "./tools/blog.js";
import { bannerTools } from "./tools/banners.js";
import { testimonialTools } from "./tools/testimonials.js";
import { analyticsTools } from "./tools/analytics.js";
import { storeTools } from "./tools/store.js";
const API_URL = process.env.MULTIMARCAS_API_URL || "https://multimarcas.app.br";
const API_TOKEN = process.env.MULTIMARCAS_API_TOKEN;
if (!API_TOKEN) {
    console.error("MULTIMARCAS_API_TOKEN nao configurado. Gere um token em Dashboard > API.");
    process.exit(1);
}
const client = new MultimarcasClient(API_URL, API_TOKEN);
const server = new McpServer({
    name: "multimarcas",
    version: "1.0.0",
});
// Collect all tools from every module
const allToolModules = [
    vehicleTools(client),
    leadTools(client),
    teamTools(client),
    crmTools(client),
    blogTools(client),
    bannerTools(client),
    testimonialTools(client),
    analyticsTools(client),
    storeTools(client),
];
// Register each tool with the MCP server
for (const tools of allToolModules) {
    for (const tool of tools) {
        server.tool(tool.name, tool.description, tool.schema.shape, 
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        async (args) => {
            try {
                const result = await tool.handler(args);
                return {
                    content: [
                        {
                            type: "text",
                            text: JSON.stringify(result, null, 2),
                        },
                    ],
                };
            }
            catch (error) {
                if (error instanceof ApiError) {
                    return {
                        content: [
                            {
                                type: "text",
                                text: error.message,
                            },
                        ],
                        isError: true,
                    };
                }
                const msg = error instanceof Error ? error.message : "Erro desconhecido";
                return {
                    content: [{ type: "text", text: `Erro: ${msg}` }],
                    isError: true,
                };
            }
        });
    }
}
// Start the server
const transport = new StdioServerTransport();
await server.connect(transport);
//# sourceMappingURL=index.js.map