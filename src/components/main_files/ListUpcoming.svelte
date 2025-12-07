<script>
    import { links } from "svelte-routing"; 
    import { Navigation } from 'swiper';
    import { Swiper, SwiperSlide } from 'swiper/svelte';
    import H2Title from '../common/H2Title.svelte';

    import 'swiper/css';
    import 'swiper/css/navigation';

    export let datas = []; 
</script>

<section class="list_box" use:links>
    <h2 style="color:white; font-size:24px; margin-bottom:20px;">
        기타
    </h2>
    
    <Swiper 
        navigation={true}
        modules={[Navigation]}
        slidesPerView={5.2}
        spaceBetween={20}
    >
        {#each datas as data}
            <SwiperSlide>
                <a href={`/upcoming/${data.id}`}>
                    <figure>
                        <div class="img_wrap">
                            <img src={data.poster_path} alt={data.title} />
                        </div>
                        <figcaption>{data.title}</figcaption>
                    </figure>
                </a>
            </SwiperSlide>
        {/each}
    </Swiper>
</section>

<style>
    .img_wrap {
        width: 100%;
        aspect-ratio: 2/3;
        overflow: hidden;
        border-radius: 5px;
        margin-bottom: 10px;
    }
    
    .img_wrap img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s;
    }

    figure:hover .img_wrap img {
        transform: scale(1.05);
    }

    figcaption {
        color: #fff;
        font-size: 16px;
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>