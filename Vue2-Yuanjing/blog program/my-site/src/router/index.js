import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter); //使用一个vue插件
import routes from "./routes.js"
import titleController from '@/utils/titleController.js';
//test new computer config function 
const router = new VueRouter({
  //配置
  routes,
  mode: "history",
  linkActiveClass: "selected"
})

router.afterEach((to, from) => {
  if (to.meta.title) {
    titleController.setRouteTitle(to.meta.title)
  }
})
export default router;