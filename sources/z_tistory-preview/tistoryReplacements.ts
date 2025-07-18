import type { TistoryReplacements } from "./tt-types";
import {
  imgURL,
  searchOnclickSubmit,
  categoryExampleHTML,
  exampleDetails,
  exampleArticleTags,
  exampleCommentGroup,
} from "./exampleHTML";

// 기본 태그들 (모든 페이지에서 보임)
export const defaultTags: string[] = ["s_t3", "s_container"];

// 티스토리 치환자 매핑
export const tistoryReplacements: TistoryReplacements = {
  "[##_blog_url_##]": "/",
  "[##_search_name_##]": "search",
  "[##_search_text_##]": "",
  "[##_search_onclick_submit_##]": searchOnclickSubmit,
  "[##_category_list_##]": categoryExampleHTML,
  "[##_rctps_rep_link_##]": "/posts",
  "[##_rctps_rep_title_##]": "최신 글 제목 예시 문자열 Example Example Example",
  "[##_rctps_rep_date_##]": "20xx-xx-xx xx:xx:xx",
  "[##_rctps_rep_simple_date_##]": "20xx-xx-xx",
  "[##_rctps_rep_category_##]": "카테고리 이름",
  "[##_tag_link_##]": "/tags",
  "[##_tag_class_##]": "cloud5",
  "[##_tag_name_##]": "태그 예시",
  "[##_cover_title_##]": "커버 제목 예시",
  "[##_cover_item_link_##]": "/posts",
  "[##_cover_item_category_##]": "카테고리 이름",
  "[##_cover_item_date_##]": "20xx-xx-xx xx:xx:xx",
  "[##_cover_item_simple_date_##]": "20xx-xx-xx",
  "[##_cover_item_title_##]": "커버 아이템 제목 예시",
  "[##_cover_item_summary_##]":
    "커버 아이템에 들어갈 요약으로, 이 부분은 글의 내용을 요약해서 보여줍니다. 그리고 이 부분은 지금 보이는 것처럼 실제 블로그와 비슷하게 렌더링될 예정 입니다.",
  "[##_list_conform_##]": "검색 제목/카테고리/태그",
  "[##_list_description_##]": "리스트 설명 예시 문자열 Example Example Example",
  "[##_list_count_##]": "000",
  "[##_list_rep_link_##]": "/lists",
  "[##_list_rep_thumbnail_##]": imgURL,
  "[##_list_rep_category_##]": "카테고리 이름",
  "[##_list_rep_title_text_##]":
    "리스트 제목 예시 문자열 Example Example Example",
  "[##_list_rep_summary_##]":
    "리스트 아이템에 들어갈 요약으로, 이 부분은 글의 내용을 요약해서 보여줍니다. 그리고 이 부분은 지금 보이는 것처럼 실제 블로그와 비슷하게 렌더링될 예정 입니다.",
  "[##_list_rep_regdate_##]": "20xx-xx-xx",
  "[##_article_rep_title_##]": "글 제목 예시 문자열 Example Example Example",
  "[##_article_rep_category_##]": "카테고리 이름",
  "[##_article_related_rep_thumbnail_link_##]": imgURL,
  "[##_article_rep_date_##]": "20xx-xx-xx xx:xx:xx",
  "[##_article_rep_simple_date_##]": "20xx-xx-xx",
  "[##_article_rep_desc_##]": exampleDetails,
  "[##_tag_label_rep_##]": exampleArticleTags,
  "[##_article_prev_title_##]":
    "이전 글 제목 예시 문자열 Example Example Example",
  "[##_article_next_title_##]":
    "다음 글 제목 예시 문자열 Example Example Example",
  "[##_article_related_rep_link_##]": "/related-posts",
  "[##_article_related_rep_title_##]":
    "관련 글 제목 예시 문자열 Example Example Example",
  "[##_article_related_rep_date_##]": "20xx-xx-xx xx:xx:xx",
  "[##_article_related_rep_simple_date_##]": "20xx-xx-xx",
  "[##_article_prev_link_##]": "/posts",
  "[##_article_next_link_##]": "/posts",
  "[##_comment_group_##]": exampleCommentGroup,
  "[##_guestbook_group_##]": "",
  "[##_prev_page_##]": "/page",
  "[##_no_more_prev_##]": "",
  "[##_paging_rep_link_##]": "/page",
  "[##_paging_rep_link_num_##]": "00",
  "[##_next_page_##]": "/page",
  "[##_no_more_next_##]": "",
  "[##_more_link_##]": "/more-page",
};
