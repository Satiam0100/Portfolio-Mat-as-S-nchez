import { type NextRequest, NextResponse } from "next/server";
import { buildCorsHeaders, isOriginAllowed } from "@/lib/cors";

export function middleware(request: NextRequest) {
  const origin = request.headers.get("origin");

  if (request.method === "OPTIONS") {
    if (origin != null && !isOriginAllowed(origin, request)) {
      return new NextResponse(null, { status: 403 });
    }
    return new NextResponse(null, {
      status: 204,
      headers: buildCorsHeaders(request),
    });
  }

  const response = NextResponse.next();
  buildCorsHeaders(request).forEach((value, key) => {
    response.headers.set(key, value);
  });
  return response;
}

export const config = {
  matcher: "/api/:path*",
};
