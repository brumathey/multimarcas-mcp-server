import { z } from "zod";
import type { MultimarcasClient } from "../api-client.js";
export declare function storeTools(client: MultimarcasClient): ({
    name: string;
    description: string;
    schema: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
    handler: () => Promise<unknown>;
} | {
    name: string;
    description: string;
    schema: z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        email: z.ZodOptional<z.ZodString>;
        phone: z.ZodOptional<z.ZodString>;
        whatsapp: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name?: string | undefined;
        email?: string | undefined;
        phone?: string | undefined;
        whatsapp?: string | undefined;
    }, {
        name?: string | undefined;
        email?: string | undefined;
        phone?: string | undefined;
        whatsapp?: string | undefined;
    }>;
    handler: (args: Record<string, unknown>) => Promise<unknown>;
})[];
//# sourceMappingURL=store.d.ts.map