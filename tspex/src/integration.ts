import type { AstroIntegration } from "astro";

export default function tistoryHelper(): AstroIntegration {
  return {
    name: "astro-tistory-skin-previewer",
    hooks: {
      "astro:config:setup": ({
        command,
        addMiddleware,
        injectRoute,
        updateConfig,
        injectScript,
      }) => {
        // 개발 서버에서만 미들웨어와 가상 라우트 추가
        if (command === "dev") {
          addMiddleware({
            entrypoint: "astro-tistory-skin-previewer/middleware",
            order: "pre",
          });

          // 2. 가상 라우팅을 위한 [...slug].astro 페이지 주입
          // 사용자가 직접 파일을 만들 필요 없이 라이브러리가 제공
          injectRoute({
            pattern: "/[...slug]",
            entrypoint: "./src/virtual-routes/skin.astro", // 라이브러리 내의 Astro 파일
          });

          // 사용자가 'skin.astro'도 만들 필요 없게 하려면 아래처럼 주입
          injectRoute({
            pattern: "/",
            entrypoint: "./src/virtual-routes/skin.astro",
          });

          injectScript(
            "head-inline",
            `<link rel="stylesheet" href="https://tistory.github.io/tistory-skin-docs/css/default.css">`
          );
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
      // ... 다른 훅들
    },
  };
}
