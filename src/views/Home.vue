<template>
  <div class="home">
    <SideBar ref="sideBar"/>
    <div class="homeContent">
      <div class="homeContentText">
        <h1>Inside out</h1>
        <h2>International conference on illustration</h2>
        <h3>2018 September 25-28</h3>
        <vs-button type="border" color="#FCE1DD" id="learnMoreButton"> Learn More</vs-button>
      </div>
      <HomeCanvas ref="homeCanvas"/>
    </div>
  </div>
</template>

<script>
import SideBar from '@/components/SideBar.vue'
import HomeCanvas from '@/components/HomeCanvas.vue'
export default {
  name: 'Home',
  components: {
    SideBar,
    HomeCanvas
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
    .homeContentText{
      margin-left:20% ;
      width: 25vw;
      #learnMoreButton{
        width:50%;
        z-index:8;
        border-radius: 0;
        border-width: 3px;
      }
    }
  }
}
</style>
