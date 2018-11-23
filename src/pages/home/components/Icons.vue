<template>
  <div class="icons">
      <div class="icon" v-for="item of iconList" :key="item.id">
          <div class="icon-img">
              <img class="icon-img-content" :src="item.iconUrl">
          </div>
          <p class="icon-dec">{{item.iconDec}}</p>
      </div>
  </div>
</template>

<script>

export default {
  name: 'HomeIcons',
  data () {
    return {
      iconList: [{
        id: '001',
        iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        iconDec: '景点门票'
      }, {
        id: '002',
        iconUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
        iconDec: '一日游'
      },
      {
        id: '003',
        iconUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
        iconDec: '杭州必游'
      },
      {
        id: '004',
        iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
        iconDec: '动植物园'
      },
      {
        id: '005',
        iconUrl: 'https://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
        iconDec: '打卡圣地'
      },
      {
        id: '006',
        iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/17/99402a22ce4af302.png',
        iconDec: '西湖'
      },
      {
        id: '007',
        iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png',
        iconDec: '泡温泉'
      }, {
        id: '008',
        iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/b8/c5dcdb58deec2402.png',
        iconDec: '西溪湿地'
      }]
    }
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
