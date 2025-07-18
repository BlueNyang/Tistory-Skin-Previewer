// src/middleware/advanced.ts
import type { MiddlewareHandler } from "astro";
import processHtml from "./z_tistory-preview/htmlProcessing";

export const onRequest: MiddlewareHandler = async (context, next) => {
  // 개발 모드에서만 동작
  if (import.meta.env.DEV) {
    const response = await next();

    // HTML 응답인 경우에만 처리
    if (response.headers.get("content-type")?.includes("text/html")) {
      const html = await response.text();
      const processedHtml = processHtml(html, context.url.pathname);

      return new Response(processedHtml, {
        status: response.status,
        statusText: response.statusText,
        headers: response.headers,
      });
    }
  }

  return next();
};
