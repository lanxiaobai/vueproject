import Vue from 'vue'
import App from './App.vue'

// 引入路由模块
import VueRouter from 'vue-router'
// 引入index组件
import index from './components/index.vue'
// 使用路由中间件
Vue.use(VueRouter);

// 2. 定义路由
const routes = [
  { path: '/', component: index }
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

import './assets/statics/site/css/style.css';

Vue.config.productionTip = false;

const app = new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
