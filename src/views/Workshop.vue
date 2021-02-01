<template>
  <div class="workshop">
      <SideBar ref="sideBar"/>
    <h1>This is the workshop page</h1>
  </div>
</template>
<script>
import SideBar from '@/components/SideBar.vue'
export default {
  name: 'Workshop',
  components: {
    SideBar
  }
}
</script>
<style scoped lang="scss">
    .workshop{
        height: 100%;
        width: 100vh;
        display: flex;
        flex-direction: row;
    }
</style>
