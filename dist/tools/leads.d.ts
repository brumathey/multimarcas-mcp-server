import { z } from "zod";
import type { MultimarcasClient } from "../api-client.js";
export declare function leadTools(client: MultimarcasClient): ({
    name: string;
    description: string;
    schema: z.ZodObject<{
        status: z.ZodOptional<z.ZodEnum<["new", "contacted", "won", "lost", "spam"]>>;
        per_page: z.ZodOptional<z.ZodNumber>;
        page: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        status?: "new" | "contacted" | "won" | "lost" | "spam" | undefined;
        per_page?: number | undefined;
        page?: number | undefined;
    }, {
        status?: "new" | "contacted" | "won" | "lost" | "spam" | undefined;
        per_page?: number | undefined;
        page?: number | undefined;
    }>;
    handler: (args: Record<string, unknown>) => Promise<unknown>;
} | {
    name: string;
    description: string;
    schema: z.ZodObject<{
        name: z.ZodString;
        email: z.ZodOptional<z.ZodString>;
        phone: z.ZodOptional<z.ZodString>;
        message: z.ZodOptional<z.ZodString>;
        source: z.ZodOptional<z.ZodString>;
        vehicle_id: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        message?: string | undefined;
        email?: string | undefined;
        phone?: string | undefined;
        source?: string | undefined;
        vehicle_id?: number | undefined;
    }, {
        name: string;
        message?: string | undefined;
        email?: string | undefined;
        phone?: string | undefined;
        source?: string | undefined;
        vehicle_id?: number | undefined;
    }>;
    handler: (args: Record<string, unknown>) => Promise<unknown>;
} | {
    name: string;
    description: string;
    schema: z.ZodObject<{
        id: z.ZodNumber;
        status: z.ZodEnum<["new", "contacted", "won", "lost", "spam"]>;
    }, "strip", z.ZodTypeAny, {
        status: "new" | "contacted" | "won" | "lost" | "spam";
        id: number;
    }, {
        status: "new" | "contacted" | "won" | "lost" | "spam";
        id: number;
    }>;
    handler: (args: {
        id: number;
        status: string;
    }) => Promise<unknown>;
})[];
//# sourceMappingURL=leads.d.ts.map