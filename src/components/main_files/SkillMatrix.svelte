<script>
    import { skills } from "../../libs/store"; 
    import Icon from '@iconify/svelte';
</script>

<section class="skill-matrix-container">
    <div class="content-header">
        <h2>핵심 역량</h2>
        <p>전공학습을 위해 필요한 필수요소입니다.</p>
    </div>

    <div class="skill-grid">
        {#each $skills as skill}
            <div class="skill-card">
                <div class="icon-title">
                    <Icon icon={skill.icon} height="30" />
                    <h3>{skill.name}</h3>
                </div>
                
                <div class="progress-bar-wrap">
                    <div class="progress-bar" style="width: {skill.level}%;"></div>
                    <span class="level-text">{skill.level}%</span>
                </div>
            </div>
        {/each}
    </div>
</section>

<style>
    .skill-matrix-container {
        padding: 50px;
        background-color: #121212; 
        color: white;
    }

    .content-header {
        text-align: center;
        margin-bottom: 50px;
    }

    .content-header h2 {
        font-size: 36px;
        font-weight: 700;
        margin-bottom: 5px;
        color: #fff;
    }

    .content-header p {
        font-size: 16px;
        color: #888;
    }

    .skill-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 30px;
        max-width: 1000px;
        margin: 0 auto;
    }

    .skill-card {
        background-color: #1e1e1e;
        padding: 25px;
        border-radius: 6px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        transition: box-shadow 0.3s;
    }

    .skill-card:hover {
        box-shadow: 0 0 15px rgba(229, 9, 20, 0.5);
    }

    .icon-title {
        display: flex;
        align-items: center;
        gap: 15px;
        margin-bottom: 20px;
    }

    .icon-title h3 {
        font-size: 20px;
        font-weight: 600;
    }

    .icon-title :global(svg) {
        color: #e50914; 
    }

    .progress-bar-wrap {
        height: 10px;
        background-color: #333;
        border-radius: 5px;
        position: relative;
    }

    .progress-bar {
        height: 100%;
        background-color: #e50914;
        border-radius: 5px;
        transition: width 1s ease-out;
    }

    .level-text {
        position: absolute;
        top: -25px;
        right: 0;
        font-size: 14px;
        font-weight: bold;
        color: #fff;
    }
</style>