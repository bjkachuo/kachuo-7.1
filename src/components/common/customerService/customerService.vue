<template>
    <div>
      <div class="customer-service-icon" @click="iframeShow = true"></div>
      <iframe v-if='iframeShow' :src="usermobile" style="position: fixed;z-index: 99998;top: 0;left: 0;width: 100%;height: 100%;"></iframe>
      <div style="position: fixed;line-height: 46px;right: 54px;z-index: 999999;top: 0;color: #fff" v-if="iframeShow" @click="iframeShow = false">关闭</div>
    </div>
</template>

<script>
    export default {
        name: "customerService",

        data(){
          return{
            iframeShow:false,
            usermobile:''
          }
        },

        created() {
          this.usermobile = 'https://webchat.7moor.com/wapchat.html?accessId=2afa4960-b1df-11e9-9f4b-b35872e70bca&fromUrl=&urlTitle='+ this.GLOBAL.getSession("userLoginInfo").mobile
        }

    }
</script>

<style scoped lang="less">
  .customer-service-icon{
    width: 19px;
    height: 29px;
    background-image: url("./help-center.png");
    background-size: 100% 100%;
    /*margin-right: 15px;*/
  }
</style>
