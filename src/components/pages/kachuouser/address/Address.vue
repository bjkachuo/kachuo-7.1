<template>
  <div class="address-wrap">
    <Header
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
    ></Header>

    <div class="normal-content" :style="conHei">
      <div class="addr-card" v-for="item in commonList">
        <cell>
          <div slot="icon"><div class="name">{{item.realname}}</div></div>
          <div slot="title"><span class="tel">171****1081</span><span class="tag-default">默认</span></div>
        </cell>
        <cell>
          <div slot="title"><span class="addr-content">吉林市二道区城区  吉林大路2888号卡戳网公司</span></div>
          <div slot="default"><div class="addr-edit"></div></div>
        </cell>
      </div>
      <div class="addr-card">
        <cell>
          <div slot="icon"><div class="name">对不对</div></div>
          <div slot="title"><span class="tel">171****1081</span><span class="tag-normal">公司</span></div>
        </cell>
        <cell>
          <div slot="title"><span class="addr-content">吉林市二道区城区  吉林大路2888号卡戳网公司</span></div>
          <div slot="default"><div class="addr-edit"></div></div>
        </cell>
      </div>
      <div class="addr-card">
        <cell>
          <div slot="icon"><div class="name">对不对</div></div>
          <div slot="title"><span class="tel">171****1081</span><span class="tag-normal">家</span></div>
        </cell>
        <cell>
          <div slot="title"><span class="addr-content">吉林市二道区城区  吉林大路2888号卡戳网公司</span></div>
          <div slot="default"><div class="addr-edit"></div></div>
        </cell>
      </div>
    </div>
    <div class="bottom-wrap">
      <x-button class="btn-add" link="/NewAddress">新增收货地址</x-button>
    </div>

<!--    <CheckList @getSetVal="setDefAdd"></CheckList>-->
<!--    <div class="btn-wrap">-->
<!--      <x-button class="btn" type="primary" @click.native="addNewAddress">添加新地址</x-button>-->
<!--    </div>-->
  </div>
</template>

<script>
import { getAddressList, setDefaultAddr } from "@/servers/api";
import Header from "@/components/common/Header";
import CheckList from "@/components/common/CheckList";
import { XButton,Cell } from "vux";

export default {
  name: "",

  data() {
    return {
      TitleObjData: {
        titleContent: "收货地址",
        showLeftBack: true,
        showRightMore: false
      },
      commonList:[]
    };
  },

  components: {
    Header,
    CheckList,
    XButton,Cell
  },

  computed: {
    conHei() {
      return { height: document.documentElement.clientHeight - 45 + "px" };
    }
  },


  mounted() {
    this.$nextTick(()=>{
      this.getAddressList();
    })
  },

  methods: {
    addNewAddress() {
      this.$router.push("/addnewaddress");
    },
    setDefAdd(val) {
      this.setDefaultAddress(val);
    },
    setDefaultAddress(val) {
      setDefaultAddr({
        id: val[0]
      })
        .then(res => {
          if (res.result === 1) {
            this.$vux.toast.show({
              type: "success",
              text: "设置成功",
              time: 1000,
              isShowMask: true
            });
            this.$store.state.address ++
            this.$router.goBack()

          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    getAddressList() {
      getAddressList({})
        .then(res => {
          if (res.result === 1) {

            res.data.list.forEach(item=>{
              this.commonList.push({
                realname:item.realname,
                key: item.id,
                value: item.realname,
                inlineDesc:
                  item.province +
                  item.city +
                  item.area +
                  item.address +"," +
                  item.mobile
              })
            })
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
  },

  watch:{
    '$store.state.address':function () {
      this.commonList = []
      this.getAddressList()
    }
  }
};
</script>
<style lang='css' scoped>
.normal-content{
  width: 100%;
  background: #F5F5F5;
  margin-top: 45px;
  overflow: hidden;
  overflow-y: scroll;
  box-sizing: border-box;
  padding: 15px 0;
}
.address-wrap {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.addr-edit{
  background: url(./edit.png) center no-repeat;
  background-size: contain;
  width: 20px;
  height: 20px;
}
.addr-card{
  margin-bottom: 10px;
  background-color: #FFFFFF;
  border-radius: 8px;
  overflow: hidden;
  padding: 10px 0;
}
.addr-card .weui-cell{
  padding: 5px 15px;
}
.addr-card .weui-cell:before{
  display: none;
}
.addr-content{
  font-size: 12px;
  font-weight: lighter;
}
.addr-card .name{
  font-size: 16px;
  margin-right: 70px;
  font-weight: bold;
}
.addr-card .tel{
  display: inline-block;
  margin-right: 10px;
}

.tag-default{
  min-width: 30px;
  text-align: center;
  display: inline-block;
  height:15px;
  line-height: 15px;
  background:#FF3939;
  color: #FFFFFF;
  font-size: 12px;
  border-radius:2px;
  padding: 0 5px;
}

.tag-normal{
  min-width: 30px;
  text-align: center;
  display: inline-block;
  height:15px;
  line-height:15px;
  background:#3976FF;
  color: #FFFFFF;
  font-size: 12px;
  border-radius:2px;
  padding: 0 5px;
}
.bottom-wrap{
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
}
.weui-btn:after{
  display: none;
}
.bottom-wrap .weui-btn{
  border-radius: 0;
  width: 100%;
  border: 0;
  height: 45px;
  line-height: 45px;
}
.bottom-wrap .btn-add, .bottom-wrap .btn-add:active{
  background-color: #3976FF;
  color: #FFFFFF;
  font-size: 15px;
}

</style>
