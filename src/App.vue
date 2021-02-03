<template>
  <div id="app">
    <router-view name="default" />
  </div>
</template>
<script>
</script>
<style lang="css">
  html, body{
    margin: 0;
    padding: 0;
    font-family: 'Noto Sans TC', sans-serif;
  }
  @media only screen and (min-width: 300px) and (max-width: 900px){
    body{
      overflow: hidden;
    }
  }
</style>
