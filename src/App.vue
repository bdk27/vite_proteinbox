<script setup>
  import ProteinNav from './components/ProteinNav.vue'
  import ProteinHome from './components/ProteinHome.vue'
  import ProteinBanner from './components/ProteinBanner.vue'
  import ProteinAbout from './components/ProteinAbout.vue'
  import ProteinMenu from './components/ProteinMenu.vue'
  import ProteinNews from './components/ProteinNews.vue'
  import ProteinLoc from './components/ProteinLoc.vue'
  import ProteinFooter from './components/ProteinFooter.vue'
</script>

<template>
  <ProteinNav></ProteinNav>
  <ProteinHome></ProteinHome>
  <ProteinBanner></ProteinBanner>
  <ProteinAbout></ProteinAbout>
  <ProteinMenu></ProteinMenu>
  <ProteinNews></ProteinNews>
  <ProteinLoc></ProteinLoc>
  <ProteinFooter></ProteinFooter>
</template>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;300;400;500;700;900&display=swap');
  @import 'scss/style.scss';

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Noto Sans TC', sans-serif;
    overflow-x: hidden;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }
  section {
    padding: 5rem 0rem;
  }
  h1, h2, h3, h4, h5, p {
    overflow-y: hidden;
  }

</style>
