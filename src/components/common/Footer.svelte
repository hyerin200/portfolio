<script>
    import * as SNS from '../../libs/sns';

    //텍스트 배열데이터
    const footerMenus = ['전화번호','이용약관','개인정보처리방침','포트폴리오','법적고지','이벤트','메일'];
    const footerTexts = [
        ['작성자 : 박혜린','학번정보확인','학번 : 3200000','전화번호 : 010-0000-0000'],
        ['학교명 : 죽전캠퍼스(경기도 용인시 수지구 죽전로 152), 사회과학관 302호','강의명 : 부동산프롭테크'],
        ['포트폴리오 바로가기','메일 : 0000@naver.com','포트폴리오 : 0000-0000 (평일/주말 24시간 상시 공개)'],
       
    ];
</script>

<footer>
    <div class="f_top">
        <div class="notice">
            <h3>공지사항</h3>
            <a href="#!">[안내] 포트폴리오 수정 안내 (2025년 12월 8일)</a>
        </div>
        <div class="family">
            <ul>
                <li><a href="#!">포트폴리오 바로가기 +</a></li>
                <li><a href="#!">바로가기 +</a></li>
            </ul>
        </div>
    </div>
    <div class="f_bottom">
        <ul class="f_nav">
            {#each footerMenus as footerMenu, index(footerMenu)}
                <li><a href="#!">{footerMenu}</a></li>
            {/each}
        </ul>
        <div class="footer_text">
            {#each footerTexts as footerText, index(footerText)}
                <p>
                    {#each footerText as text, index(text)}
                        <span>{text}</span>
                    {/each}
                </p>
            {/each}
        </div>
        <ul class="sns">
            {#each SNS.sns as sns, index(sns)}
                <li>
                    <a href={sns.url} target="_blank">
                        <img src={sns.img} alt={sns.name} />
                    </a>
                </li>
            {/each}
        </ul>
        <p class="copy">hyerin © 혜린's 포트폴리오 All right reserved.</p>
    </div>
</footer>