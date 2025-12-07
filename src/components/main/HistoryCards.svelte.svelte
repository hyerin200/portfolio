<script>
    import { timeline } from "../../libs/store";
    import Icon from '@iconify/svelte';
</script>

<section class="timeline-container">
    <div class="content-header">
        <h2>소개</h2>
    </div>

    <div class="card-grid">
        {#each $timeline as item}
            <div class="card">
                <div class="icon-wrap">
                    <Icon icon={item.icon} height="32" />
                </div>
                <h3>{item.title}</h3>
                <p class="date">{item.date}</p>
                <p class="desc">{item.desc}</p>
            </div>
        {/each}
    </div>
</section>

<style>
    .timeline-container {
        padding: 50px;
        padding-bottom: 100px;
        background-color: #0d0d0d;
        color: white;
    }

    .content-header {
        text-align: center;
        margin-bottom: 40px;
    }

    .content-header h2 {
        font-size: 36px;
        font-weight: 700;
        margin-bottom: 5px;
        color: #fff;
    }

    .content-header p {
        font-size: 18px;
        color: #888;
    }

    .card-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 30px;
        max-width: 1200px;
        margin: 0 auto;
    }

    .card {
        background-color: #1e1e1e;
        padding: 30px;
        border-radius: 8px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
        transition: transform 0.3s;
    }

    .card:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.6);
    }

    .icon-wrap {
        color: #e50914; /* 넷플릭스 악센트 색상 */
        margin-bottom: 15px;
        padding: 10px;
        background-color: #2b2b2b;
        width: fit-content;
        border-radius: 50%;
    }

    .card h3 {
        font-size: 22px;
        font-weight: 600;
        margin-bottom: 5px;
    }

    .card .date {
        color: #b3b3b3;
        font-size: 14px;
        margin-bottom: 15px;
    }

    .card .desc {
        color: #fff;
        font-size: 16px;
        white-space: pre-wrap;
    }

    @media (max-width: 768px) {
        .timeline-container {
            padding: 30px 15px;
        }
    }
</style>