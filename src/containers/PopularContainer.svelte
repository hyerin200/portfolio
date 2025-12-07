<script>
    import { popularPromise } from '../libs/store';
    import { populars } from '../libs/store';
    // import { genres } from '../libs/store';  <-- 이 줄을 삭제하세요
    
    import MainLoading from '../components/common/MainLoading.svelte';
    import ListSub from '../components/common/ListSub.svelte';
    import Error from '../components/common/Error.svelte'; // Error 컴포넌트가 있다면

    export let id;

    const promise = $popularPromise;
</script>

{#await promise}
    <MainLoading />
{:then}
    <ListSub id={id} datas={$populars} /> 
{:catch error}
    <Error />
{/await}