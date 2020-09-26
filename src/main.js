import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import titleMixin from './mixins/titleMixin'

Vue.config.productionTip = true
Vue.mixin(titleMixin)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
