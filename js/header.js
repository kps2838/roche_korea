function header (){
    return`
    <header id="main-header">
    <div class="container">
        <h3 class="logo"><a href="./index.html"><img src="./images/logo.png" alt="로고"></a></h3>
        <button id="mobile-menu" class="mobile-only"><img src="./images/mobile-menu.svg" alt=""></button>
        <div class="block mobile-only"></div>
        <div id="gnb">
            <ul>
                <li><a href="./company-1.html">회사소개</a>
                    <ul class="depth2">
                        <li><a href="./company-1.html">기업소개</a><span>|</span></li>
                        <li><a href="./company-2.html">연혁</a></li>
                    </ul></li>
                <li><a href="./research.html">연구개발</a>
                    <ul class="depth2">
                        <li><a href="./research.html">연구개발</a><span>|</span></li>
                        <li><a href="#">임상연구</a></li>
                    </ul></li>
                <li><a href="./product.html">제품정보</a>
                    <ul class="depth2">
                        <li><a href="./product.html">제품검색</a><span>|</span></li>
                        <li><a href="#">제품소식</a></li>
                    </ul></li>
                <li><a href="#">채용정보</a>
                    <ul class="depth2">
                        <li><a href="#">채용안내</a><span>|</span></li>
                        <li><a href="#">복지제도</a></li>
                    </ul></li>
                <li><a href="#">PR</a>
                    <ul class="depth2">
                        <li><a href="#">공지사항</a><span>|</span></li>
                        <li><a href="#">보도자료</a><span>|</span></li>
                        <li><a href="#">사회공헌</a></li>
                    </ul></li>
                <li><a href="./location.html">고객지원</a>
                    <ul class="depth2">
                        <li><a href="#">고객문의</a><span>|</span></li>
                        <li><a href="./location.html">오시는 길</a></li>
                    </ul></li>
            </ul>
        </div>
        <button id="site-map" class="pc-only"><img src="./images/sitemap-btn.svg" alt="사이트맵"></button>
    </div>
    <div class="depth2-box pc-only"></div>
</header>

<div id="sitemap-modal" class="pc-only">
    <div class = "container">
        <h3 class="logo"><img src="./images/logo.png" alt="로고"></h3>
        <button class="close"><img src="./images/close.svg" alt="닫기버튼"></button>
        <div class="sitemap">
            <ul>
                <li><a href="./company-1.html">회사소개</a>
                    <ul class="depth2">
                        <li><a href="./company-1.html">기업소개</a></li>
                        <li><a href="./company-2.html">연혁</a></li>
                    </ul></li>
                <li><a href="./research.html">연구개발</a>
                    <ul class="depth2">
                        <li><a href="./research.html">연구개발</a></li>
                        <li><a href="#">임상연구</a></li>
                    </ul></li>
                <li><a href="./product.html">제품정보</a>
                    <ul class="depth2">
                        <li><a href="./product.html">제품검색</a></li>
                        <li><a href="#">제품소식</a></li>
                    </ul></li>
                <li><a href="#">채용정보</a>
                    <ul class="depth2">
                        <li><a href="#">채용안내</a></li>
                        <li><a href="#">복지제도</a></li>
                    </ul></li>
                <li><a href="#">PR</a>
                    <ul class="depth2">
                        <li><a href="#">공지사항</a></li>
                        <li><a href="#">보도자료</a></li>
                        <li><a href="#">사회공헌</a></li>
                    </ul></li>
                <li><a href="./location.html">고객지원</a>
                    <ul class="depth2">
                        <li><a href="#">고객문의</a></li>
                        <li><a href="./location.html">오시는 길</a></li>
                    </ul></li>
            </ul>
        </div>
    </div>
</div>`
}

const headerName = `.header-component`;
document.querySelector(headerName).innerHTML = header();