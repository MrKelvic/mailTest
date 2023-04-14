<template>
    <div class="home">
        <div class="home_nav">
            <sideBar/>
        </div>
        <div class="home_route">
            <router-view class="appbase"></router-view>
        </div>
    </div>
  </template>
  
  <script>
  import sideBar from '@/components/sideBar.vue';
  export default {
    name: 'home_page',
    props: {},
    components:{
        sideBar
    }
  }
  </script>
  
<style scoped>
.home{
    display:flex;
    width:100%;
    height:100vh;
    display:flex;
}
.home_nav{
    width:30%;
    background:#201e1e;
}
.home_route{
    width:70%;
    background:white;
}
</style>
  