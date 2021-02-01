<template>
  <div class="sideBar">
    <div class="sideBarContent">
      <vs-icon icon="menu" color="#342D35" v-on:click="showMenu" class="menuIcons"></vs-icon>
      <vs-icon icon="facebook" color="#342D35" class="menuIcons"></vs-icon>
    </div>
    <Menu ref="menu" class="hide"/>
  </div>
</template>

<script>
import Menu from '@/components/Menu.vue'
export default {
  name: 'SideBar',
  components: {
    Menu
  },
  methods: {
    showMenu: (event) => {
      const menu = document.querySelector('.menu')
      event.target.innerHTML = 'close'
      const sideBar = document.querySelector('.sideBarContent')
      if (menu.classList.value.includes('hide')) {
        menu.classList.remove('hide')
        sideBar.style.backgroundColor = '#FCE1DD'
      } else {
        menu.classList.add('hide')
        sideBar.style.backgroundColor = 'white'
        event.target.innerHTML = 'menu'
      }
    }
  }
}
</script>

<style scoped lang="scss">
    .sideBar{
      display: flex;
      flex-direction: row;
    }
    .sideBarContent{
        z-index: 10;
        width: 4vw;
        height:100vh;
        box-shadow: 1px 0px 5px #6A646B;
        text-align: center;
        display: flex;
        flex-direction: column;

        .menuIcons{
          margin-top: 45vh;
        }

        .material-icons{
          font-size: x-large;
        }
    }
    .hide{
      display: none;
    }
    .menu{
      margin-left:4vW;
    }
</style>
