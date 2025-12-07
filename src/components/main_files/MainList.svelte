<script>
    import { Autoplay, Pagination, EffectFade } from 'swiper';
    import { Swiper, SwiperSlide } from 'swiper/svelte';

    import 'swiper/css';
    import 'swiper/css/pagination';
    import 'swiper/css/effect-fade';

    let swiper;
    let isPaused = false; 

    export let datas = [];

    const setSwiper = (e) => {
        swiper = e.detail;
    };

    const onHandleClick = () => {
        if(isPaused){ 
            swiper.autoplay.start();
            isPaused = false;
        }else{ 
            swiper.autoplay.stop();
            isPaused = true;
        }
    }
</script>

<main>
    <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect={'fade'}
        autoplay={{
            delay: 3000,
            disableOnInteraction: false,
        }}
        pagination={{
            el: '.custom-pagination',
            clickable: true,
        }}
        loop={true} 
        on:swiper={setSwiper}
        class="mainSwiper"
    >
        {#each datas as data}
            <SwiperSlide>
                <img src={data.poster_path} alt={data.title} />
                
                <div class="txt-box">
                    <h2>{data.title}</h2>
                </div>
                </SwiperSlide>
        {/each}
    </Swiper>

    <div class="controls-box">
        <button 
            class="btn_control {isPaused ? 'play' : 'pause'}" 
            on:click={onHandleClick}
        ></button>
        <div class="custom-pagination"></div>
    </div>
</main>

<style>
    main {
        position: relative;
        width: 100%;
        height: 600px;
        background-color: #000;
    }
    
    :global(.swiper-slide) {
        position: relative;
        width: 100%;
        height: 100%;
    }

    :global(.swiper-slide img) {
        width: 100%;
        height: 100%;
        object-fit: cover;
        filter: brightness(0.6); 
    }

    .controls-box {
        position: absolute;
        bottom: 60px;
        left: 50px;
        z-index: 20;
        display: flex; 
        align-items: center; 
        gap: 15px;
    }

    .btn_control {
        width: 24px;
        height: 24px;
        border: 1px solid rgba(255,255,255,0.7);
        border-radius: 50%;
        cursor: pointer;
        background-color: transparent;
        background-position: center;
        background-repeat: no-repeat;
        background-size: 10px;
        flex-shrink: 0;
    }
    .btn_control:hover { background-color: rgba(255,255,255,0.2); }

    .btn_control.pause {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M6 19h4V5H6v14zm8-14v14h4V5h-4z'/%3E%3C/svg%3E");
    }
    .btn_control.play {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M8 5v14l11-7z'/%3E%3C/svg%3E");
    }

    .custom-pagination {
        display: flex;
        width: auto !important;
    }

    :global(.custom-pagination .swiper-pagination-bullet) {
        background: white !important;
        opacity: 0.5;
        width: 8px; height: 8px;
        margin: 0 4px !important;
        border-radius: 50%;
        cursor: pointer;
        transition: 0.3s;
    }
    :global(.custom-pagination .swiper-pagination-bullet-active) {
        opacity: 1;
        background: #fff !important;
        width: 20px;
        border-radius: 4px;
    }
</style>