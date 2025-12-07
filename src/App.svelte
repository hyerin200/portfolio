<script>
    import { Router, Route } from "svelte-routing";
    import Header from "./components/common/Header.svelte";
    import Footer from "./components/common/Footer.svelte";
    import MainPage from "./pages/MainPage.svelte";
    import NowPage from "./pages/NowPage.svelte";
    import PopularPage from "./pages/PopularPage.svelte";
    import UpcomingPage from "./pages/UpcomingPage.svelte";
    import NowSubPage from "./pages/NowSubPage.svelte";
    import PopularSubPage from "./pages/PopularSubPage.svelte";
    import UpcomingSubPage from "./pages/UpcomingSubPage.svelte";
    import PortfolioPage from "./pages/PortfolioPage.svelte";
    
    export let url = '';
</script>

<svelte:head>
    <title>혜린's 포트폴리오</title>
</svelte:head>

<Header />

<Router {url}>
    <Route path="/" component={MainPage} />
    <Route path="/now" component={NowPage} />
    <Route path="/popular" component={PopularPage} />
    <Route path="/upcoming" component={UpcomingPage} />
    <Route path="/now/:id" component={NowSubPage} />
    <Route path="/popular/:id" component={PopularSubPage} />
    <Route path="/upcoming/:id" component={UpcomingSubPage} />

    <Route path="/portfolio/:id" component={PortfolioPage} />
</Router>

<Footer />