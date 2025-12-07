<script>
    import Icon from '@iconify/svelte';
</script>

<section class="intro-container">
    <div class="content-box">
        <span class="badge">Prop Tech</span>
        <h1>"熱情"과"誠實"의 아이콘<br><strong>박혜린</strong>입니다.</h1>
        <p class="desc">
            변화와 배움을 삶의 중요한 기준으로 삼는 단국대학교 학생입니다.<br>
            주변에서 얻은 지식과 통찰을 탐구하고 정리하는 데에 꾸준한 관심이 있으며<br>
            책임감 있는 태도로 스스로를 한 단계씩 성장시키는 데 집중하고 있습니다.
        </p>

        <div class="tags">
            <span>#지역분석</span>
            <span>#지역탐방</span>
            <span>#CAD</span>
            <span>#입지분석</span>
            <span>#영화감상</span>
            <span>#여행</span>
        </div>

        <div class="btn-group">
            <a href="mailto:0000@naver.com" class="btn-contact">
                <Icon icon="mdi:email" />
                Contact Me
            </a>
        </div>
    </div>

    <div class="img-box">
        <img src="/img/me.jpg" alt="프로필 사진" />
        <div class="gradient-overlay"></div>
    </div>
</section>

<style>
    .intro-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 80px 50px;
        background-color: #000;
        color: #fff;
        box-sizing: border-box;
        position: relative;
        overflow: hidden;
    }

    .content-box {
        z-index: 2;
        max-width: 600px;
    }

    .badge {
        display: inline-block;
        background-color: #e50914;
        color: white;
        padding: 5px 10px;
        font-size: 12px;
        font-weight: bold;
        border-radius: 4px;
        margin-bottom: 20px;
        letter-spacing: 1px;
    }

    h1 {
        font-size: 50px;
        line-height: 1.2;
        margin-bottom: 30px;
        font-weight: 300;
        color: #fff;
    }

    h1 strong {
        font-weight: 900;
    }

    .desc {
        font-size: 18px;
        color: #b3b3b3;
        line-height: 1.6;
        margin-bottom: 40px;
    }

    .tags {
        display: flex;
        gap: 10px;
        margin-bottom: 40px;
    }

    .tags span {
        border: 1px solid #555;
        padding: 8px 15px;
        border-radius: 50px;
        font-size: 14px;
        color: #ddd;
    }

    .btn-group {
        display: flex;
        gap: 15px;
    }

    .btn-contact {
        display: flex;
        align-items: center;
        gap: 8px;
        background-color: white;
        color: black;
        padding: 12px 30px;
        font-size: 16px;
        font-weight: bold;
        border-radius: 4px;
        text-decoration: none;
        transition: 0.3s;
    }

    .btn-contact:hover {
        background-color: #c0c0c0;
    }

    .btn-contact:hover :global(svg) {
        color: #e50914;
    }

    .img-box {
        position: relative;
        width: 400px;
        height: 400px;
        border-radius: 50%;
        overflow: hidden;
        border: 2px solid #333;
        flex-shrink: 0;
        background-color: #222;
        transition: border-color 0.3s, box-shadow 0.3s;
    }

    .img-box:hover {
        border-color: #e50914;
        box-shadow: 0 0 15px rgba(229, 9, 20, 0.4);
    }

    .img-box img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    
    @media (max-width: 768px) {
        .intro-container {
            flex-direction: column-reverse;
            text-align: center;
            padding: 50px 20px;
        }
        .content-box { max-width: 100%; }
        .tags { justify-content: center; }
        .btn-group { justify-content: center; }
        .img-box { width: 200px; height: 200px; margin-bottom: 30px; }
    }
</style>