import 'css/common.css'
import './index.css'

import Vue from 'vue'
import axios from 'axios'
import url from 'js/api.js'

import { InfiniteScroll } from 'mint-ui';
Vue.use(InfiniteScroll);

import Foot from 'components/Foot.vue'

let app = new Vue({
  el: '#app',
  data: {
    lists: null,
    pageNum: 1,
    pageSize: 6,
    loading: false,
    allLoaded: false
  },
  created(){
    this.getLists()
 },
  methods:{
    getLists() {
      if(this.allLoaded) return
      //阻止重复拉取数据、div.loading-more状态判定
      this.loading = true
      axios.post(url.hotLists, {
        pageNum: this.pageNum,
        pageSize: this.pageSize
      }).then(res => {
        let curLists = res.data.lists
        if(curLists.length < this.pageSize){
          //判断所有数据是否加载完毕
          this.allLoaded = true
        }
        if (this.lists){
          this.lists = this.lists.concat(curLists)
        }else{
          this.lists = curLists
        }
        this.loading = false //阻止重复拉取数据
        this.pageNum++
      })
    }
  },
  components: {
    Foot
  }
})
