<template>
    <div class="weui-msg">
          <div class="weui-msg__icon-area">
              <img src="@/assets/images/common/empty.png" alt="">
          </div>
          <div class="weui-msg__text-area" v-show="empty.title">
            <p class="weui-msg__desc"><em>~</em> {{empty.title}} <em>~</em></p>
          </div>
    </div>
</template>

<script>
export default {
    name: 'Empty',
    props:[
      "empty"
    ],
    methods:{
        
    }
}
</script>

<style lang="less" scoped>
    .weui-msg{
        padding: 90px 0px 100px;
        img{
            width: 205px;
        }
        .weui-msg__desc{
            font-size:17px;display: inline-block;position: relative;bottom:30px;
            em{
                font-size: 18px;
            }
        }
    }
</style>
