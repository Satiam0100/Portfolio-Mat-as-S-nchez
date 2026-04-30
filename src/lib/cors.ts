import type { NextRequest } from "next/server";

/** Orígenes extra permitidos si definís ALLOWED_ORIGINS además del propio dominio del despliegue. */
const DEFAULT_DEV_ORIGINS = [
  "http://localhost:3000",
  "http://127.0.0.1:3000",
];

function parseOriginsList(raw: string | undefined): string[] {
  if (!raw?.trim()) return [];
  return raw
    .split(",")
    .map((s) => s.trim().replace(/\/$/, ""))
    .filter(Boolean);
}

/** Orígenes adicionales declarados por variable de entorno. */
export function getExtraAllowedOrigins(): string[] {
  const explicit = parseOriginsList(process.env.ALLOWED_ORIGINS);
  if (explicit.length > 0) return explicit;

  const app = process.env.NEXT_PUBLIC_APP_URL?.replace(/\/$/, "");
  if (app) return [app];

  const vercelHost = process.env.VERCEL_URL?.replace(/^https?:\/\//, "");
  if (vercelHost) return [`https://${vercelHost}`];

  return process.env.NODE_ENV === "production" ? [] : DEFAULT_DEV_ORIGINS;
}

/**
 * CORS permitido solo si coincide con el mismo despliegue (request.nextUrl.origin)
 * o con la whitelist de env (staging, otros frontends permitidos explícitos).
 */
export function isOriginAllowed(
  origin: string | null,
  request: NextRequest,
): boolean {
  if (!origin) return true;
  const self = request.nextUrl.origin.replace(/\/$/, "");
  if (origin.replace(/\/$/, "") === self) return true;
  return getExtraAllowedOrigins().includes(origin.replace(/\/$/, ""));
}

export function buildCorsHeaders(request: NextRequest): Headers {
  const origin = request.headers.get("origin");
  const headers = new Headers();

  if (!origin || !isOriginAllowed(origin, request)) {
    return headers;
  }

  headers.set("Access-Control-Allow-Origin", origin);
  headers.set("Vary", "Origin");
  headers.set(
    "Access-Control-Allow-Methods",
    "GET, HEAD, OPTIONS, POST, PUT, PATCH, DELETE",
  );
  headers.set(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, X-Requested-With",
  );
  headers.set("Access-Control-Max-Age", "86400");

  return headers;
}
