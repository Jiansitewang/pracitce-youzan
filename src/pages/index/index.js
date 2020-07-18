import 'css/common.css'
import './index.css'

import Vue from 'vue'
import axios from 'axios'
import url from 'js/api.js'

import { InfiniteScroll } from 'mint-ui';
Vue.use(InfiniteScroll);

import Foot from 'components/Foot.vue'
import Swipe from 'components/Swipe.vue'

let app = new Vue({
  el: '#app',
  data: {
    lists: null,
    pageNum: 1,
    pageSize: 6,
    loading: false,
    allLoaded: false,
    bannerList: null,
  },
  created(){
    this.getLists()
    this.getBanner()
 },
  methods:{
    getLists() {
      if(this.allLoaded) return //判断所有数据是否加载完毕
      this.loading = true //阻止重复拉取数据、div.loading-more状态判定
      axios.post(url.hotLists, {
        pageNum: this.pageNum,
        pageSize: this.pageSize
      }).then(res => {
        let curLists = res.data.lists
        if(curLists.length < this.pageSize){//判断所有数据是否加载完毕
          this.allLoaded = true
        }
        if(this.lists){
          this.lists = this.lists.concat(curLists)
        }else{
          this.lists = curLists// 第一次请求数据,lists: null
        }
        this.loading = false //阻止重复拉取数据
        this.pageNum++
      })
    },
    getBanner(){
      axios.get(url.banner).then(xxx => {
        this.bannerList = xxx.data.lists
      })

    }
  },
  components: {
    Swipe,
    Foot
  }
})
