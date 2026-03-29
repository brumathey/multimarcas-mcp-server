export declare class ApiError extends Error {
    status: number;
    body: Record<string, unknown>;
    constructor(status: number, body: Record<string, unknown>);
    private static formatMessage;
}
export declare class MultimarcasClient {
    private baseUrl;
    private token;
    constructor(baseUrl: string, token: string);
    request<T = unknown>(method: string, path: string, body?: Record<string, unknown>, query?: Record<string, string | number | boolean | undefined>): Promise<T>;
    get<T = unknown>(path: string, query?: Record<string, string | number | boolean | undefined>): Promise<T>;
    post<T = unknown>(path: string, body?: Record<string, unknown>): Promise<T>;
    put<T = unknown>(path: string, body?: Record<string, unknown>): Promise<T>;
    delete<T = unknown>(path: string): Promise<T>;
}
//# sourceMappingURL=api-client.d.ts.map