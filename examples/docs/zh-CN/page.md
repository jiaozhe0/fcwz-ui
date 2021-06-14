<!--
 * @Author: your name
 * @Date: 2021-06-10 23:30:40
 * @LastEditTime: 2021-06-12 18:10:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /element/examples/docs/zh-CN/page.md
-->

## Page 书页

常用的操作按钮。

### 基础用法

基础的按钮用法。

:::demo 使用`type`、`plain`、`round`和`circle`属性来定义 Button 的样式。

```html
<el-row>
  <el-page :page="page" :scale="0.2"></el-page>
  <el-button type="primary">主要按钮</el-button>
  <el-button type="success">成功按钮</el-button>
  <el-button type="info">信息按钮</el-button>
  <el-button type="warning">警告按钮</el-button>
  <el-button type="danger">危险按钮</el-button>
</el-row>
<script>
  export default {
    data() {
      return {
        page: {
          id: '0-46_0',
          layers: [
            {
              id: '1_2410*3000_1',
              fill: true,
              output: 'more',
              size: '10 寸',
              layer: [
                {
                  x: 436,
                  y: 318,
                  width: 1538,
                  height: 2364,
                  zIndex: 1,
                  type: 'photo',
                  id: '1_2410*3000_1_1'
                }
              ]
            }
          ],
          width: 2410,
          height: 3000,
          bleed: [5, 5, 5, 5],
          border: [10, 10, 10, 10],
          output: 'more'
        }
      };
    }
  };
</script>
```
