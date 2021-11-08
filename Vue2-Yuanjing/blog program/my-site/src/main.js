import "./mock"
import Vue from 'vue';
import App from './App.vue';
import './styles/global.less';
import router from './router/index.js';
import showMessage from "@/utils/showMessage";
import './eventBus.js'
//將常用的功能函數挂載到Vue原型上面，在其他組件中方便使用。不需要每次都引用
Vue.prototype.$showMessage = showMessage;
// import showMessage from './utils/showMessage.js'
// window.showMessage = showMessage
// showMessage('dasdsad','success',2000)

//register global directive
import vLoading from "@/directives/loading.js";
Vue.directive("loading", vLoading);
import vLazy from "@/directives/lazy.js";
Vue.directive("lazy", vLazy);
/**
 * only for development test 
 */
// import '../src/api/test.js';
import * as blogApi from "./api/blog.js";
// blogApi.getBlogTypes().then(r => {
//   console.log("blog types:", r);
// })
// blogApi.getBlogs().then(r => {
//   console.log("blogs", r)
// })
blogApi.getComments('12451', 2, 20).then(r => {
  console.log(r)
})

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')