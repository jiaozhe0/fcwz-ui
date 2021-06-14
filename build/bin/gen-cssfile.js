// 处理样式
// 执行命令： node build/bin/gen-cssfile.js
// 生产 packages/theme-chalk/src/index.scss[css] 文件
// 样式没有写在vue文件内，而是作为一个单独的项目写在了 packages/theme-chalk文件内，通过gulp构建
var fs = require('fs');
var path = require('path');
var Components = require('../../components.json');
var themes = ['theme-chalk'];
Components = Object.keys(Components);
var basepath = path.resolve(__dirname, '../../packages/');

function fileExists(filePath) {
  try {
    return fs.statSync(filePath).isFile();
  } catch (err) {
    return false;
  }
}

themes.forEach(theme => {
  var isSCSS = theme !== 'theme-default';
  var indexContent = isSCSS
    ? '@import "./base.scss";\n'
    : '@import "./base.css";\n';
  Components.forEach(function(key) {
    if (['icon', 'option', 'option-group'].indexOf(key) > -1) return;
    var fileName = key + (isSCSS ? '.scss' : '.css');
    indexContent += '@import "./' + fileName + '";\n';
    var filePath = path.resolve(basepath, theme, 'src', fileName);
    if (!fileExists(filePath)) {
      fs.writeFileSync(filePath, '', 'utf8');
      console.log(theme, ' 创建遗漏的 ', fileName, ' 文件');
    }
  });
  fs.writeFileSync(
    path.resolve(basepath, theme, 'src', isSCSS ? 'index.scss' : 'index.css'),
    indexContent
  );
});
