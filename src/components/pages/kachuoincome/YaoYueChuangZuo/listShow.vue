<template>
    <div class="list">

      <ul>
        <li v-for="item in listData" v-if="tabIndex != 3" class="a">
          <div class="img" :class="item.name"></div>
          <div class="content">
              <div class="name" >{{item.name}}{{ tabIndex == 1 ? '文创征集' :'艺品创作' }}</div>
              <div class="price" v-if="tabIndex == 1">60元/单</div>
              <div class="rob" @click="showModel(item.id,item.name)">抢单</div>
          </div>
        </li>
        <li v-for="item in SYOrderListData" v-if="tabIndex == 3">
          <div class="address">{{item.address}}</div>
          <div class="work-time">创作时间：{{item.work_time}}小时</div>
          <div class="price">溯源佣金:{{item.yj_price}}元/单</div>
          <div class="btn" @click="showModel(item.id,item.name)">抢单</div>
        </li>
      </ul>
      <div class="back" @click="back">返回地图</div>
    </div>
</template>

<script>
    export default {
        name: "listShow",

        props:['tabIndex','SYOrderListData','listData'],

        data(){
          return{

          }
        },

        methods:{
          back(){
            this.$parent.listShow = false
          },
          showModel(id,name){
            this.$parent.showModel(id,name)
          }
        }
    }
</script>

<style scoped lang="less">
  .list{
    background-color: #F5F5F5;
    overflow-y: auto;
    position: relative;
    .back{
      width:60px;
      height:30px;
      background:rgba(0,0,0,0.2);
      border-radius:15px 0px 0px 15px;
      position: absolute;
      top: 25px;
      right: 0;
      font-size: 10px;
      line-height: 30px;
      text-align: center;
    }
    .a{
      display: flex;
    }
    li{
      width: 92%;
      padding: 10px;
      background-color: #ffffff;
      margin: 15px auto;
      box-shadow:0px 5px 10px 0px rgba(0, 0, 0, 0.1);
      border-radius: 8px;
      position: relative;
      .img{
        width: 120px;
        height: 87px;
        background-size: 100% 100%;
      }
      .content{
        margin-left: 11px;
        flex: 1;
        .name{
          font-size: 18px;
        }
        .price{
          color: #FF9A38;
          font-weight: bold;
          font-size: 20px;
        }
        .rob{
          float: right;
          width:75px;
          height:30px;
          background:rgba(152,184,255,1);
          border-radius:15px;
          color: #fff;
          line-height: 30px;
          text-align: center;
          font-size: 16px;
        }
      }
      .三孔{
        background-image: url("../../../../assets/images/三孔.jpg");
      }
      .苍岩山{
        background-image: url("../../../../assets/images/苍岩山.jpg");
      }
      .徽州古城{
        background-image: url("../../../../assets/images/徽州古城.jpg");
      }
      .蓬莱阁{
        background-image: url("../../../../assets/images/蓬莱阁.jpg");
      }
      .嵩山少林{
        background-image: url("../../../../assets/images/嵩山少林.jpg");
      }
      .云雾山{
        background-image: url("../../../../assets/images/云雾山.jpg");
      }
      .云冈石窟{
        background-image: url("../../../../assets/images/云冈石窟.jpg");
      }
      .address{
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
        font-size: 16px;
      }
      .work-time{
        font-size: 14px;
        color: #666;
      }
      .price{
        font-size: 16px;
        line-height: 1;
        color: #FF9A38;
        font-weight: bold;
        margin-top: 12px;
      }
      .btn{
        font-size: 16px;
        color: #fff;
        background-color: #98B8FF;
        position: absolute;
        width: 75px;
        line-height: 30px;
        text-align: center;
        border-radius: 15px;
        right: 12px;
        bottom: 12px;
      }
    }
  }
</style>
