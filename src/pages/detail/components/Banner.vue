<template>
  <div>
    <div class="banner">
        <img class="banner-img"
             :src="bannerImg"
             @click="handelBannerGallery">
        <div class="banner-info">
            <div class="banner-tittle">
                {{this.sightName}}
            </div>
            <div class="banner-number">
                <span class="iconfont banner-icon">&#xe692;</span>
                {{this.bannerImgs.length}}
            </div>
        </div>
    </div>
    <common-gallary :imgs="imgs" v-show="showGallary" @closeGallery='handelBannerGalleryClose'></common-gallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  data () {
    return {
      imgs: ['https://pbs.twimg.com/profile_images/1062012452571799552/BoK9IQPw_400x400.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9Spvl8lPXG5_frZOaDAHiQZT0odjxK3qVnigOrLwk_1GlpXCT6g'],
      showGallary: false
    }
  },
  props: {
    sightName: String,
    bannerImg: String,
    bannerImgs: Array
  },
  methods: {
    handelBannerGallery () {
      this.showGallary = true
    },
    handelBannerGalleryClose () {
      this.showGallary = false
    }
  },
  components: {
    CommonGallary
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
      display: flex
      position: absolute
      left: 0
      right: 0
      bottom: 0
      line-height: .6rem
      color: #fff
      background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
      .banner-tittle
        flex: 1
        font-size: .32rem
        padding: 0 .2rem
      .banner-number
        height: .32rem
        line-height: .32rem
        margin-top: .14rem
        padding: 0 .4rem
        border-radius: .2rem
        background: rgba(0, 0, 0, .8)
        font-size: .24rem
        .banner-icon
          font-size: .24rem
</style>
