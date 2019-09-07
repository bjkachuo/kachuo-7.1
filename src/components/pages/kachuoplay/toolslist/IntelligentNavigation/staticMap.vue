<template>
  <div class="wrap">
    <div class="normal-content" :style="conHei" @touchstart="start($event)">
      <div class="relative" style="width: 833px">
        <img src="./2.jpg" alt="" width="833" height="1000" style="width: 833px">
        <div  v-for="item in markers" v-if="item.left != '0.00'">
          <div class="title" :style="{top: item.top+'%',left: item.left+'%',marginLeft: 'calc('+ -item.label.length / 2 +'em' +  ' - '+ (10+'px') +')' }" @click="showModel(item.label,item.position)">{{item.label}}</div>
          <div class="icon" :style="{top: item.top+'%',left: item.left+'%'}" @click="showModel(item.label,item.position)"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['markers'],
    data() {
      return {
        marks:[
          {title:'黄渤海分界线', left:'32.75%', top:'11.19%'},
          {title:'八仙礁', left:'46.83%', top:'14.8%'},
        ]
      };
    },
    methods:{
      start(e){
        console.log(e);
      },
      showModel(label,position){
        this.$parent.showModel(label,position)
      }
    },

    computed: {
      conHei() {
        return {
          height: document.documentElement.clientHeight - 45 + "px",
          overflow:'auto'
        };
      }
    },
  };
</script>
<style lang='css' scoped>
  .normal-content{
    margin-top: 46px;
  }
  .relative{
    position: relative;
  }
  .icon{
    margin-top: -33px;
    margin-left: -13px;
    width: 26px;
    height: 33px;
    background-image: url("./icon.png");
    background-size: 100% 100%;
    position: absolute;
  }
  .title{
    color: #fff;
    padding: 0 10px;
    position: absolute;
    border-radius: 4px;
    background-color:#000;
    line-height: 24px;
    margin-top: -60px;
  }
  img{
    height: auto;
  }
</style>
