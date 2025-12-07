<script>
    import { populars } from '../libs/store';
    import PopularList from '../components/sub/PopularList.svelte';
</script>
<div style="margin-bottom: 50px;">
    <PopularList datas={$populars} />
</div>