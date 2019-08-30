<template>
  <div class="photo-album-wrap">
    <Header
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
    ></Header>
    <div class="normal-content" :style="conHei">
		<div class="content-card">
			<div class="card-row">
				<div class="account-box">
					<div class="txt">余额(元)</div>
					<div class="bd bal-price">195.00</div>
				</div>
				<div class="account-box">
					<div class="txt">累计创收(元)</div>
					<div class="bd">1000.00</div>
				</div>
			</div>
			<div class="card-row">
				<div class="tx-box">已提现金额：805.00元</div>
				<div class="btn-link"><span>申请提现</span></div>
			</div>
		</div>
		<div class="c-panel">
			<div class="c-header">我的创作</div>
			<div class="c-body">
			<flexbox :gutter="0">
				<flexbox-item v-for="(item,index) in myData" :key="index" :span="1/3">
				  <div class="c-card">
					<div class="c-number">
					  {{item.number}}
					</div>
					<div class="c-text">
					  {{item.text}}
					</div>
				  </div>
				</flexbox-item>
			  </flexbox>
			</div>
		</div>
		<div class="c-panel">
			<div class="c-header">创作收集</div>
			<div class="c-body">
			<flexbox :gutter="0">
				<flexbox-item v-for="(item,index) in CData" :key="index" :span="1/3">
				  <div class="c-card">
					<div class="c-number">
					  {{item.number}}
					</div>
					<div class="c-text">
					  {{item.text}}
					</div>
				  </div>
				</flexbox-item>
			  </flexbox>
			</div>
		</div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/common/Header";
import { Flexbox, FlexboxItem } from "vux";
export default {
  name: "",
  props: [""],
  data() {
    return {
      TitleObjData: {
        titleContent: "创收管理",
        showLeftBack: true,
        showRightMore: false
      },
	  myData: [
        {
          text: "已通过",
          number: "12",
        },
        {
          text: "审核中",
          number: "2",
        },
        {
          text: "未通过",
          number: "1",
        }
      ],
	  CData: [
        {
          text: "文创征集",
          number: "1",
        },
        {
          text: "艺品创作",
          number: "2",
        },
        {
          text: "产品溯源",
          number: "1",
        }
      ]
    };
  },

  components: {
    Header,
    Flexbox,
    FlexboxItem,
  },

  computed: {
    conHei() {
      return { height: document.documentElement.clientHeight - 45 + "px" };
    }
  },

  beforeMount() {},

  mounted() {
    
  },

  methods: {
  },

  watch: {}
};
</script>
<style lang='css' scoped>
.normal-content{
  width: 100%;
  background: #fff;
  margin-top: 45px;
  overflow: hidden;
  overflow-y: scroll;
  padding: 15px;
  box-sizing: border-box;
}
.c-header{
	font-size:16px;
	margin-bottom:15px;
	line-height:1.2;
}
.c-panel{
	margin-bottom:25px;
}
.c-card{
	margin:4px;
	height:80px;
	box-sizing:border-box;
	padding:15px 0;
	text-align:center;
	background:rgba(255,255,255,1);
	box-shadow:0px 2px 20px 0px rgba(57,118,255,0.08);
	border-radius:4px;
	line-height:1.2;
}
.c-card .c-number{
	font-size:24px;
	font-weight:bold;
	color:rgba(34,34,34,1);
	line-height:17px;
	margin-bottom:10px;
}
.c-card .c-text{
	font-size:14px;
	color:#666
}

.content-card {
  height: 140px;
  background: linear-gradient(
    90deg,
    rgba(31, 100, 255, 1),
    rgba(39, 141, 255, 1)
  );
  border-radius: 8px;
  padding:20px 25px;
  box-sizing: border-box;
  margin-bottom:25px;
  box-shadow: 0px 10px 25px 0px rgba(57, 118, 255, 0.5);
}
.content-card {
  display: flex;
  flex-direction: column;
}
.card-row{
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
	color:#80BFFF;
	margin-bottom:24px;
}
	
.card-row:last-child{
}
.account-box{
	line-height:1.2;
}
.account-box:last-child{
	text-align:right;
}
.account-box .txt{
	font-size:16px;
	margin-bottom:10px;
}
.account-box .bd{
	font-size:20px;
}
.account-box .bal-price{
	color:#fff;
}
.tx-box{
	font-size:12px;
}
.btn-link{
	width:80px;
	background:rgba(25,94,242,1);
	opacity:0.7;
	border-radius:25px;
	text-align:center;
	font-size:0;
}
.btn-link span{
	font-size:12px;
	color:#80BFFF;
	display:inline-block;
	padding-left:16px;
	background:url(../../../assets/images/price@2x.png) left center no-repeat;
	background-size:12px 12px;
	height:25px;
	line-height:25px;
}


</style>
