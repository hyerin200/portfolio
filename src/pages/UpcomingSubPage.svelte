<script>
    import { onMount } from 'svelte';
    import { navigate } from 'svelte-routing';

    export let id;

    let detailData = null;
    let loading = true;
    let error = null;
    let imageLoadError = false;

    function goToPortfolio() {
        navigate(`/portfolio/${id}`);
    }

    function handleImageLoadError() {
        imageLoadError = true;
        console.error("Failed to load poster image. Check Google Drive permissions (must be 'Anyone with the link' - Viewer)");
    }

    async function fetchDetail(itemId) {
        if (!itemId) {
            error = "ID가 유효하지 않습니다.";
            loading = false;
            return;
        }

        await new Promise(resolve => setTimeout(resolve, 500));

        let mockDetail;

        const common_roles = [
            { period: "2023.01~2023.08", event: "기획 및 콘텐츠 제작" },
            { period: "2023.09~2024.03", event: "홍보 및 마케팅 지원" },
            { period: "2024.04~현재", event: "운영진 활동 참여" },
        ];

        if (itemId === 1) {
            mockDetail = {
                id: 1,
                title: "언어교류활동",
                date: "2022.03-2024.06",
                overview: "교내에서 실행하는 언어 교류 프로그램과 외부 동아리 입니다.",
                poster_path: 'https://drive.google.com/thumbnail?id=1iQB605KBuLVPYfbqGao-im4NNolmFAWg&sz=w1000',
                roles: [
                    { period: "2022.03-2024.06", event: "튜터링+글로벌 빌리지 프로그램" },
                    { period: "2021.03.01.~ ", event: "회화 동아리(fuwafuwa) 창설" },
                ],
                relatedActivities: [
                    {
                        img: 'https://drive.google.com/thumbnail?id=127Qbo_ffkR05KayIT9c8kPRu2uvaHTWA&sz=w1000',
                        title: '튜터링&글로벌 빌리지 ',
                        desc: '교환학생으로 단국대학교에서 수업을 듣고 있는 학생들이 한국 학생들을 대상으로 해당 언어로 수업을 진행하는 프로그램입니다. 신청하기 전에 학생들이 올려둔 강의계획서를 확인한 후 수업을 선택할 수 있습니다. 이 프로그램은 언어를 배울 기회를 제공하고, 문화를 교류할 수 있다는 장점이 있으며, 동시에 언어 학습 능력을 향상시킬 수 있습니다.',
                        link: '#',
                    },
                    {
                        img: 'https://drive.google.com/thumbnail?id=1a8GIgyc0xnmMSUP3-coXmwqlVm0q-cFk&sz=w1000',
                        title: '회화 동아리 창설',
                        desc: '외국어 학습 능력을 향상시키고, 자격증 준비, 문화 생활 공유, 토론 학습 등을 진행하면서 언어를 배우고, 서로의 언어를 사용하며 대화할 수 있는 자신감을 길러줍니다.',
                        link: '#',
                    },

                ]
            };
        } else if (itemId === 2) {
            mockDetail = {
                id: 2,
                title: "북한산 삼부르네상스 아파트(서대문구 홍은동) ",
                date: "2022",
                overview: "서대문구 홍은동 북한산 삼부르네상스 아파트를 분석하였습니다. 해당 지역은 서울 내 저평가 지역으로 시세가 타 지역의 절반 수준이며, 2015~2022년 동안 서대문구 인구는 약 3.2% 감소하는 변동 추세를 보였습니다. 홍은동 일대는 대규모 신축 주거단지로 탈바꿈하며 도심 출퇴근 실수요자가 증가하였고, 2004년 주거환경개선사업 이후 PF 및 신탁계약 체결, 토지 이주·철거 완료, 건축허가 지연 등의 과정을 거쳐 2018년 토지주 전원 동의를 통해 건축허가를 득하고 삼부토건이 시공사로 선정되어 2020년 12월 공사를 완료하였으며, 2021년 9월 최종 사용승인을 받았습니다. 특히, 현장을 직접 방문하고 보고서를 면밀히 검토하며 데이터를 분석함으로써 실제 부동산 환경과 통계를 종합적으로 이해할 수 있도록 분석했습니다.",
                poster_path: 'https://drive.google.com/thumbnail?id=1T3WBk_Ppw5db8IAtPFu2umWMexLv5pSl&sz=w2000',
        
            };
        } else if (itemId === 3) {
            mockDetail = {
                id: 3,
                title: "의대정원 증가와 집값 변동",
                date: "2024 ",
                overview: "조사 결과, 지역 의료 시스템의 안정성과 공공의료 서비스의 질 향상은 단순한 의료 인력 확충에 그치지 않고, 체계적인 지역 관리와 제도적 보완이 필수적임을 확인할 수 있었습니다. 이는 부동산 시장에서 단순한 주택 공급 확대만으로는 지역 가치가 상승하지 않고, 기반 시설과 제도적 환경 개선이 함께 이루어져야 하는 점과 유사합니다. 따라서 의료 인력의 균형 있는 배치와 지역 맞춤형 정책이 장기적으로 지역사회 건강과 경제 활성화에 중요한 역할을 할 것으로 분석했습니다.",
                poster_path: 'https://drive.google.com/thumbnail?id=1Zy_TkNwXhE938z7-k4XKin2uoFU-GyMZ&sz=w1000',

            };
        } else if (itemId === 4) {
            mockDetail = {
                id: 4,
                title: "더샵오포센트럴포레",
                date: "2023",
                overview: "대상지의 입지와 커뮤니티 시설을 체계적으로 조사하기 위해 직접 현장을 방문하여 거주민과의 인터뷰 및 설문조사를 실시하였습니다. 이를 통해 예상되는 부족한 부분을 정확히 파악하고, 주거 환경과 입지 특성을 종합적으로 분석할 수 있었습니다. 현장 조사를 바탕으로 실질적인 개선 방안을 모색하며, 주민의 삶의 질 향상과 지역 커뮤니티 활성화에 기여할 수 있는 전략을 고민하였습니다.",
                poster_path: 'https://drive.google.com/thumbnail?id=12VIlhWJoBP2e_S1b6Xk3PH0h2y37Xwgy&sz=w2000',
                     
            };
        } else if (itemId === 5) {
            mockDetail = {
                id: 5,
                title: "자전거와 도시숲 인프라를 중심으로 해외사례 비교",
                date: "2024",
                overview: "탄소중립도시 조성을 위해 해외 사례와 우리나라의 도시 숲 및 자전거 인프라 구축 현황을 비교·분석하였습니다. 특히 파리와 암스테르담과 같은 해외 도시는 자동차 중심 구조를 전환하고, 도로 다이어트 방식을 도입해 자동차 주행을 제한하며 보행자와 자전거 이용자에게 우선권을 부여하고 있습니다. 반면 우리나라는 도로 다이어트 정책에 대한 부정적 인식과 인프라 부족으로 인해 이러한 변화가 더딘 편입니다. 따라서 해외 사례처럼 자동차 이용을 불편하게 만드는 적극적인 정책 도입과 더불어, 자전거숲 및 도시숲 조성 등 친환경 인프라 확대를 통해 지속 가능한 도시 환경 조성에 기여할 수 있을 것으로 기대됩니다.",
                poster_path: 'https://drive.google.com/thumbnail?id=1OuDi4zSYiyH7dmq0M6mZxeEhLQFEADD9&sz=w2000',
                roles: [],
                relatedActivities: [],
            };
        } else if (itemId === 6) {
            mockDetail = {
                id: 6,
                title: "일본과 한국의 공연장 현황과 입지분석 ",
                date: "2025",
                overview: "일본의 공연장 인프라 현황을 조사하며, 2016년 이후 대형 공연장 부족과 노후화 문제를 중심으로 아리아케 공연장 등 대규모 시설의 신축 및 보수 사례를 분석했습니다. 동시에 도심 내 2,000~3,000석 규모 중형 홀의 부족 문제를 파악하고, 저출산으로 폐교된 초등학교를 ‘에도가와구 문화 스포츠 플라자’와 같이 문화·스포츠 시설로 재건축한 사례를 집중적으로 연구했습니다. 이를 통해 인프라 확충을 위한 재건축 전략과 입지 분석의 중요성을 체계적으로 알게 되었고, 대규모 공연장뿐만 아니라 중형 공연장 확보와 공간 재활용 전략이 지역 문화 활성화와 시설 운영 효율성 향상에 기여할 수 있다는 점을 도출했습니다.",
                poster_path: 'https://drive.google.com/thumbnail?id=1UelioMtkBytT3WX0AFTlHupNfflkkJJ0&sz=w1000',
                roles: [],
                relatedActivities: [],
            };
        } else if (itemId === 7) {
            mockDetail = {
                id: 7,
                title: "단면/평면도 분석 및 입지분석",
                date: "대표적 지역 분석",
                overview: "김포 고촌읍 은행정지구/ 동작구본동(노들역, 노량진)/ 부산광역시 부산진구(오피스텔)/ 평택 모곡동(오피스텔) ",
                poster_path: 'https://drive.google.com/thumbnail?id=1A5qFpeDT6mMmrIGMURb5L63bZpkbfrC6&sz=w2000',
                roles: [],
                relatedActivities: [],
            };
        }

        detailData = mockDetail;
        imageLoadError = false;
        loading = false;
    }

    onMount(() => {
        const itemId = parseInt(id, 10);
        fetchDetail(itemId);
    });
</script>

<div class="container">
    {#if loading}
        <div class="loading-area">
            <div class="spinner"></div>
            <p>정보를 로드하는 중...</p>
        </div>
    {:else if error}
        <div class="error-area">
            <h1>데이터 로드 오류</h1>
            <p>{error}</p>
        </div>
    {:else if detailData}

        <div class="left">
            <div class="title">{detailData.title || 'undefined'}</div>

            <div class="date-badge">{detailData.date || 'undefined'}</div>

            <button class="btn-play">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="currentColor" class="mr-2"><path d="m11.293 17.293 1.414 1.414L19 12l-6.293-6.707-1.414 1.414L15.586 11H5v2h10.586z"/></svg>
                포트폴리오 감상
            </button>

            <div class="icon-row">
                <div class="icon-heart">
                    <svg class="heart-svg" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.23 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3.15.68-4.5 2-1.35-1.32-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.27 1.51 4.04 3 5.5l7 7Z"/></svg>
                    <span class="icon-text">찜</span>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
                    <span class="icon-text">공유</span>
                </div>
            </div>

            <div class="desc">{@html detailData.overview || 'undefined'}</div>

            {#if detailData.roles && detailData.roles.length > 0}
            <div class="role-box-wrap left-role-box">
                <p class="role-box-title">활동 연혁</p>
                <div class="role-box">
                    {#each detailData.roles as role}
                        <p>
                            <span class="timeline-period">{role.period}</span>
                            <span class="timeline-event">{role.event}</span>
                        </p>
                    {/each}
                </div>
            </div>
            {/if}

            {#if detailData.relatedActivities && detailData.relatedActivities.length > 0}
            <div class="role-box-wrap card-section">
                <p class="role-box-title">관련 프로젝트 및 성과</p>
                <div class="card-container">
                    {#each detailData.relatedActivities as activity}
                        <a href={activity.link} class="card">
                            <img src={activity.img} alt={activity.title} class="thumbnail">
                            <div class="title-card">{activity.title}</div>
                            <div class="desc-card">{activity.desc}</div>
                        </a>
                    {/each}
                </div>
            </div>
            {/if}
        </div>

        <div class="right" style="background-image: url('{detailData.poster_path}')">
            <img
                src={detailData.poster_path}
                alt="Poster Load Test"
                class="poster-load-test"
                on:error={handleImageLoadError}
                on:load={() => {imageLoadError = false}}
            />

            {#if imageLoadError}
                <div class="image-error-overlay">
                    <p>이미지 로드 실패</p>
                    <p class="error-detail">Google Drive 파일 공유 권한을 확인해주세요. (전체 공개, '뷰어' 설정 필요)</p>
                </div>
            {/if}
        </div>
    {/if}
</div>

<style>
.container {
    display: flex;
    justify-content: flex-start;
    gap: 90px;
    padding: 130px 70px 80px 70px;
    align-items: flex-start;
    min-height: 100vh;
    background: linear-gradient(145deg, #050505, #0c0c0c 40%, #111 100%);
    color: white;
    font-family: "Noto Sans KR", sans-serif;
    animation: fadeIn 1.5s ease-out;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(25px); }
    to { opacity: 1; transform: translateY(0); }
}

.left {
    max-width: 500px;
    flex-shrink: 0;
    animation: slideLeft 1.2s ease-out;
}

@keyframes slideLeft {
    from { opacity: 0; transform: translateX(-40px); }
    to { opacity: 1; transform: translateX(0); }
}

.right {
    position: relative;
    flex-grow: 1;
    min-height: calc(100vh - 210px);
    width: 100%;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    border-radius: 16px;
    box-shadow: 0 0 35px rgba(255,255,255,0.18);
    animation: posterPop 1.4s ease-out;
    display: block;
    padding: 0;
    overflow: hidden;
}

.right::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
    border-radius: 16px;
    z-index: 1;
}

.poster-load-test {
    position: absolute;
    width: 1px;
    height: 1px;
    opacity: 0;
    pointer-events: none;
}

.image-error-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(18, 18, 18, 0.95);
    border-radius: 16px;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 20px;
    font-size: 20px;
    color: #ff5555;
    font-weight: 700;
}

.error-detail {
    font-size: 14px;
    margin-top: 10px;
    color: #aaa;
    font-weight: 400;
}


.title {
    font-size: 40px; 
    font-weight: 900;
    margin-bottom: 25px;
    background: linear-gradient(90deg, #fff, #c9c9c9);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 0 25px rgba(255,255,255,0.25);
}

.date-badge {
    display: inline-block;
    padding: 12px 22px;
    border-radius: 12px;
    background: rgba(255,255,255,0.08);
    backdrop-filter: blur(6px);
    border: 1px solid rgba(255,255,255,0.15);
    font-size: 20px;
    margin-bottom: 45px;
}

.btn-play {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 330px;
    height: 90px;
    background: linear-gradient(135deg, #ffffff, #f1f1f1);
    color: black;
    border-radius: 16px;
    font-size: 25px;
    font-weight: 700;
    cursor: pointer;
    margin-bottom: 55px;
    border: none;
    box-shadow: 0 12px 30px rgba(255,255,255,0.15);
    transition: 0.28s ease;
    position: relative;
    overflow: hidden;
    padding-left: 40px;
}
.btn-play svg {
    margin-right: 10px;
}

.btn-play::after {
    content: "";
    position: absolute;
    top: 0;
    left: -120%;
    width: 70%;
    height: 100%;
    background: linear-gradient(
        120deg,
        transparent,
        rgba(255,255,255,0.65),
        transparent
    );
    transform: skewX(-25deg);
    transition: 0.55s;
}

.btn-play:hover {
    transform: translateY(-3px) scale(1.06);
    box-shadow: 0 18px 40px rgba(255,255,255,0.25);
}

.btn-play:hover::after {
    left: 130%;
}


.icon-row {
    display: flex;
    gap: 55px;
    font-size: 27px;
    margin-bottom: 50px;
    margin-top: 0;
}

.icon-row div,
.icon-heart {
    display: flex;
    align-items: center;
    flex-direction: column;
    opacity: 0.85;
    cursor: pointer;
    transition: 0.25s ease;
    color: white;
}

.icon-heart:hover .heart-svg {
    fill: #ff4b4b;
    stroke: #ff4b4b;
}

.icon-row div:hover {
    transform: translateY(-7px);
    opacity: 1;
}

.icon-text {
    font-size: 14px;
    margin-top: 5px;
}

/* 🆕 개요 텍스트 크기 26px에서 20px로 조정 */
.desc {
    font-size: 20px; 
    color: #d0d0d0;
    line-height: 1.7;
    margin-bottom: 0;
    padding-bottom: 25px;
    text-shadow: 0 0 4px rgba(255,255,255,0.04);
}

.role-box-wrap {
    width: 100%;
    padding-top: 10px;
    max-width: 500px;
    margin-top: 25px;
}

.role-box-title {
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 15px;
    color: #fff;
    border-bottom: 2px solid rgba(255, 255, 255, 0.1);
    padding-bottom: 5px;
}

.role-box {
    padding: 20px;
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(8px);
}

.role-box p {
    font-size: 16px;
    margin: 8px 0;
    padding-left: 10px;
    border-left: 4px solid rgba(255, 255, 255, 0.9);
    line-height: 1.4;
    display: flex;
    flex-direction: column;
}

.timeline-period {
    font-weight: 700;
    color: #f0f0f0;
}
.timeline-event {
    font-size: 14px;
    color: #a0a0a0;
}


.poster {
    display: none;
}

@keyframes posterPop {
    from { opacity: 0; transform: scale(0.93); }
    to { opacity: 1; transform: scale(1); }
}

.loading-area, .error-area {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 80vh;
    width: 100%;
    text-align: center;
}

.spinner {
    border: 4px solid rgba(255,255,255,0.1);
    border-top: 4px solid white;
    border-radius: 50%;
    width: 45px;
    height: 45px;
    animation: spin 1s linear infinite;
    margin-bottom: 15px;
}

@keyframes spin {
    to { transform: rotate(360deg); }
}

.error-area h1 {
    font-size: 28px;
    color: #ff5555;
}

/* ---------------------------------------------------- */
/* 카드 디자인 스타일 */
/* ---------------------------------------------------- */

.card-section {
    padding-top: 50px;
    max-width: none;
}

.card-container {
    display: flex;
    gap: 32px;
    justify-content: flex-start; /* 가로 정렬 */
    flex-wrap: wrap; /* 공간이 부족하면 줄바꿈 허용 */
    padding: 20px 0;
    margin-top: 20px;
    background: transparent;
    border: none;
    box-shadow: none;
    backdrop-filter: none;
}

.card {
    width: 360px;
    background: #1e1e1e;
    border-radius: 14px;
    overflow: hidden;
    box-shadow: 0px 6px 16px rgba(0,0,0,0.5);
    padding-bottom: 20px;
    transition: 0.2s;
    text-decoration: none;
    color: white;
    flex-shrink: 0;
    cursor: pointer;
}

.card:hover {
    transform: translateY(-6px);
    box-shadow: 0px 12px 24px rgba(0,0,0,0.7);
}

.thumbnail {
    width: 100%;
    height: 240px;
    object-fit: cover;
}

.title-card {
    font-size: 20px;
    font-weight: 700;
    padding: 18px 20px 10px 20px;
    line-height: 1.35;
    color: #f0f0f0;
}

.desc-card {
    font-size: 15px;
    line-height: 1.5;
    padding: 0 20px;
    color: #a0a0a0;
}


@media (max-width: 1024px) {
    .container {
        flex-direction: column;
        padding: 40px;
        gap: 40px;
    }
    .left {
        max-width: 100%;
        width: 100%;
    }
    .card-container {
        justify-content: center;
    }
    .right {
        width: 100%;
        min-height: 400px;
    }
    .title {
        font-size: 42px;
    }
    .btn-play {
        width: 100%;
        max-width: 330px;
        height: 65px;
        font-size: 20px;
    }
}
</style>