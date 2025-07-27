export const imgURL = "/images/testImg.png";

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

export const exampleDetails = `<!-- System - START -->

<!-- System - END -->

<div class="tt_article_useless_p_margin contents_style"><h1>기본모드에 없음(h1, #x1)</h1>
<h2 data-ke-size="size26">제목1(h2, #x2)</h2>
<h3 data-ke-size="size23">제목2(h3, #x3)</h3>
<h4 data-ke-size="size20">제목3(h4, #x4)</h4>
<h5>기본모드에 없음(h5, #x5)</h5>
<h6>기본모드에 없음(h6, #x6)</h6>
<p data-ke-size="size16">본문1(size-18)</p>
<p data-ke-size="size16">본문2(size-16)</p>
<p data-ke-size="size16"><b>bold</b></p>
<p data-ke-size="size16"><i>italic</i></p>
<p data-ke-size="size16"><u>밑줄</u></p>
<p><del>취소선</del></p>
<pre class=""><code data-highlighted="yes" class="hljs language-undefined">코드</code></pre>
<p data-ke-size="size16">인라인에 들어가는 <code>코드</code>입니다.</p>
<p style="text-align: center;" data-ke-size="size16">가운데 정렬</p>
<p style="text-align: right;" data-ke-size="size16">오른쪽 정렬</p>
<blockquote data-ke-style="style1">
<p data-ke-size="size16">인용문구1</p>
</blockquote>
<blockquote data-ke-style="style2">
<p data-ke-size="size16">인용문구2</p>
</blockquote>
<blockquote data-ke-style="style3">
<p data-ke-size="size16">인용문구3</p>
</blockquote>
<p data-ke-size="size16">인용문구 아래에 있는 글입니다.</p>
<table data-ke-align="alignLeft">
<thead>
<tr>
<th align="center">표를</th>
<th align="center">테스트</th>
<th align="left">하는</th>
<th align="right">공간</th>
<th>입니다.</th>
</tr>
</thead>
<tbody>
<tr>
<td align="center">표를</td>
<td align="center">테스트</td>
<td align="left">하는</td>
<td align="right">공간</td>
<td>입니다.</td>
</tr>
<tr>
<td align="center">표를</td>
<td align="center">테스트</td>
<td align="left">하는</td>
<td align="right">공간</td>
<td>입니다.</td>
</tr>
<tr>
<td align="center">표를</td>
<td align="center">테스트</td>
<td align="left">하는</td>
<td align="right">공간</td>
<td>입니다.</td>
</tr>
<tr>
<td align="center">표를</td>
<td align="center">테스트</td>
<td align="left">하는</td>
<td align="right">공간</td>
<td>입니다.</td>
</tr>
</tbody>
</table>
<p data-ke-size="size16">구분선 1</p>
<hr contenteditable="false" data-ke-type="horizontalRule" data-ke-style="style1">
<p data-ke-size="size16">구분선2</p>
<hr contenteditable="false" data-ke-type="horizontalRule" data-ke-style="style2">
<p data-ke-size="size16">구분선3</p>
<hr contenteditable="false" data-ke-type="horizontalRule" data-ke-style="style3">
<p data-ke-size="size16">구분선4</p>
<hr contenteditable="false" data-ke-type="horizontalRule" data-ke-style="style4">
<p data-ke-size="size16">구분선5</p>
<hr contenteditable="false" data-ke-type="horizontalRule" data-ke-style="style5">
<p data-ke-size="size16">구분선6</p>
<hr contenteditable="false" data-ke-type="horizontalRule" data-ke-style="style6">
<p data-ke-size="size16">구분선7</p>
<hr contenteditable="false" data-ke-type="horizontalRule" data-ke-style="style7">
<p data-ke-size="size16">구분선8</p>
<hr contenteditable="false" data-ke-type="horizontalRule" data-ke-style="style8">
<p data-ke-size="size16">아래는 접은 글(더보기)입니다.</p>
<div data-ke-type="moreLess" data-text-more="더보기" data-text-less="닫기"><a class="btn-toggle-moreless">더보기</a>
<div class="moreless-content">
<p data-ke-size="size16">접은글에 있는 글입니다.</p>
</div>
</div>
<p data-ke-size="size16">접은글 아래 있는 글입니다.</p>
<p data-ke-size="size16">지도를 첨부합니다.</p>
<p data-ke-size="size16">&nbsp;</p>
<p><iframe mapdata="addr=%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C%20%EC%A4%91%EA%B5%AC%20%EB%AA%85%EB%8F%99&amp;addtype=1&amp;confirmid=&amp;docid=&amp;idx=1&amp;ifrH=362px&amp;ifrW=490px&amp;mapHeight=362&amp;mapInfo=%7B%22version%22%3A2%2C%22mapWidth%22%3A490%2C%22mapHeight%22%3A362%2C%22mapCenterX%22%3A495315%2C%22mapCenterY%22%3A1129781%2C%22mapLevel%22%3A3%2C%22coordinate%22%3A%22wcongnamul%22%2C%22markInfo%22%3A%5B%5D%2C%22graphicInfo%22%3A%5B%5D%2C%22roadviewInfo%22%3A%5B%5D%7D&amp;mapWidth=490&amp;mapX=495315&amp;mapY=1129781&amp;map_hybrid=false&amp;map_level=3&amp;map_type=TYPE_MAP&amp;rcode=1114055000&amp;tel=&amp;title=" src="/proxy/plusmapViewer.php?id=maps_1753627916829" id="maps_1753627916829" width="490px" height="362px" frameborder="0" scrolling="no" data-ke-type="map" data-maps-data="addr=%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C%20%EC%A4%91%EA%B5%AC%20%EB%AA%85%EB%8F%99&amp;addtype=1&amp;confirmid=&amp;docid=&amp;idx=1&amp;ifrH=362px&amp;ifrW=490px&amp;mapHeight=362&amp;mapInfo=%7B%22version%22%3A2%2C%22mapWidth%22%3A490%2C%22mapHeight%22%3A362%2C%22mapCenterX%22%3A495315%2C%22mapCenterY%22%3A1129781%2C%22mapLevel%22%3A3%2C%22coordinate%22%3A%22wcongnamul%22%2C%22markInfo%22%3A%5B%5D%2C%22graphicInfo%22%3A%5B%5D%2C%22roadviewInfo%22%3A%5B%5D%7D&amp;mapWidth=490&amp;mapX=495315&amp;mapY=1129781&amp;map_hybrid=false&amp;map_level=3&amp;map_type=TYPE_MAP&amp;rcode=1114055000&amp;tel=&amp;title=" data-maps-thumbnail="https://ssl.daumcdn.net/map3/staticmap/image?center=495315%2C1129781&amp;lv=3&amp;size=540x350&amp;srs=WCONGNAMUL&amp;"></iframe></p>
<p data-ke-size="size16">이전 발행글을 삽입합니다.</p>
<p data-ke-size="size16"><a href="/posts">2025.07.27 - [분류 전체보기] - Test1</a></p>
<figure id="og_1753628220255" contenteditable="false" data-ke-type="opengraph" data-ke-align="alignCenter" data-og-type="article" data-og-title="Test1" data-og-description="test1" data-og-host="bluenyang-dev.tistory.com" data-og-source-url="https://bluenyang-dev.tistory.com/entry/Test1" data-og-url="https://bluenyang-dev.tistory.com/entry/Test1" data-og-image="https://blog.kakaocdn.net/dna/faNdL/hyZruNcOiL/AAAAAAAAAAAAAAAAAAAAAE2n08U8xU_w6ABjVIRQvxEggogJWoV1LcApJ3iFc7Ku/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&amp;expires=1753973999&amp;allow_ip=&amp;allow_referer=&amp;signature=mLvnwaS%2BpgVJ9MxSWktXoulu7TA%3D"><a href="https://bluenyang-dev.tistory.com/entry/Test1" target="_blank" rel="noopener" data-source-url="https://bluenyang-dev.tistory.com/entry/Test1">
<div class="og-image" style="background-image: url('/images/testImg.png');">&nbsp;</div>
<div class="og-text">
<p class="og-title" data-ke-size="size16">Test1</p>
<p class="og-desc" data-ke-size="size16">test1</p>
<p class="og-host" data-ke-size="size16">~~.tistory.com</p>
</div>
</a></figure>
<p data-ke-size="size16">리스트 입니다.</p>
<ul style="list-style-type: disc;" data-ke-list-type="disc">
<li>깊이 1</li>
<li>깊이 1
<ul style="list-style-type: disc;" data-ke-list-type="disc">
<li>깊이 2</li>
<li>깊이 2</li>
</ul>
</li>
<li>깊이 1
<ul style="list-style-type: disc;" data-ke-list-type="disc">
<li>깊이 2
<ul style="list-style-type: disc;" data-ke-list-type="disc">
<li>깊이 3</li>
<li>깊이 3</li>
<li>깊이 3</li>
</ul>
</li>
</ul>
</li>
</ul>
<p data-ke-size="size16">이미지를 넣습니다.</p>
<p></p><figure class="imageblock alignCenter" data-ke-mobilestyle="widthOrigin" data-filename="1174949_js_react js_logo_react_react native_icon.png" data-origin-width="4096" data-origin-height="4096"><span data-url="https://blog.kakaocdn.net/dna/bk0WS8/btsPB3MwTRi/AAAAAAAAAAAAAAAAAAAAAKnOV4tFAXa5T_ezSyug2Jd5M-JEVaRzxU54KuxqCZsk/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&amp;expires=1753973999&amp;allow_ip=&amp;allow_referer=&amp;signature=Fmc1qsQMvJgruCxvdr31GY9EDPU%3D" data-phocus="https://blog.kakaocdn.net/dna/bk0WS8/btsPB3MwTRi/AAAAAAAAAAAAAAAAAAAAAKnOV4tFAXa5T_ezSyug2Jd5M-JEVaRzxU54KuxqCZsk/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&amp;expires=1753973999&amp;allow_ip=&amp;allow_referer=&amp;signature=Fmc1qsQMvJgruCxvdr31GY9EDPU%3D" data-alt="설명하는 글입니다."><img src="https://blog.kakaocdn.net/dna/bk0WS8/btsPB3MwTRi/AAAAAAAAAAAAAAAAAAAAAKnOV4tFAXa5T_ezSyug2Jd5M-JEVaRzxU54KuxqCZsk/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&amp;expires=1753973999&amp;allow_ip=&amp;allow_referer=&amp;signature=Fmc1qsQMvJgruCxvdr31GY9EDPU%3D" srcset="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&amp;fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2Fbk0WS8%2FbtsPB3MwTRi%2FAAAAAAAAAAAAAAAAAAAAAKnOV4tFAXa5T_ezSyug2Jd5M-JEVaRzxU54KuxqCZsk%2Fimg.png%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1753973999%26allow_ip%3D%26allow_referer%3D%26signature%3DFmc1qsQMvJgruCxvdr31GY9EDPU%253D" onerror="this.onerror=null; this.src='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png'; this.srcset='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png';" loading="lazy" width="515" height="515" data-filename="1174949_js_react js_logo_react_react native_icon.png" data-origin-width="4096" data-origin-height="4096" data-phocus-index="0"></span><figcaption>설명하는 글입니다.</figcaption>
</figure>
<p></p>
<p data-ke-size="size16">이미지 아래에 있는 글입니다.</p></div>
            <!-- System - START -->

<!-- System - END -->

                    <div class="container_postbtn #post_button_group">
  <div class="postbtn_like">
<div class="wrap_btn" id="reaction-21" data-tistory-react-app="Reaction"><button class="btn_post uoc-icon" data-tiara-action-name="공감_클릭"><div class="uoc-icon"><span class="ico_postbtn ico_like">좋아요</span><span class="txt_like uoc-count">공감</span></div></button></div><div class="wrap_btn wrap_btn_share"><button type="button" class="btn_post sns_btn btn_share" aria-expanded="false" data-thumbnail-url="https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&amp;fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2Fbk0WS8%2FbtsPB3MwTRi%2FAAAAAAAAAAAAAAAAAAAAAKnOV4tFAXa5T_ezSyug2Jd5M-JEVaRzxU54KuxqCZsk%2Fimg.png%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1753973999%26allow_ip%3D%26allow_referer%3D%26signature%3DFmc1qsQMvJgruCxvdr31GY9EDPU%253D" data-title="test" data-description="기본모드에 없음(h1, #x1)제목1(h2, #x2)제목2(h3, #x3)제목3(h4, #x4)기본모드에 없음(h5, #x5)기본모드에 없음(h6, #x6)본문1(size-18)본문2(size-16)bolditalic밑줄취소선코드인라인에 들어가는 코드입니다.가운데 정렬오른쪽 정렬인용문구1인용문구2인용문구3인용문구 아래에 있는 글입니다.표를테스트하는공간입니다.표를테스트하는공간입니다.표를테스트하는공간입니다.표를테스트하는공간입니다.표를테스트하는공간입니다.구분선 1구분선2구분선3구분선4구분선5구분선6구분선7구분선8아래는 접은 글(더보기)입니다.더보기접은글에 있는 글입니다.접은글 아래 있는 글입니다.지도를 첨부합니다. 이전 발행글을 삽입합니다.2025.07.27 - [분류 전체보기] - Test1 Test1tes.." data-profile-image="https://tistory1.daumcdn.net/tistory/7985193/attach/46acd51d364f4a0c8b4f551a734368ef" data-profile-name="BlueNyang" data-pc-url="https://bluenyang-dev.tistory.com/entry/test" data-relative-pc-url="/entry/test" data-blog-title="BlueNyang Dev-log"><span class="ico_postbtn ico_share">공유하기</span></button>
  <div class="layer_post" id="tistorySnsLayer"><div class="bundle_post"><button class="btn_mark" data-service="url" data-tiara-action-name="공유_클릭" data-tiara-layer="copy_url" data-tiara-copy="URL복사"><span class="ico_sns ico_url"></span><span class="txt_sns">URL 복사</span></button><button class="btn_mark" data-service="kakaotalk" data-tiara-action-name="공유_클릭" data-tiara-layer="kakao" data-tiara-copy="카카오톡 공유"><span class="ico_sns ico_kt"></span><span class="txt_sns">카카오톡 공유</span></button><button class="btn_mark" data-service="facebook" data-tiara-action-name="공유_클릭" data-tiara-layer="facebook" data-tiara-copy="페이스북 공유"><span class="ico_sns ico_fb"></span><span class="txt_sns">페이스북 공유</span></button><button class="btn_mark" data-service="twitter" data-tiara-action-name="공유_클릭" data-tiara-layer="X" data-tiara-copy="엑스 공유"><span class="ico_sns ico_x"></span><span class="txt_sns">엑스 공유</span></button><span class="ico_postbtn ico_arrbt"></span></div></div>
</div><div class="wrap_btn"><button type="button" class="btn_post" data-entry-id="21" data-tiara-action-name="글통계_클릭"><span class="ico_postbtn ico_statistics">통계</span></button></div><div class="wrap_btn wrap_btn_etc" data-entry-id="21" data-entry-visibility="private" data-category-visibility="public"><button type="button" class="btn_post btn_etc1" aria-expanded="false"><span class="ico_postbtn ico_etc">게시글 관리</span></button>
  <div class="layer_post" id="tistoryEtcLayer"></div>
</div></div>
            <div class="postbtn_ccl" data-ccl-type="5" data-ccl-derive="3">
                <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.ko" target="_blank" class="link_ccl" rel="license">
                    <span class="bundle_ccl">
                        <span class="ico_postbtn ico_ccl1">저작자표시</span> <span class="ico_postbtn ico_ccl2">비영리</span> <span class="ico_postbtn ico_ccl4">동일조건</span> 
                    </span>
                    <span class="screen_out">(새창열림)</span>
                </a>
            </div>
            <!--
            <rdf:RDF xmlns="https://web.resource.org/cc/" xmlns:dc="https://purl.org/dc/elements/1.1/" xmlns:rdf="https://www.w3.org/1999/02/22-rdf-syntax-ns#">
                <Work rdf:about="">
                    <license rdf:resource="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.ko" />
                </Work>
                <License rdf:about="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.ko">
                    <permits rdf:resource="https://web.resource.org/cc/Reproduction"/>
                    <permits rdf:resource="https://web.resource.org/cc/Distribution"/>
                    <requires rdf:resource="https://web.resource.org/cc/Notice"/>
                    <requires rdf:resource="https://web.resource.org/cc/Attribution"/>
                    <permits rdf:resource="https://web.resource.org/cc/DerivativeWorks"/>
<requires rdf:resource="https://web.resource.org/cc/ShareAlike"/>
<prohibits rdf:resource="https://web.resource.org/cc/CommercialUse"/>

                </License>
            </rdf:RDF>
            -->  <div data-tistory-react-app="SupportButton"></div>
</div>

                    <!-- PostListinCategory - START -->

<!-- PostListinCategory - END -->`;

export const exampleArticleTags = `<a href="/tag/%ED%83%9C%EA%B7%B81" rel="tag">태그1</a>, <a href="/tag/%ED%83%9C%EA%B7%B82" rel="tag">태그2</a>, <a href="/tag/%ED%83%9C%EA%B7%B83" rel="tag">태그3</a>`;

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
