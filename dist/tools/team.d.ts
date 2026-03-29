import { z } from "zod";
import type { MultimarcasClient } from "../api-client.js";
export declare function teamTools(client: MultimarcasClient): ({
    name: string;
    description: string;
    schema: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
    handler: () => Promise<unknown>;
} | {
    name: string;
    description: string;
    schema: z.ZodObject<{
        id: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        id: number;
    }, {
        id: number;
    }>;
    handler: (args: {
        id: number;
    }) => Promise<unknown>;
} | {
    name: string;
    description: string;
    schema: z.ZodObject<{
        id: z.ZodNumber;
        role: z.ZodOptional<z.ZodEnum<["manager", "salesperson", "viewer"]>>;
        permissions: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
        id: number;
        role?: "manager" | "salesperson" | "viewer" | undefined;
        permissions?: string[] | undefined;
    }, {
        id: number;
        role?: "manager" | "salesperson" | "viewer" | undefined;
        permissions?: string[] | undefined;
    }>;
    handler: (args: Record<string, unknown>) => Promise<unknown>;
} | {
    name: string;
    description: string;
    schema: z.ZodObject<{
        email: z.ZodString;
        role: z.ZodEnum<["manager", "salesperson", "viewer"]>;
        permissions: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
        email: string;
        role: "manager" | "salesperson" | "viewer";
        permissions?: string[] | undefined;
    }, {
        email: string;
        role: "manager" | "salesperson" | "viewer";
        permissions?: string[] | undefined;
    }>;
    handler: (args: Record<string, unknown>) => Promise<unknown>;
})[];
//# sourceMappingURL=team.d.ts.map