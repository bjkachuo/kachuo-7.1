<template>
  <div>
    <x-header class="customStyle" style="width: 100%;position: fixed;left: 0;top: 0;z-index: 100;font-size: 20px;">
      {{titleContent}}
      <a slot="right">{{rightText}}</a>
      <x-icon slot="overwrite-left" type="ios-arrow-left" size="35" style="fill:#222222;position:relative;top:-2px;left:-10px;" size="24" @click="back"></x-icon>
    </x-header>
  </div>
</template>

<script>
    import { XHeader,} from 'vux'
    export default {
        name: "header",

        props:['titleContent','rightText'],

        components:{XHeader},

        data(){
            return{

            }
        },

        methods:{
            back() {
                this.$router.goBack();
            },
        }
    }
</script>

<style scoped lang="less">
  .customStyle /deep/ .vux-header-title{
    color: #222222;
    font-weight: 500!important;
  }
  .customStyle /deep/ .vux-header-right a{
    font-size: 16px;
    color: #222222;
  }
</style>
