## PageSvg 书页 SVG

作品的页的内容显示。

### 相框

基础的按钮用法。

:::demo 使用`bleed`、`border`、`output`和`circle`属性来定义 Page 的样式。

```html
<el-row :gutter="20">
  <!-- :width="200" -->
  <el-col :span="8">
    <el-page-svg :page="frame2.page" :height="200"></el-page-svg>
    <p>output: one_border</p>
  </el-col>
  <el-col :span="8">
    <el-page-svg :page="frame1.page" :height="200"></el-page-svg>
    <p>output: one_border</p>
  </el-col>
  <el-col :span="8"> </el-col>
</el-row>
<script>
  export default {
    data() {
      return {
        frame1: {
          page: {
            id: '4_6000*7193_6',
            fill: true,
            width: 6000,
            height: 7193,
            size: '270*120mm',
            layer: [
              {
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
              {
                x: 1170,
                y: 2062,
                id: '4_6000*7193_6_3',
                type: 'photo',
                width: 3189,
                height: 1417,
                zIndex: 1
              },
              {
                x: 1642,
                y: 3715,
                id: '4_6000*7193_6_2',
                type: 'photo',
                width: 3189,
                height: 1417,
                zIndex: 1
              },
              {
                x: 1170,
                y: 5369,
                id: '4_6000*7193_6_1',
                type: 'photo',
                width: 3189,
                height: 1417,
                zIndex: 1
              }
            ],
            output: 'more'
          },
          frame: {
            bleed: [15, 15, 15, 15],
            border: [40, 40, 40, 40],
            output: 'more'
          }
        },
        frame2: {
          page: {
            id: '0-46_0',
            layers: [
              {
                id: '1_2410*3000_1',
                fill: true,
                output: 'one_border',
                width: 2410,
                height: 3000,
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
            height: 3000
          },
          frame: {
            bleed: [135, 135, 135, 135],
            border: [40, 40, 40, 40],
            output: ''
          }
        },
        frame3: {
          page: {
            id: '0-46_0',
            layers: [
              {
                id: '1_2410*3000_1',
                fill: true,
                output: 'one_border',
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
            height: 3000
          },
          frame: {
            bleed: [35, 35, 35, 35],
            border: [40, 40, 40, 40],
            output: 'one'
          }
        }
      };
    }
  };
</script>
```

:::

### 相册

基础的按钮用法。

:::demo 使用`bleed`、`border`、`output`和`circle`属性来定义 Page 的样式。

```html
<el-row>
  <el-col :span="8">
    <el-page :page="frame1.page" :frame="frame1.frame" :scale="0.1"></el-page>
    <p>output: one_border</p>
  </el-col>
  <el-col :span="8"> </el-col>
  <el-col :span="8"> </el-col>
</el-row>
<script>
  export default {
    data() {
      return {
        frame1: {
          page: {
            id: '90824_2_y',
            width: 4724,
            height: 2362,
            layers: [
              {
                id: '1_2362*2362_1',
                fill: false,
                layer: [
                  {
                    x: 188,
                    y: 519,
                    id: '1_2362*2362_1_1',
                    type: 'photo',
                    align: 0,
                    shape: 0,
                    width: 1986,
                    height: 1325,
                    zIndex: 1
                  }
                ],
                match: [1, 0, 0]
              },
              {
                id: '1_2362*2362_16',
                fill: false,
                layer: [
                  {
                    x: 188,
                    y: 849,
                    id: '1_2362*2362_16_1',
                    type: 'photo',
                    align: 0,
                    shape: 0,
                    width: 1986,
                    height: 1325,
                    zIndex: 1
                  }
                ],
                match: [1, 0, 0]
              }
            ]
          },
          frame: {
            isLine: true,
            bleed: [35, 35, 35, 35],
            border: [10, 10, 10, 10],
            output: ''
          }
        }
      };
    }
  };
</script>
```

:::
