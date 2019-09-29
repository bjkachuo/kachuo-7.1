<template>
  <div class="wrap" style="overflow-y:scroll;height: 92%;">
    <x-header class="in-header" :class="{isFixed:isFixeds==true}" id="headerBar">
      详情
      <div slot="right" style="display:none">
        <div class="help-icon">帮助</div>
      </div>
    </x-header>
    <div class="normal-content">
      <div class="shop-grid">
        <div class="shop-card">
          <div class="shop-title">{{this.storeDetails.name}}</div>
          <cell class="shop-cell">
            <img slot="icon" class="order-pic" :src="this.storeDetails.video_image" />
            <div class="play-img" @click="showDialogStyle = !showDialogStyle">
              <img src="../../assets/images/playv.png" alt />
            </div>
            <!-- <x-dialog
              v-model="showDialogStyle"
              hide-on-blur
              :dialog-style="{'max-width': '100%', width: '100%', height: '50%', 'background-color': 'transparent'}"
            >
              <p style="color:#fff;text-align:center;" @click="showDialogStyle = false">
                <span style="font-size:30px;">HELLO WORLD</span>
                <br />
                <br />
                <x-icon type="ios-close-outline" style="fill:#fff;"></x-icon>
              </p>
            </x-dialog>-->
            <x-dialog v-model="showDialogStyle" hide-on-blur>
              <p style="color:#fff;text-align:center;width:80%" @click="showDialogStyle = false">
                <video
                  :src="this.storeDetails.video"
                  :poster="this.storeDetails.video_image"
                  controlslist="nodownload"
                  preload="none"
                  controls="controls"
                  x5-video-orientation="landscape"
                ></video>
                <span class="vux-close" @click="showToast=false"></span>
              </p>
            </x-dialog>

            <template slot="after-title">
              <div class="raty-body">
                <div class="raty-num">{{this.data1}}分</div>
                <rater
                  v-model="data1"
                  star="<i class='star'></i>"
                  active-color="red"
                  :margin="0"
                  disabled
                ></rater>
                <div class="comment-item">(12条评价)</div>
              </div>
              <div class="cell-item">人均31元</div>
              <div class="cell-attr">特色：串串香、麻辣烫</div>
            </template>
          </cell>
          <div class="shop-footer">
            <div class="distance">距离1.3</div>
            <div class="link-heart"></div>
          </div>
        </div>
        <div class="shop-photo">
          <img class="blur" :src="this.storeDetails.video_image" alt />
        </div>
      </div>
      <div class="vx-main" id="vxMain" :class="{mainFixeds:mainFixeds==true}">
        <div class="vx-tab">
          <div @click="cur=0" class="vx-tab-item active" :class="{active:cur==0}">
            <span>点餐</span>
          </div>
          <div @click="cur=1" class="vx-tab-item" :class="{active:cur==1}">
            <span>商家</span>
          </div>
        </div>
        <div class="tab-pane" v-if="cur==0">
          <div class="dc-panel">
            <div class="dc-navbar">
              <!-- <div
                v-for="(tab ,index) in tabs"
                :key="index"
                :class="{cur:iscur==index}"
                @click="iscur=index,tabChange('list' + (index + 1))"
              >{{tab.name}}</div>-->
              <div
                @click="iscur=index,tabChange('list' + (index + 1))"
                :class="{cur:iscur==index}"
                v-for="(item,index) in this.storeDetails.goods_class_msg"
                :key="index"
              >{{item.class_name}}</div>
            </div>
            <div
              class="dc-cells"
              v-show="iscur==index"
              v-for="(item,index) in this.storeDetails.goods_msg"
              :key="index"
            >
              <div class="goods-list">
                <!-- <div class="list-tt">1</div> -->
                <div class="lists">
                  <cell>
                    <img slot="icon" class="order-pic" :src="item.image" />
                    <template slot="after-title">
                      <div class="cell-title">{{item.name}}</div>
                      <div class="list-foot">
                        <div class="cell-price">
                          <span>￥</span>
                          {{item.price}}
                        </div>
                        <x-number
                          width="30px"
                          :min="0"
                          class="x-number"
                          button-style="round"
                          @on-change="change(item.price,index)"
                          v-model="item.num"
                        ></x-number>
                      </div>
                    </template>
                  </cell>
                  <!-- <cell>
                    <img slot="icon" class="order-pic" src="../../assets/images/dingdan.png" />
                    <template slot="after-title">
                      <div class="cell-title">青椒牛肉</div>
                      <div class="list-foot">
                        <div class="cell-price">
                          <span>￥</span>1.5
                        </div>
                        <x-number width="30px" :min="0" class="x-number" button-style="round"></x-number>
                      </div>
                    </template>
                  </cell>-->
                  <!-- <cell>
                    <img slot="icon" class="order-pic" src="../../assets/images/dingdan.png" />
                    <template slot="after-title">
                      <div class="cell-title">青椒牛肉</div>
                      <div class="list-foot">
                        <div class="cell-price">
                          <span>￥</span>1.5
                        </div>
                        <x-number width="30px" :min="0" class="x-number" button-style="round"></x-number>
                      </div>
                    </template>
                  </cell>
                  <cell>
                    <img slot="icon" class="order-pic" src="../../assets/images/dingdan.png" />
                    <template slot="after-title">
                      <div class="cell-title">青椒牛肉</div>
                      <div class="list-foot">
                        <div class="cell-price">
                          <span>￥</span>1.5
                        </div>
                        <x-number width="30px" :min="0" class="x-number" button-style="round"></x-number>
                      </div>
                    </template>
                  </cell>
                  <cell>
                    <img slot="icon" class="order-pic" src="../../assets/images/dingdan.png" />
                    <template slot="after-title">
                      <div class="cell-title">青椒牛肉</div>
                      <div class="list-foot">
                        <div class="cell-price">
                          <span>￥</span>1.5
                        </div>
                        <x-number width="30px" :min="0" class="x-number" button-style="round"></x-number>
                      </div>
                    </template>
                  </cell>
                  <cell>
                    <img slot="icon" class="order-pic" src="../../assets/images/dingdan.png" />
                    <template slot="after-title">
                      <div class="cell-title">青椒牛肉</div>
                      <div class="list-foot">
                        <div class="cell-price">
                          <span>￥</span>1.5
                        </div>
                        <x-number width="30px" :min="0" class="x-number" button-style="round"></x-number>
                      </div>
                    </template>
                  </cell>
                  <cell>
                    <img slot="icon" class="order-pic" src="../../assets/images/dingdan.png" />
                    <template slot="after-title">
                      <div class="cell-title">青椒牛肉</div>
                      <div class="list-foot">
                        <div class="cell-price">
                          <span>￥</span>1.5
                        </div>
                        <x-number width="30px" :min="0" class="x-number" button-style="round"></x-number>
                      </div>
                    </template>
                  </cell>
                  <cell>
                    <img slot="icon" class="order-pic" src="../../assets/images/dingdan.png" />
                    <template slot="after-title">
                      <div class="cell-title">青椒牛肉</div>
                      <div class="list-foot">
                        <div class="cell-price">
                          <span>￥</span>1.5
                        </div>
                        <x-number width="30px" :min="0" class="x-number" button-style="round"></x-number>
                      </div>
                    </template>
                  </cell>-->
                </div>
              </div>
            </div>
            <!-- <div class="dc-cells"  v-show="iscur==1">
              <div class="goods-list">
                <div class="list-tt">2</div>
                <div class="lists">
                  <cell>
                    <img slot="icon" class="order-pic" src="../../assets/images/dingdan.png" />
                    <template slot="after-title">
                      <div class="cell-title">青椒牛肉</div>
                      <div class="list-foot">
                        <div class="cell-price">
                          <span>￥</span>1.5
                        </div>
                        <x-number width="30px" :min="0" class="x-number" button-style="round" ></x-number>
                      </div>
                    </template>
                  </cell>
                  <cell>
                    <img slot="icon" class="order-pic" src="../../assets/images/dingdan.png" />
                    <template slot="after-title">
                      <div class="cell-title">青椒牛肉</div>
                      <div class="list-foot">
                        <div class="cell-price">
                          <span>￥</span>1.5
                        </div>
                        <x-number width="30px" :min="0" class="x-number" button-style="round"></x-number>
                      </div>
                    </template>
                  </cell>
                  <cell>
                    <img slot="icon" class="order-pic" src="../../assets/images/dingdan.png" />
                    <template slot="after-title">
                      <div class="cell-title">青椒牛肉</div>
                      <div class="list-foot">
                        <div class="cell-price">
                          <span>￥</span>1.5
                        </div>
                        <x-number width="30px" :min="0" class="x-number" button-style="round"></x-number>
                      </div>
                    </template>
                  </cell>
                </div>
              </div>
            </div>
            <div class="dc-cells"  v-show="iscur==2">
              <div class="goods-list">
                <div class="list-tt">3</div>
                <div class="lists">
                  <cell>
                    <img slot="icon" class="order-pic" src="../../assets/images/dingdan.png" />
                    <template slot="after-title">
                      <div class="cell-title">青椒牛肉</div>
                      <div class="list-foot">
                        <div class="cell-price">
                          <span>￥</span>1.5
                        </div>
                        <x-number width="30px" :min="0" class="x-number" button-style="round"></x-number>
                      </div>
                    </template>
                  </cell>
                  <cell>
                    <img slot="icon" class="order-pic" src="../../assets/images/dingdan.png" />
                    <template slot="after-title">
                      <div class="cell-title">青椒牛肉</div>
                      <div class="list-foot">
                        <div class="cell-price">
                          <span>￥</span>1.5
                        </div>
                        <x-number width="30px" :min="0" class="x-number" button-style="round"></x-number>
                      </div>
                    </template>
                  </cell>
                  <cell>
                    <img slot="icon" class="order-pic" src="../../assets/images/dingdan.png" />
                    <template slot="after-title">
                      <div class="cell-title">青椒牛肉</div>
                      <div class="list-foot">
                        <div class="cell-price">
                          <span>￥</span>1.5
                        </div>
                        <x-number width="30px" :min="0" class="x-number" button-style="round"></x-number>
                      </div>
                    </template>
                  </cell>
                </div>
              </div>
            </div>
            <div class="dc-cells"  v-show="iscur==3">
              <div class="goods-list">
                <div class="list-tt">4</div>
                <div class="lists">
                  <cell>
                    <img slot="icon" class="order-pic" src="../../assets/images/dingdan.png" />
                    <template slot="after-title">
                      <div class="cell-title">青椒牛肉</div>
                      <div class="list-foot">
                        <div class="cell-price">
                          <span>￥</span>1.5
                        </div>
                        <x-number width="30px" :min="0" class="x-number" button-style="round"></x-number>
                      </div>
                    </template>
                  </cell>
                  <cell>
                    <img slot="icon" class="order-pic" src="../../assets/images/dingdan.png" />
                    <template slot="after-title">
                      <div class="cell-title">青椒牛肉</div>
                      <div class="list-foot">
                        <div class="cell-price">
                          <span>￥</span>1.5
                        </div>
                        <x-number width="30px" :min="0" class="x-number" button-style="round"></x-number>
                      </div>
                    </template>
                  </cell>
                </div>
              </div>
            </div>
            <div class="dc-cells"  v-show="iscur==4">
              <div class="goods-list">
                <div class="list-tt">5</div>
                <div class="lists">
                  <cell>
                    <img slot="icon" class="order-pic" src="../../assets/images/dingdan.png" />
                    <template slot="after-title">
                      <div class="cell-title">青椒牛肉</div>
                      <div class="list-foot">
                        <div class="cell-price">
                          <span>￥</span>1.5
                        </div>
                        <x-number width="30px" :min="0" class="x-number" button-style="round"></x-number>
                      </div>
                    </template>
                  </cell>
                  <cell>
                    <img slot="icon" class="order-pic" src="../../assets/images/dingdan.png" />
                    <template slot="after-title">
                      <div class="cell-title">青椒牛肉</div>
                      <div class="list-foot">
                        <div class="cell-price">
                          <span>￥</span>1.5
                        </div>
                        <x-number width="30px" :min="0" class="x-number" button-style="round"></x-number>
                      </div>
                    </template>
                  </cell>
                </div>
              </div>
            </div>
            <div class="dc-cells"  v-show="iscur==5">
              <div class="goods-list">
                <div class="list-tt">6</div>
                <div class="lists">
                  <cell>
                    <img slot="icon" class="order-pic" src="../../assets/images/dingdan.png" />
                    <template slot="after-title">
                      <div class="cell-title">青椒牛肉</div>
                      <div class="list-foot">
                        <div class="cell-price">
                          <span>￥</span>1.5
                        </div>
                        <x-number width="30px" :min="0" class="x-number" button-style="round"></x-number>
                      </div>
                    </template>
                  </cell>
                </div>
              </div>
            </div>
            <div class="dc-cells"  v-show="iscur==6">
              <div class="goods-list">
                <div class="list-tt">7</div>
                <div class="lists">
                  <cell>
                    <img slot="icon" class="order-pic" src="../../assets/images/dingdan.png" />
                    <template slot="after-title">
                      <div class="cell-title">青椒牛肉</div>
                      <div class="list-foot">
                        <div class="cell-price">
                          <span>￥</span>1.5
                        </div>
                        <x-number width="30px" :min="0" class="x-number" button-style="round"></x-number>
                      </div>
                    </template>
                  </cell>
                  <cell>
                    <img slot="icon" class="order-pic" src="../../assets/images/dingdan.png" />
                    <template slot="after-title">
                      <div class="cell-title">青椒牛肉</div>
                      <div class="list-foot">
                        <div class="cell-price">
                          <span>￥</span>1.5
                        </div>
                        <x-number width="30px" :min="0" class="x-number" button-style="round"></x-number>
                      </div>
                    </template>
                  </cell>
                </div>
              </div>
            </div>-->
          </div>
        </div>
        <div class="tab-pane" v-if="cur==1">
          <div class="tab-cells">
            <cell title="联系方式:(0535)5666900" is-link @click.native="showTel">
              <img class="ticon" slot="icon" src="../../assets/images/telicon@2x.png" />
            </cell>
            <cell title="商家地址：山东省蓬莱市海滨路南区巷6号">
              <img class="ticon" slot="icon" src="../../assets/images/dizhi.png" />
            </cell>
          </div>
          <div class="tab-cells">
            <cell title="营业资质" @click.native="fications" is-link>
              <img class="ticon" slot="icon" src="../../assets/images/yingyezizhi.png" />
            </cell>
          </div>
        </div>
      </div>
      <div class="btm-bar">
        <div class="btm-price">
          实付
          <span class="price" style="color:#ff3939;">
            ￥
            <i>{{this.endPrice}}</i>
          </span>
        </div>
        <x-button @click.native="goEatOrder">去下单</x-button>
      </div>
    </div>
    <actionsheet
      v-model="show1"
      :menus="menus1"
      show-cancel
      @on-click-mask="console('on click mask')"
    ></actionsheet>
  </div>
</template>

<script>
import {
  XHeader,
  Cell,
  XButton,
  XInput,
  Group,
  Rater,
  Actionsheet,
  XNumber,
  XDialog
} from "vux";
export default {
  beforeCreate: function() {
    document.querySelector("body").setAttribute("style", "height:auto");
  },
  data() {
    return {
      //视频遮照
      showDialogStyle: false,
      isFixeds: false,
      mainFixeds: false,
      //选了商品的数量
      changeValue: [],
      //最终计算出的价格
      endPrice: 0,
      //默认选择第一个
      iscur: 0,
      //默认选中点餐
      cur: 0,
      //星星数！
      data1: 4,
      //获取到的商家id
      idNum: "",
      //商家详情数组
      storeDetails: {},
      //评论列表数组
      commentList: [],
      //商家名称
      storeName: "",
      //商家id
      businessId: "",
      //下方是否弹出电话
      show1: false,
      BarFixed: false,
      menus1: [
        {
          label: "拨打电话",
          type: "disabled"
        },
        {
          label: "(0535)5666900"
        }
      ]
    };
  },
  methods: {
    //点击播放视频
    // playVideo() {
    //   alert("hhhh");
    // },
    //点餐数量
    change(price, index) {
      console.log(this.storeDetails);
      //将选中的商品放入seesion
      sessionStorage.setItem(
        "storeDetails",
        JSON.stringify(this.storeDetails.goods_msg)
      );

      // this.endPrice = this.changeValue[index] * price;
    },
    //滚动  判断固定
    handleScroll() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      let offsetTop = document.querySelector("#vxMain").offsetTop;
      this.mainFixeds = scrollTop > offsetTop - 20; // 44px是导航标题头的高度
      if (scrollTop > 45) {
        //提前判断要上升多少像素就固定
        this.isFixeds = true;
      } else {
        this.isFixeds = false;
      }
    },
    //
    // url(link) {
    //   this.$router.push(link);
    // },
    showTel() {
      this.show1 = !this.show1;
      console.log(show1);
    },
    onClick() {
      console.log();
    },
    tabChange: function(tab) {
      this.tabView = tab;
      document.documentElement.scrollTop = 244;
    },
    //去吃喝下订单页
    goEatOrder() {
      this.$router.push(
        "/eatDrinkOrders?storeName=" +
          this.storeName +
          "&endPrice=" +
          this.endPrice +
          "&businessId=" +
          this.businessId +
          "&type=" +
          this.storeDetails.type
      );
    },
    //跳转资质页面
    fications() {
      this.$router.push("/Qualifications");
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    //获取列表页传来的id
    console.log(this.$route.query);
    this.idNum = this.$route.query.idNum;
    //获取商家详情！
    this.$http
      .post(
        "https://core.kachuo.com/app/ewei_shopv2_app.php?i=5&c=site&a=entry&m=ewei_shopv2&do=mobile&r=scenic.index.business_info&id=" +
          this.idNum
      )
      .then(({ data }) => {
        var obj = data.data;
        obj.goods_msg.forEach(item => {
          item.num = 0;
          console.log(item);
        });
        console.log(obj);
        this.storeDetails = obj;
        this.data1 = data.data.score - 0;
        this.storeName = data.data.name;
        this.businessId = data.data.id;
      });
  },
  components: {
    XHeader,
    Cell,
    XInput,
    XButton,
    Group,
    Rater,
    Actionsheet,
    XNumber,
    XDialog
  },
  watch: {
    storeDetails: {
      deep: true,
      handler: function(newVal, oldVal) {
        let price = 0;
        newVal.goods_msg.forEach(item => {
          price += item.price * item.num;
          this.endPrice = price;
        });
      }
    }
  }
};
</script>
<style lang='css' scoped>
video {
  object-fit: fill;
  width: 125%;
}

.normal-content {
  /* padding-bottom: 90%; */
  background: #f5f5f5;
}
.vx-tab {
  padding: 0 15px;
  overflow: hidden;
  margin-bottom: 15px;
}
.vx-tab .vx-tab-item {
  position: relative;
  float: left;
  width: 120px;
  font-size: 20px;
}
.vx-tab .vx-tab-item span {
  position: relative;
  font-size: 20px;
  z-index: 2;
  display: inline-block;
}
.vx-tab-item.active {
  font-weight: bold;
}
.vx-tab-item.active:after {
  content: "　";
  display: block;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 42px;
  height: 8px;
  background: rgba(209, 223, 255, 1);
  border-radius: 8px;
}
.tab-cells {
  box-shadow: 0px 6px 10px 0px rgba(0, 101, 255, 0.04);
  border-radius: 8px;
  overflow: hidden;
  background-color: #ffffff;
  margin-bottom: 10px;
}
.ticon {
  width: 15px;
  height: 15px;
  background: none;
  margin-right: 10px;
}
.tab-cells .weui-cell {
  font-size: 16px;
  padding: 15px;
}
.btm-bar {
  position: fixed;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ffffff;
  box-shadow: 0px -5px 10px 0px rgba(0, 101, 255, 0.08);
  height: 55px;
}
.btm-bar .weui-btn_default,
.btm-bar .weui-btn_default:active {
  background-color: #3987ff;
  height: 55px;
  width: 120px;
  color: #ffffff;
  border: 0;
  border-radius: 0;
  margin: 0;
}
.btm-price {
  padding: 0 15px;
  font-size: 16px;
  text-align: right;
  width: calc(100% - 120px);
  box-sizing: border-box;
}
.btm-price .price {
  font-weight: bold;
}
.btm-price .price i {
  font-style: normal;
  font-size: 20px;
}
.shop-grid {
  position: relative;
  padding: 15px;
  padding-top: 80px;
}
.shop-grid .shop-photo {
  width: 100%;
  height: 200px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  overflow: hidden;
}
.shop-grid .shop-photo img {
  width: 100%;
  height: 100%;
}
.shop-card {
  position: relative;
  z-index: 3;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.1);
}
.blur {
  filter: blur(3px);
  -webkit-filter: blur(3px); /* chrome, opera */
  -ms-filter: blur(3px);
  -moz-filter: blur(3px);
}
.order-pic {
  border-radius: 4px;
  display: block;
  width: 80px;
  height: 50px;
  margin-right: 10px;
}
.shop-cell {
  line-height: 14px;
  padding: 0 15px;
  position: relative;
}
.shop-cell .play-img {
  position: absolute;
  left: 14px;
  top: 0;
}
.shop-cell .play-img img {
  background-position: center;
  background-repeat: no-repeat;
  background-color: #fff;
  background: rgba(52, 52, 52, 0.5);
  background-size: 10px;
}
.shop-cell:before {
  display: none;
}
.shop-cell .cell-item {
  font-size: 12px;
  margin-top: 3px;
}
.shop-cell .cell-attr {
  font-size: 12px;
  color: #666666;
  line-height: 1;
  padding-left: 20px;
  background: url(../../assets/images/fangzi.png) left center no-repeat;
  background-size: contain;
  margin-top: 5px;
}
.raty-body /deep/ .vux-rater {
  font-size: 0;
}
.raty-body /deep/ .vux-rater a {
  width: 14px !important;
  line-height: 1 !important;
  height: 14px !important;
  font-size: 0 !important;
}
.raty-body /deep/ .star {
  display: inline-block;
  width: 12px;
  height: 12px;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(../../assets/images/star_off.png);
  background-size: contain;
}
.raty-body /deep/ .is-active .star {
  background-image: url(../../assets/images/star_on.png);
}
.raty-body * {
  display: inline-block;
  vertical-align: middle;
  font-size: 12px;
}
.shop-title {
  font-size: 20px;
  padding: 15px;
  line-height: 1;
}
.shop-footer {
  padding: 15px;
  overflow: hidden;
}
.distance {
  float: left;
  padding: 4px 8px;
  border-radius: 50px;
  line-height: 1;
  background-color: #f5f5f5;
  font-size: 12px;
  margin-top: 5px;
}
.link-heart {
  display: none;
  background: url(../../assets/images/cancelzan.png) no-repeat;
  width: 30px;
  height: 30px;
  background-size: contain;
  float: right;
}
.dc-panel {
  position: relative;
  min-height: 440px;
  padding: 0 10px 10px 100px;
}
.dc-navbar {
  position: absolute;
  left: 10px;
  top: 0;
  width: 80px;
  text-align: center;
  box-shadow: 0px 5px 10px 0px rgba(0, 101, 255, 0.06);
  border-radius: 8px;
  background-color: #ffffff;
  overflow: hidden;
}
.dc-navbar div {
  height: 50px;
  line-height: 50px;
  font-size: 14px;
}
.dc-navbar .cur {
  background-color: #ccdcff;
  font-weight: bold;
}
/* header */
.in-header {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  z-index: 888;
  color: #ffffff;
  transition: 0.4s all;
  background: none !important;
}
.in-header /deep/ .vux-header-title {
  color: #ffffff !important;
}
.in-header /deep/ .vux-header-left a,
.in-header /deep/.vux-header-left button,
.in-header /deep/ .vux-header-right a,
.in-header /deep/ .vux-header-right button {
  color: #ffffff !important;
}
.in-header /deep/ .vux-header-left .left-arrow:before {
  border-color: #fff !important;
}
.help-icon {
  line-height: 1;
  background: url(../../assets/images/help.png) center top no-repeat;
  background-size: 18px 18px;
  padding-top: 20px;
  font-size: 12px;
}
.in-header.isFixed {
  position: fixed;
  z-index: 111;
  background-color: #ffffff !important;
  color: #222222;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.08);
}
.in-header.isFixed /deep/ .vux-header-title {
  color: #222222 !important;
}
.vux-header /deep/ .vux-header-right {
  top: 10px;
}
.in-header.isFixed /deep/ .vux-header-left a,
.in-header.isFixed /deep/ .vux-header-left button,
.in-header.isFixed /deep/ .vux-header-right a,
.in-header.isFixed /deep/ .vux-header-right button {
  color: #222 !important;
}
.in-header.isFixed /deep/ .vux-header-left .left-arrow:before {
  border-color: #222 !important;
}

.in-header.isFixed /deep/ .help-icon {
  background: url(../../assets/images/help.png) left center no-repeat;

  background-size: 18px 18px;
}
.vx-main.mainFixeds /deep/ .dc-navbar {
  position: fixed;
  top: 54px;
}
/* 列表点餐 */
.goods-list {
  padding: 20px 15px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 10px 20px 0px rgba(0, 101, 255, 0.08);
  border-radius: 8px 8px 0px 0px;
}
.order-pic {
  display: block;
  width: 55px;
  height: 55px;
  border-radius: 4px;
  margin-right: 10px;
}
.list-foot {
  position: relative;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.cell-price {
  color: #ff3939;
  font-size: 14px;
}
.cell-title {
  font-size: 16px;
  line-height: 1.2;
  margin-bottom: 15px;
}
.cell-number {
  color: #999999;
  font-size: 14px;
  line-height: 1.2;
}
.lists .list-tt {
  font-size: 16px;
  line-height: 1.2;
}
.lists .weui-cell {
  padding: 15px 0;
}
.lists .weui-cell:before {
  display: none;
}
.lists .x-number {
  padding: 0;
}
.lists .x-number:before {
  display: none;
}
.lists /deep/ .vux-number-round .vux-number-selector-sub,
.lists /deep/ .vux-number-round .vux-number-selector-plus {
  border: 0;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}
.lists /deep/ .vux-number-round .vux-number-selector-sub {
  background-image: url(../../assets/images/jian.png);
}
.lists /deep/ .vux-number-round .vux-number-selector-plus {
  background-image: url(../../assets/images/jia.png);
}
.lists /deep/ .vux-number-disabled {
  display: none;
}
.lists /deep/ .vux-number-round .vux-number-selector-sub *,
.lists /deep/ .vux-number-round .vux-number-selector-plus * {
  display: none;
}
</style>
<style lang="less" scoped>
/deep/ .vux-x-dialog-absolute .weui-dialogP {
  position: fixed;
}
</style>
