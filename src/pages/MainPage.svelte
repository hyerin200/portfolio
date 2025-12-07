<script>
    import MainListContainer from "../containers/MainListContainer.svelte";
    import IntroMe from '../components/common/Intro.svelte';
    import TimelineCards from '../components/common/HistoryCards.svelte';
    import SkillMatrix from "../components/main/SkillMatrix.svelte";
    
    import NowListContainer from "../containers/NowListContainer.svelte";
    import PopularListContainer from "../containers/PopularListContainer.svelte";
    import UpcomingListContainer from "../containers/UpcomingListContainer.svelte";
</script>

<MainListContainer />

<div style="margin-top: 50px;">
    <IntroMe />
</div>

<div id="timeline" style="margin-top: 80px; scroll-margin-top: 140px;">
    <TimelineCards />
</div>

<div style="height: 100px;"></div>

<div id="skills" style="margin-top: 80px; margin-bottom: 100px; scroll-margin-top: 140px;">
    <SkillMatrix />
</div>

<div style="height: 100px;"></div>

<div id="activity" style="scroll-margin-top: 140px;">
    <NowListContainer />
</div>

<div style="height: 100px;"></div>

<div id="popular" style="scroll-margin-top: 140px;">
    <PopularListContainer />
</div>

<div style="height: 100px;"></div>

<div id="upcoming" style="scroll-margin-top: 140px;">
    <UpcomingListContainer />
</div>
