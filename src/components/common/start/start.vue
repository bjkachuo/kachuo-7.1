<template>
    <div class="start">
      <div class="rater">
        <i v-for="i in 5" :style="{width:size+'px',height:size+'px'}" :class="{'greater-than':score >= i}"></i>
      </div>
    </div>
</template>

<script>
    export default {
        name: "start",

        props:['size','score'],


    }
</script>

<style scoped lang="less">
  .rater{
    font-size: 0;
    i{
      display: inline-block;
      background-size: 100% 100%;
      background-image: url("./start-k.png");
      margin-right: 4px;
    }
    .greater-than{
      background-image: url("./start-s.png");
    }
  }
</style>
