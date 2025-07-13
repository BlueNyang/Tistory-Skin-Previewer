// 라우트 정보 타입 정의
interface RouteInfo {
  tags: string[];
  title: string;
  description: string;
}

// 라우트 태그 매핑 타입 정의
type RouteTagMapping = {
  [key: string]: RouteInfo;
};

// 티스토리 치환자 매핑 타입 정의
type TistoryReplacements = {
  [key: string]: string;
};

export type { RouteInfo, RouteTagMapping, TistoryReplacements };
