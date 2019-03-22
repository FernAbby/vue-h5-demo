import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible/flexible'
import '@assets/styles/public.scss'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
