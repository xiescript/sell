// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';

import Goods from 'components/goods/Goods';
import Ratings from 'components/ratings/Ratings';
import Seller from 'components/seller/Seller';

import './common/style/base.css';

Vue.use(VueRouter);

//配置路由
var routes = [
  {path:"/",redirect:"/goods"},    //重定向
  {path:"/goods",component:Goods},
  {path:"/ratings",component:Ratings},
  {path:"/seller",component:Seller}
];
//生成路由实例
var router = new VueRouter({
  routes 
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,   //最后挂载到Vue上
  template: '<App/>',
  components: { App }  // es6语法  { App:App }
})
