'use strict';
// 添加新组件
/**
 * 比如： make new city 城市列表
 * 1.在 /packages 目录下新建组件目录，并完成目录结构的构建
 * 2. 创建
 *
 * */

// 执行： node
// new 组件名 中文组件名
console.log();
process.on('exit', () => {
  console.log();
});

if (!process.argv[2]) {
  console.error('[组件名]必填 - Please enter new component name');
  process.exit(1);
}

const path = require('path');
const fs = require('fs');
const fileSave = require('file-save');
const uppercamelcase = require('uppercamelcase'); // 连字符转大驼峰
const componentname = process.argv[2];
const chineseName = process.argv[3] || componentname; // 中文组件名
const ComponentName = uppercamelcase(componentname); // city =》 City
const PackagePath = path.resolve(__dirname, '../../packages', componentname); // 组件名路径 /packages/city

// 组件文件列表
// 组件index.js文件
// 组件src/main.vue文件
// 示例文档文件：
// 测试文件
// 样式文件
// ts 类型文件
const Files = [
  // /packages/组件/index.js
  {
    filename: 'index.js',
    content: `import ${ComponentName} from './src/main';

/* istanbul ignore next */
${ComponentName}.install = function(Vue) {
  Vue.component(${ComponentName}.name, ${ComponentName});
};

export default ${ComponentName};`
  },
  // /packages/组件/src/main.js
  {
    filename: 'src/main.vue',
    content: `<template>
  <div class="fc-${componentname}"></div>
</template>

<script>
export default {
  name: 'Fc${ComponentName}'
};
</script>`
  },
  // 四种语言
  {
    filename: path.join('../../examples/docs/zh-CN', `${componentname}.md`),
    content: `## ${ComponentName} ${chineseName}`
  },
  {
    filename: path.join('../../examples/docs/en-US', `${componentname}.md`),
    content: `## ${ComponentName}`
  },
  {
    filename: path.join('../../examples/docs/es', `${componentname}.md`),
    content: `## ${ComponentName}`
  },
  {
    filename: path.join('../../examples/docs/fr-FR', `${componentname}.md`),
    content: `## ${ComponentName}`
  },
  // 单元测试
  {
    filename: path.join('../../test/unit/specs', `${componentname}.spec.js`),
    content: `import { createTest, destroyVM } from '../util';
import ${ComponentName} from 'packages/${componentname}';

describe('${ComponentName}', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(${ComponentName}, true);
    expect(vm.$el).to.exist;
  });
});
`
  },
  // 组件样式 /packages/theme-chalk/src/city.scss
  {
    filename: path.join(
      '../../packages/theme-chalk/src',
      `${componentname}.scss`
    ),
    content: `@import "mixins/mixins";
    @import "common/var";
    @include b(${componentname}) {
}`
  },
  // 组件的类型声明文件 city.d.ts
  {
    filename: path.join('../../types', `${componentname}.d.ts`),
    content: `import { ElementUIComponent } from './component'

/** ${ComponentName} Component */
export declare class El${ComponentName} extends ElementUIComponent {
}`
  }
];

// 将组件添加到 components.json
const componentsFile = require('../../components.json');
const fcComponentsFile = require('../../fc-components.json'); // fc

if (componentsFile[componentname]) {
  console.error(`${componentname} 已存在.`);
  process.exit(1);
}
// 方寸组件 fc
if (fcComponentsFile[componentname]) {
  console.error(`${componentname} 已存在.`);
  process.exit(1);
}
componentsFile[componentname] = `./packages/${componentname}/index.js`;
fcComponentsFile[componentname] = `./packages/${componentname}/index.js`; // fc

fileSave(path.join(__dirname, '../../components.json'))
  .write(JSON.stringify(componentsFile, null, '  '), 'utf8')
  .end('\n');

// fc
fileSave(path.join(__dirname, '../../fc-components.json'))
  .write(JSON.stringify(fcComponentsFile, null, '  '), 'utf8')
  .end('\n');

// 添加到 index.scss
const sassPath = path.join(
  __dirname,
  '../../packages/theme-chalk/src/index.scss'
);
const sassImportText = `${fs.readFileSync(
  sassPath
)}@import "./${componentname}.scss";`;
fileSave(sassPath)
  .write(sassImportText, 'utf8')
  .end('\n');

// 添加到 element-ui.d.ts
const elementTsPath = path.join(__dirname, '../../types/element-ui.d.ts');

let elementTsText = `${fs.readFileSync(elementTsPath)}
/** ${ComponentName} Component */
export class ${ComponentName} extends Fc${ComponentName} {}`;

const index = elementTsText.indexOf('export') - 1;
const importString = `import { Fc${ComponentName} } from './${componentname}'`;

elementTsText =
  elementTsText.slice(0, index) +
  importString +
  '\n' +
  elementTsText.slice(index);

fileSave(elementTsPath)
  .write(elementTsText, 'utf8')
  .end('\n');

// 创建 package
Files.forEach(file => {
  fileSave(path.join(PackagePath, file.filename))
    .write(file.content, 'utf8')
    .end('\n');
});

// 添加到 nav.config.json
const navConfigFile = require('../../examples/nav.config.json');

// 路由配置
Object.keys(navConfigFile).forEach(lang => {
  let groups = navConfigFile[lang][4].groups;
  groups[0].list.push({
    path: `/${componentname}`,
    title:
      lang === 'zh-CN' && componentname !== chineseName
        ? `${ComponentName} ${chineseName}`
        : ComponentName
  });
});

fileSave(path.join(__dirname, '../../examples/nav.config.json'))
  .write(JSON.stringify(navConfigFile, null, '  '), 'utf8')
  .end('\n');

console.log('DONE!');
