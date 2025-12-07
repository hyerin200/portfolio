<script>
    import { banners } from '../libs/store'; 
    // main -> main_files 로 폴더명을 수정했습니다.
    import MainList from '../components/main_files/MainList.svelte';
</script>

<MainList datas={$banners} />