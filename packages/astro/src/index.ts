import type { AstroIntegration } from "astro";
import { fileURLToPath } from "node:url";
import { existsSync, readFileSync } from "node:fs";

export default function tistoryPreviewer(): AstroIntegration {
  return {
    name: "astro-tistory-skin-previewer",
    hooks: {
      "astro:config:setup": ({
        command,
        addMiddleware,
        injectRoute,
        updateConfig,
        config,
        // injectScript,
      }) => {
        console.log("========= tistory-skin-previewer. By BlueNyang =========");
        const skinEntry = fileURLToPath(
          new URL("./src/pages/skin.astro", config.root)
        );

        // 개발 서버에서만 미들웨어와 가상 라우트 추가
        if (command === "dev") {
          if (existsSync(skinEntry)) {
            const skinContent = readFileSync(skinEntry, "utf-8");

            if (!skinContent.includes("export const prerender = false")) {
              console.error(`
🚫 티스토리 스킨 프리뷰어 설정 필요

src/pages/skin.astro 파일에 다음 구문을 추가해주세요:

---
export const prerender = false;
---

이 설정이 없으면 동적 라우팅에서 오류가 발생할 수 있습니다.
              `);

              console.warn("⚠️  prerender = false 설정을 확인해주세요!");
              process.exit(1);
            }
          }

          addMiddleware({
            entrypoint: "@tistory-skin-previewer/astro/middleware",
            order: "pre",
          });

          // 2. 가상 라우팅을 위한 [...slug].astro 페이지 주입
          // 사용자가 직접 파일을 만들 필요 없이 라이브러리가 제공
          injectRoute({
            pattern: "/[...slug]",
            entrypoint: skinEntry,
          });

          // 사용자가 'skin.astro'도 만들 필요 없게 하려면 아래처럼 주입
          injectRoute({
            pattern: "/",
            entrypoint: skinEntry,
          });

          // injectScript(
          // "head-inline",
          // `<link rel="stylesheet" href="https://tistory.github.io/tistory-skin-docs/css/default.css">`
          // );
        }

        // Vite 설정 업데이트
        updateConfig({
          vite: {
            build: {
              rollupOptions: {
                output: {
                  // 3. CSS 파일을 'style.css' 단일 파일로 빌드
                  assetFileNames: (assetInfo) => {
                    if (assetInfo.name?.endsWith(".css")) {
                      return "style.css";
                    }
                    return "assets/[name]-[hash][extname]";
                  },
                },
              },
            },
            // 3. 빌드 시 CSS 경로를 './style.css'로 변경
            // command === 'build'일 때만 base를 변경하도록 조건 추가 가능
            base: command === "build" ? "./" : "/",
          },
        });
      },
    },
  };
}
