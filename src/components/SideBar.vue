<template>
  <div class="sideBar">
    <div class="loader">
    </div>
    <div class="sideBarContent">
      <div class="burger menuIcons">
        <span></span>
      </div>
      <vs-icon icon="facebook" color="#342D35" class="menuIcons"></vs-icon>
    </div>
    <Menu ref="menu"/>
  </div>
</template>

<script>
import Menu from '@/components/Menu.vue'
import { burgerAnimation } from '../scripts/scripts'

export default {
  name: 'SideBar',
  components: {
    Menu
  },
  mounted: function () {
    burgerAnimation() // will execute at pageload
  }
}
</script>

<style scoped lang="scss">
    .sideBar{
      display: flex;
      flex-direction: row;
    }
    .loader{
      position:absolute;
      width: 0vw;
      height: 100vh;
      z-index: 4;
      background-color:#FCE1DD;
      transition: width 1s;
      &--active {
        width: 100%;
        transition-delay: 0s;
      }
    }
    .sideBarContent{
        z-index: 10;
        width: 4vw;
        height:100vh;
        background-color:white ;
        box-shadow: 1px 0px 5px #6A646B;
        text-align: center;
        display: flex;
        flex-direction: column;
        transition: background-color 0.2s ease-in-out;

        .burger{
          width: 30%;
          height: 24px;
          cursor: pointer;
          margin: 0 auto;
          position: relative;
          span{
            width: 100%;
            height: 4px;
            background-color:#342D35;
            display: block;
            position: absolute;
            top:50%;
            transform: translateY(-50%);
            transition: background-color 0.5s ease-in-out;
          }
          span::before, span::after{
            content: '';
            position: absolute;
            width: 100%;
            height: 4px;
            background-color:#342D35;
            left: 0;
            transition: transform 0.5s ease-in-out;
          }
          span::before{
            transform: translateY(-10px);
          }
          span::after{
            transform: translateY(10px);
          }
        }
        .burger.active span{
          background-color: transparent;
        }
        .burger.active span::before {
          transform: translateY(0px) rotateZ(45deg);
        }
        .burger.active span::after {
          transform: translateY(0px) rotateZ(-45deg);
        }
        .menuIcons{
          margin-top: 45vh;
        }
        .material-icons{
          font-size: x-large;
        }
    }
    .menu{
      opacity: 0;
      margin-left:4vW;
      z-index: 3;
      transition: opacity 0.2s ease-in-out;
      &--active {
        opacity: 1;
        z-index: 6;
        transition-delay: 0.3s;
      }
    }
    .pinkBg{
          background-color: #FCE1DD;
    }
</style>
