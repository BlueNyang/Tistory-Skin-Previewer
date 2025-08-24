import type { MiddlewareHandler } from "astro";
import { processHtml } from "@tistory-skin-previewer/core";

export const onRequest: MiddlewareHandler = async (context, next) => {
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

  return next();
};
