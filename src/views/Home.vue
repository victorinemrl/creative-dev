<template>
  <div class="home">
    <SideBar ref="sideBar"/>
    <div class="homeContent view">
      <HomeCanvas ref="homeCanvas"/>
      <div class="homeContentText">
        <h1>Inside out</h1>
        <h2>International conference on illustration</h2>
        <h3>2018 September 25-28</h3>
        <vs-button type="border" color="#7EA58A" id="learnMoreButton" v-on:click="goToAbout">Learn More</vs-button>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from '@/components/SideBar.vue'
import HomeCanvas from '@/components/HomeCanvas.vue'
import router from '../router/index'
import { viewApparition } from '../scripts/scripts'
export default {
  name: 'Home',
  components: {
    SideBar,
    HomeCanvas
  },
  methods: {
    goToAbout: () => {
      viewApparition()
      router.push({ name: 'About' })
    }
  },
  mounted: function () {
    viewApparition() // will execute at pageload
  }
}
</script>
<style scoped lang="scss">
.home {
  height: 100%;
  width: 100vh;
  display: flex;
  flex-direction: row;
  .homeContent{
    display: flex;
    flex-direction: row;
    transition: opacity 0.8s;
    .homeContentText{
      margin-left:20%;
      margin-top:20vh;
      width: 25vw;
      z-index: 3;
      h1{
        font-size: 8vw;
        line-height: 83%;
      }
      h2{
        font-weight: normal;
        margin-top: 2%;
      }
      h3{
        margin-top: 10vh;
        margin-bottom: 2vh;
      }
      #learnMoreButton{
        width:50%;
        z-index:8;
        border-radius: 0;
        border-width: 3px;
      }
    }
    .homeCanvas{
      z-index: 0;
    }
  }
  .view{
    opacity:0;
     &--appear {
        opacity: 1;
        transition-delay: 0.3s;
    }
  }
}
</style>
