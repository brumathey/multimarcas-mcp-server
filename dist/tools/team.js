import { z } from "zod";
export function teamTools(client) {
    return [
        {
            name: "list_team_members",
            description: "Listar todos os membros da equipe com seus cargos (owner/manager/salesperson/viewer) e permissoes.",
            schema: z.object({}),
            handler: async () => {
                return client.get("/team/members");
            },
        },
        {
            name: "get_team_member",
            description: "Obter detalhes de um membro especifico da equipe, incluindo cargo e permissoes.",
            schema: z.object({
                id: z.number().describe("ID do membro (user ID)"),
            }),
            handler: async (args) => {
                return client.get(`/team/members/${args.id}`);
            },
        },
        {
            name: "update_team_member",
            description: "Atualizar cargo e permissoes de um membro da equipe. Apenas o proprietario (owner) pode fazer isso. Nao e possivel editar outros owners.",
            schema: z.object({
                id: z.number().describe("ID do membro"),
                role: z.enum(["manager", "salesperson", "viewer"]).optional().describe("Novo cargo"),
                permissions: z.array(z.string()).optional().describe("Lista de permissoes (ex: vehicles.manage, leads.view, crm.manage)"),
            }),
            handler: async (args) => {
                const { id, ...body } = args;
                return client.put(`/team/members/${id}`, body);
            },
        },
        {
            name: "remove_team_member",
            description: "Remover um membro da equipe. Apenas o proprietario pode fazer isso. Nao pode remover a si mesmo nem outros proprietarios.",
            schema: z.object({
                id: z.number().describe("ID do membro a remover"),
            }),
            handler: async (args) => {
                return client.delete(`/team/members/${args.id}`);
            },
        },
        {
            name: "list_invitations",
            description: "Listar convites pendentes da equipe, mostrando email, cargo e quem convidou.",
            schema: z.object({}),
            handler: async () => {
                return client.get("/team/invitations");
            },
        },
        {
            name: "invite_team_member",
            description: "Enviar convite para alguem se juntar a equipe. Especifique o email, cargo e permissoes. O convite expira em 72 horas. Verifica limites do plano automaticamente.",
            schema: z.object({
                email: z.string().describe("Email do convidado"),
                role: z.enum(["manager", "salesperson", "viewer"]).describe("Cargo: manager (gerente), salesperson (vendedor), viewer (visualizador)"),
                permissions: z.array(z.string()).optional().describe("Permissoes especificas. Se nao informado, usa preset do cargo."),
            }),
            handler: async (args) => {
                return client.post("/team/invitations", args);
            },
        },
        {
            name: "cancel_invitation",
            description: "Cancelar um convite pendente da equipe.",
            schema: z.object({
                id: z.number().describe("ID do convite a cancelar"),
            }),
            handler: async (args) => {
                return client.delete(`/team/invitations/${args.id}`);
            },
        },
        {
            name: "get_team_usage",
            description: "Ver uso atual da equipe: membros ativos, convites pendentes, limite do plano e se pode convidar mais.",
            schema: z.object({}),
            handler: async () => {
                return client.get("/team/usage");
            },
        },
    ];
}
//# sourceMappingURL=team.js.map