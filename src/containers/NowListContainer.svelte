<script>
    import { nows } from '../libs/store'; 
    
    import NowList from '../components/sub/NowList.svelte';
</script>

<div class="list-wrap">
    <NowList datas={$nows} />
</div>

<style>
    .list-wrap {
        margin-bottom: 50px;
    }
</style>