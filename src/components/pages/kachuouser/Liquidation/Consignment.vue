<template>
<div class="wrap">
<Header
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
    ></Header>
    <div class="normal-content" :style="conHei">
        <div class="key-header">
          已拥有的溯源商品(3)
        </div>
        <div class="tab-card" v-for="(item,index) in list">
          <cell>
            <template slot="icon">
              <div class="gar-photo">
                <img :src="item.src" alt="">
              </div>
            </template>
            <template slot="after-title">
              <div class="gar-body">
                <div class="gar-header">
                  <div class="gar-title">{{item.title}}</div>
                </div>
                <div class="gar-foot">
                  <div class="button" @click="goJimai">我要寄卖</div>
                </div>
              </div>
            </template>
          </cell>
        </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/common/Header";
import { Tabbar, TabbarItem ,Cell} from 'vux'
export default {
  data() {
    return {
      TitleObjData: {
        titleContent: "一键寄卖",
        showLeftBack: true,
        showRightMore: false
      },
      list: [{
        src: require('./ddpic.png'),
        title: '李几已书法作品八仙李八仙八 几已书法作品蓬莱...',
      },{
        src: require('./ddpic.png'),
        title: '李几已书法作品八仙李八仙八 几已书法作品蓬莱...',
      },{
        src: require('./ddpic.png'),
        title: '李几已书法作品八仙李八仙八 几已书法作品蓬莱...',
      },],
    };
  },
  components: {
    Header,
    Tabbar,
    TabbarItem,
    Cell
  },
  computed: {
    conHei() {
      return { height: document.documentElement.clientHeight - 45 + "px" };
    }
  },

  methods:{
    goJimai(){
      this.$router.push('/Liquidation/ConsignContent')
    }
  }
};
</script>
<style lang='css' scoped>
.normal-content{
  width: 100%;
  background: #F5F5F5;
  overflow: hidden;
  overflow-y: scroll;
  padding: 15px 0;
  box-sizing: border-box;
}

.tab-card{
  background:rgba(255,255,255,1);
  box-shadow:0px 10px 15px 0px rgba(0,101,255,0.05);
  border-radius:8px;
  overflow: hidden;
  margin-bottom: 15px;
}
.tab-card .weui-cell{
  padding: 15px;
}
.gar-photo{
  width: 90px;
  height: 90px;
  margin-right: 15px;
}
.gar-photo img{
  width: 90px;
  height: 90px;
  border-radius: 4px;
}
.tab-card .weui-btn{
  border-radius: 35px;
  height: 35px;
  width: 90px;
  font-size: 14px;
  margin: 0;
}
.tab-card .weui-btn:after{
  display: none;
}
.btn-blue{
  color: #fff;
  background:linear-gradient(90deg,rgba(57,118,255,1) 0%,rgba(57,150,255,1) 100%);
}
.gar-title{
  font-size: 14px;
}
.gar-body{
  height: 90px;
  line-height: 1.4;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  flex-direction:column
}
.gar-foot{
  text-align: right;
}
.gar-foot .button{
  width: 100px;
  height: 35px;
  background-color: #3976FF;
  color: #FFFFFF;
  font-size: 15px;
  line-height: 35px;
  border-radius: 35px;
  display: inline-block;
  text-align: center;
}
.key-header{
  font-size: 16px;
  margin-bottom: 10px;
  padding: 0 15px;
}





</style>
