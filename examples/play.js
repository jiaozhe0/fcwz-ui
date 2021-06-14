import Vue from 'vue';
import Element from 'main/index.js'; // 全部组件倒入
import App from './play/index.vue';
import 'packages/theme-chalk/src/index.scss'; // 单独引入了样式

Vue.use(Element);

new Vue({
  // eslint-disable-line
  render: h => h(App)
}).$mount('#app');
