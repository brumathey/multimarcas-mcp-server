import { z } from "zod";
export function crmTools(client) {
    return [
        {
            name: "list_pipelines",
            description: "Listar pipelines do CRM com seus estagios (stages). Cada pipeline tem estagios ordenados que representam o funil de vendas.",
            schema: z.object({}),
            handler: async () => {
                return client.get("/crm/pipelines");
            },
        },
        {
            name: "list_deals",
            description: "Listar negocios (deals) do CRM. Filtrar por pipeline, estagio, status (open/won/lost) e vendedor responsavel.",
            schema: z.object({
                pipeline_id: z.number().optional().describe("Filtrar por pipeline"),
                stage_id: z.number().optional().describe("Filtrar por estagio"),
                status: z.enum(["open", "won", "lost"]).optional().describe("Status do deal"),
                assigned_user_id: z.number().optional().describe("ID do vendedor responsavel"),
                per_page: z.number().optional(),
                page: z.number().optional(),
            }),
            handler: async (args) => {
                return client.get("/crm/deals", args);
            },
        },
        {
            name: "create_deal",
            description: "Criar um novo negocio no CRM. Vincule a um lead e/ou veiculo.",
            schema: z.object({
                name: z.string().describe("Nome do negocio (ex: 'Venda Corolla 2024')"),
                value: z.number().optional().describe("Valor estimado do negocio em centavos"),
                pipeline_id: z.number().optional().describe("ID do pipeline (usa o default se nao informado)"),
                stage_id: z.number().optional().describe("ID do estagio inicial"),
                contact_submission_id: z.number().optional().describe("ID do lead vinculado"),
                vehicle_id: z.number().optional().describe("ID do veiculo vinculado"),
                assigned_user_id: z.number().optional().describe("ID do vendedor responsavel"),
                expected_close_date: z.string().optional().describe("Data prevista de fechamento (YYYY-MM-DD)"),
            }),
            handler: async (args) => {
                return client.post("/crm/deals", args);
            },
        },
        {
            name: "get_deal",
            description: "Obter detalhes completos de um negocio: contato, veiculo, estagio, atividades recentes e tarefas.",
            schema: z.object({
                id: z.number().describe("ID do deal"),
            }),
            handler: async (args) => {
                return client.get(`/crm/deals/${args.id}`);
            },
        },
        {
            name: "update_deal",
            description: "Atualizar campos de um negocio (nome, valor, vendedor responsavel, data prevista de fechamento).",
            schema: z.object({
                id: z.number().describe("ID do deal"),
                name: z.string().optional(),
                value: z.number().optional(),
                assigned_user_id: z.number().optional(),
                expected_close_date: z.string().optional(),
                lost_reason: z.string().optional().describe("Motivo da perda (se aplicavel)"),
            }),
            handler: async (args) => {
                const { id, ...body } = args;
                return client.put(`/crm/deals/${id}`, body);
            },
        },
        {
            name: "move_deal",
            description: "Mover um negocio para outro estagio do pipeline. Se mover para estagio de 'perdido', informe o motivo.",
            schema: z.object({
                id: z.number().describe("ID do deal"),
                stage_id: z.number().describe("ID do estagio de destino"),
                lost_reason: z.string().optional().describe("Motivo da perda (obrigatorio se estagio e de perda)"),
            }),
            handler: async (args) => {
                const { id, ...body } = args;
                return client.post(`/crm/deals/${id}/move`, body);
            },
        },
        {
            name: "add_activity",
            description: "Registrar uma atividade em um negocio: nota, ligacao, email, whatsapp ou reuniao.",
            schema: z.object({
                deal_id: z.number().describe("ID do deal"),
                type: z.enum(["note", "call", "email", "whatsapp", "meeting"]).describe("Tipo: note (nota), call (ligacao), email, whatsapp, meeting (reuniao)"),
                description: z.string().describe("Descricao da atividade"),
            }),
            handler: async (args) => {
                return client.post(`/crm/deals/${args.deal_id}/activities`, {
                    type: args.type,
                    description: args.description,
                });
            },
        },
        {
            name: "list_tasks",
            description: "Listar tarefas do CRM. Filtrar por status: pending (pendente), overdue (atrasada), completed (concluida).",
            schema: z.object({
                status: z.enum(["pending", "overdue", "completed", "all"]).optional().describe("Filtrar por status"),
                deal_id: z.number().optional().describe("Filtrar tarefas de um deal especifico"),
                per_page: z.number().optional(),
                page: z.number().optional(),
            }),
            handler: async (args) => {
                return client.get("/crm/tasks", args);
            },
        },
        {
            name: "create_task",
            description: "Criar uma tarefa no CRM com titulo, data limite e prioridade.",
            schema: z.object({
                title: z.string().describe("Titulo da tarefa"),
                description: z.string().optional().describe("Descricao detalhada"),
                due_at: z.string().optional().describe("Data limite (YYYY-MM-DD HH:MM ou ISO8601)"),
                priority: z.enum(["low", "normal", "high", "urgent"]).optional().describe("Prioridade (default: normal)"),
                deal_id: z.number().optional().describe("ID do deal vinculado"),
            }),
            handler: async (args) => {
                return client.post("/crm/tasks", args);
            },
        },
        {
            name: "complete_task",
            description: "Marcar uma tarefa como concluida.",
            schema: z.object({
                id: z.number().describe("ID da tarefa"),
            }),
            handler: async (args) => {
                return client.post(`/crm/tasks/${args.id}/complete`);
            },
        },
    ];
}
//# sourceMappingURL=crm.js.map