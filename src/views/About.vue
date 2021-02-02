<template>
  <div class="about">
    <SideBar ref="sideBar"/>
    <div class="aboutPageContent">
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
import woman from '@/assets/woman.png'
import man from '@/assets/man.png'
import bg from '@/assets/bg.png'

export default {
  name: 'Home',
  components: {
    SideBar
  },
  methods: {
    designersHover: () => {
      const allDesigners = document.querySelectorAll('.designers')
      allDesigners.forEach(element => element.addEventListener('mouseover', function (event) {
        let index = 0
        for (let i = 0; i < allDesigners.length; i++) {
          const keyTmp = allDesigners[i].getAttribute('id')
          const keyHover = event.target.parentNode.getAttribute('id')
          if (keyTmp === keyHover) {
            index = i
          }
        }

        if (event.target.parentNode.getAttribute('src') === 'man.png') {
          document.querySelector('.designerImg').src = man
        } else {
          document.querySelector('.designerImg').src = woman
        }
        allDesigners[index].querySelector('h2').style.fontSize = 'xx-large'
        allDesigners[index].querySelector('h2').style.fontWeight = '400'
        if (allDesigners[index + 1]) {
          allDesigners[index + 1].querySelector('h2').style.fontSize = 'x-large'
          allDesigners[index + 1].querySelector('h2').style.fontWeight = '300'
        }
        if (allDesigners[index + 2]) {
          allDesigners[index + 2].querySelector('h2').style.fontSize = 'x-large'
          allDesigners[index + 2].querySelector('h2').style.fontWeight = '300'
        }
        if (allDesigners[index + 3]) {
          allDesigners[index + 3].querySelector('h2').style.fontSize = 'large'
          allDesigners[index + 3].querySelector('h2').style.fontWeight = '200'
        }
        if (allDesigners[index + 4]) {
          allDesigners[index + 4].querySelector('h2').style.fontSize = 'large'
          allDesigners[index + 4].querySelector('h2').style.fontWeight = '200'
        }
        if (allDesigners[index + 5]) {
          allDesigners[index + 5].querySelector('h2').style.fontSize = 'medium'
          allDesigners[index + 5].querySelector('h2').style.fontWeight = '100'
        }
        if (allDesigners[index + 6]) {
          allDesigners[index + 6].querySelector('h2').style.fontSize = 'medium'
          allDesigners[index + 6].querySelector('h2').style.fontWeight = '100'
        }
        if (allDesigners[index - 1]) {
          allDesigners[index - 1].querySelector('h2').style.fontSize = 'x-large'
          allDesigners[index - 1].querySelector('h2').style.fontWeight = '300'
        }
        if (allDesigners[index - 2]) {
          allDesigners[index - 2].querySelector('h2').style.fontSize = 'x-large'
          allDesigners[index - 2].querySelector('h2').style.fontWeight = '300'
        }
        if (allDesigners[index - 3]) {
          allDesigners[index - 3].querySelector('h2').style.fontSize = 'large'
          allDesigners[index - 3].querySelector('h2').style.fontWeight = '200'
        }
        if (allDesigners[index - 4]) {
          allDesigners[index - 4].querySelector('h2').style.fontSize = 'large'
          allDesigners[index - 4].querySelector('h2').style.fontWeight = '200'
        }
        if (allDesigners[index - 5]) {
          allDesigners[index - 5].querySelector('h2').style.fontSize = 'medium'
          allDesigners[index - 5].querySelector('h2').style.fontWeight = '100'
        }
        if (allDesigners[index - 6]) {
          allDesigners[index - 6].querySelector('h2').style.fontSize = 'medium'
          allDesigners[index - 6].querySelector('h2').style.fontWeight = '100'
        }
      }, false))
      allDesigners.forEach(element => element.addEventListener('mouseleave', function (event) {
        allDesigners.forEach(element2 => {
          element2.querySelector('h2').style.fontSize = 'medium'
          element2.querySelector('h2').style.fontWeight = '100'
          document.querySelector('.designerImg').src = bg
        })
      }, false))
    }
  },
  mounted: function () {
    this.designersHover() // method1 will execute at pageload
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
      ]
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
        padding: 2%;
      }
      .designers:hover{
        background-color: #FCE1DD;
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
        width: 40vw;
      }
    }
  }
}
</style>
