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
                title: "KJSFF",
                date: "2022.04-2025.08",
                overview: "한일학생미래회의(KJSFF)는 한일경제협회의 후원을 받아 활동하는 한일 대학생 교류단체입니다.",
                poster_path: 'https://drive.google.com/thumbnail?id=1nJowkRFlfrZsHf9L32JgQ-B4mN2UmSZP&sz=w1000',
                roles: [
                    { period: "2022.04~2022.10", event: "17기 기획부, 미래회의준비위원회 STAFF" },
                    { period: "2022.10~2023.02", event: "17.5기 총무(부회장)" },
                    { period: "2023.04~2023.10", event: "18기 미래회의준비위원장" },
                    { period: "2023.10~2024.02", event: "19기 미래회의준비위원회 STAFF, 기획부 차장" },
                    { period: "2024.02~2025.08", event: "20기 기획부 차장, 홍보부" },
                ],
                relatedActivities: [
                    {
                        img: 'https://drive.google.com/thumbnail?id=1MpjbQNBm7Ie0pu1hpDODjhsahYjCsBVV&sz=w1000',
                        title: '팀 프로젝트 및 총회 활동 기획',
                        desc: '전반적인 활동을 기획·관리하여 원활하게 진행될 수 있도록 지원합니다. 더불어 관련 주제에 대한 연구가 자유롭게 이루어질 수 있도록 필요한 환경을 제공합니다.',
                        link: '#',
                    },
                    {
                        img: 'https://drive.google.com/thumbnail?id=1Z42zfVl18zMBb7hAn71Jr1U1vFKFzp5H&sz=w1000',
                        title: '한일학생미래회의 행사 개최',
                        desc: '행사 준비 과정에서 일본 지부와 긴밀히 소통하여 행사가 원활하게 진행될 수 있도록 지원합니다. 행사 장소 선정, 예산 관리, 계획안 수립, 내빈 응대 등 행사 전반에 걸친 모든 행정 업무와 운영을 총괄하며 책임지고 관리합니다.',
                        link: '#',
                    },
    
                ]
            };
        } else if (itemId === 2) {
            mockDetail = {
                id: 2,
                title: "한일축제한마당",
                date: "2022.03.02.~2024.09.25.",
                overview: "한일축제한마당은 지난 2005년 한일 국교정상화 40주년을 기념한'한일 우정의 해'에서 시작된 한국과 일본, 양국에서 매년 열리는 최대의 한일문화 교류행사 입니다.",
                poster_path: 'https://drive.google.com/thumbnail?id=1qBLJNxqONWrtXhQzT0nWajsYKFkPGd2-&sz=w1000',
                roles: [
                    { period: "2022.06~2022.09", event: "2022 한일축제한마당 운영위원회" },
                    { period: "2022.06~2023.10", event: "2023 한일축제한마당 운영위원회 부팀장" },
                    { period: "2024.06~2024.09", event: "2024 한일축제한마당 운영위원회" },
                ],
                relatedActivities: [
                    {
                        img: 'https://drive.google.com/thumbnail?id=1keBQGA_KTnoovxzvL8AO6Kodc7QZ406X&sz=w1000',
                        title: '행사 구성 및 관리',
                        desc: '행사 준비 과정에서 주한일본대사관에서 월 1~2회 정기회의를 진행하며 의견을 교환하고, 축제가 원활히 이루어질 수 있도록 조율합니다. 행사 당일에는 자원봉사자들을 관리하고, 담당 구역에서 참가자들의 요구사항을 파악해 문제를 신속히 해결합니다. 또한 행사 전체가 차질 없이 진행되도록 전반적인 운영을 관리합니다.',
                        link: '#',
                    },
                    {
                        img: 'https://drive.google.com/thumbnail?id=1LRfVhiiRiLMdH2YNGDoHcSvxU4xe-sM4&sz=w1000',
                        title: '운영위 내부 총괄',
                        desc: '행사가 원활히 진행될 수 있도록 관리하며, 운영위원회 내부에서 발생하는 각종 문제를 해결합니다. 행사 개최 전에는 자원봉사자 인원 배치, 공지 전달, 요사코이 초대 메일 발송 등 필요한 서류 및 준비 업무를 수행합니다. 또한 회의 참석 전 미리 도착해 사전 준비를 완료하고, 팀장님(조사관)께 관련 사항을 보고합니다. ',
                        link: '#',
                    },
    
                ]
            };
        } else if (itemId === 3) {
            mockDetail = {
                id: 3,
                title: "용인문화재단",
                date: "2022.04.20.~11.07. ",
                overview: "용인 지역의 문화 예술 발전을 위한 공공 기관입니다. ",
                poster_path: 'https://drive.google.com/thumbnail?id=1eT8znmMUzIMRiqNeubkP-8DzDTVBbgA0&sz=w1000',
                roles: [
                    { period: "2022.04.20.~11.07", event: "1기 자기님 활동" },
                ],
                relatedActivities: [
                    {
                        img: 'https://drive.google.com/thumbnail?id=13H5UNKnMyKa-E8JTZcZldCkvNOz1o2bp&sz=w1000',
                        title: '현직자 인터뷰',
                        desc: '문화재단이 겪고 있는 위치적 한계와 그에 대한 해결책을 중심으로, 현직자의 의견을 듣는 인터뷰·조사 활동을 진행했습니다',
                        link: '#',
                    },
                    {
                        img: 'https://drive.google.com/thumbnail?id=1v5aURtZRKqHKhrBjquXoAskDbxcm-eZh&sz=w1000',
                        title: '전시 공간 구상 및 설계',
                        desc: '직접 전시를 보고 감상을 한 후에 전시 공간의 컨셉을 구상하고 설계를 하며, 예산과 구조적 조건에 부합하는 전시 공간을 기획하였습니다. 또한 재단이 가진 위치적 한계를 정확히 파악하기 위해 주변 환경을 직접 답사하고 분석하는 과정을 통해 전시 환경 개선 방향을 구상하였습니다. ',
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
                poster_path: 'https://drive.google.com/thumbnail?id=1po_fzQgzi3Z0A_ShEw-DglLXtCj0GUup&sz=w1000',
                      roles: [
                    { period: "2022.04.20.~11.07", event: "1기 자기님 활동" },
                ],
                relatedActivities: [
                    {
                        img: 'https://drive.google.com/thumbnail?id=174tXn487MG7nyDuhF4hOTA404m81k1-i&sz=w1000',
                        title: '온라인 박람회 참가',
                        desc: '메타버스를 통해서 온라인 행사에 참여하고 강연을 듣는 시간이었습니다. ',
                        link: '#',
                    },
                    {
                        img: 'https://drive.google.com/thumbnail?id=19vVfeKEr1vqzoKUBvTWCxUk8S5ZvSbgj&sz=w1000',
                        title: '행사 참여 및 참가자들의 만족도 파악',
                        desc: '서포터즈로 행사 운영 및 강연 모니터링을 하면서, 참가자 맞춤 강연 안내와 반응 분석을 통해 행사 만족도를 파악하고 피드백하는 활동을 거쳤습니다.',
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