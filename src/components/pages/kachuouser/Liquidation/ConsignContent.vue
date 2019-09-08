<template>
<div class="wrap">
<Header :titleContent="TitleObjData.titleContent" :showLeftBack="TitleObjData.showLeftBack" :showRightMore="TitleObjData.showRightMore"></Header>
    <div class="normal-content" :style="conHei">
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
                  <div class="gar-price">购买价￥<span>{{item.price}}</span></div>
                </div>
              </div>
            </template>
          </cell>
        </div>
        <div class="tab-card input-card ">
          <x-input title="寄卖价格：" v-model="maskValue" placeholder="请输入商品寄卖价格" @on-change="onChange()">
            <template slot="right">元</template>
          </x-input>
        </div>
    </div>
    <div class="end-button">
      <x-button :disabled="disable001">立即寄卖</x-button>
    </div>
  </div>
</template>

<script>
import Header from "@/components/common/Header";
import { Cell ,XInput,XButton} from 'vux'
export default {
  data() {
    return {
      TitleObjData: {
        titleContent: "一键寄卖",
        showLeftBack: true,
        showRightMore: false
      },
      disable001:true,
      maskValue:'',
      list: [{
        src: require('./ddpic.png'),
        title: '李几已书法作品八仙李八仙八 几已书法作品蓬莱...',
        price: 300,
      }],
    };
  },
  methods:{
    onChange(){
      if (this.maskValue != "") {
        console.log('1111')
        this.disable001 = false
      } else{
        console.log('222')
        this.disable001 = true
      }
    },
  },
  components: {
    Header,
    Cell,
    XInput,
    XButton
  },
  computed: {
    conHei() {
      return { height: document.documentElement.clientHeight - 45 + "px" };
    }
  },
};
</script>
<style lang='css' scoped>
.normal-content{
  width: 100%;
  background: #F5F5F5;
  margin-top: 45px;
  overflow: hidden;
  overflow-y: scroll;
  padding: 15px;
  box-sizing: border-box;
}

.tab-card{
  background:rgba(255,255,255,1);
  box-shadow:0px 5px 10px 0px rgba(0,101,255,0.04);
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
.gar-price{
  margin-top: 10px;
  font-size: 12px;
}
.gar-price span{
  font-size: 14px;
}
.input-card .weui-label{
  font-size: 16px;
}

/* button */
.end-button{
  padding: 0 15px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 30px;
}
.end-button .weui-btn,
.end-button .weui-btn:active{
  border: 0;
  width: 100%;
  background-color: #3976FF;
  color: #FFFFFF;
}
.end-button .weui-btn_disabled{
  opacity: .5;
}


</style>
