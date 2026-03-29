import { z } from "zod";
import type { MultimarcasClient } from "../api-client.js";
export declare function bannerTools(client: MultimarcasClient): ({
    name: string;
    description: string;
    schema: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
    handler: () => Promise<unknown>;
} | {
    name: string;
    description: string;
    schema: z.ZodObject<{
        title: z.ZodString;
        position: z.ZodEnum<["hero_top", "hero_bottom", "inventory_top", "floating"]>;
        image_url: z.ZodString;
        link_url: z.ZodOptional<z.ZodString>;
        is_active: z.ZodOptional<z.ZodBoolean>;
        starts_at: z.ZodOptional<z.ZodString>;
        ends_at: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        title: string;
        position: "hero_top" | "hero_bottom" | "inventory_top" | "floating";
        image_url: string;
        link_url?: string | undefined;
        is_active?: boolean | undefined;
        starts_at?: string | undefined;
        ends_at?: string | undefined;
    }, {
        title: string;
        position: "hero_top" | "hero_bottom" | "inventory_top" | "floating";
        image_url: string;
        link_url?: string | undefined;
        is_active?: boolean | undefined;
        starts_at?: string | undefined;
        ends_at?: string | undefined;
    }>;
    handler: (args: Record<string, unknown>) => Promise<unknown>;
} | {
    name: string;
    description: string;
    schema: z.ZodObject<{
        id: z.ZodNumber;
        title: z.ZodOptional<z.ZodString>;
        position: z.ZodOptional<z.ZodEnum<["hero_top", "hero_bottom", "inventory_top", "floating"]>>;
        image_url: z.ZodOptional<z.ZodString>;
        link_url: z.ZodOptional<z.ZodString>;
        is_active: z.ZodOptional<z.ZodBoolean>;
        starts_at: z.ZodOptional<z.ZodString>;
        ends_at: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        id: number;
        title?: string | undefined;
        position?: "hero_top" | "hero_bottom" | "inventory_top" | "floating" | undefined;
        image_url?: string | undefined;
        link_url?: string | undefined;
        is_active?: boolean | undefined;
        starts_at?: string | undefined;
        ends_at?: string | undefined;
    }, {
        id: number;
        title?: string | undefined;
        position?: "hero_top" | "hero_bottom" | "inventory_top" | "floating" | undefined;
        image_url?: string | undefined;
        link_url?: string | undefined;
        is_active?: boolean | undefined;
        starts_at?: string | undefined;
        ends_at?: string | undefined;
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
//# sourceMappingURL=banners.d.ts.map