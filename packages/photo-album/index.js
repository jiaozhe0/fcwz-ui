import PhotoAlbum from './src/main';

/* istanbul ignore next */
PhotoAlbum.install = function(Vue) {
  Vue.component(PhotoAlbum.name, PhotoAlbum);
};

export default PhotoAlbum;
