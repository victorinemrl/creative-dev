<template>
  <div class="about">
    <SideBar ref="sideBar"/>
    <div class="aboutPageContent view">
      <div class="aboutPageText">
        <h1>Workshop for designers</h1>
        <div v-for="designer in designers" :key="designer.name" :id="designer.name" :src="designer.img" class="designers">
          <h2>{{ designer.name }}</h2>
          <span>{{ designer.resume }}</span>
        </div>
      </div>
      <div class="aboutPageImg">
        <img class ="designerImg" src="@/assets/bg.png"/>
      </div>
    </div>
  </div>
</template>
<script>
import SideBar from '@/components/SideBar.vue'
import { designersHover, viewApparition } from '../scripts/scripts'

export default {
  name: 'Home',
  components: {
    SideBar
  },
  mounted: function () {
    const currentLocation = this.name
    document.querySelectorAll('#menuItem a').forEach(element => {
      if (element.innerHTML === currentLocation) {
        element.style.pointerEvents = 'none'
      }
    })
    viewApparition()
    designersHover() // will execute at pageload
  },
  data () {
    return {
      designers: [
        {
          name: 'Wade Hackett',
          resume: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          img: 'man.png'
        },
        {
          name: 'Samara Goodwin',
          resume: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          img: 'woman.png'
        },
        {
          name: 'Marie Diaz',
          resume: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          img: 'woman.png'
        },
        {
          name: 'Tristan Clement',
          resume: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          img: 'man.png'
        },
        {
          name: 'Abigail Harris',
          resume: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          img: 'woman.png'
        },
        {
          name: 'Ryan Palmer',
          resume: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          img: 'man.png'
        },
        {
          name: 'Martin Evans',
          resume: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          img: 'man.png'
        }
      ],
      name: 'About'
    }
  }
}
</script>
<style scoped lang="scss">
.about {
  height: 100%;
  width: 100vh;
  display: flex;
  flex-direction: row;

  .aboutPageContent{
    display: flex;
    flex-direction: row;
    z-index: 3;
    transition: opacity 0.8s;

    .aboutPageText{
      margin-left:10vw;
      margin-top:20vh;
      width:35%;
      h1{
        font-size: xxx-large;
        margin-bottom: 2vh;
      }
      h2{
        font-size: medium;
        font-weight: 200;
      }
      span{
        display:none;
      }
      .designers{
        margin: 2%;
        background: linear-gradient(to top, #FCE1DD 0%, #FCE1DD 100%, transparent 5px) no-repeat;
        background-size: 0 100%;
        transition: background-size .8s;
      }
      .designers:hover{
        background-size: 100% 100%;
        h2{
          font-size: xx-large;
          font-weight: 300;
        }
        span{
          display:block;
          font-weight: 100;
        }
      }
    }
    .aboutPageImg{
      width: 70vw;
      height: 85vh;
      margin-top: 15vh;
      img{
        height: 80vh;
        margin-left: 5vw;
      }
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
