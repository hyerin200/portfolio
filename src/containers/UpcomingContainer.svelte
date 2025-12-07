<script>
    export let id = undefined;
    import { upcomings } from '../libs/store';
    import UpcomingList from '../components/sub/UpcomingList.svelte';
</script>

<div class="list-wrap" {id}>
    <UpcomingList datas={$upcomings} />
</div>

<style>
    .list-wrap {
        position: relative;
        width: 100%;
        margin-bottom: 50px;
    }
</style>