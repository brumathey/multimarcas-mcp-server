import { z } from "zod";
import type { MultimarcasClient } from "../api-client.js";
export declare function vehicleTools(client: MultimarcasClient): ({
    name: string;
    description: string;
    schema: z.ZodObject<{
        make: z.ZodOptional<z.ZodString>;
        model: z.ZodOptional<z.ZodString>;
        fuel: z.ZodOptional<z.ZodString>;
        transmission: z.ZodOptional<z.ZodString>;
        status: z.ZodOptional<z.ZodEnum<["draft", "available", "reserved", "sold", "archived"]>>;
        price_min: z.ZodOptional<z.ZodNumber>;
        price_max: z.ZodOptional<z.ZodNumber>;
        per_page: z.ZodOptional<z.ZodNumber>;
        page: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        make?: string | undefined;
        model?: string | undefined;
        fuel?: string | undefined;
        transmission?: string | undefined;
        status?: "draft" | "available" | "reserved" | "sold" | "archived" | undefined;
        price_min?: number | undefined;
        price_max?: number | undefined;
        per_page?: number | undefined;
        page?: number | undefined;
    }, {
        make?: string | undefined;
        model?: string | undefined;
        fuel?: string | undefined;
        transmission?: string | undefined;
        status?: "draft" | "available" | "reserved" | "sold" | "archived" | undefined;
        price_min?: number | undefined;
        price_max?: number | undefined;
        per_page?: number | undefined;
        page?: number | undefined;
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
} | {
    name: string;
    description: string;
    schema: z.ZodObject<{
        make: z.ZodString;
        model: z.ZodString;
        version: z.ZodOptional<z.ZodString>;
        year_manufacture: z.ZodNumber;
        year_model: z.ZodNumber;
        price: z.ZodNumber;
        mileage: z.ZodOptional<z.ZodNumber>;
        fuel: z.ZodOptional<z.ZodString>;
        transmission: z.ZodOptional<z.ZodString>;
        color: z.ZodOptional<z.ZodString>;
        doors: z.ZodOptional<z.ZodNumber>;
        body_type: z.ZodOptional<z.ZodString>;
        engine: z.ZodOptional<z.ZodString>;
        horsepower: z.ZodOptional<z.ZodNumber>;
        description: z.ZodOptional<z.ZodString>;
        optionals: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        status: z.ZodOptional<z.ZodEnum<["draft", "available"]>>;
        featured: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        make: string;
        model: string;
        year_manufacture: number;
        year_model: number;
        price: number;
        fuel?: string | undefined;
        transmission?: string | undefined;
        status?: "draft" | "available" | undefined;
        version?: string | undefined;
        mileage?: number | undefined;
        color?: string | undefined;
        doors?: number | undefined;
        body_type?: string | undefined;
        engine?: string | undefined;
        horsepower?: number | undefined;
        description?: string | undefined;
        optionals?: string[] | undefined;
        featured?: boolean | undefined;
    }, {
        make: string;
        model: string;
        year_manufacture: number;
        year_model: number;
        price: number;
        fuel?: string | undefined;
        transmission?: string | undefined;
        status?: "draft" | "available" | undefined;
        version?: string | undefined;
        mileage?: number | undefined;
        color?: string | undefined;
        doors?: number | undefined;
        body_type?: string | undefined;
        engine?: string | undefined;
        horsepower?: number | undefined;
        description?: string | undefined;
        optionals?: string[] | undefined;
        featured?: boolean | undefined;
    }>;
    handler: (args: Record<string, unknown>) => Promise<unknown>;
} | {
    name: string;
    description: string;
    schema: z.ZodObject<{
        id: z.ZodNumber;
        make: z.ZodOptional<z.ZodString>;
        model: z.ZodOptional<z.ZodString>;
        version: z.ZodOptional<z.ZodString>;
        year_manufacture: z.ZodOptional<z.ZodNumber>;
        year_model: z.ZodOptional<z.ZodNumber>;
        price: z.ZodOptional<z.ZodNumber>;
        mileage: z.ZodOptional<z.ZodNumber>;
        fuel: z.ZodOptional<z.ZodString>;
        transmission: z.ZodOptional<z.ZodString>;
        color: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodString>;
        status: z.ZodOptional<z.ZodEnum<["draft", "available", "reserved", "sold", "archived"]>>;
        featured: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        id: number;
        make?: string | undefined;
        model?: string | undefined;
        fuel?: string | undefined;
        transmission?: string | undefined;
        status?: "draft" | "available" | "reserved" | "sold" | "archived" | undefined;
        version?: string | undefined;
        year_manufacture?: number | undefined;
        year_model?: number | undefined;
        price?: number | undefined;
        mileage?: number | undefined;
        color?: string | undefined;
        description?: string | undefined;
        featured?: boolean | undefined;
    }, {
        id: number;
        make?: string | undefined;
        model?: string | undefined;
        fuel?: string | undefined;
        transmission?: string | undefined;
        status?: "draft" | "available" | "reserved" | "sold" | "archived" | undefined;
        version?: string | undefined;
        year_manufacture?: number | undefined;
        year_model?: number | undefined;
        price?: number | undefined;
        mileage?: number | undefined;
        color?: string | undefined;
        description?: string | undefined;
        featured?: boolean | undefined;
    }>;
    handler: (args: Record<string, unknown>) => Promise<unknown>;
})[];
//# sourceMappingURL=vehicles.d.ts.map