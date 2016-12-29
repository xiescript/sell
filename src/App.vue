<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from 'components/header/Header.vue'

export default {
  name: 'app',
  data (){
    return {
      seller:{}
    }
  },
  created (){
    this.$http.get('/api/seller').then((res) => {
      if (res.body.erron === 0){
        this.seller = res.body.data;
      }
    })
  },
  components: {
    'v-header': Header
  }
}
</script>

<style>
.tab{
  display: flex;
  width: 100%;
  height: 40px;
  line-height: 40px;
  position: relative;
}
.tab:after{
  content: '';
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0;
  border-top: 1px solid rgba(7,17,27,0.1);
}
.tab .tab-item{
  flex:1;
  text-align: center;
}
.tab .tab-item a{
  display: block;
  font-size: 14px;
  color: rgb(77,85,93);
}
.tab .tab-item .router-link-active{
  color: rgb(240,20,20);
}
</style>
