import { z } from "zod";
import type { MultimarcasClient } from "../api-client.js";
export declare function analyticsTools(client: MultimarcasClient): ({
    name: string;
    description: string;
    schema: z.ZodObject<{
        days: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        days?: number | undefined;
    }, {
        days?: number | undefined;
    }>;
    handler: (args: {
        days?: number;
    }) => Promise<unknown>;
} | {
    name: string;
    description: string;
    schema: z.ZodObject<{
        period: z.ZodOptional<z.ZodEnum<["7d", "30d", "90d"]>>;
    }, "strip", z.ZodTypeAny, {
        period?: "7d" | "30d" | "90d" | undefined;
    }, {
        period?: "7d" | "30d" | "90d" | undefined;
    }>;
    handler: (args: {
        period?: string;
    }) => Promise<unknown>;
})[];
//# sourceMappingURL=analytics.d.ts.map