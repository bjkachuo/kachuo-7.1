<template>
  <div class="wrap" v-if="show" style="position: fixed;left: 0;top:0;bottom: 0;right: 0;z-index: 99999">
    <div class="normal-content" :style="conHei">
      <div class="int-dailog">
        <div class="int-header">
          <div class="int-tit">积分说明</div>
          <div class="custom" @click="show = false">
            <x-icon type="ios-close-empty" size="30"></x-icon>
          </div>
          <div class="int-desc">
            <ul class="int-list">
              <li>1.通过浏览APP内景区文化视频和景点视频可 获得积分奖励</li>
              <li>2.通过浏览APP内景区文化视频和景点视频</li>
              <li>3.通过浏览APP内景区文化视频和景点视频</li>
            </ul>
          </div>
        </div>
        <div class="int-tab">
          <div @click="cur=0" :class="{active:cur==0}" class="int-item">
            <div class="int-box">
              <div class="txt">积分获取</div>
              <div class="desc">您已获得{{this.soreState.in_num}}积分</div>
            </div>
          </div>
          <div @click="cur=1" :class="{active:cur==1}" class="int-item">
            <div class="int-box">
              <div class="txt">积分消耗</div>
              <div class="desc">已消耗{{this.soreState.out_num}}积分</div>
            </div>
          </div>
        </div>
        <div class="int-body">
          <div v-if="cur==0">
            <div class="scroller">
              <cell v-for="(item,index) in this.addList" :key="index">
                <div slot="after-title" class="after-title">{{item.typename}}</div>
                <div slot="default" class="default">+{{item.integral}}分</div>
              </cell>
              <!-- <cell>
                <div slot="after-title" class="after-title">完善个人信息</div>
                <div slot="default" class="default">+1.25积分</div>
              </cell>
              <cell>
                <div slot="after-title" class="after-title">观看景区文化视频满5分钟</div>
                <div slot="default" class="default">+1.25积分</div>
              </cell>
              <cell>
                <div slot="after-title" class="after-title">注册登陆APP</div>
                <div slot="default" class="default">+1.25积分</div>
              </cell>
              <cell>
                <div slot="after-title" class="after-title">进行实名认证</div>
                <div slot="default" class="default">+1.25积分</div>
              </cell>
              <cell>
                <div slot="after-title" class="after-title">完善个人信息</div>
                <div slot="default" class="default">+1.25积分</div>
              </cell>
              <cell>
                <div slot="after-title" class="after-title">观看景区文化视频满5分钟</div>
                <div slot="default" class="default">+1.25积分</div>
              </cell>
              <cell>
                <div slot="after-title" class="after-title">注册登陆APP</div>
                <div slot="default" class="default">+1.25积分</div>
              </cell> -->
            </div>
          </div>
          <div v-if="cur==1">
            <div class="scroller">
              <cell v-for="(item,index) in this.increatList" :key="index">
                <div slot="after-title" class="after-title">{{item.typename}}</div>
                <div slot="default" class="default">-{{item.integral}}分</div>
              </cell>
              <!-- <cell>
                <div slot="after-title" class="after-title">在线订餐</div>
                <div slot="default" class="default">-221.25积分</div>
              </cell>
              <cell>
                <div slot="after-title" class="after-title">收藏视频5分钟</div>
                <div slot="default" class="default">-221.25积分</div>
              </cell>
              <cell>
                <div slot="after-title" class="after-title">商品购买</div>
                <div slot="default" class="default">-221.25积分</div>
              </cell>
              <cell>
                <div slot="after-title" class="after-title">商品购买</div>
                <div slot="default" class="default">-221.25积分</div>
              </cell>
              <cell>
                <div slot="after-title" class="after-title">在线订餐</div>
                <div slot="default" class="default">-221.25积分</div>
              </cell>
              <cell>
                <div slot="after-title" class="after-title">收藏视频5分钟</div>
                <div slot="default" class="default">-221.25积分</div>
              </cell>
              <cell>
                <div slot="after-title" class="after-title">商品购买</div>
                <div slot="default" class="default">-221.25积分</div>
              </cell>
              <cell>
                <div slot="after-title" class="after-title">商品购买</div>
                <div slot="default" class="default">-221.25积分</div>
              </cell>
              <cell>
                <div slot="after-title" class="after-title">在线订餐</div>
                <div slot="default" class="default">-221.25积分</div>
              </cell>
              <cell>
                <div slot="after-title" class="after-title">收藏视频5分钟</div>
                <div slot="default" class="default">-221.25积分</div>
              </cell>
              <cell>
                <div slot="after-title" class="after-title">商品购买</div>
                <div slot="default" class="default">-221.25积分</div>
              </cell> -->
            </div>
          </div>
        </div>
        <div class="int-botton" @click="goPay">
          <x-button>充值积分</x-button>
        </div>
      </div>
    </div>
    <div class="v-modal" tabindex="0"></div>
  </div>
</template>

<script>
import { Cell, XDialog, XButton, Group, XSwitch, Scroller } from "vux";
export default {
  components: { Cell, XDialog, XButton, Group, XSwitch, Scroller },
  data() {
    return {
      TitleObjData: {
        titleContent: "积分说明",
        showLeftBack: true,
        showRightMore: false
      },
      cur: 0, //默认选中第一个tab
      showHideOnBlur: false,
      show: false,
      addList:[],
      increatList:[],
      //已经获得已经消耗的积分
      soreState:[]
    };
  },
  mounted() {
    this.$http
      .post(
        "https://core.kachuo.com/app/ewei_shopv2_app.php?i=5&c=site&a=entry&m=ewei_shopv2&do=mobile&r=integral.int_log_itf"
      )
      .then(({ data }) => {
        console.log(data);
        this.addList = data.data.in;
        this.increatList = data.data.out;
        console.log(this.addList)
        console.log(this.increatList)
        this.soreState = data.data;
        console.log(this.soreState,1111)
      });
  },

  methods: {
    goPay() {
      this.$router.push("/Recharge");
    }
  },
  computed: {
    conHei() {
      return {
        height: document.documentElement.clientHeight - 45 + "px"
      };
    }
  }
};
</script>
<style lang='less' scoped>
.normal-content {
  width: 100%;
  background: #f5f5f5;
  margin-top: 45px;
  overflow: hidden;
  overflow-y: scroll;
  padding: 15px;
  box-sizing: border-box;
}
.int-dailog {
  background-color: #ffffff;
  border-radius: 12px;
  color: #697594;
  position: fixed;
  width: 320px;
  top: 50%;
  left: 50%;
  margin-left: -160px;
  transform: translateY(-50%);
  z-index: 99999;
}
.int-botton {
  padding: 22px 15px;
}
.int-botton .weui-btn_default {
  background: linear-gradient(
    90deg,
    rgba(57, 118, 255, 1) 0%,
    rgba(57, 150, 255, 1) 100%
  );
  border-radius: 50px;
  height: 50px;
  line-height: 50px;
  border: 0;
  color: #ffffff;
  font-size: 16px;
}
.int-header {
  padding: 15px 20px;
  position: relative;
  .custom {
    position: absolute;
    right: 0;
    top: 12px;
  }
}
.int-list {
  font-size: 14px;
  line-height: 2;
}
.int-tit {
  position: relative;
  font-size: 18px;
  font-weight: bold;
  padding-bottom: 10px;
  text-align: center;
  margin-bottom: 10px;
}
.int-tit:after {
  width: 40px;
  height: 2px;
  background-color: #ebeef5;
  content: "　";
  position: absolute;
  bottom: 0;
  left: 50%;
  margin-left: -20px;
}
.int-tab {
  position: relative;
  height: 80px;
  margin: 0 -10px;
  background-color: #fff;
}
.int-tab:before {
  display: block;
  content: "　";
  width: 0;
  height: 0;
  overflow: hidden;
  font-size: 0; /*是因为, 虽然宽高度为0, 但在IE6下会具有默认的 */
  line-height: 0; /* 字体大小和行高, 导致盒子呈现被撑开的长矩形 */
  border-width: 10px 0px 10px 10px;
  border-style: solid; /*IE6下, 设置余下三条边的border-style为dashed,即可达到透明的效果*/
  border-color: #214394 transparent transparent transparent;
  position: absolute;
  left: 0;
  bottom: -20px;
}
.int-tab:after {
  display: block;
  content: "　";
  width: 0;
  height: 0;
  overflow: hidden;
  font-size: 0; /*是因为, 虽然宽高度为0, 但在IE6下会具有默认的 */
  line-height: 0; /* 字体大小和行高, 导致盒子呈现被撑开的长矩形 */
  border-width: 0 0px 10px 10px;
  border-style: solid; /*IE6下, 设置余下三条边的border-style为dashed,即可达到透明的效果*/
  border-color: transparent transparent transparent #214394;
  position: absolute;
  right: 0;
  bottom: -10px;
}
.int-tab .int-item {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  width: 50%;
  float: left;
  box-shadow: 0px 10px 30px 0px rgba(0, 101, 255, 0.16);
  height: 80px;
}
.int-item .int-box {
  text-align: center;
  width: 100%;
}
.int-box .txt {
  color: #9ebbff;
  font-size: 17px;
}
.int-box .txt {
  color: #9ebbff;
  font-size: 17px;
}
.int-box .desc {
  color: #b7cdff;
  font-size: 14px;
  display: none;
}
.int-item.active {
  background-color: #3976ff;
  color: #ffffff;
}
.int-item.active .txt {
  color: #ffffff;
}
.int-item.active .desc {
  display: block;
}
.scroller {
  height: 168px;
  overflow-y: auto;
  overflow-x: hidden;
}
.v-modal {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  background: #000;
  z-index: 88889;
}
</style>
