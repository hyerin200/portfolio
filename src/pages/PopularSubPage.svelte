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
                title: "교내단체활동",
                date: "2022.04-2025.08",
                overview: "같은 관심사를 가지고 있는 학생들과 함께하는 교내활동입니다.",
                poster_path: 'https://drive.google.com/thumbnail?id=1hH0dTPjmLzPFnDL0axX_ZQjpddpqNkZ7&sz=w1000',
                roles: [
                    { period: "2021.03.01.~ 2022.06.30.", event: "아이사랑" },
                    { period: "2022. 5.1~8.31", event: "유리드" },
                ],
                relatedActivities: [
                    {
                        img: 'https://drive.google.com/thumbnail?id=1hdcUMN_J-msBtIY9DN_qKnDAnetDqKpf&sz=w1000',
                        title: '지역아동센터 봉사 진행',
                        desc: '창조지역아동센터, 부흥지역아동센터에서 교육지원과 활동지원을 팀을 구성하여 진행합니다.',
                        link: '#',
                    },
                    {
                        img: 'https://drive.google.com/thumbnail?id=1LQsuxiHxPHDgA6gmo2s-q6ttuOGv3Pl9&sz=w1000',
                        title: '"부동산 도서관" 방문 및 인터뷰 진행',
                        desc: '프롭테크·부동산 산업 종사자이신 정은상 교수님과 인터뷰를 진행하며 시장 구조, 기술 발전의 한계, 산업 간 상생 방안 등 현장의 실무적 관점을 깊이 있게 이해했습니다. 특히 부동산 데이터의 활용, 산업의 개별성, 인력·기술의 중요성에 대한 통찰을 얻어 향후 진로 설정과 실무 역량 개발에 큰 도움을 받을 수 있는 시간이었습니다.',
                        link: '#',
                    },

                ]
            };
        } else if (itemId === 2) {
            mockDetail = {
                id: 2,
                title: "CTL 학생 자문단",
                date: "2022~2023",
                overview: "CTL은 단국대 교수학습개발센터입니다.",
                poster_path: 'https://drive.google.com/thumbnail?id=1HYujAMYRsDQL-ZqAhy9GZqkl3CnlWjoI&sz=w1000',
                roles: [
                    { period: "2022", event: "2022 18기 CTL PRIDE(학생자문단) 단장" },
                    { period: "2023", event: "2023 19기 CTL PRIDE(학생자문단)" },
                ],
                relatedActivities: [
                    {
                        img: 'https://drive.google.com/thumbnail?id=1FHCxAbYnrVRPRFg4yO32kTzioIes0-3s&sz=w1000',
                        title: '학교 내 행사 진행',
                        desc: 'CTL 프로그램(학습법 특강, 학습 컨설팅, 러닝 클럽 등)에 성실히 참여하며 프로그램 홍보 및 운영 개선을 위한 피드백을 제공했습니다.또한 교수학습주간 축제 기간 동안 부스를 운영하며 학생 대상 프로그램을 기획·실행하고, 포스터·카드뉴스 등 홍보물 제작과 행사 전반의 운영을 총괄하여 CTL의 인지도를 높이고 학생들과의 소통을 강화하는 역할을 하였습니다. ',
                        link: '#',
                    },
                    {
                        img: 'https://drive.google.com/thumbnail?id=1MCNWewQYYJ5vWqBelct4RJDH6JqqGGsB&sz=w1000',
                        title: '내부 행사 지원',
                        desc: '교수학습개발센터의 행사 활동을 지원(단울림 행사, 통합과학연구소 연계 등)하며 STAFF로 참여하거나 기획하고 자료를 제작했습니다. 특히 CTL프라이어를 통해 학생들을 대표해서 CTL hero 소속 교수님들께 질문을 여쭤보고 답변을 듣는 시간을 가졌습니다. ',
                        link: '#',
                    },
                     {
                        img: 'https://drive.google.com/thumbnail?id=15OBK8rJzyK_X74n7kHJ9NkX9IyrZcmrk&sz=w1000',
                        title: '단러닝',
                        desc: '교수학습개발센터에서 주관하는 프로그램으로 같은 관시사를 가진 학생들이 모여 팀 프로젝트를 하고 활동이 끝나면 best practice 공모전을 통해 활동한 내용을 소개하는 활동입니다. 마케팅과 언어학습 등의 활동을 2022~2023까지 참가해 최우수상과 우수상을 수상하였습니다. ',
                        link: '#',
                    },
    
    
                ]
            };
        } else if (itemId === 3) {
            mockDetail = {
                id: 3,
                title: "학생봉사단 DIDIM",
                date: "2022~2023.08 ",
                overview: "단국대 학생들의 봉사 활동 업무를 지원하는 기관입니다 ",
                poster_path: 'https://drive.google.com/thumbnail?id=1OlrlolnBSpu5L7EVX9M4IVS9UVHsOn6a&sz=w1000',
                roles: [
                    { period: "2022.05.01.~2022.12.21", event: "학생봉사단 기획국 단원" },
                    { period: "2023.01.01~08", event: "학생봉사단 단장" },
                ],
                relatedActivities: [
                    {
                        img: 'https://drive.google.com/thumbnail?id=1U0rw1RhcMbGYTMybK6CiVYeIx6FL_LTz&sz=w1000',
                        title: '축제 부스 & 학교 주변의 기관과 연계',
                        desc: '용인서부경찰서와 자율방범대 등 여러 기관과 협력하여 활동을 진행했고, 축제 기간에는 부스를 운영하며 학생들에게 부스의 목적과 학생봉사단의 활동을 홍보했습니다.',
                        link: '#',
                    },
                    {
                        img: 'https://drive.google.com/thumbnail?id=1Jg7KpbbEJMFxQ4KwOtfH3YdgNt60yOmy&sz=w1000',
                        title: '봉사 기획 및 실행',
                        desc: '봉사활동을 기획하고 학생들이 재학생들과 함께 봉사를 할 수 있는 경험을 쌓을 수 있도록 지원하였습니다.(탄천 플로깅, 유기견 봉사활동, 김장 봉사 등)',
                        link: '#',
                    },
    
                ]
            };
        } else if (itemId === 4) {
            mockDetail = {
                id: 4,
                title: "머니쇼 서포터즈",
                date: "2024-09-15",
                overview: "경제 및 재테크 박람회 '머니쇼'의 홍보 및 관람하는 서포터즈 활동입니다.",
                poster_path: 'https://placehold.co/1200x1600/22c55e/FFFFFF?text=MONEY+SHOW',
                      roles: [
                    { period: "2022.04.20.~11.07", event: "1기 자기님 활동" },
                ],
                relatedActivities: [
                    {
                        img: 'https://drive.google.com/thumbnail?id=1MpjbQNBm7Ie0pu1hpDODjhsahYjCsBVV&s=4000',
                        title: '온라인 박람회 참가',
                        desc: '문화재단이 겪고 있는 위치적 한계와 그에 대한 해결책을 중심으로, 현직자의 의견을 듣는 인터뷰·조사 활동을 진행했습니다',
                        link: '#',
                    },
                    {
                        img: 'https://drive.google.com/thumbnail?id=1Z42zfVl18zMBb7hAn71Jr1U1vFKFzp5H&s=4000',
                        title: '전시 공간 구상 및 설계',
                        desc: '전시 공간의 컨셉을 구상하고 설계를 하며, 예산과 구조적 조건에 부합하는 전시 공간을 기획하였습니다. 또한 재단이 가진 위치적 한계를 정확히 파악하기 위해 주변 환경을 직접 답사하고 분석하는 과정을 통해 전시 환경 개선 방향을 구상하였습니다. ',
                        link: '#',
                    },
    
                ]
            };
        } else if (itemId === 5) {
            mockDetail = {
                id: 5,
                title: "드라큘라",
                date: "2024-08-30",
                overview: "고전 흡혈귀 전설을 현대적으로 재해석한 공포 영화입니다.",
                poster_path: 'https://placehold.co/1200x1600/f97316/FFFFFF?text=DRACULA',
                roles: [],
                relatedActivities: [],
            };
        } else if (itemId === 6) {
            mockDetail = {
                id: 6,
                title: "Wildcat",
                date: "2024-07-22",
                overview: "자유분방한 청년이 광활한 자연 속에서 자신을 찾아 떠나는 여정을 그린 성장 드라마입니다.",
                poster_path: 'https://placehold.co/1200x1600/475569/FFFFFF?text=WILDCAT',
                roles: [],
                relatedActivities: [],
            };
        } else {
            mockDetail = {
                id: itemId,
                title: `알 수 없는 활동 ${itemId}`,
                date: "undefined",
                overview: "데이터를 찾을 수 없습니다.",
                poster_path: 'https://placehold.co/1200x1600/333333/AAAAAA?text=No+Data',
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
    font-size: 60px; 
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