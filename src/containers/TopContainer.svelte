<script>
    import { topPromise } from '../libs/store';
    // import { tops } from '../libs/store';   <-- 삭제 (store.js에 더 이상 없음)
    // import { genres } from '../libs/store'; <-- 삭제 (store.js에 더 이상 없음)
    
    import MainLoading from '../components/common/MainLoading.svelte';
    import ListSub from '../components/common/ListSub.svelte';
    import Error from '../components/common/Error.svelte';

    export let id;

    const promise = $topPromise;
</script>

{#await promise}
    <MainLoading />
{:then}
    <ListSub id={id} datas={[]} />
{:catch error}
    <Error />
{/await}