<template>
  <div class="homeCanvas">
    <canvas id="canvas" width="300" height="300"></canvas>
  </div>
</template>

<script>
export default {
  name: 'HomeCanvas',
  mounted: function () {
    this.prepareCanvas() // method1 will execute at pageload
  },
  methods: {
    prepareCanvas () {
      const canvas = document.querySelector('#canvas')
      const ctx = canvas.getContext('2d')
      ctx.fillStyle = 'green'
      ctx.fillRect(10, 10, 100, 100)
    }
  }
}
</script>

<style scoped lang="scss">
    .homeCanvas{
        width: 4vw;
        height:100vh;
    }
</style>
