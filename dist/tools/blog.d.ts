import { z } from "zod";
import type { MultimarcasClient } from "../api-client.js";
export declare function blogTools(client: MultimarcasClient): ({
    name: string;
    description: string;
    schema: z.ZodObject<{
        is_published: z.ZodOptional<z.ZodBoolean>;
        per_page: z.ZodOptional<z.ZodNumber>;
        page: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        per_page?: number | undefined;
        page?: number | undefined;
        is_published?: boolean | undefined;
    }, {
        per_page?: number | undefined;
        page?: number | undefined;
        is_published?: boolean | undefined;
    }>;
    handler: (args: Record<string, unknown>) => Promise<unknown>;
} | {
    name: string;
    description: string;
    schema: z.ZodObject<{
        title: z.ZodString;
        content: z.ZodString;
        excerpt: z.ZodOptional<z.ZodString>;
        slug: z.ZodOptional<z.ZodString>;
        cover_image_url: z.ZodOptional<z.ZodString>;
        meta_title: z.ZodOptional<z.ZodString>;
        meta_description: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        title: string;
        content: string;
        excerpt?: string | undefined;
        slug?: string | undefined;
        cover_image_url?: string | undefined;
        meta_title?: string | undefined;
        meta_description?: string | undefined;
    }, {
        title: string;
        content: string;
        excerpt?: string | undefined;
        slug?: string | undefined;
        cover_image_url?: string | undefined;
        meta_title?: string | undefined;
        meta_description?: string | undefined;
    }>;
    handler: (args: Record<string, unknown>) => Promise<unknown>;
} | {
    name: string;
    description: string;
    schema: z.ZodObject<{
        id: z.ZodNumber;
        title: z.ZodOptional<z.ZodString>;
        content: z.ZodOptional<z.ZodString>;
        excerpt: z.ZodOptional<z.ZodString>;
        cover_image_url: z.ZodOptional<z.ZodString>;
        meta_title: z.ZodOptional<z.ZodString>;
        meta_description: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        id: number;
        title?: string | undefined;
        content?: string | undefined;
        excerpt?: string | undefined;
        cover_image_url?: string | undefined;
        meta_title?: string | undefined;
        meta_description?: string | undefined;
    }, {
        id: number;
        title?: string | undefined;
        content?: string | undefined;
        excerpt?: string | undefined;
        cover_image_url?: string | undefined;
        meta_title?: string | undefined;
        meta_description?: string | undefined;
    }>;
    handler: (args: Record<string, unknown>) => Promise<unknown>;
} | {
    name: string;
    description: string;
    schema: z.ZodObject<{
        id: z.ZodNumber;
        action: z.ZodEnum<["publish", "unpublish"]>;
    }, "strip", z.ZodTypeAny, {
        id: number;
        action: "publish" | "unpublish";
    }, {
        id: number;
        action: "publish" | "unpublish";
    }>;
    handler: (args: {
        id: number;
        action: string;
    }) => Promise<unknown>;
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
//# sourceMappingURL=blog.d.ts.map