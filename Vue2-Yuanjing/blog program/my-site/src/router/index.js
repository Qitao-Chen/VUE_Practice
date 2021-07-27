import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);//使用一个vue插件
import routes from "./routes.js"

const router = new VueRouter({
  //配置
  routes,
  mode:"history"
})
export default router;