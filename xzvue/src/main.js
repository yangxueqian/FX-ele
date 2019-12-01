import Vue from 'vue'
import App from './App.vue'
import router from './router'

import store from './store'
import MyHeader from './components/MyHeader'
Vue.component("my-header",MyHeader);


//5:引入 axios  库
import axios from  "axios"
//6:配置跨域访问保存 session
axios.defaults.withCredentials=true;
//7:将axios库配置vue
Vue.prototype.axios = axios;




new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
