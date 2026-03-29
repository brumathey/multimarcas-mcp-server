import { z } from "zod";
export function testimonialTools(client) {
    return [
        {
            name: "list_testimonials",
            description: "Listar depoimentos de clientes na ordem de exibicao da loja.",
            schema: z.object({}),
            handler: async () => {
                return client.get("/testimonials");
            },
        },
        {
            name: "create_testimonial",
            description: "Adicionar um depoimento de cliente. Pode vincular a um veiculo para prova social.",
            schema: z.object({
                author_name: z.string().describe("Nome do autor"),
                rating: z.number().min(1).max(5).describe("Avaliacao de 1 a 5 estrelas"),
                text: z.string().describe("Texto do depoimento"),
                author_photo_url: z.string().optional().describe("URL da foto do autor"),
                vehicle_id: z.number().optional().describe("ID do veiculo comprado (para prova social)"),
                is_published: z.boolean().optional().describe("Publicar imediatamente? (default: false)"),
            }),
            handler: async (args) => {
                return client.post("/testimonials", args);
            },
        },
        {
            name: "update_testimonial",
            description: "Atualizar um depoimento existente.",
            schema: z.object({
                id: z.number().describe("ID do depoimento"),
                author_name: z.string().optional(),
                rating: z.number().min(1).max(5).optional(),
                text: z.string().optional(),
                author_photo_url: z.string().optional(),
                is_published: z.boolean().optional(),
            }),
            handler: async (args) => {
                const { id, ...body } = args;
                return client.put(`/testimonials/${id}`, body);
            },
        },
        {
            name: "delete_testimonial",
            description: "Deletar um depoimento de cliente.",
            schema: z.object({
                id: z.number().describe("ID do depoimento a deletar"),
            }),
            handler: async (args) => {
                return client.delete(`/testimonials/${args.id}`);
            },
        },
    ];
}
//# sourceMappingURL=testimonials.js.map