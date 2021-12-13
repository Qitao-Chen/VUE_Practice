import Vue from 'vue';
const app = new Vue({});

/**
 * Event Name：mainSroll
 * describe: trigger when main area scroll position changed
 * params: scroll dom or undefined(means there is no dom element)
 */
Vue.prototype.$bus = app; //挂载到原型上面
//import at main.js

//导出给js文件用
export default app;