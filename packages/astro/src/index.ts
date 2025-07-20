import type { AstroIntegration } from "astro";
import { fileURLToPath } from "node:url";
import { readFileSync, writeFileSync, existsSync } from "node:fs";

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
              const lines = skinContent.split("\n");
              const frontmatterEndIndex = lines.findIndex((line, idx) => {
                return idx > 0 && line.trim() === "---";
              });

              if (frontmatterEndIndex > 0) {
                lines.splice(
                  frontmatterEndIndex,
                  0,
                  "export const prerender = false;"
                );
              } else {
                lines.unshift("---");
                lines.push("export const prerender = false;");
                lines.push("---");
              }

              const modifiedContent = lines.join("\n");
              writeFileSync(skinEntry, modifiedContent, "utf-8");

              console.error(
                "⚠️ skin.astro 파일에 'export const prerender = false;'를 추가했습니다."
              );
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
        } else if (command === "build") {
          // 빌드 시 "export const prerender = false;"가 있으면, 해당 라인을 제거
          if (existsSync(skinEntry)) {
            const skinContent = readFileSync(skinEntry, "utf-8");
            const modifiedContent = skinContent.replace(
              "export const prerender = false;",
              ""
            );
            writeFileSync(skinEntry, modifiedContent, "utf-8");
          } else {
            console.error("⚠️ skin.astro 파일이 존재하지 않습니다.");
          }
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
