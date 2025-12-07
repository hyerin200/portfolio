<script>
    import { nowPromise, nows } from '../libs/store';
    import MainLoading from '../components/common/MainLoading.svelte';
    import ListSub from '../components/common/ListSub.svelte';
    import Error from '../components/common/Error.svelte';

    export let id;

    const promise = $nowPromise;
</script>

{#await promise}
    <MainLoading />
{:then}
    <ListSub id={id} datas={$nows} />
{:catch error}
    <Error />
{/await}