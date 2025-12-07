<script>
    import TopList from '../components/sub/TopList.svelte'; 
    
    // 이 파일은 다른 컨테이너를 import 하지 않습니다.
    // fetchTopMovies 함수는 비활성화합니다.
    
    let listTitle = '인기 급상승 Top 10';
    let topMovies = [];

    // 임시 데이터로 대체
    topMovies = [
        { id: 1, title: 'Top 1', image: '/img/hoho.jpg' },
        { id: 2, title: 'Top 2', image: '/img/hoho2.jpg' },
    ];
</script>

<TopList title={listTitle} items={topMovies} />