<script>
    import { upcomings } from '../libs/store';
    import ListUpcoming from '../components/common/ListUpcoming.svelte';
</script>

<div style="margin-bottom: 50px;">
    <ListUpcoming datas={$upcomings} />
</div>