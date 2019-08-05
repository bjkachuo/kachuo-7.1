<template>
    <div>
      <ul>
        <li class="item item1" @click="go(1)">
            <div>
              <i></i>
              <span>文化创意</span>
            </div>
        </li>
        <li class="item item2" @click="go(2)">
          <div>
            <i></i>
            <span>艺术创作</span>
          </div>
        </li>
        <li class="item item3" @click="go(3)">
          <div>
            <i></i>
            <span>溯源防伪</span>
          </div>
        </li>
        <li class="item item4" @click="go(4)">
          <div>
            <i></i>
            <span>成本定价</span>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "famousFamily",

        data(){
          return{

          }
        },

        methods:{
          go(index){
            if(index == 1) this.$router.push('/yaoyuechuangzuo/culturalCreativity')
            if(index == 2) this.$router.push('/yaoyuechuangzuo/art')
          }
        }

    }
</script>

<style scoped lang="less">
  .item{
    width: 90%;
    margin: 16px auto 0;
    background-color: #ffffff;
    border-radius: 5%;
    box-shadow: 10px 10px 10px 0px #F5F5F5;
    line-height: 56px;
    text-align: center;
    i{
      display: inline-block;
      background-size: 100% 100%;
      position: relative;
      top: 3px;
    }
    span{
      padding-left: 4px;
    }
  }
  .item1{
      i{
        width: 16px;
        height: 18px;
        background-image: url("./yaoyue.png");
      }
  }
  .item2{
    i{
      width: 17px;
      height: 17px;
      background-image: url("./art.png");
    }
  }
  .item3{
    i{
      width: 16px;
      height: 17px;
      top: 2px;
      background-image: url("price.png");
    }
  }
  .item4{
    i{
      width: 14px;
      height: 17px;
      top: 1px;
      background-image: url("price.png");
    }
  }
</style>
