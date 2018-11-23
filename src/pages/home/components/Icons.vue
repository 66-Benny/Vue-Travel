<template>
  <div class="icons">
      <div class="icon" v-for="item of iconList" :key="item.id">
          <div class="icon-img">
              <img class="icon-img-content" :src="item.imgUrl">
          </div>
          <p class="icon-dec">{{item.desc}}</p>
      </div>
  </div>
</template>

<script>

export default {
  name: 'HomeIcons',
  data () {
    return {
    }
  },
  props: {
    iconList: Array
  }
}
</script>

<style lang="stylus" scoped>
.icons
    width 100%
    overflow hidden
    height 0
    padding-bottom 50%
    .icon
        float left
        width 25%
        padding-bottom 25%
        position relative
        .icon-img
            position absolute
            top 0
            left 0
            right 0
            bottom .44rem
            .icon-img-content
                height 100%
                display block
                margin 0 auto
        .icon-dec
            position absolute
            bottom 0
            left 0
            right 0
            heigt .44rem
            line-heigt .44rem
            text-align center
            color $darkTextColo
</style>
