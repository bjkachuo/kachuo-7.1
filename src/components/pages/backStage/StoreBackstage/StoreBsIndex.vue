<template>
    <div class="index-wrap">
      <div class="top-one">
        <div class="title">
          <div class="title-left"> <x-icon type="ios-arrow-left" size="30"></x-icon></div>
          <div class="title-right"><p>商家管理后台</p></div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        props: {},
        data() {
            return {}
        },
        computed: {},
        watch: {},
        methods: {},
        components: {},
        filters: {}
    }
</script>

<style scoped lang="css">
  .index-wrap{
    height: 100%;
    width: 100%;
    background: #f5f5f5;
    overflow: hidden scroll;
  }
  .top-one{
    width: 100%;
    height: 240px;
    background: #3976FF;
  }
  .title{
    width: 100%;
    height: 44px;
    background: #01cd96;
  }
  .title-left{
    height: 44px;
    float: left;
  }
  .title-right{
    height: 44px;
    float: left;
    width: 108px;
  }
  .title-right p{
    line-height: 44px;
    font-size: 18px;
    color: #FFFFFF;
  }
</style>
