import Vue from 'vue'
import App from './App/App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import VueDragDrop from 'vue-drag-drop'

Vue.config.productionTip = false
Vue.use(VueDragDrop)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
