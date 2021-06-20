## TextLayer 文字图层

文字图层的内容显示。

:::demo 使用`layer`、`scale`属性来定义 Layer 的样式。

```html
<el-row :gutter="20">
  <el-col :span="8">
    <el-text-layer :layer="layer" :scale="1"></el-text-layer>
  </el-col>
  <el-col :span="8"><p style="font-size:44px">都是社会</p> </el-col>
  <el-col :span="8">
    <el-text-layer :layer="layer1" :scale="0.1"></el-text-layer>
  </el-col>
</el-row>
<script>
  export default {
    data() {
      return {
        layer: {
          x: 1642,
          y: 408,
          id: '4_6000*7193_6_4',
          type: 'text',
          width: 3189,
          height: 1417,
          zIndex: 1,
          data: {
            renderContent: '<p style="font-size:44em">都是社会</p>'
          }
        },
        layer1: {
          x: 1642,
          y: 408,
          id: '4_6000*7193_6_4',
          type: 'text',
          width: 2500,
          height: 507,
          zIndex: 1,
          data: {}
        },
        layer2: {
          x: 1642,
          y: 408,
          id: '4_6000*7193_6_4',
          type: 'photo',
          width: 3189,
          height: 1417,
          zIndex: 1,
          style: 'ellipse',
          data: {
            scale: 1,
            naturalH: 1514,
            naturalW: 2362,
            rotate: 0,
            photoUrl: 'phosee/61842/5e801de93a3e4dfd8_3.jpg',
            photoId: '5e801de93a3e4dfd8',
            shape: 0,
            isUpload: true,
            fileName: '3.jpg',
            result:
              'http://fcwz-paiban.phosee.cn/phosee/61842/5e801de93a3e4dfd8_3.jpg?imageView2/2/w/800/h/800',
            date: '2020/11/08 15:32:59',
            isQiniu: true,
            x: 0,
            y: 313.5461473327689,
            width: 3189,
            height: 2044.0922946655378,
            initialW: 3189,
            initialH: 2044.0922946655378,
            invalid: false
          }
        },
        layer3: {
          x: 1642,
          y: 408,
          id: '4_6000*7193_6',
          type: 'photo',
          width: 3189,
          height: 1417,
          zIndex: 1,
          style: 'circle',
          data: {
            scale: 1,
            naturalH: 1514,
            naturalW: 2362,
            rotate: 0,
            photoUrl: 'phosee/61842/5e801de93a3e4dfd8_3.jpg',
            photoId: '5e801de93a3e4dfd8',
            shape: 0,
            isUpload: true,
            fileName: '3.jpg',
            result:
              'http://fcwz-paiban.phosee.cn/phosee/61842/5e801de93a3e4dfd8_3.jpg?imageView2/2/w/800/h/800',
            date: '2020/11/08 15:32:59',
            isQiniu: true,
            x: 0,
            y: 313.5461473327689,
            width: 3189,
            height: 2044.0922946655378,
            initialW: 3189,
            initialH: 2044.0922946655378,
            invalid: false
          }
        }
      };
    }
  };
</script>
```

:::
