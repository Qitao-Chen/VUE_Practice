import Vue from 'vue'
import App from './App.vue'
import './styles/global.less'
import router from './router/index.js'
import  showMessage  from "@/utils/showMessage";
//將常用的功能函數挂載到Vue原型上面，在其他組件中方便使用。不需要每次都引用
Vue.prototype.$showMessage = showMessage;
// import showMessage from './utils/showMessage.js'
// window.showMessage = showMessage
// showMessage('dasdsad','success',2000)

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
