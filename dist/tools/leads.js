import { z } from "zod";
export function leadTools(client) {
    return [
        {
            name: "list_leads",
            description: "Listar leads/contatos recebidos pela loja. Filtrar por status: new (novo), contacted (contatado), won (ganho), lost (perdido), spam.",
            schema: z.object({
                status: z.enum(["new", "contacted", "won", "lost", "spam"]).optional().describe("Filtrar por status do lead"),
                per_page: z.number().optional().describe("Itens por pagina"),
                page: z.number().optional().describe("Numero da pagina"),
            }),
            handler: async (args) => {
                return client.get("/leads", args);
            },
        },
        {
            name: "create_lead",
            description: "Criar um lead manualmente ou a partir de uma fonte externa.",
            schema: z.object({
                name: z.string().describe("Nome do contato"),
                email: z.string().optional().describe("Email"),
                phone: z.string().optional().describe("Telefone"),
                message: z.string().optional().describe("Mensagem do contato"),
                source: z.string().optional().describe("Origem do lead (ex: whatsapp, site, indicacao)"),
                vehicle_id: z.number().optional().describe("ID do veiculo de interesse"),
            }),
            handler: async (args) => {
                return client.post("/leads", args);
            },
        },
        {
            name: "update_lead_status",
            description: "Mudar o status de um lead. Status possiveis: new, contacted, won, lost, spam.",
            schema: z.object({
                id: z.number().describe("ID do lead"),
                status: z.enum(["new", "contacted", "won", "lost", "spam"]).describe("Novo status"),
            }),
            handler: async (args) => {
                return client.put(`/leads/${args.id}/status`, { status: args.status });
            },
        },
    ];
}
//# sourceMappingURL=leads.js.map