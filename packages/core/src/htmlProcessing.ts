import type { RouteInfo } from "./tt-types.ts";
import { routeTagMapping } from "./routeTagMapping.js";
import { defaultTags, tistoryReplacements } from "./tistoryReplacements.js";

function processTistoryReplacements(html: string): string {
  let processedHtml = html;

  // 티스토리 치환자들을 실제 값으로 교체
  Object.entries(tistoryReplacements).forEach(([placeholder, replacement]) => {
    processedHtml = processedHtml.replace(
      new RegExp(
        placeholder
          .replace(/\[/g, "\\[")
          .replace(/\]/g, "\\]")
          .replace(/#/g, "\\#"),
        "g"
      ),
      replacement
    );
  });

  return processedHtml;
}

export default function processHtml(html: string, pathname: string): string {
  const route: RouteInfo = routeTagMapping[pathname] || {
    tags: [],
    title: "기본 페이지",
    description: "",
  };
  const allowedTags: string[] = [...defaultTags, ...route.tags];

  let processedHtml = html;

  // 페이지 제목과 설명 치환
  processedHtml = processedHtml.replace(
    "<title>[##_title_##]</title>",
    `<title>${route.title}</title>`
  );
  processedHtml = processedHtml.replace(
    'name="description" content=""',
    `name="description" content="${route.description}"`
  );

  // s_ 태그들을 찾아서 처리 (중첩 태그 지원)
  function processSTags(html: string): string {
    const sTagRegex = /<(s_\w+)([^>]*)>([\s\S]*?)<\/\1>/g;

    return html.replace(
      sTagRegex,
      (
        _match: string,
        tagName: string,
        _attributes: string,
        content: string
      ) => {
        if (allowedTags.includes(tagName)) {
          // 내부에 다른 s_ 태그가 있을 수 있으므로 재귀 처리
          return processSTags(content);
        } else {
          // 허용되지 않은 태그는 제거
          return "";
        }
      }
    );
  }

  processedHtml = processSTags(processedHtml);

  // 티스토리 치환자 처리
  processedHtml = processTistoryReplacements(processedHtml);

  // 빈 줄 정리
  processedHtml = processedHtml.replace(/\n\s*\n/g, "\n");

  // 개발 모드 정보 추가
  const debugInfo = `
    <!-- 티스토리 스킨 개발 모드 -->
    <!-- 현재 경로: ${pathname} -->
    <!-- 활성화된 태그: ${allowedTags.join(", ")} -->
    `;
  processedHtml = processedHtml.replace("<head>", `<head>${debugInfo}`);

  return processedHtml;
}
