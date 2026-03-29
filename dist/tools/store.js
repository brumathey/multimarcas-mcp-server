import { z } from "zod";
export function storeTools(client) {
    return [
        {
            name: "get_store_info",
            description: "Obter informacoes da loja: nome, contato, endereco, redes sociais e URL da vitrine.",
            schema: z.object({}),
            handler: async () => {
                return client.get("/store");
            },
        },
        {
            name: "update_store_info",
            description: "Atualizar informacoes da loja (nome, telefone, whatsapp, email).",
            schema: z.object({
                name: z.string().optional().describe("Nome da loja"),
                email: z.string().optional().describe("Email de contato"),
                phone: z.string().optional().describe("Telefone"),
                whatsapp: z.string().optional().describe("Numero do WhatsApp"),
            }),
            handler: async (args) => {
                return client.put("/store", args);
            },
        },
        {
            name: "get_plan_info",
            description: "Ver plano atual da loja, limites (veiculos, banners, usuarios) e uso atual. Util para saber se pode adicionar mais veiculos ou membros.",
            schema: z.object({}),
            handler: async () => {
                return client.get("/store/plan");
            },
        },
        {
            name: "get_domain_status",
            description: "Verificar configuracao de dominio personalizado: status, DNS, instrucoes de configuracao.",
            schema: z.object({}),
            handler: async () => {
                return client.get("/domain");
            },
        },
    ];
}
//# sourceMappingURL=store.js.map