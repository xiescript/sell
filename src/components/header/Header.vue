<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img :src="seller.avatar" alt="" width='64' height='64'/>
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">
          {{seller.description}}/{{seller.deliveryTime}}分钟送达
        </div>
        <div v-if="seller.supports" class="support">
          <span class="icon" :class="classMap[0]"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
      <div v-if="seller.supports" class="support-count" @click="showDetail">
        <span class="count">{{seller.supports.length}}个</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <div class="bulletin-wrapper"  @click="showDetail">
      <span class="b-title"></span>
      <span class="b-text">{{seller.bulletin}}</span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
    <div class="background">
      <img :src="seller.avatar" width="100%" height="100%"/>
    </div>
    <!----弹出层---->
    <div v-show="detailShow" class="detail">
      <div class="detail-wrapper clearfix">
        <div class="detail-main">
          <p>{{seller.bulletin}}</p>
          <p>{{seller.bulletin}}</p>
        </div>
      </div>
      <div class="detail-close">
        <i class="icon-close"></i>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data (){
      return {
        classMap:[],
        detailShow: true
      }
    },
    props:['seller'],
    created() {
      this.classMap = ['decrease','discount','guarantee','invoice','special'];
    },
    methods :{
      showDetail (){
        this.detailShow = !this.detailShow
      }
    }
  }
</script>

<style>
.header{
  color: #fff;
  background: rgba(7,17,27,0.5);
  position: relative;
  overflow: hidden;
}
.content-wrapper{
  padding: 24px 12px 18px 24px;
  font-size: 0;
  position: relative;
}
.content-wrapper .avatar{
  display: inline-block;
  vertical-align: top;  /*让左边的字体顶部对齐了*/
}
.content-wrapper .avatar img{
  border-radius: 2px;
}
.content-wrapper .content{
  display: inline-block;
  margin-left: 16px;
}
.content-wrapper .content .title{
  margin: 2px 0 8px 0;
}
.content-wrapper .content .title .brand{
  display: inline-block;
  width: 30px;
  height: 18px;
  background-image: url(../../common/img/brand@2x.png);
  background-size: 30px 18px;
  background-repeat: no-repeat;
  vertical-align: top;  /*解决 左边和右边上下不对齐的问题*/
}
.content-wrapper .content .title .name{
  margin-left: 6px;
  font-size: 16px;
  line-height: 18px;
  font-weight: bold;
}

.content-wrapper .content .description{
  margin-bottom: 10px;
  line-height: 12px;
  font-size: 12px;
}
.content-wrapper .support-count{
  position: absolute;
  right: 12px;
  bottom: 18px;
  padding: 0 8px;
  height: 24px;
  line-height: 24px;
  border-radius: 14px;
  background-color: rgba(0,0,0,0.2);
  text-align: center;
}
.content-wrapper .support-count .count{
  font-size: 12px;
}
.content-wrapper .support-count .icon-keyboard_arrow_right{
  font-size: 12px; 
  line-height: 24px;
  margin-left: 2px;
}

/*--------------*/

.header .support .icon{
  display: inline-block;
  width: 12px;
  height: 12px;
  margin-right: 4px;
  background-size: 12px 12px;
  background-repeat: no-repeat;
  vertical-align: top;
}
.header .support .text{
  font-size: 12px;
  line-height: 12px;
}

/*--------------*/

.header .bulletin-wrapper{
  height: 28px;
  line-height: 28px;
  padding: 0 22px 0 12px;
  white-space: nowrap;  
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 12px;
  position: relative;
  background: rgba(7,17,27,0.2);
}
.header .bulletin-wrapper .b-title{
  display: inline-block;
  vertical-align: top;
  margin-top: 8px;
  width: 22px;
  height: 12px;
  background-image: url(../../common/img/bulletin@2x.png);
  background-size: 22px 12px;
  background-repeat: no-repeat;
}
.header .bulletin-wrapper .b-text{
  vertical-align: top;
  margin: 0 4px;
}
.header .bulletin-wrapper .icon-keyboard_arrow_right{
  position: absolute;
  font-size: 12px;
  right: 12px;
  top: 8px;
}

/*--------------*/

.header .background{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  -webkit-filter: blur(10px);
}

/*------弹出层--------*/

.header .detail{
  position: fixed;
  z-index: 100;
  width: 100%;
  height: 100%;
  overflow: auto;
  background: rgba(7,17,27,0.8);
  top: 0;
}
.header .detail-wrapper{
  min-height: 100%;
}
.header .detail-main{
  margin-top: 64px;
  padding-bottom: 64px;
}
.header .detail-close{
  position: relative;
  width: 32px;
  height: 32px;
  margin: -56px auto 0 auto;
  clear: both;
  font-size: 32px;
}



/*-- 不同的小图标 --*/

.decrease{
  background-image: url(../../common/img/decrease_1@2x.png);
}
.discount{
  background-image: url(../../common/img/discount_1@2x.png);
}
.guarantee{
  background-image: url(../../common/img/guarantee_1@2x.png);
}
.invoice{
  background-image: url(../../common/img/invoice_1@2x.png);
}
.special{
  background-image: url(../../common/img/special_1@2x.png);
}

/*  render屏加载不同倍数图片*/
@media (-webkit-min-device-pixel-ratio: 3),(min-device-pixel-ratio: 3){
  .content-wrapper .content .title .brand{
    background-image: url(brand@3x.png);
  }
}
</style>
