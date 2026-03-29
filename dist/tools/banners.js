import { z } from "zod";
export function bannerTools(client) {
    return [
        {
            name: "list_banners",
            description: "Listar todos os banners promocionais da loja com status (ativo/inativo) e posicao.",
            schema: z.object({}),
            handler: async () => {
                return client.get("/banners");
            },
        },
        {
            name: "create_banner",
            description: "Criar um banner promocional. Posicoes: hero_top (topo 1920x500), hero_bottom (abaixo 1920x400), inventory_top (acima do estoque 1920x300), floating (flutuante 400x120).",
            schema: z.object({
                title: z.string().describe("Titulo do banner"),
                position: z.enum(["hero_top", "hero_bottom", "inventory_top", "floating"]).describe("Posicao do banner na loja"),
                image_url: z.string().describe("URL da imagem do banner"),
                link_url: z.string().optional().describe("URL de destino ao clicar no banner"),
                is_active: z.boolean().optional().describe("Ativo? (default: true)"),
                starts_at: z.string().optional().describe("Data de inicio (ISO8601)"),
                ends_at: z.string().optional().describe("Data de fim (ISO8601)"),
            }),
            handler: async (args) => {
                return client.post("/banners", args);
            },
        },
        {
            name: "update_banner",
            description: "Atualizar um banner existente (titulo, imagem, posicao, link, agendamento).",
            schema: z.object({
                id: z.number().describe("ID do banner"),
                title: z.string().optional(),
                position: z.enum(["hero_top", "hero_bottom", "inventory_top", "floating"]).optional(),
                image_url: z.string().optional(),
                link_url: z.string().optional(),
                is_active: z.boolean().optional(),
                starts_at: z.string().optional(),
                ends_at: z.string().optional(),
            }),
            handler: async (args) => {
                const { id, ...body } = args;
                return client.put(`/banners/${id}`, body);
            },
        },
        {
            name: "delete_banner",
            description: "Deletar um banner promocional.",
            schema: z.object({
                id: z.number().describe("ID do banner a deletar"),
            }),
            handler: async (args) => {
                return client.delete(`/banners/${args.id}`);
            },
        },
    ];
}
//# sourceMappingURL=banners.js.map