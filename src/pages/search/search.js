import './search.css'
import 'css/common.css'

import Vue from 'vue'
import axios from 'axios'
import url from 'js/api.js'
import qs from 'qs'
import mixin from 'js/mixin'

let {keyword,id} = qs.parse(location.search.substr(1))
console.log(document.body.scrollTop)

new Vue({
  el: '.container',
  data: {
    searchList: null,
    keyword,
    isShow: false
  },
  created(){
    this.getSearchList()
  },
  methods: {
    getSearchList(){
      axios.get(url.searchList,{keyword,id}).then(xxx => {
        this.searchList = xxx.data.lists
      })
    },
    move(){
      if(document.body.scrollTop > 50){
        this.isShow = true
      }else{
        this.isShow = false
      }
    },
    toTop(){
      window.scrollTo(0,0)
    }
  },
  mixins:[mixin]
})
