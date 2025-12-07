<script>
    import { banners } from '../libs/store'; 
    import MainList from '../components/main/MainList.svelte';
</script>

<MainList datas={$banners} />