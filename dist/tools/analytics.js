import { z } from "zod";
export function analyticsTools(client) {
    return [
        {
            name: "get_analytics_summary",
            description: "Obter resumo de metricas da loja: visitas, visitantes unicos, cliques WhatsApp e telefone para um periodo (7, 30 ou 90 dias).",
            schema: z.object({
                days: z.number().optional().describe("Periodo em dias (default: 30, max: 90)"),
            }),
            handler: async (args) => {
                return client.get("/analytics/summary", { days: args.days });
            },
        },
        {
            name: "get_analytics_detailed",
            description: "Obter analytics completo: dados diarios (grafico), top 10 veiculos mais vistos, fontes de trafego, resumo de leads por dia e taxa de conversao.",
            schema: z.object({
                period: z.enum(["7d", "30d", "90d"]).optional().describe("Periodo: 7d, 30d (default), 90d"),
            }),
            handler: async (args) => {
                return client.get("/analytics/detailed", { period: args.period });
            },
        },
    ];
}
//# sourceMappingURL=analytics.js.map