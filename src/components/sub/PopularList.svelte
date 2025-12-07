<script>
    import { links } from "svelte-routing"; 
    import { Navigation } from 'swiper';
    // ... 나머지 코드
    import { Swiper, SwiperSlide } from 'swiper/svelte';
    import H2Title from '../common/H2Title.svelte';

    import 'swiper/css';
    import 'swiper/css/navigation';

    export let datas = []; /* .then() 코드가 완전히 제거된 상태 */
</script>

<section class="list_box" use:links>
    <H2Title name="대내활동" />
    
    <Swiper 
        navigation={true}
        modules={[Navigation]}
        slidesPerView={5.2}
        spaceBetween={20}
    >
        {#each datas as data}
            <SwiperSlide>
                <a href={`/popular/${data.id}`}>
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