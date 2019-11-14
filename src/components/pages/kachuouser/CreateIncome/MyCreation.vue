<template>
  <div class="wrap">
    <Header :titleContent="TitleObjData.titleContent" :showLeftBack="TitleObjData.showLeftBack"
            :showRightMore="TitleObjData.showRightMore"></Header>
    <div class="normal-content" :style="conHei">
      <tab active-color="#222" :line-width="2" default-color="#999" bar-active-color="#3976FF" v-model="index">
        <tab-item class="vux-center" v-for="(item, index) in tabList" :key="index" @on-item-click="getItem(index)"
                  :class="{active:index == iscur}">
          <div class="tab-item-text">{{item}}</div>
        </tab-item>
      </tab>
      <div class="tab-panel" v-if="this.index == 0">
        <div class="tab-card" v-for="(item,index) in bigList">
          <cell>
            <template slot="after-title">
              <div class="order-number">文创单号：{{item.order}}</div>
              <div class="order-text">{{item.label}}</div>
              <div class="order-price">
                <span>获得佣金:</span><strong>￥{{item.price}}</strong>
              </div>
            </template>
            <template slot="default">
              <x-button class="btn-adopt">已通过</x-button>
            </template>
          </cell>
        </div>
      </div>
      <div class="tab-panel" v-if="this.index == 1">
        <div class="tab-card" v-for="(item,index) in bigList">
          <cell>
            <template slot="after-title">
              <div class="order-number">文创单号：{{item.order}}</div>
              <div class="order-text">{{item.label}}</div>
              <div class="order-price">
                <span>获得佣金:</span><strong>￥{{item.price}}</strong>
              </div>
            </template>
            <template slot="default">
              <x-button class="btn-exam">审核中</x-button>
            </template>
          </cell>
        </div>
      </div>
      <div class="tab-panel" v-if="this.index == 2">
        <div class="tab-card" v-for="(item,index) in bigList">
          <cell>
            <template slot="after-title">
              <div class="order-number">文创单号：{{item.order}}</div>
              <div class="order-text">{{item.label}}</div>
              <div class="order-price">
                <span>获得佣金:</span><strong>￥{{item.price}}</strong>
              </div>
            </template>
            <template slot="default">
              <x-button class="btn-failed">未通过</x-button>
            </template>
          </cell>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import Header from "@/components/common/Header";
    import {Tab, TabItem, Cell, XButton} from 'vux'

    export default {
        name: "",
        props: [""],
        data() {
            return {
                TitleObjData: {
                    titleContent: "我的创作",
                    showLeftBack: true,
                    showRightMore: false
                },
                index: 0,
                tabList: ['已通过', '审核中', '未通过'],
                iscur: 0,
                // list: [{
                //     num: "829817929187197281",
                //     title: '蓬莱阁文创征集',
                //     price: 120.00,
                //     url: '/'
                // }, {
                //     num: "829817929187197281",
                //     title: '鸳鸯阵大破倭寇  神机营塞外...',
                //     price: 120.00,
                //     url: '/'
                // }, {
                //     num: "829817929187197281",
                //     title: '蓬莱阁文创征集',
                //     price: 120.00,
                //     url: '/'
                // }],
                bigList:[]
            };
        },
        methods: {
            // onItemClick(index) {
            //     console.log('on item click:', index)
            // },
            getItem(index) {
                this.iscur = index;
                console.log(this.iscur)
                this.$http.post("https://core.kachuo.com/app/ewei_shopv2_app.php?i=5&c=site&a=entry&m=ewei_shopv2&do=mobile&r=goods.real.create_income_list&page=1&status=" + this.iscur).then(({data}) => {
                    console.log(data);
                    this.bigList = data.data;
                })

            }
        },
        components: {
            Header,
            Tab,
            TabItem, Cell, XButton
        },

        mounted() {
            this.$nextTick(() => {
                this.index = this.$route.query.status - 0
            })
            this.$http.post("https://core.kachuo.com/app/ewei_shopv2_app.php?i=5&c=site&a=entry&m=ewei_shopv2&do=mobile&r=goods.real.create_income_list&page=1&status=" + this.index).then(({data}) => {
                console.log(data);
                this.bigList = data.data;

            })
        },

        computed: {
            conHei() {
                return {height: document.documentElement.clientHeight - 45 + "px"};
            }
        },
    };
</script>
<style lang='css' scoped>
  .normal-content {
    width: 100%;
    background: #F5F5F5;
    margin-top: 45px;
    overflow: hidden;
    overflow-y: scroll;
    box-sizing: border-box;
  }

  .vux-tab .vux-tab-item {
    background: none;
  }

  .vux-tab .vux-tab-item.vux-tab-selected {
    font-size: 16px;
    font-weight: bold;
  }

  .vux-tab-wrap /deep/ .vux-tab-container {
    box-shadow: 0px 10px 20px 0px rgba(0, 101, 255, 0.08);
  }

  .tab-panel {
    padding: 15px;
  }

  .tab-card {
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 10px 15px 0px rgba(0, 101, 255, 0.05);
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 15px;
  }

  .order-number {
    font-size: 12px;
    margin-bottom: 5px;
  }

  .order-text {
    font-size: 14px;
    margin-bottom: 15px;
    font-weight: bold;
  }

  .order-price span {
    font-size: 14px;
    color: #999;
  }

  .order-price strong {
    font-size: 20px;
  }

  .tab-card .weui-btn {
    border-radius: 35px;
    height: 35px;
    width: 90px;
    font-size: 14px;
  }

  .tab-card .weui-btn:after {
    display: none;
  }

  .btn-adopt {
    color: #84A9FF;
    background-color: #EBF1FF;
  }

  .btn-exam {
    color: #fff;
    background: linear-gradient(90deg, rgba(57, 118, 255, 1) 0%, rgba(57, 150, 255, 1) 100%);
  }

  .btn-failed {
    color: #fff;
    background: linear-gradient(90deg, rgba(255, 57, 57, 1) 0%, rgba(255, 89, 56, 1) 100%);
  }

</style>
