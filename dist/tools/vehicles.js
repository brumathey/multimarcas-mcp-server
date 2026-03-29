import { z } from "zod";
export function vehicleTools(client) {
    return [
        {
            name: "list_vehicles",
            description: "Buscar e listar veiculos do estoque da loja. Suporta filtros por marca, modelo, combustivel, cambio, status e faixa de preco. Retorna resultados paginados.",
            schema: z.object({
                make: z.string().optional().describe("Filtrar por marca (ex: Toyota, Honda)"),
                model: z.string().optional().describe("Filtrar por modelo (ex: Corolla, Civic)"),
                fuel: z.string().optional().describe("Filtrar por combustivel (ex: Flex, Diesel, Eletrico)"),
                transmission: z.string().optional().describe("Filtrar por cambio (ex: Automatico, Manual)"),
                status: z.enum(["draft", "available", "reserved", "sold", "archived"]).optional().describe("Filtrar por status"),
                price_min: z.number().optional().describe("Preco minimo em centavos"),
                price_max: z.number().optional().describe("Preco maximo em centavos"),
                per_page: z.number().optional().describe("Itens por pagina (max 100)"),
                page: z.number().optional().describe("Numero da pagina"),
            }),
            handler: async (args) => {
                return client.get("/vehicles", args);
            },
        },
        {
            name: "get_vehicle",
            description: "Obter detalhes completos de um veiculo especifico por ID, incluindo fotos.",
            schema: z.object({
                id: z.number().describe("ID do veiculo"),
            }),
            handler: async (args) => {
                return client.get(`/vehicles/${args.id}`);
            },
        },
        {
            name: "create_vehicle",
            description: "Adicionar um novo veiculo ao estoque. Campos obrigatorios: marca, modelo, ano de fabricacao, ano do modelo e preco. Status padrao: draft.",
            schema: z.object({
                make: z.string().describe("Marca do veiculo (ex: Toyota)"),
                model: z.string().describe("Modelo (ex: Corolla)"),
                version: z.string().optional().describe("Versao (ex: XEi 2.0)"),
                year_manufacture: z.number().describe("Ano de fabricacao"),
                year_model: z.number().describe("Ano do modelo"),
                price: z.number().describe("Preco em centavos"),
                mileage: z.number().optional().describe("Quilometragem"),
                fuel: z.string().optional().describe("Combustivel"),
                transmission: z.string().optional().describe("Tipo de cambio"),
                color: z.string().optional().describe("Cor"),
                doors: z.number().optional().describe("Numero de portas"),
                body_type: z.string().optional().describe("Tipo de carroceria (SUV, Sedan, Hatch, etc)"),
                engine: z.string().optional().describe("Motor (ex: 2.0)"),
                horsepower: z.number().optional().describe("Potencia em cv"),
                description: z.string().optional().describe("Descricao do veiculo"),
                optionals: z.array(z.string()).optional().describe("Lista de opcionais"),
                status: z.enum(["draft", "available"]).optional().describe("Status inicial (default: draft)"),
                featured: z.boolean().optional().describe("Destacar na pagina inicial"),
            }),
            handler: async (args) => {
                return client.post("/vehicles", args);
            },
        },
        {
            name: "update_vehicle",
            description: "Atualizar informacoes de um veiculo existente. Pode alterar qualquer campo incluindo status (draft/available/reserved/sold/archived).",
            schema: z.object({
                id: z.number().describe("ID do veiculo"),
                make: z.string().optional(),
                model: z.string().optional(),
                version: z.string().optional(),
                year_manufacture: z.number().optional(),
                year_model: z.number().optional(),
                price: z.number().optional(),
                mileage: z.number().optional(),
                fuel: z.string().optional(),
                transmission: z.string().optional(),
                color: z.string().optional(),
                description: z.string().optional(),
                status: z.enum(["draft", "available", "reserved", "sold", "archived"]).optional(),
                featured: z.boolean().optional(),
            }),
            handler: async (args) => {
                const { id, ...body } = args;
                return client.put(`/vehicles/${id}`, body);
            },
        },
        {
            name: "delete_vehicle",
            description: "Arquivar um veiculo (soft delete). O veiculo muda para status 'archived' e deixa de aparecer na loja.",
            schema: z.object({
                id: z.number().describe("ID do veiculo a arquivar"),
            }),
            handler: async (args) => {
                return client.delete(`/vehicles/${args.id}`);
            },
        },
        {
            name: "upload_vehicle_photos",
            description: "Adicionar fotos a um veiculo por URL. O sistema baixa as imagens, salva no storage e processa automaticamente (resize + WebP/JPEG). Maximo 20 fotos por veiculo.",
            schema: z.object({
                vehicle_id: z.number().describe("ID do veiculo"),
                photos: z
                    .array(z.object({
                    url: z.string().url().describe("URL publica da imagem (jpeg, png ou webp)"),
                    is_cover: z.boolean().optional().describe("Definir como foto de capa"),
                }))
                    .min(1)
                    .max(20)
                    .describe("Lista de fotos para upload"),
            }),
            handler: async (args) => {
                return client.post(`/vehicles/${args.vehicle_id}/photos`, {
                    photos: args.photos,
                });
            },
        },
        {
            name: "delete_vehicle_photo",
            description: "Remover uma foto especifica de um veiculo. Remove o arquivo original e todas as variantes processadas.",
            schema: z.object({
                vehicle_id: z.number().describe("ID do veiculo"),
                photo_id: z.number().describe("ID da foto a remover"),
            }),
            handler: async (args) => {
                return client.delete(`/vehicles/${args.vehicle_id}/photos/${args.photo_id}`);
            },
        },
        {
            name: "reorder_vehicle_photos",
            description: "Reordenar as fotos de um veiculo. Envie os IDs das fotos na ordem desejada.",
            schema: z.object({
                vehicle_id: z.number().describe("ID do veiculo"),
                order: z.array(z.number()).min(1).describe("Array de IDs das fotos na ordem desejada"),
            }),
            handler: async (args) => {
                return client.post(`/vehicles/${args.vehicle_id}/photos/reorder`, {
                    order: args.order,
                });
            },
        },
        {
            name: "set_vehicle_cover_photo",
            description: "Definir qual foto sera a capa (thumbnail principal) do veiculo.",
            schema: z.object({
                vehicle_id: z.number().describe("ID do veiculo"),
                photo_id: z.number().describe("ID da foto que sera a capa"),
            }),
            handler: async (args) => {
                return client.put(`/vehicles/${args.vehicle_id}/photos/${args.photo_id}/cover`);
            },
        },
    ];
}
//# sourceMappingURL=vehicles.js.map