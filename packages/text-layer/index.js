import TextLayer from './src/main';

/* istanbul ignore next */
TextLayer.install = function(Vue) {
  Vue.component(TextLayer.name, TextLayer);
};

export default TextLayer;
