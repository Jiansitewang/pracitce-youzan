import 'css/common.css'
import './category.css'

import Vue from 'vue'
import axios from 'axios'
import Foot from 'components/Foot.vue'
import url from 'js/api.js'
import mixin from 'js/mixin'

new Vue({
  el:'#app',
  data: {
    topLists: null,
    topIndex: 0,
    subData: null,
    rankData: null,
  },
  created(){
    this.getTopLists()
    this.getSubList(0,0)
    this.getRank()
  },
  methods: {
    getTopLists(){
      axios.get(url.topList).then(xxx =>{
        this.topLists = xxx.data.lists
      })
    },
    getSubList(index,id){
      this.topIndex = index
      if(index === 0){
        this.getRank()
      }else {
        axios.post(url.subLists,{id}).then(xxx => {
          this.subData = xxx.data.data
        })
      }
    },
    getRank(){
      axios.get(url.rank).then(xxx => {
        this.rankData = xxx.data.data
      })
    },
    toSearch(list){
      location.href = `search.html?keyword=${list.name}&id=${list.id}`
    }
  },
  mixins:[mixin]
})
