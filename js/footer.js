function footer(){
    return`    
    <footer id="main-footer">
    <div class="ft-top pc-only">
        <ul class="ft-menu">
            <li><a href="#"><strong>개인정보처리방침</strong></a><span>|</span></li>
            <li><a href="#">법적고지</a><span>|</span></li>
            <li><a href="./location.html">오시는 길</a></li>
        </ul>
        <button id="family-site">Family Site <img src="./images/more-btn.svg" alt="패밀리사이트 열어보기"></button>
        <ul class="family-site-list">
            <li><a href="https://www.roche.com/" target="_blank">로슈글로벌</a></li>
            <li><a href="http://www.roche-diagnostics.co.kr/Pages/default.aspx" target="_blank">한국로슈진단</a></li>
        </ul>
    </div>
    <div class="ft-bottom">
        <img src="./images/ft-logo.png" alt="footer 로고">
        <div class="text">
            <p>서울특별시 서초구 서초대로 411, (서초대로411) GTTower(East) 빌딩 17층 <span>|</span>Tel&nbsp;&nbsp;+82 2 - 3451 - 3600</p>
            <p class="pc-only">This website contains information on products which is targeted to a wide range of audiences and could contain product details or information otherwise not accessible or valid in your country. Please be aware that we do not take any responsibility for accessing such information which may not comply with any legal process, regulation, registration or usage in the country of your origin.</p>
        </div>
        <div class="sns">
            <ul>
                <li><a href="https://twitter.com/roche" target="_blank"><img src="./images/twitter.svg" alt="트위터"></a></li>
                <li><a href="https://www.youtube.com/channel/UCH_ZBgtt6-8-VA52pao0SSA" target="_blank"><img src="./images/youtube.svg" alt="유튜브"></a></li>
                <li><a href="https://www.facebook.com/roche/" target="_blank"><img src="./images/facebook.svg" alt="페이스북"></a></li>
            </ul>
        </div>
        <button onclick = "location.href = '#'"><img src="./images/up-arrow.svg" alt="위로가기"> TOP</button>
    </div>
</footer>`
}

const footerName = '.footer-component';
document.querySelector(footerName).innerHTML = footer();