import FcPageLayout from '../page/src/layout';

/* istanbul ignore next */
FcPageLayout.install = function(Vue) {
  Vue.component(FcPageLayout.name, FcPageLayout);
};

export default FcPageLayout;
