'use strict';
// 生成网站静态页面
var fs = require('fs');
var path = require('path');
// 读取了官网页面的翻译配置，内置了四种语言
var langConfig = require('../../examples/i18n/page.json');

// 遍历所有语言
langConfig.forEach(lang => {
  // lang => zh-CN
  // 创建四种语言目录
  // /examples/pages/zh-CN
  try {
    fs.statSync(path.resolve(__dirname, `../../examples/pages/${lang.lang}`));
  } catch (e) {
    fs.mkdirSync(path.resolve(__dirname, `../../examples/pages/${lang.lang}`)); // 创建
  }
  // 遍历所有的页面，根据page.tel自动生成对应语言的.vue文件

  Object.keys(lang.pages).forEach(page => {
    // page => 具体的某个页面，比如index
    // 拼模版路径 => /exmpales/pages/template/index.tpl
    var templatePath = path.resolve(
      __dirname,
      `../../examples/pages/template/${page}.tpl`
    );
    // 输出vue文件路径，比如：/examples/pages/zh-CN/index.vue
    var outputPath = path.resolve(
      __dirname,
      `../../examples/pages/${lang.lang}/${page}.vue`
    );
    // 读取模版文件内容
    var content = fs.readFileSync(templatePath, 'utf8');
    // 读取index 页面所有简直对的配置
    var pairs = lang.pages[page];

    // 遍历这些简直对，通过正则匹配方式替换模版中的key
    Object.keys(pairs).forEach(key => {
      content = content.replace(
        new RegExp(`<%=\\s*${key}\\s*>`, 'g'),
        pairs[key]
      );
    });

    fs.writeFileSync(outputPath, content);
  });
});
