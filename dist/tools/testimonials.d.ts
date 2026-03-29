import { z } from "zod";
import type { MultimarcasClient } from "../api-client.js";
export declare function testimonialTools(client: MultimarcasClient): ({
    name: string;
    description: string;
    schema: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
    handler: () => Promise<unknown>;
} | {
    name: string;
    description: string;
    schema: z.ZodObject<{
        author_name: z.ZodString;
        rating: z.ZodNumber;
        text: z.ZodString;
        author_photo_url: z.ZodOptional<z.ZodString>;
        vehicle_id: z.ZodOptional<z.ZodNumber>;
        is_published: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        author_name: string;
        rating: number;
        text: string;
        vehicle_id?: number | undefined;
        is_published?: boolean | undefined;
        author_photo_url?: string | undefined;
    }, {
        author_name: string;
        rating: number;
        text: string;
        vehicle_id?: number | undefined;
        is_published?: boolean | undefined;
        author_photo_url?: string | undefined;
    }>;
    handler: (args: Record<string, unknown>) => Promise<unknown>;
} | {
    name: string;
    description: string;
    schema: z.ZodObject<{
        id: z.ZodNumber;
        author_name: z.ZodOptional<z.ZodString>;
        rating: z.ZodOptional<z.ZodNumber>;
        text: z.ZodOptional<z.ZodString>;
        author_photo_url: z.ZodOptional<z.ZodString>;
        is_published: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        id: number;
        is_published?: boolean | undefined;
        author_name?: string | undefined;
        rating?: number | undefined;
        text?: string | undefined;
        author_photo_url?: string | undefined;
    }, {
        id: number;
        is_published?: boolean | undefined;
        author_name?: string | undefined;
        rating?: number | undefined;
        text?: string | undefined;
        author_photo_url?: string | undefined;
    }>;
    handler: (args: Record<string, unknown>) => Promise<unknown>;
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
})[];
//# sourceMappingURL=testimonials.d.ts.map