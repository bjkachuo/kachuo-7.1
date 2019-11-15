<template>
  <div class="wrap">
    <Header
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
    ></Header>
    <div class="normal-content" style="height:636px;">
      <!-- <div class="message-panel">
        <div class="mess-body">
          <div class="mess-group">
            <cell @cell-label-color title="木子菲菲">
              <img slot="icon" class="mess-avatar" src="../../../../assets/images/touxiang.jpg" />
              <template slot="default">
                <div class="btn-del" @click="onDel()"></div>
              </template>
            </cell>
            <div class="commont-body">
              <div class="cont">蓬莱阁旅游景区，是国家级5A级风景区，位于山 东省蓬莱市，小城在海边。</div>
              <flexbox :gutter="5">
                <flexbox-item>
                  <div class="commont-pic">
                    <img src="../../../../assets/images/蓬莱阁.jpg" alt />
                  </div>
                </flexbox-item>
                <flexbox-item>
                  <div class="commont-pic">
                    <img src="../../../../assets/images/蓬莱阁.jpg" alt />
                  </div>
                </flexbox-item>
                <flexbox-item>
                  <div class="commont-pic">
                    <img src="../../../../assets/images/蓬莱阁.jpg" alt />
                  </div>
                </flexbox-item>
              </flexbox>
            </div>
            <div class="commont-footer">
              <div class="time">2019-08-01</div>
              <div>12点赞</div>
            </div>
          </div>
        </div>
      </div>-->
      <div class="message-panel" v-for="(item,index) in List" :key="index">
        <div class="mess-body">
          <div class="mess-group">
            <cell :title="item.nickname">
              <img slot="icon" class="mess-avatar" :src="item.avatar" />
              <template slot="default">
                <div class="btn-del" @click="onDel()"></div>
              </template>
            </cell>
            <div class="commont-body">
              <div class="cont">{{item.content}}</div>
            </div>
            <div class="commont-footer">
              <div class="time">{{item.created_at}}</div>
              <!-- <div>12点赞</div> -->
            </div>
          </div>
        </div>
        <confirm
          class="confirm-dialog"
          v-model="show2"
          title="确定要删除这条留言吗？"
          theme="android"
          @on-cancel="onCancel(item.id)"
          @on-confirm="onConfirm(item.id)"
          @on-show="onShow"
          @on-hide="onHide"
        ></confirm>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/common/Header";
import { Cell, XButton, Flexbox, FlexboxItem, Confirm } from "vux";
export default {
  data() {
    return {
      TitleObjData: {
        titleContent: "我的评论",
        showLeftBack: true,
        showRightMore: false
      },
      show2: false,
      List: []
    };
  },
  mounted() {
    // this.User = JSON.parse(sessionStorage.getItem("userLoginInfo"));
    // console.log(this.User.avatar,this.User.realname);

    this.$http
      .post(
        "https://core.kachuo.com/app/ewei_shopv2_app.php?i=5&c=site&a=entry&m=ewei_shopv2&do=mobile&r=member.realname.memberComment"
      )
      .then(({ data }) => {
        console.log(data);
        this.List = data.data;
        console.log(this.List);
      });
  },
  methods: {
    //删除后重新刷新列表
    newList() {
      this.$http
        .post(
          "https://core.kachuo.com/app/ewei_shopv2_app.php?i=5&c=site&a=entry&m=ewei_shopv2&do=mobile&r=member.realname.memberComment"
        )
        .then(({ data }) => {
          console.log(data);
          this.List = data.data;
          console.log("删除后", this.List);
        });
    },
    onDel() {
      this.show2 = !this.show2;
    },
    onCancel(id) {
      console.log("我点了取消", id);
    },
    //点击确定删除评论
    onConfirm(id) {
      this.$http
        .post(
          "https://core.kachuo.com/app/ewei_shopv2_app.php?i=5&c=site&a=entry&m=ewei_shopv2&do=mobile&r=member.realname.delMemberComment&id=" +
            id
        )
        .then(({ data }) => {
          console.log(data);
          this.newList();
          this.$vux.toast.show({
            type: "success",
            text: "删除成功",
            time: 1000,
            position: "middle",
            isShowMask: true
          });
        });
      console.log("我点了确定");

      // if (msg) {
      //   alert(msg);
      // }
    },
    onHide() {
      console.log("on hide");
    },
    onShow() {
      console.log("on show");
    }
  },
  components: {
    Header,
    Cell,
    XButton,
    Flexbox,
    FlexboxItem,
    Confirm
  },
  computed: {
    conHei() {
      return {
        height: document.documentElement.clientHeight + "px"
      };
    }
  }
};
</script>
<style lang='css' scoped>
.normal-content {
  width: 100%;
  background: #f5f5f5;
  margin-top: 45px;
  overflow: hidden;
  overflow-y: scroll;
  box-sizing: border-box;
  padding: 15px 0;
}
img {
  background: none;
}
.message-panel {
  box-shadow: 0px 10px 20px 0px rgba(0, 101, 255, 0.06);
  border-radius: 8px;
  background-color: #ffffff;
  padding: 15px;
  margin-bottom: 10px;
}

.message-panel .weui-cell:before {
  display: none;
}

.mess-avatar {
  width: 35px;
  height: 35px;
  border-radius: 35px;
  margin-right: 10px;
}

.commont-footer {
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
  margin-top: 10px;
  font-size: 14px;
}
.commont-footer .time {
  color: #999;
}

.mess-title {
  color: #222222;
  font-weight: bold;
  font-size: 16px;
}

.mess-write {
  line-height: 1.2;
  background: url(./rt_arrow2.png) right center no-repeat;
  background-size: 12px 12px;
  font-size: 14px;
  padding-right: 20px;
}

.weui-cells.vux-no-group-title[*] {
  margin-top: 0;
}

.weui-cell {
  padding: 5px 0;
}

.mess-group {
  position: relative;
}
.mess-group:last-child {
  padding-bottom: 0;
}
.mess-group:before {
  content: " ";
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  height: 1px;
  border-top: 1px solid #d9d9d9;
  color: #d9d9d9;
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
}

.mess-group:first-child:before {
  display: none;
}

.mess-group /deep/ .vux-label {
  font-size: 14px;
  color: #333333;
}

.mess-group /deep/ .vux-label-desc {
  font-size: 12px;
  color: #999;
}
.commont-body .cont {
  margin-bottom: 10px;
  color: #333333;
}
.btn-del {
  background: url(./del.png) center no-repeat;
  background-size: contain;
  width: 24px;
  height: 24px;
}
/* 弹窗 */
.confirm-dialog /deep/ .weui-skin_android .weui-dialog__ft {
  text-align: center;
  padding: 0 15px 15px 15px;
}
.confirm-dialog /deep/ .weui-dialog__btn {
  width: 110px;
  height: 35px;
  line-height: 35px;
  border: 1px solid #3976ff;
  border-radius: #3976ff;
  text-align: center;
  color: #3976ff;
  font-size: 15px;
  border-radius: 35px;
  margin: 0 5px;
}
.confirm-dialog /deep/ .weui-dialog__btn:active {
  background-color: transparent;
}
.confirm-dialog /deep/ .weui-dialog__btn_primary,
.confirm-dialog /deep/ .weui-dialog__btn_primary:active {
  background-color: #3976ff;
  color: #ffffff;
}
.confirm-dialog /deep/ .weui-skin_android .weui-dialog__title {
  font-size: 18px;
}
.confirm-dialog /deep/ .weui-dialog__hd {
  text-align: center;
  padding: 30px 15px;
}
.confirm-dialog /deep/ .weui-skin_android .weui-dialog__bd {
  padding: 5px 15px 0 15px;
  min-height: 10px;
}
</style>
