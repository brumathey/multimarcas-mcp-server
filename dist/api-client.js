export class ApiError extends Error {
    status;
    body;
    constructor(status, body) {
        const msg = ApiError.formatMessage(status, body);
        super(msg);
        this.status = status;
        this.body = body;
        this.name = "ApiError";
    }
    static formatMessage(status, body) {
        if (status === 401)
            return "Token invalido ou expirado. Gere um novo token em Dashboard > API.";
        if (status === 403)
            return "Sem permissao para esta acao. Verifique seu role e permissions.";
        if (status === 404)
            return "Recurso nao encontrado.";
        if (status === 429)
            return "Rate limit atingido. Aguarde alguns segundos e tente novamente.";
        if (status === 422 && body.errors) {
            const errors = body.errors;
            const lines = Object.entries(errors)
                .map(([field, msgs]) => `  ${field}: ${msgs.join(", ")}`)
                .join("\n");
            return `Erro de validacao:\n${lines}`;
        }
        const message = body.message || `Erro HTTP ${status}`;
        return message;
    }
}
export class MultimarcasClient {
    baseUrl;
    token;
    constructor(baseUrl, token) {
        this.baseUrl = baseUrl.replace(/\/+$/, "");
        this.token = token;
    }
    async request(method, path, body, query) {
        let url = `${this.baseUrl}/api/v1${path}`;
        if (query) {
            const params = new URLSearchParams();
            for (const [key, value] of Object.entries(query)) {
                if (value !== undefined && value !== "") {
                    params.set(key, String(value));
                }
            }
            const qs = params.toString();
            if (qs)
                url += `?${qs}`;
        }
        const headers = {
            Authorization: `Bearer ${this.token}`,
            Accept: "application/json",
        };
        if (body) {
            headers["Content-Type"] = "application/json";
        }
        const res = await fetch(url, {
            method,
            headers,
            body: body ? JSON.stringify(body) : undefined,
        });
        if (!res.ok) {
            let errorBody;
            try {
                errorBody = (await res.json());
            }
            catch {
                errorBody = { message: `HTTP ${res.status}` };
            }
            throw new ApiError(res.status, errorBody);
        }
        const text = await res.text();
        if (!text)
            return {};
        return JSON.parse(text);
    }
    async get(path, query) {
        return this.request("GET", path, undefined, query);
    }
    async post(path, body) {
        return this.request("POST", path, body);
    }
    async put(path, body) {
        return this.request("PUT", path, body);
    }
    async delete(path) {
        return this.request("DELETE", path);
    }
}
//# sourceMappingURL=api-client.js.map