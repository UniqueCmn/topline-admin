// 程序启动

import Vue from 'vue'
import App from './App.vue' // 加载根组件

// 优先查找文件，文件找不到就找目录
// 找到目录，优先加载目录中的index.js
import router from './router' // 加载路由

Vue.config.productionTip = false

// 创建vue实例
new Vue({
  router,
  render: h => h(App) // 将根组件替换到页面节点
}).$mount('#app')
