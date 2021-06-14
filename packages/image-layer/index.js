import ImageLayer from './src/main';

/* istanbul ignore next */
ImageLayer.install = function(Vue) {
  Vue.component(ImageLayer.name, ImageLayer);
};

export default ImageLayer;
