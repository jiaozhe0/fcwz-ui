'use strict';
// 为组件库添加新语言，比如fr语法
// 分别为涉及到文件（component.json, page.json, nav.config, nav.config.json）设置该语言的相关配置
// 具体的配置项默认为英文，你只需要在相应的文件中将这些英文配置翻译为对应的语言即可
console.log();
process.on('exit', () => {
  console.log();
});

if (!process.argv[2]) {
  console.error('[language] is required!');
  process.exit(1);
}

var fs = require('fs');
const path = require('path');
const fileSave = require('file-save');
const lang = process.argv[2];
// const configPath = path.resolve(__dirname, '../../examples/i18n', lang);

// 添加到 components.json
const componentFile = require('../../examples/i18n/component.json');
if (componentFile.some(item => item.lang === lang)) {
  console.error(`${lang} already exists.`);
  process.exit(1);
}
let componentNew = Object.assign(
  {},
  componentFile.filter(item => item.lang === 'en-US')[0],
  { lang }
);
// 添加新语言
componentFile.push(componentNew);
// 将被改动后的componentFile写到
fileSave(path.join(__dirname, '../../examples/i18n/component.json'))
  .write(JSON.stringify(componentFile, null, '  '), 'utf8')
  .end('\n');

// 添加到 page.json
const pageFile = require('../../examples/i18n/page.json');
let pageNew = Object.assign(
  {},
  pageFile.filter(item => item.lang === 'en-US')[0],
  { lang }
);
pageFile.push(pageNew);
fileSave(path.join(__dirname, '../../examples/i18n/page.json'))
  .write(JSON.stringify(pageFile, null, '  '), 'utf8')
  .end('\n');

// 添加到 route.json
const routeFile = require('../../examples/i18n/route.json');
routeFile.push({ lang });
fileSave(path.join(__dirname, '../../examples/i18n/route.json'))
  .write(JSON.stringify(routeFile, null, '  '), 'utf8')
  .end('\n');

// 添加到 nav.config.json
const navFile = require('../../examples/nav.config.json');
navFile[lang] = navFile['en-US'];
fileSave(path.join(__dirname, '../../examples/nav.config.json'))
  .write(JSON.stringify(navFile, null, '  '), 'utf8')
  .end('\n');

// docs 下新建对应文件夹
try {
  fs.statSync(path.resolve(__dirname, `../../examples/docs/${lang}`));
} catch (e) {
  fs.mkdirSync(path.resolve(__dirname, `../../examples/docs/${lang}`));
}

console.log('DONE!');
