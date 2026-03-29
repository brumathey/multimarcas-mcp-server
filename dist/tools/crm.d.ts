import { z } from "zod";
import type { MultimarcasClient } from "../api-client.js";
export declare function crmTools(client: MultimarcasClient): ({
    name: string;
    description: string;
    schema: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
    handler: () => Promise<unknown>;
} | {
    name: string;
    description: string;
    schema: z.ZodObject<{
        pipeline_id: z.ZodOptional<z.ZodNumber>;
        stage_id: z.ZodOptional<z.ZodNumber>;
        status: z.ZodOptional<z.ZodEnum<["open", "won", "lost"]>>;
        assigned_user_id: z.ZodOptional<z.ZodNumber>;
        per_page: z.ZodOptional<z.ZodNumber>;
        page: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        status?: "won" | "lost" | "open" | undefined;
        per_page?: number | undefined;
        page?: number | undefined;
        pipeline_id?: number | undefined;
        stage_id?: number | undefined;
        assigned_user_id?: number | undefined;
    }, {
        status?: "won" | "lost" | "open" | undefined;
        per_page?: number | undefined;
        page?: number | undefined;
        pipeline_id?: number | undefined;
        stage_id?: number | undefined;
        assigned_user_id?: number | undefined;
    }>;
    handler: (args: Record<string, unknown>) => Promise<unknown>;
} | {
    name: string;
    description: string;
    schema: z.ZodObject<{
        name: z.ZodString;
        value: z.ZodOptional<z.ZodNumber>;
        pipeline_id: z.ZodOptional<z.ZodNumber>;
        stage_id: z.ZodOptional<z.ZodNumber>;
        contact_submission_id: z.ZodOptional<z.ZodNumber>;
        vehicle_id: z.ZodOptional<z.ZodNumber>;
        assigned_user_id: z.ZodOptional<z.ZodNumber>;
        expected_close_date: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        value?: number | undefined;
        vehicle_id?: number | undefined;
        pipeline_id?: number | undefined;
        stage_id?: number | undefined;
        assigned_user_id?: number | undefined;
        contact_submission_id?: number | undefined;
        expected_close_date?: string | undefined;
    }, {
        name: string;
        value?: number | undefined;
        vehicle_id?: number | undefined;
        pipeline_id?: number | undefined;
        stage_id?: number | undefined;
        assigned_user_id?: number | undefined;
        contact_submission_id?: number | undefined;
        expected_close_date?: string | undefined;
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
        id: z.ZodNumber;
        name: z.ZodOptional<z.ZodString>;
        value: z.ZodOptional<z.ZodNumber>;
        assigned_user_id: z.ZodOptional<z.ZodNumber>;
        expected_close_date: z.ZodOptional<z.ZodString>;
        lost_reason: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        id: number;
        value?: number | undefined;
        name?: string | undefined;
        assigned_user_id?: number | undefined;
        expected_close_date?: string | undefined;
        lost_reason?: string | undefined;
    }, {
        id: number;
        value?: number | undefined;
        name?: string | undefined;
        assigned_user_id?: number | undefined;
        expected_close_date?: string | undefined;
        lost_reason?: string | undefined;
    }>;
    handler: (args: Record<string, unknown>) => Promise<unknown>;
} | {
    name: string;
    description: string;
    schema: z.ZodObject<{
        id: z.ZodNumber;
        stage_id: z.ZodNumber;
        lost_reason: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        id: number;
        stage_id: number;
        lost_reason?: string | undefined;
    }, {
        id: number;
        stage_id: number;
        lost_reason?: string | undefined;
    }>;
    handler: (args: Record<string, unknown>) => Promise<unknown>;
} | {
    name: string;
    description: string;
    schema: z.ZodObject<{
        deal_id: z.ZodNumber;
        type: z.ZodEnum<["note", "call", "email", "whatsapp", "meeting"]>;
        description: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: "email" | "note" | "call" | "whatsapp" | "meeting";
        description: string;
        deal_id: number;
    }, {
        type: "email" | "note" | "call" | "whatsapp" | "meeting";
        description: string;
        deal_id: number;
    }>;
    handler: (args: {
        deal_id: number;
        type: string;
        description: string;
    }) => Promise<unknown>;
} | {
    name: string;
    description: string;
    schema: z.ZodObject<{
        status: z.ZodOptional<z.ZodEnum<["pending", "overdue", "completed", "all"]>>;
        deal_id: z.ZodOptional<z.ZodNumber>;
        per_page: z.ZodOptional<z.ZodNumber>;
        page: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        status?: "pending" | "overdue" | "completed" | "all" | undefined;
        per_page?: number | undefined;
        page?: number | undefined;
        deal_id?: number | undefined;
    }, {
        status?: "pending" | "overdue" | "completed" | "all" | undefined;
        per_page?: number | undefined;
        page?: number | undefined;
        deal_id?: number | undefined;
    }>;
    handler: (args: Record<string, unknown>) => Promise<unknown>;
} | {
    name: string;
    description: string;
    schema: z.ZodObject<{
        title: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        due_at: z.ZodOptional<z.ZodString>;
        priority: z.ZodOptional<z.ZodEnum<["low", "normal", "high", "urgent"]>>;
        deal_id: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        title: string;
        description?: string | undefined;
        deal_id?: number | undefined;
        due_at?: string | undefined;
        priority?: "low" | "normal" | "high" | "urgent" | undefined;
    }, {
        title: string;
        description?: string | undefined;
        deal_id?: number | undefined;
        due_at?: string | undefined;
        priority?: "low" | "normal" | "high" | "urgent" | undefined;
    }>;
    handler: (args: Record<string, unknown>) => Promise<unknown>;
})[];
//# sourceMappingURL=crm.d.ts.map