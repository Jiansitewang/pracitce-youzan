
import Vue from 'vue'
import router from './router/routerIndex.js'
import store from './vuex/vuexIndex.js'

//根组件注入
new Vue({
  el: '#app',
  router,
  store
})
