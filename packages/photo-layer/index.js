import PhotoLayer from './src/main';

/* istanbul ignore next */
PhotoLayer.install = function(Vue) {
  Vue.component(PhotoLayer.name, PhotoLayer);
};

export default PhotoLayer;
