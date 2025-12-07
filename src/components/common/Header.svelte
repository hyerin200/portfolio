<script>
    import { links } from "svelte-routing";
    import Icon from '@iconify/svelte';

    let current = '';
    let isScrolled = false;

    const handleScroll = () => {
        isScrolled = window.scrollY > 50;
    }

    const scrollToId = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            current = id;
        }
    };
</script>

<svelte:window on:scroll={handleScroll} />

<header use:links class:active={isScrolled}>
    <h1>
        <a href="/" class:active={current === ''} on:click={() => current = 'IntroMe'}>
            <img src="/img/my-logo.png" alt="나만의 영화관" class="my-logo-img" />
        </a>
    </h1>
    <ul>
        <li>
            <a href="#timeline" class:active={current === 'timeline'} on:click|preventDefault={() => scrollToId('timeline')}>
                <Icon icon="mdi:hand-wave" color="white" height="28" />
                <span>소개</span>
            </a>
        </li>

        <li>
            <a href="#skills" class:active={current === 'skills'} on:click|preventDefault={() => scrollToId('skills')}>
                <Icon icon="mdi:fire" color="white" height="28" />
                <span style="margin-left: 35px;">핵심역량</span>
            </a>
        </li>

        <li>
            <a href="#activity" class:active={current === 'activity'} on:click|preventDefault={() => scrollToId('activity')}>
                <Icon icon="mdi:calendar-clock" color="white" height="28" />
                <span style="margin-left: 35px;">대외활동</span>
            </a>
        </li>

        <li>
            <a href="#popular" class:active={current === 'popular'} on:click|preventDefault={() => scrollToId('popular')}>
                <Icon icon="mdi:calendar-clock" color="white" height="28" />
                <span style="margin-left: 35px;">대내활동</span>
            </a>
        </li>

        <li>
            <a href="#upcoming" class:active={current === 'upcoming'} on:click|preventDefault={() => scrollToId('upcoming')}>
                <Icon icon="mdi:star" color="white" height="28" />
                <span style="margin-left: 35px;">기타</span>
            </a>
        </li>
    </ul>
</header>

<style>
    .my-logo-img {
        height: 140px; 
        width: auto;         
        display: block;
    }
    header {
        position: fixed; top: 0; left: 0; width: 100%; z-index: 100;
        padding: 20px 50px; 
        display: flex; justify-content: space-between; align-items: center; 
        transition: 0.4s;
        background: linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 100%);
    }

    header.active { 
        background-color: #000; 
        padding: 10px 50px; 
        box-shadow: 0 2px 10px rgba(0,0,0,0.5);
    }

    header h1 a { display: block; }
    
    header ul { 
        display: flex; 
        list-style: none;
        margin: 0;
        padding: 0;
    }
    
    header ul li { 
        margin-left: 30px; 
    }
    
    header ul li a {
        display: flex;         
        align-items: center;
        gap: 10px;
        color: #fff; font-size: 16px; font-weight: 500; opacity: 0.7; transition: 0.3s;
        text-shadow: 1px 1px 4px rgba(0,0,0,0.8);
        text-decoration: none;
        cursor: pointer;
    }
    
    header ul li a:hover, header ul li a.active { 
        opacity: 1; 
        color: #e50914; 
    }
</style>