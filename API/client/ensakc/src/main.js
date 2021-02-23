import Vue from 'vue'
import '@/plugins/axios'
import '@/plugins/ant-design-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import moment from 'moment'

Vue.prototype.moment = moment
Vue.config.productionTip = false

// By injecting router & store in the Vue instance
// it becomes aware of those instances
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
