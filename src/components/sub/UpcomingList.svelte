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
        preventClicks={false}
        preventClicksPropagation={false}
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