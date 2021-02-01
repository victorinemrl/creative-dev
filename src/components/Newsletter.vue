<template>
  <div class="newsletter">
     <input placeholder="Email" class="input"/>
     <vs-button color="#342D35" type="filled" icon="arrow_right_alt" size="small" class="button"/>
  </div>
</template>

<script>
export default {
  name: 'Newsletter'
}
</script>

<style scoped lang="scss">
  .newsletter{
    display: flex;
    flex-direction: row;
    .input{
      margin-top: 0vh;
      border-color: #342D35;
      border-width: 1px;
      background: none;
      width: 22vh;
      padding-left: 1vw;
    }
    .button{
      border-radius: 0;
    }

  }
</style>
