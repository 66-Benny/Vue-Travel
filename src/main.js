// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastCLick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'swiper/dist/css/swiper.css'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'

Vue.config.productionTip = false
fastCLick.attach(document.body)
Vue.use(VueAwesomeSwiper, axios, VueAxios)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
