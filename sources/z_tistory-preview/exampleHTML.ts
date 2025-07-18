export const imgURL = "https://i.imgur.com/JJCXKkm.png";

export const searchOnclickSubmit = `try {
    window.location.href = '/search';
    return false;
} catch (e) {} `;

export const categoryExampleHTML = `<ul class="tt_category">
  <li class="">
    <a href="/category" class="link_tit">
      분류 전체보기 <span class="c_cnt">(100)</span>
    </a>
    <ul class="category_list">
      <li class="">
        <a href="/category/cat" class="link_item">
          대분류1 <span class="c_cnt">(50)</span>
        </a>
        <ul class="sub_category_list">
          <li class="">
            <a
              href="/category/cat/subcat"
              class="link_sub_item"
            >
              소분류1-1 <span class="c_cnt">(20)</span>
            </a>
          </li>
          <li class="">
            <a
              href="/category/cat/subcat"
              class="link_sub_item"
            >
              소분류1-2 <span class="c_cnt">(30)</span>
            </a>
          </li>
          <li class="">
            <a href="/category/cat/subcat">
              소분류1-3 <span class="c_cnt">(0)</span>
            </a>
          </li>
        </ul>
      </li>
      <li class="">
        <a href="/category/cat" class="link_item">
          대분류2 <span class="c_cnt">(20)</span>
        </a>
        <ul class="sub_category_list">
          <li class="">
            <a
              href="/category/cat/subcat"
              class="link_sub_item"
            >
              소분류2-1 <span class="c_cnt">(13)</span>
            </a>
          </li>
          <li class="">
            <a href="/category/cat/subcat" class="link_sub_item">
              소분류2-2 <span class="c_cnt">(7)</span>
            </a>
          </li>
        </ul>
      </li>
      <li class="">
        <a href="/category/cat" class="link_item">
          대분류3 <span class="c_cnt">(30)</span>
        </a>
        <ul class="sub_category_list">
          <li class="">
            <a href="/category/cat/subcat" class="link_sub_item">
              소분류3-1 <span class="c_cnt">(30)</span>
            </a>
          </li>
        </ul>
      </li>
      <li class="">
        <a href="/category/cat" class="link_item">
          대분류4 <span class="c_cnt">(0)</span>
        </a>
        <ul class="sub_category_list">
          <li class="">
            <a
              href="/category/cat/subcat"
              class="link_sub_item"
            >
              소분류4-1 <span class="c_cnt">(0)</span>
            </a>
          </li>
          <li class="">
            <a
              href="/category/cat/subcat"
              class="link_sub_item"
            >
              소분류4-2 <span class="c_cnt">(0)</span>
            </a>
          </li>
          <li class="">
            <a href="/category/cat/subcat">
              소분류4-3 <span class="c_cnt">(0)</span>
            </a>
          </li>
        </ul>
      </li>
      <li class="">
        <a href="/category/cat" class="link_item">
          대분류5 <span class="c_cnt">(0)</span>
        </a>
        <ul class="sub_category_list">
          <li class="">
            <a
              href="/category/cat/subcat"
              class="link_sub_item"
            >
              소분류5-1 <span class="c_cnt">(0)</span>
            </a>
          </li>
          <li class="">
            <a href="/category/cat/subcat" class="link_sub_item">
              소분류5-2 <span class="c_cnt">(0)</span>
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </li>
</ul>`;

export const exampleDetails = `<div class="tt_article_useless_p_margin contents_style">
  <pre
    id="code_1751943879545"
    class="cpp"
    data-ke-language="cpp"
    data-ke-type="codeblock">
    <code class="hljs">
      <span class="hljs-keyword">const</span>&nbsp;Hello&nbsp;h&nbsp;=&nbsp;
      <span class="hljs-built_in">func</span>();
      <br />
      h.<span class="hljs-built_in">init</span>();
      <br />
      b&nbsp;&lt;&lt;&nbsp;<span class="hljs-string">
        "Hello World!"
      </span>&lt;&lt;&nbsp;Hello::start;
    </code>
  </pre>
  <p style="text-align: center;" data-ke-size="size16">
    <span style="font-family: 'Nanum Gothic';">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum.Contrary to popular belief, Lorem Ipsum is not simply random text.
      It has roots in a piece of classical Latin literature from 45 BC, making
      it over 2000 years old. Richard McClintock, a Latin professor at
      Hampden-Sydney College in Virginia, looked up one of the more obscure
      Latin words, consectetur, from a Lorem Ipsum passage, and going through
      the cites of the word in classical literature, discovered the undoubtable
      source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
      Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in
      45 BC. This book is a treatise on the theory of ethics, very popular
      during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor
      sit amet..", comes from a line in section 1.10.32.
      <br />
      <br />
      The standard chunk of Lorem Ipsum used since the 1500s is reproduced below
      for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum
      et Malorum" by Cicero are also reproduced in their exact original form, accompanied
      by English versions from the 1914 translation by H. Rackham.
      <br />
      <br />
      It is a long established fact that a reader will be distracted by the readable
      content of a page when looking at its layout. The point of using Lorem Ipsum
      is that it has a more-or-less normal distribution of letters, as opposed to
      using 'Content here, content here', making it look like readable English. Many
      desktop publishing packages and web page editors now use Lorem Ipsum as their
      default model text, and a search for 'lorem ipsum' will uncover many web sites
      still in their infancy. Various versions have evolved over the years, sometimes
      by accident, sometimes on purpose (injected humour and the like).
    </span>
  </p>
</div>
<div class="container_postbtn #post_button_group">
  <div class="postbtn_like">
    <div class="wrap_btn" id="reaction-8" data-tistory-react-app="Reaction">
      <button class="btn_post uoc-icon" data-tiara-action-name="공감_클릭">
        <div class="uoc-icon">
          <span class="ico_postbtn ico_like">좋아요</span
          ><span class="txt_like uoc-count">1</span>
        </div>
      </button>
    </div>
    <div class="wrap_btn wrap_btn_share">
      <button
        type="button"
        class="btn_post sns_btn btn_share"
        aria-expanded="false"
        data-thumbnail-url="${imgURL}"
        data-title="글 제목 예시 문자열 Example Example Example"
        data-description='"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially..."'
        data-profile-image="${imgURL}"
        data-profile-name="BlueNyang"
        data-pc-url="${imgURL}"
        data-relative-pc-url="/posts"
        data-blog-title="블로그 이름"
      >
        <span class="ico_postbtn ico_share">공유하기</span>
      </button>
      <div class="layer_post" id="tistorySnsLayer" style="display: none">
        <div class="bundle_post">
          <button
            class="btn_mark"
            data-service="url"
            data-tiara-action-name="공유_클릭"
            data-tiara-layer="copy_url"
            data-tiara-copy="URL복사"
          >
            <span class="ico_sns ico_url"></span
            ><span class="txt_sns">URL 복사</span></button
          ><button
            class="btn_mark"
            data-service="kakaotalk"
            data-tiara-action-name="공유_클릭"
            data-tiara-layer="kakao"
            data-tiara-copy="카카오톡 공유"
          >
            <span class="ico_sns ico_kt"></span
            ><span class="txt_sns">카카오톡 공유</span></button
          ><button
            class="btn_mark"
            data-service="facebook"
            data-tiara-action-name="공유_클릭"
            data-tiara-layer="facebook"
            data-tiara-copy="페이스북 공유"
          >
            <span class="ico_sns ico_fb"></span
            ><span class="txt_sns">페이스북 공유</span></button
          ><button
            class="btn_mark"
            data-service="twitter"
            data-tiara-action-name="공유_클릭"
            data-tiara-layer="X"
            data-tiara-copy="엑스 공유"
          >
            <span class="ico_sns ico_x"></span
            ><span class="txt_sns">엑스 공유</span></button
          ><span class="ico_postbtn ico_arrbt"></span>
        </div>
      </div>
    </div>
    <div class="wrap_btn">
      <button
        type="button"
        class="btn_post"
        data-entry-id="8"
        data-tiara-action-name="글통계_클릭"
      >
        <span class="ico_postbtn ico_statistics">통계</span>
      </button>
    </div>
    <div
      class="wrap_btn wrap_btn_etc"
      data-entry-id="8"
      data-entry-visibility="public"
      data-category-visibility="public"
    >
      <button type="button" class="btn_post btn_etc1" aria-expanded="false">
        <span class="ico_postbtn ico_etc">게시글 관리</span>
      </button>
      <div
        class="layer_post"
        id="tistoryEtcLayer"
        style="left: 0px; bottom: 42px; display: none"
      >
        <div class="bundle_post">
          <button
            type="button"
            class="btn_mark"
            role="modify"
            data-tiara-action-name="더보기_클릭"
            data-tiara-layer="Edit"
            data-tiara-copy="수정"
            data-tiara-custom="role=owner"
          >
            수정</button
          ><button
            type="button"
            class="btn_mark"
            role="private"
            data-tiara-action-name="더보기_클릭"
            data-tiara-layer="Setting"
            data-tiara-copy="비공개로 변경"
            data-tiara-custom="role=owner"
          >
            비공개로 변경</button
          ><button
            type="button"
            class="btn_mark"
            role="delete"
            data-tiara-action-name="더보기_클릭"
            data-tiara-layer="Del"
            data-tiara-copy="삭제"
            data-tiara-custom="role=owner"
          >
            삭제</button
          ><span class="ico_postbtn ico_arrbt"></span>
        </div>
      </div>
    </div>
  </div>
  <div class="postbtn_ccl" data-ccl-type="2" data-ccl-derive="2">
    <a
      href="https://creativecommons.org/licenses/by-nd/4.0/deed.ko"
      target="_blank"
      class="link_ccl"
      rel="license"
    >
      <span class="bundle_ccl">
        <span class="ico_postbtn ico_ccl1">저작자표시</span>
        <span class="ico_postbtn ico_ccl3">변경금지</span>
      </span>
      <span class="screen_out">(새창열림)</span>
    </a>
  </div>
  <!--
<rdf:RDF xmlns="https://web.resource.org/cc/" xmlns:dc="https://purl.org/dc/elements/1.1/" xmlns:rdf="https://www.w3.org/1999/02/22-rdf-syntax-ns#">
    <Work rdf:about="">
        <license rdf:resource="https://creativecommons.org/licenses/by-nd/4.0/deed.ko" />
    </Work>
    <License rdf:about="https://creativecommons.org/licenses/by-nd/4.0/deed.ko">
        <permits rdf:resource="https://web.resource.org/cc/Reproduction"/>
        <permits rdf:resource="https://web.resource.org/cc/Distribution"/>
        <requires rdf:resource="https://web.resource.org/cc/Notice"/>
        <requires rdf:resource="https://web.resource.org/cc/Attribution"/>
        
    </License>
</rdf:RDF>
-->
  <div data-tistory-react-app="SupportButton"></div>
</div>
`;

export const exampleArticleTags = `<a href="/tags" rel="tag"> tag1 </a>, <a href="/tags" rel="tag"> tag2 </a>, <a
  href="/tags"
  rel="tag"
>
  tag3
</a>, <a href="/tags" rel="tag"> 태그4 </a>, <a href="/tags" rel="tag">
  태그5
</a>`;

export const exampleCommentGroup = `<div data-tistory-react-app="Namecard">
  <div class="tt_box_namecard">
    <div class="tt_cont">
      <a class="tt_tit_cont" href="/">
        ~블로그 이름~
      </a>
      <a class="tt_desc" href="/">
        블로그 설명
      </a>
      <button
        class="tt_btn_subscribe"
        data-tiara-action-name="프로필영역 구독 버튼_클릭"
        data-tiara-copy="구독하기"
        type="button"
      >
        <span class="tt_txt_g">구독하기</span>
        <span class="tt_img_area_reply tt_ico_cross"></span>
      </button>
    </div>
    <a class="tt_wrap_thumb" href="${imgURL}">
      <span
        class="tt_thumb_g"
        style='background-image: url("${imgURL}");'
      >
      </span>
    </a>
  </div>
</div>
<div id="entry8Comment">
  <div data-tistory-react-app="Comment">
    <div class="tt-comment-cont">
      <div class="tt-box-total">
        <span class="tt_txt_g">댓글</span>
        <span class="tt_num_g">1</span>
      </div>
      <div class="tt-area-reply">
        <ul class="tt-list-reply">
          <li class="tt-item-reply rp_general">
            <div class="tt-wrap-cmt">
              <div class="tt-box-thumb">
                <a href="https://sky.pluscode.co.kr"
                  ><span
                    class="tt-thumbnail"
                    style="background-image: url(${imgURL})"
                  ></span
                ></a>
              </div>
              <div class="tt-box-content">
                <div class="tt-box-meta">
                  <a
                    class="tt-link-user"
                    href="https://sky.pluscode.co.kr"
                    rel="noreferrer"
                    target="_blank"
                    >댓글을 남긴 사람</a
                  >
                </div>
                <div class="tt-wrap-desc">
                  <p class="tt_desc">
                    (댓글 내용) Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's standard
                    dummy text ever since the 1500s, when an unknown printer took a galley
                    of type and scrambled it to make a type specimen book. It has survived
                    not only five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged.
                  </p>
                </div>
                <div class="tt-wrap-info">
                  <span class="tt_date">20xx. xx. xx. xx:xx</span
                  ><span class="tt-wrap-link-comment"
                    ><a
                      class="tt-link-comment"
                      href="#"
                      data-tiara-action-name="답글_클릭"
                      data-tiara-custom="role=owner"
                      ><span class="tt_txt_g">답글</span></a
                    ></span
                  >
                </div>
                <div class="tt-box-modify">
                  <button class="tt_img_area_reply tt-button-modify" type="button">
                    더보기
                  </button>
                  <ul class="tt-list-modify">
                    <li><a href="#">고정</a></li>
                    <li><a href="#">삭제</a></li>
                    <li><a href="#">신고</a></li>
                    <li><a href="#">링크복사</a></li>
                  </ul>
                </div>
                <div class="tt_box_pwd" style="display: none">
                  <form class="tt_form_pwd">
                    <fieldset>
                      <legend class="screen_out">비밀번호 입력</legend>
                      <input
                        class="tt_inp_g"
                        maxlength="12"
                        placeholder="비밀번호를 입력하세요."
                        title="비밀번호"
                        type="password"
                        value=""
                      /><button class="tt_btn_submit" disabled="" type="submit">
                        <span class="tt_img_area_reply tt_ico_check">입력하기</span>
                      </button>
                    </fieldset>
                  </form>
                </div>
              </div>
            </div>
            <ul class="tt-list-reply-comment">
              <li class="tt-item-reply">
                <form style="margin: 0px">
                  <div class="tt-area-write">
                    <div class="tt-box-thumb">
                      <span
                        class="tt-thumbnail"
                        style="background-image: url(${imgURL})"
                      ></span>
                    </div>
                    <div class="tt_wrap_write">
                      <div class="tt-box-textarea">
                        <div class="tt-inner-g">
                          <span class="tt_txt_user">블로그 owner</span
                          ><label class="screen_out" for="comment">댓글</label>
                          <div
                            class="tt-cmt"
                            contenteditable="true"
                            data-placeholder="내용을 입력하세요."
                          ></div>
                        </div>
                      </div>
                      <div class="tt-box-write">
                        <label class="tt-xe-label"
                          ><input id="secret" name="secret" type="checkbox" /><span
                            class="tt_img_area_reply tt-xe-input-helper"
                          ></span
                          ><span class="tt-xe-label-text">비밀글</span></label
                        ><button class="tt-btn-cancel" type="button">취소</button
                        ><button
                          class="tt-btn_register"
                          type="submit"
                          data-tiara-action-name="댓글등록_클릭"
                          data-tiara-custom="role=owner&amp;type=reply&amp;secret=false"
                        >
                          등록
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </li>
            </ul>
          </li>
        </ul>
      </div><form style="margin: 0px;">
        <div class="tt-area-write">
          <div class="tt-box-thumb">
            <span
              class="tt-thumbnail"
              style='background-image: "url("${imgURL}");'
            >
            </span>
          </div>
          <div class="tt_wrap_write">
            <div class="tt-box-account">
              <input
                maxlength="32"
                placeholder="이름"
                title="이름"
                type="text"
                value=""
              />
              <input
                maxlength="12"
                placeholder="비밀번호"
                title="비밀번호"
                type="password"
                value=""
              />
            </div>
            <div class="tt-box-textarea">
              <div class="tt-inner-g">
                <textarea
                  id="comment"
                  placeholder="로그인 댓글만 허용한 블로그입니다"
                ></textarea>
              </div>
            </div>
            <div class="tt-box-write">
              <label class="tt-xe-label">
                <input id="secret" type="checkbox" />
                <span class="tt_img_area_reply tt-xe-input-helper"> </span>
                <span class="tt-xe-label-text"> 비밀글 </span>
              </label>
              <button class="tt-btn_register" disabled="" type="submit">
                등록
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
<script type="text/javascript">
  loadedComments[8] = true;
  findFragmentAndHighlight(8);
</script>`;
