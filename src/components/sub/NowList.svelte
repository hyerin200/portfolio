<script>
    import { links } from "svelte-routing"; 
    import { Navigation } from 'swiper';
    import { Swiper, SwiperSlide } from 'swiper/svelte';
    import H2Title from '../common/H2Title.svelte';
    
    import Icon from '@iconify/svelte'; 

    import 'swiper/css';
    import 'swiper/css/navigation';
    export let datas = []; 
</script>

<section class="list_box" use:links style="margin-top: 100px;">

    <div style="display: flex; align-items: center; margin-bottom: 5px;">
    <span style="margin-right: 10px;">
        <Icon icon="mdi:crown" style="color: #FFD700;" width="32" height="32" />
    </span> <H2Title name="대외활동" />
</div>
    
    <Swiper 
        navigation={true}
        modules={[Navigation]}
        slidesPerView={7.2}
        spaceBetween={10}
    >
        {#each datas as now}
            <SwiperSlide>
                <a href={`/now/${now.id}`}>
                    <figure>
                        <div class="img_wrap">
                            <img src={now.poster_path} alt={now.title} />
                        </div>
                        <figcaption>{now.title}</figcaption>
                    </figure>
                </a>
            </SwiperSlide>
        {/each}
    </Swiper>
</section>