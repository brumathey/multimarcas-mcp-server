import { z } from "zod";
export function blogTools(client) {
    return [
        {
            name: "list_blog_posts",
            description: "Listar posts do blog da loja. Filtrar por status de publicacao.",
            schema: z.object({
                is_published: z.boolean().optional().describe("Filtrar: true = publicados, false = rascunhos"),
                per_page: z.number().optional(),
                page: z.number().optional(),
            }),
            handler: async (args) => {
                return client.get("/blog/posts", args);
            },
        },
        {
            name: "create_blog_post",
            description: "Criar um novo post no blog. Titulo e conteudo sao obrigatorios. O slug e gerado automaticamente se nao informado.",
            schema: z.object({
                title: z.string().describe("Titulo do post"),
                content: z.string().describe("Conteudo completo do post (HTML ou texto)"),
                excerpt: z.string().optional().describe("Resumo curto para listagens"),
                slug: z.string().optional().describe("URL amigavel (gerado automaticamente se nao informado)"),
                cover_image_url: z.string().optional().describe("URL da imagem de capa"),
                meta_title: z.string().optional().describe("Titulo para SEO"),
                meta_description: z.string().optional().describe("Descricao para SEO"),
            }),
            handler: async (args) => {
                return client.post("/blog/posts", args);
            },
        },
        {
            name: "update_blog_post",
            description: "Atualizar um post existente do blog.",
            schema: z.object({
                id: z.number().describe("ID do post"),
                title: z.string().optional(),
                content: z.string().optional(),
                excerpt: z.string().optional(),
                cover_image_url: z.string().optional(),
                meta_title: z.string().optional(),
                meta_description: z.string().optional(),
            }),
            handler: async (args) => {
                const { id, ...body } = args;
                return client.put(`/blog/posts/${id}`, body);
            },
        },
        {
            name: "toggle_blog_post",
            description: "Publicar ou despublicar um post do blog.",
            schema: z.object({
                id: z.number().describe("ID do post"),
                action: z.enum(["publish", "unpublish"]).describe("Acao: publish (publicar) ou unpublish (despublicar)"),
            }),
            handler: async (args) => {
                return client.post(`/blog/posts/${args.id}/${args.action}`);
            },
        },
        {
            name: "delete_blog_post",
            description: "Deletar permanentemente um post do blog.",
            schema: z.object({
                id: z.number().describe("ID do post a deletar"),
            }),
            handler: async (args) => {
                return client.delete(`/blog/posts/${args.id}`);
            },
        },
    ];
}
//# sourceMappingURL=blog.js.map