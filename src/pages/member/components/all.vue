<template>
  <div class="container " style="min-height: 597px;">
    <div class="block-list address-list section section-first js-no-webview-block" >
      <a class="block-item js-address-item address-item" @click="toEdit(list)" v-for="list in lists" :class="{'address-item-default':list.isDefault}" :key="list.id">
        <div class="address-title">{{list.name}} {{list.tel}}</div>
        <p>{{list.provinceName}}{{list.cityName}}{{list.districtNmae}}{{list.address}}</p>
        <a class="address-edit">修改</a>
      </a>
    </div>
    <div v-if="lists&&!lists.length">
      没有地址，请添加
    </div>
    <div class="block stick-bottom-row center">
      <router-link class="btn btn-blue js-no-webview-block js-add-address-btn" :to="{name:'form',query:{type: 'add'}}">
        新增地址
      </router-link>
    </div>
  </div>
</template>

<script>
  // 不使用vuex版本


  // import Address from 'js/addressService.js'
  //
  // export default {
  //   data(){
  //     return {
  //       lists: null
  //     }
  //   },
  //   created(){
  //     Address.list().then(res => {
  //       this.lists = res.data.lists
  //     })
  //   },
  //   methods: {
  //     toEdit(list){
  //       this.$router.push({name: 'form', query: {type: 'edit',instance: list}})
  //     }
  //   }
  // }

  // 使用vuex版本

  export default {
    computed: {
      lists() {
        return this.$store.state.lists
      }
    },
    created() {
      if(!this.lists) {
        this.$store.dispatch('getLists')
      }
    },
    methods: {
      toEdit(list){
        this.$router.push({name: 'form', query: {type: 'edit',instance: list}})
      }
    }
  }
</script>
