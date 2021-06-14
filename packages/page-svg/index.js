import PageSvg from './src/main';

/* istanbul ignore next */
PageSvg.install = function(Vue) {
  Vue.component(PageSvg.name, PageSvg);
};

export default PageSvg;
