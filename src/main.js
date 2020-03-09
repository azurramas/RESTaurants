import Vue from 'vue'
import './plugins/axios'
import router from "./router";
import App from './App.vue'
import store from './store.js'
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import vWow from 'v-wow'

Vue.config.productionTip = false

Vue.use(vWow);
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
