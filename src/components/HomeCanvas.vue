<template>
  <div class="homeCanvas">
  </div>
</template>

<script>
import { initialize } from '../scripts/canvas'

export default {
  name: 'HomeCanvas',
  mounted: function () {
    initialize() // method1 will execute at pageload
  }
}
</script>

<style scoped lang="scss">
    .homeCanvas{
        position: absolute;
        top: 0;
        left: 0;
    }
</style>
