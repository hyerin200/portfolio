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
    <H2Title name="대표적인 대외활동" />
    
    <Swiper 
        navigation={true}
        modules={[Navigation]}
        slidesPerView={5.2}
        spaceBetween={20}
    >
        {#each datas as data}
            <SwiperSlide>
                <a href={`/top/${data.id}`}>
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