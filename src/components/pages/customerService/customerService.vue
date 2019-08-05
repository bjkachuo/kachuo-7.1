<template>
  <div class="">
    <Header :titleContent="TitleObjData.titleContent" :showLeftBack="TitleObjData.showLeftBack" :showRightMore="TitleObjData.showRightMore"></Header>
    <div class="content">
      1
    </div>
  </div>
</template>

<script>

  import Header from "@/components/common/Header";


  export default {

    props: [""],

    data() {
      return {
          TitleObjData: {
            titleContent: "客服",
            showLeftBack: true,
            showRightMore: true
          },
      }
    },

    components: {
      Header,
    },

    computed: {
      conHei() {
        return { height: document.documentElement.clientHeight - 45 + "px" };
      },

    },

    mounted() {
      let date = new Date()
      let timestamp = date.getTime()
      let signature = md5("appkey=fdc03b623a27c8688f43d2b0&timestamp="+timestamp+"&random_str=022cd9fd995849b58b3ef0e943421ed9&key=ebb2a547d9ecfff11255285a")

      JIM.init({
        "appkey":"fdc03b623a27c8688f43d2b0",
        "random_str":  "022cd9fd995849b58b3ef0e943421ed9",
        "signature":  signature,
        "timestamp":  timestamp,
        "flag": 1
      }).onSuccess(data=> {
        console.log(this);
        this.register()
        // appendToDashboard('success' + JSON.stringify(data));
      }).onFail(data=> {
        console.log('error:' + JSON.stringify(data))
        // appendToDashboard('error: ' +JSON.stringify(data));
      });


    },

    methods: {
      register(){
        JIM.register({
          'username' : 'lisi',
          'password' : '123456',
          'is_md5' : false,
          'address' : '北京'
      }).onSuccess(function(data) {
          console.log('ok',data);
        }).onFail(data=> {
          console.log('error',data);
          this.login()
        });
      },

      login(){
        JIM.login({
          'username' : 'lisi',
          'password' : '123456'
        }).onSuccess(function(data) {
          console.log(data);
          //data.code 返回码
          //data.message 描述
          //data.online_list[] 在线设备列表
          //data.online_list[].platform  Android,ios,pc,web
          //data.online_list[].mtime 最近一次登录时间
          //data.online_list[].isOnline 是否在线 true or false
          //data.online_list[].isLogin 是否登录 true or false
          //data.online_list[].flag 该设备是否被当前登录设备踢出 true or false

          JIM.onMsgReceive(function(data) {
            console.log(data);
            // data.messages[]
            // data.messages[].ctime_ms
            // data.messages[].msg_type 会话类型
            // data.messages[].msg_id
            // data.messages[].from_appey 单聊有效
            // data.messages[].from_username 单聊有效
            // data.messages[].from_gid 群聊有效
            // data.messages[].need_receipt
            // data.messages[].content
            // data.messages[].custom_notification.enabled
            // data.messages[].custom_notification.title
            // data.messages[].custom_notification.alert
            // data.messages[].custom_notification.at_prefix
          });
        }).onFail(function(data){
          //同上
        });
      }
    },

  }
</script>
<style lang='less' scoped>
  .content{
    width: 92%;
    margin: 2% auto;
    height: 80%;
    background-color: #ffffff;
  }
</style>
