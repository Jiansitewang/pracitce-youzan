<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swp-page swiper-slide" v-for="list in lists">
        <a class="js-no-follow" :href="list.clickUrl">
          <img class="goods-main-photo fadeIn"
               :src="list.img">
        </a>
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css'

  export default {
    props: {
      lists: {
        type: Array,
        required: true
      },
      name: {}
    },
    created(){

    },
    mounted() {
      this.init()
    },
    methods: {
      init() {
        new Swiper('.swiper-container', {
          loop: true,
          pagination: {
            el: '.swiper-pagination',
          }
        })
      }
    },
  }
</script>

<style scoped>
  .swiper-slide img{
    width: 100%;
    height: 100%;
  }
</style>
