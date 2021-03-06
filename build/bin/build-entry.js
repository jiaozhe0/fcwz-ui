/* 生成src/index.js文件件 */
var Components = require('../../components.json');
var fs = require('fs');
var render = require('json-templater/string'); // 字符串模版
var uppercamelcase = require('uppercamelcase'); // 连字符形式的字符串转换为大驼峰形式，比如：checkbox-button => CheckboxButton
var path = require('path');
var endOfLine = require('os').EOL;

// 输出路径 src/index.js
var OUTPUT_PATH = path.join(__dirname, '../../src/index.js');
// import 语句模版，那么： 大驼峰 package： 连字符形式的字符串
var IMPORT_TEMPLATE =
  "import {{name}} from '../packages/{{package}}/index.js';";
var INSTALL_COMPONENT_TEMPLATE = '  {{name}}';
// /src/index.js 文件模版
var MAIN_TEMPLATE = `/* Automatically generated by './build/bin/build-entry.js' */

{{include}}
import locale from 'element-ui/src/locale';
import CollapseTransition from 'element-ui/src/transitions/collapse-transition';

const components = [
{{install}},
  CollapseTransition
];

const install = function(Vue, opts = {}) {
  locale.use(opts.locale);
  locale.i18n(opts.i18n);

  components.forEach(component => {
    Vue.component(component.name, component);
  });

  Vue.use(InfiniteScroll);
  Vue.use(Loading.directive);

  Vue.prototype.$ELEMENT = {
    size: opts.size || '',
    zIndex: opts.zIndex || 2000
  };

  Vue.prototype.$loading = Loading.service;
  Vue.prototype.$msgbox = MessageBox;
  Vue.prototype.$alert = MessageBox.alert;
  Vue.prototype.$confirm = MessageBox.confirm;
  Vue.prototype.$prompt = MessageBox.prompt;
  Vue.prototype.$notify = Notification;
  Vue.prototype.$message = Message;

};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version: '{{version}}',
  locale: locale.use,
  i18n: locale.i18n,
  install,
  CollapseTransition,
  Loading,
{{list}}
};
`;

delete Components.font;
// 包名组成的数组
var ComponentNames = Object.keys(Components);
// import 语句组成的数组
var includeComponentTemplate = [];
// components数组
var installTemplate = [];
// export 导出的数组，模版中的list
var listTemplate = [];

// 遍历组件包
ComponentNames.forEach(name => {
  var componentName = uppercamelcase(name);

  includeComponentTemplate.push(
    render(IMPORT_TEMPLATE, {
      name: componentName,
      package: name
    })
  );

  if (
    [
      'Loading',
      'MessageBox',
      'Notification',
      'Message',
      'InfiniteScroll'
    ].indexOf(componentName) === -1
  ) {
    installTemplate.push(
      render(INSTALL_COMPONENT_TEMPLATE, {
        name: componentName,
        component: name
      })
    );
  }

  if (componentName !== 'Loading') listTemplate.push(`  ${componentName}`);
});

var template = render(MAIN_TEMPLATE, {
  include: includeComponentTemplate.join(endOfLine),
  install: installTemplate.join(',' + endOfLine),
  version: process.env.VERSION || require('../../package.json').version,
  list: listTemplate.join(',' + endOfLine)
});

// 就绪的模版文件写入/src/index.js
fs.writeFileSync(OUTPUT_PATH, template);
console.log('[build entry] DONE:', OUTPUT_PATH);
