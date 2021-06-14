'use strict';
// 处理图标
var postcss = require('postcss');
var fs = require('fs');
var path = require('path');
var fontFile = fs.readFileSync(
  path.resolve(__dirname, '../../packages/theme-chalk/src/icon.scss'),
  'utf8'
);
// 得到样式节点
var nodes = postcss.parse(fontFile).nodes;
var classList = [];
// 遍历样式节点
nodes.forEach(node => {
  // 每个节点的选择器
  var selector = node.selector || '';
  // 正则表达式
  var reg = new RegExp(/\.el-icon-([^:]+):before/);
  // 匹配得到icon名称，比如：.el-icon-add:before => add
  var arr = selector.match(reg);

  if (arr && arr[1]) {
    classList.push(arr[1]);
  }
});

classList.reverse(); // 希望按 css 文件顺序倒序排列

// 将icon 名称组成的数组写入到/exmpales/icon.json 文件中
fs.writeFile(
  path.resolve(__dirname, '../../examples/icon.json'),
  JSON.stringify(classList),
  () => {}
);
