import Vue from 'vue'

import App from './App.vue'
import router from './router/index'
// import vuex store 
import store from './store/index'
import OfficeUIFabricVue from 'office-ui-fabric-vue';

  // import css style
import 'office-ui-fabric-vue/dist/index.css';
import axios from 'axios'
import VueAxios from 'vue-axios'
 
Vue.use(VueAxios, axios)

Vue.use(OfficeUIFabricVue);


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
  axios
}).$mount('#app')


