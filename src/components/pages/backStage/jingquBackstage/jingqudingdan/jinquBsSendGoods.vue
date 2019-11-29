<template>
  <div class="goodsOrder-wrap">
    <Header
      style="margin-bottom: 46px"
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
    ></Header>
    <div class="receive" style="overflow:hidden;position: relative;">
      <div style="margin:10px 0px 10px 4.35%;">
        <p style="color: #222222;font-size: 16px;font-weight: bold">收货人：{{this.person}} {{this.phone}}</p>
      </div>
      <div style="margin:0 0 0 4.35%;"><p style="color: #222222;font-size: 12px;font-weight: 300;">
        {{this.province}}{{this.city}}{{this.area}}{{this.address}}</p></div>
      <div style="width:100%;height: 3px;position:absolute;bottom: 12px;"><img src="./xian.png" alt="" style="width: 100%"></div>
    </div>
    <div class="number">
      <div style=" margin: 10px 0px 0px 4.35%;">
        <p style="color: #222222;font-size:16px;">快递单号</p>
      </div>
      <div>
        <x-input placeholder="请输入快递单号" :show-clear="false" type="number" v-model="expressNum"></x-input>
      </div>
      <div style="width:92%;margin: 0px 0px 0px 2.35%;">
        <popup-picker title="请选择快递类型" :data="sendType" v-model="selectedSend" @on-show="onShow" @on-hide="onHide"
                      @on-change="onChange" show-name :columns="1"
        ></popup-picker>
      </div>
    </div>
    <div class="f-one">
      <div class="proInformation">
        <div class="tit-wrap">
          <p>商品信息</p>
        </div>
        <div style="width:92%;margin:0 auto 15px;height:1px;background:#E5E5E5;"></div>
        <div class="pro-infor" v-for="(item,index) in List.goodsMsg" :key="index">
          <div class="img-wrap">
            <img :src="item.thumb" alt/>
          </div>
          <div class="pro-mid">
            <div>
              <p>{{item.title}}</p>
            </div>
            <div style="margin-top:25px;">
              <p>￥{{item.price}}</p>
            </div>
          </div>
          <div class="pro-right">
            <p>x{{item.total}}</p>
          </div>
        </div>
        <!--        <div class="pro-infor">-->
        <!--          <div class="img-wrap">-->
        <!--            <img src alt/>-->
        <!--          </div>-->
        <!--          <div class="pro-mid">-->
        <!--            <div>-->
        <!--              <p>李几已书法作品蓬莱仙阁赋李 几已书法作品蓬莱</p>-->
        <!--            </div>-->
        <!--            <div style="margin-top:25px;">-->
        <!--              <p>￥600</p>-->
        <!--            </div>-->
        <!--          </div>-->
        <!--          <div class="pro-right" style="margin-top:38px;">-->
        <!--            <p>x1</p>-->
        <!--          </div>-->
        <!--        </div>-->
        <cell title="订单金额" class="mid">
          <div>
            <span>¥{{this.price}}</span>
          </div>
        </cell>
        <cell title="实付金额" class="mid">
          <div>
            <span>¥{{this.realPrice}}</span>
          </div>
        </cell>
      </div>
    </div>
    <div class="button" @click="confirmGoods"><p>确认发货</p></div>

  </div>
</template>

<script>
    import Header from "@/components/common/Header";
    import {Cell, XInput, PopupPicker} from "vux";
    import { JqBsSendGoods } from "@/servers/api";

    export default {
        data() {
            return {
                TitleObjData: {
                    titleContent: "发货信息",
                    showLeftBack: true,
                    showRightMore: false
                },
                //联系人
                person: "无",
                //电话
                phone: "无",
                //省
                province: "无",
                //市
                city: "无",
                //区
                area: "无",
                //详细地址
                address: "无",
                //留言
                message: "无",
                //预约时长
                time: "无",
                //预约人数
                personNum: "无",
                //订单价格
                price: "无",
                //实付价格
                realPrice: "无",
                //订单编号
                orderNum: "无",
                //支付时间
                payTime: "无",
                //取消时间
                cancelTime: "无",
                //详情
                List: [],
                //快递种类
                sendType: [],
                //选中的快递
                selectedSend: [],
                //快递单号
                expressNum:""
            }
        },
        mounted() {
            console.log('路由传递的id:', this.$route.query.id);
            //获取订单详情
            this.$http.post("https://core.kachuo.com/app/ewei_shopv2_app.php?i=5&c=entry&m=ewei_shopv2&do=mobile&r=scenic.shop.orderMsg&orderid=" + this.$route.query.id).then(({data}) => {
                this.List = data.data;
                console.log("获取订单详情:", this.List)
                //联系人
                this.person = this.List.address.realname;
                //手机号
                this.phone = this.List.address.mobile;
                //省
                this.province = this.List.address.province;
                //市
                this.city = this.List.address.city;
                //区
                this.area = this.List.address.area;
                //详细地址
                this.address = this.List.address.address;
                //留言
                this.message = this.List.remark;
                //订单金额
                this.price = this.List.price;
                //实付金额
                this.realPrice = this.List.real_price;
                //订单号
                this.orderNum = this.List.ordersn;
                //支付时间
                this.payTime = this.List.createtime;
            })
            //
            this.$http.post("https://core.kachuo.com/app/ewei_shopv2_app.php?i=5&c=entry&m=ewei_shopv2&do=mobile&r=logistics.index.get_express").then(({data}) => {
                console.log("物流列表：", data);
                this.sendType = data.data.map(item => {
                    return {name: item.name, value: item.id, parent: 0};
                });
                console.log(this.sendType);
            })


        },
        components: {
            Header,
            Cell,
            XInput,
            PopupPicker
        },
        methods: {
            //提示框
            showTip(conttentTip) {
                this.$vux.toast.text(conttentTip, "middle");
                setTimeout(() => {
                    this.$vux.toast.hide();
                }, 1000);
            },

            //点击发货
            confirmGoods() {
                JqBsSendGoods({
                    //订单id
                    order_id:this.$route.query.id,
                    //快递单号
                    order_sn:this.expressNum,
                    //快递公司id
                    express_id:this.selectedSend.toString()
                }).then(res=>{
                    console.log(res);
                    if (res.result === 1){
                        this.showTip("操作成功");
                        sessionStorage.goback = "yes";
                        this.$router.goBack();
                    }else if(this.expressNum == ""){
                        this.showTip("请填写订单号成功");
                    }else if(this.selectedSend == ""){
                        this.showTip("请选择快递公司");
                    }
                })
            },
            //选择改变时的数据
            onChange(val) {
                console.log('val change', val)
            },
            //选择框打开时
            onShow() {
                console.log('on show')
            },
            //选择框关闭时
            onHide(type) {
                console.log('on hide', type)
            }
        },
    }
</script>

<style lang="css" scoped>
  .goodsOrder-wrap {
    height: 100%;
    width: 100%;
    background: #f5f5f5;
    overflow: hidden scroll;
  }

  .receive {
    height: 81px;
    width: 92%;
    margin: 56px auto 0;
    background: #FFFFFF;
    border-radius: 8px;
  }

  .number {
    height: 140px;
    width: 92%;
    margin: 15px auto;
    background: #FFFFFF;
    border-radius: 8px;
    overflow: hidden;
  }

  .f-one {
    width: 92%;
    min-height: 45px;
    margin: 0 auto 20px;
    overflow: hidden;
  }

  .proInformation {
    background: #fff;
    border-radius: 8px;
    overflow: hidden;
  }

  .tit-wrap {
    margin: 15px 0 14.5px 4.64%;
  }

  .pro-infor {
    width: 92%;
    height: 90px;
    margin-bottom: 25px;
    display: flex;
    justify-content: space-around;
  }

  .img-wrap {
    width: 90px;
    height: 90px;
  }

  .img-wrap img {
    width: 100%;
  }

  .pro-mid {
    width: 185.5px;
    height: 90px;
  }

  .mid {
    border-radius: 8px;
  }

  .button {
    width: 92%;
    height: 50px;
    margin: 0 auto 10px;
    background: #3976FF;
    border-radius: 8px;
  }

  .button p {
    font-size: 16px;
    color: #FFFFFF;
    line-height: 50px;
    text-align: center;
  }
</style>
<style lang="css" scoped>
  /deep/ .weui-input {
    border-radius: 4px;
    height: 2.411765em;
    line-height: 2.411765;
    background-color: #F5F5F5;
    color: #999999;
    width: 92%;
    text-indent: 6%;
  }
</style>
