import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import Login from './views/Login.vue'
import NotFound from './views/NotFound.vue'
import Products from './views/Products.vue'
import Reg from './views/Reg.vue'
Vue.use(Router)

export default new Router({
  routes: [
    // {path:'/',redirect:'/Index'},
    {path:"/", component:Index},
    {path:"/Index", component:Index},
    {path:"/Login", component:Login},
    {path:"/Reg", component:Reg},
    {path:"/Products", component:Products, props:true},
    {path:"*", component:NotFound}
  ]
})
