<script>
    import { onMount } from 'svelte';
    import { useLocation } from 'svelte-routing';
    import { navigate } from 'svelte-routing';

    export let id;
    
    let activityTitle = '활동명 로딩 중...';
    let portfolioItems = [];
    let loading = true;

    const mockPortfolios = {
        1: {
            title: "KJSFF - 포트폴리오",
            items: [
                {
                    image: 'https://placehold.co/400x300/3498db/FFFFFF?text=컨퍼런스+사진',
                    caption: '2023년 미래회의 컨퍼런스 현장 사진입니다. 약 150명의 양국 대학생이 참여했습니다.',
                    tags: ['이벤트', '기획', '국제 교류']
                },
                {
                    image: 'https://placehold.co/400x300/e67e22/FFFFFF?text=기획서+일부',
                    caption: '기획부에서 작성한 최종 회의 기획서의 핵심 요약 페이지입니다. 목표 설정 및 예산 분배를 담당했습니다.',
                    tags: ['문서', '기획서', '예산']
                },
                {
                    image: 'https://placehold.co/400x300/27ae60/FFFFFF?text=홍보+컨텐츠',
                    caption: 'SNS 채널에 사용된 홍보 콘텐츠입니다. 시각적 매력을 높여 참여율을 극대화했습니다.',
                    tags: ['홍보', '디자인', 'SNS']
                },
            ]
        },
        2: {
            title: "봉사 활동 - 사진 기록",
            items: [
                { image: 'https://placehold.co/400x300/9b59b6/FFFFFF?text=봉사+1', caption: '지역 환경 정화 활동 모습입니다.', tags: ['환경', '지역'] },
                { image: 'https://placehold.co/400x300/1abc9c/FFFFFF?text=봉사+2', caption: '노인 복지관에서 어르신들과 함께한 시간입니다.', tags: ['복지', '나눔'] },
            ]
        },
        3: {
            title: "추가 예정 활동 - 포트폴리오",
            items: [
                { image: 'https://placehold.co/400x300/f39c12/FFFFFF?text=준비+중+항목', caption: '새로운 프로젝트의 초기 컨셉 아트입니다.', tags: ['컨셉', '기획'] },
            ]
        }
    };

    function goToDetail() {
        navigate(`/detail/${id}`);
    }

    onMount(async () => {
        await new Promise(resolve => setTimeout(resolve, 300));
        
        const numericId = parseInt(id, 10);

        if (isNaN(numericId) || !mockPortfolios[numericId]) {
            activityTitle = `ID ${id}에 대한 포트폴리오 데이터를 찾을 수 없습니다.`;
            portfolioItems = [];
        } else {
            const portfolioData = mockPortfolios[numericId];
            activityTitle = portfolioData.title;
            portfolioItems = portfolioData.items;
        }

        loading = false;
    });
</script>

<div class="portfolio-container">
    {#if loading}
        <div class="loading-area">
            <div class="spinner"></div>
            <p>포트폴리오를 불러오는 중...</p>
        </div>
    {:else}
        <h1 class="page-title">{activityTitle}</h1>
        <p class="subtitle">이 페이지에서 활동에 대한 상세 이미지와 설명을 한눈에 볼 수 있습니다.</p>

        <div class="grid-layout">
            {#each portfolioItems as item}
                <div class="portfolio-item">
                    <div class="image-box">
                        <img src={item.image} alt={item.caption} class="item-image" onerror="this.onerror=null; this.src='https://placehold.co/400x300/444444/AAAAAA?text=Image+Load+Error';"/>
                    </div>
                    <div class="caption-box">
                        <p class="caption">{item.caption}</p>
                        <div class="tag-row">
                            {#each item.tags as tag}
                                <span class="tag">#{tag}</span>
                            {/each}
                        </div>
                    </div>
                </div>
            {/each}
        </div>
        
        {#if portfolioItems.length === 0}
            <div class="no-data">
                <p>준비된 포트폴리오 항목이 없습니다. (ID {id})</p>
            </div>
        {/if}

        <div class="report-section-wrap">
            <h2 class="report-title">활동 보고서 및 결과</h2>
            <p class="report-desc">해당 활동의 상세 보고서, 성과 지표, 그리고 미디어 자료는 아래 버튼을 통해 확인하실 수 있습니다.</p>
            <button class="btn-report" on:click={goToDetail}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 14 13 10 17"/></svg>
                상세 활동 개요 페이지로 돌아가기
            </button>
        </div>
    **{/if}** </div>

<style>
    .portfolio-container {
        min-height: 100vh;
        background: #111;
        color: white;
        font-family: "Noto Sans KR", sans-serif;
        padding: 60px 80px;
    }
    
    .page-title {
        font-size: 48px;
        font-weight: 800;
        margin-bottom: 10px;
        color: #fff;
        border-bottom: 3px solid #333;
        padding-bottom: 10px;
    }
    
    .subtitle {
        font-size: 18px;
        color: #aaa;
        margin-bottom: 40px;
    }

    .grid-layout {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 40px;
        margin-bottom: 60px;
    }

    .portfolio-item {
        background: #1e1e1e;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
        transition: transform 0.3s ease;
    }

    .portfolio-item:hover {
        transform: translateY(-5px);
    }

    .image-box {
        width: 100%;
        height: 250px;
        overflow: hidden;
    }

    .item-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .caption-box {
        padding: 20px;
    }

    .caption {
        font-size: 16px;
        line-height: 1.5;
        color: #e0e0e0;
        margin-bottom: 15px;
    }

    .tag-row {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
    }

    .tag {
        font-size: 14px;
        color: #88ff88;
        background: rgba(39, 174, 96, 0.2);
        padding: 4px 10px;
        border-radius: 6px;
    }

    .no-data {
        text-align: center;
        padding: 80px 0;
        font-size: 24px;
        color: #666;
    }

    .report-section-wrap {
        padding: 40px;
        background: #1e1e1e;
        border: 1px solid #333;
        border-radius: 12px;
        margin-top: 40px;
        text-align: center;
    }

    .report-title {
        font-size: 28px;
        font-weight: 700;
        color: #fff;
        margin-bottom: 15px;
    }

    .report-desc {
        font-size: 16px;
        color: #bbb;
        margin-bottom: 30px;
    }

    .btn-report {
        display: inline-flex;
        align-items: center;
        padding: 12px 30px;
        background: #3498db;
        color: white;
        border: none;
        border-radius: 8px;
        font-size: 18px;
        font-weight: 600;
        cursor: pointer;
        transition: background-color 0.3s ease, transform 0.1s;
    }

    .btn-report:hover {
        background: #2980b9;
        transform: translateY(-2px);
    }

    .btn-report svg {
        margin-right: 8px;
    }
    
    .loading-area {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 80vh;
    }
    .spinner {
        border: 4px solid rgba(255, 255, 255, 0.1);
        border-top: 4px solid #fff;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        animation: spin 1s linear infinite;
        margin-bottom: 15px;
    }
    @keyframes spin {
        to { transform: rotate(360deg); }
    }

    @media (max-width: 768px) {
        .portfolio-container {
            padding: 30px 20px;
        }
        .page-title {
            font-size: 36px;
        }
        .grid-layout {
            grid-template-columns: 1fr;
        }
    }
</style>