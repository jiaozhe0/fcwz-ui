/*
 * @Author: your name
 * @Date: 2021-06-06 13:18:40
 * @LastEditTime: 2021-06-06 23:13:49
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /element/packages/button/index.js
 */
import ElButton from './src/button';

/* istanbul ignore next */
ElButton.install = function(Vue) {
  Vue.component(ElButton.name, ElButton);
};

export default ElButton;
