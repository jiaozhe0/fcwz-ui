<!--
 * @Author: your name
 * @Date: 2021-06-15 19:17:48
 * @LastEditTime: 2021-06-16 23:24:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /element/examples/docs/zh-CN/photo-album.md
-->

## PhotoAlbum 相册

### 基础用法

基础的按钮用法。

:::demo 使用`type`、`plain`、`round`和`circle`属性来定义 Button 的样式。

```html
<el-row>
  <fc-photo-album :pageList="pageList" :scale="0.1"></fc-photo-album>
</el-row>
<script>
  export default {
    data() {
      return {
        a: {
          pro: '90368',
          pageInfo: {
            count: 15,
            start: 0,
            addCount: 0,
            pagesIds: [
              '90368_首页_n_d',
              '90368_2_y',
              '90368_3_y',
              '90368_4_y',
              '90368_5_y',
              '90368_6_y',
              '90368_7_y',
              '90368_8_y',
              '90368_9_y',
              '90368_10_y',
              '90368_11_y',
              '90368_12_y',
              '90368_13_y',
              '90368_14_y',
              '90368_尾页_n_d'
            ],
            pagesObj: {
              '90368_2_y': {
                id: '90368_2_y',
                width: 5906,
                height: 2953,
                layers: [
                  {
                    id: '1_2953*2953_2',
                    fill: false,
                    layer: [
                      {
                        x: 236,
                        y: 1061,
                        id: '1_2953*2953_2_1',
                        type: 'photo',
                        align: 0,
                        shape: 0,
                        width: 2481,
                        height: 1656,
                        zIndex: 1,
                        data: {
                          scale: 1,
                          naturalH: '801',
                          naturalW: '1200',
                          rotate: 0,
                          photoUrl:
                            'phosee/61542/83b3fa6b27b54ddb9_微信图片_2021060310342342.jpg',
                          photoId: '83b3fa6b27b54ddb9',
                          shape: 0,
                          fileName: '微信图片_2021060310342342.jpg',
                          result:
                            'http://fcwz-paiban.phosee.cn/phosee/61542/83b3fa6b27b54ddb9_微信图片_2021060310342342.jpg?imageView2/2/w/800/h/800',
                          orientation: null,
                          date: '2021/04/12 09:52:41',
                          isUpload: true,
                          isQiniu: true,
                          x: 0,
                          y: 0.03374999999994088,
                          width: 2481,
                          height: 1656.0674999999999,
                          initialW: 2481,
                          initialH: 1656.0674999999999,
                          invalid: false
                        }
                      }
                    ],
                    match: [1, 0, 0]
                  },
                  {
                    id: '1_2953*2953_2',
                    fill: false,
                    layer: [
                      {
                        x: 236,
                        y: 1061,
                        id: '1_2953*2953_2_1',
                        type: 'photo',
                        align: 0,
                        shape: 0,
                        width: 2481,
                        height: 1656,
                        zIndex: 1,
                        data: {
                          scale: 1,
                          naturalH: '801',
                          naturalW: '1200',
                          rotate: 0,
                          photoUrl:
                            'phosee/61542/1a7151b3cf0847028_微信图片_2021060310342346.jpg',
                          photoId: '1a7151b3cf0847028',
                          shape: 0,
                          fileName: '微信图片_2021060310342346.jpg',
                          result:
                            'http://fcwz-paiban.phosee.cn/phosee/61542/1a7151b3cf0847028_微信图片_2021060310342346.jpg?imageView2/2/w/800/h/800',
                          orientation: null,
                          date: '2021/04/12 09:55:15',
                          isUpload: true,
                          isQiniu: true,
                          x: 0,
                          y: 0.03374999999994088,
                          width: 2481,
                          height: 1656.0674999999999,
                          initialW: 2481,
                          initialH: 1656.0674999999999,
                          invalid: false
                        }
                      }
                    ],
                    match: [1, 0, 0]
                  }
                ]
              },
              '90368_3_y': {
                id: '90368_3_y',
                width: 5906,
                height: 2953,
                layers: [
                  {
                    id: '1_2953*2953_2',
                    fill: false,
                    layer: [
                      {
                        x: 236,
                        y: 1061,
                        id: '1_2953*2953_2_1',
                        type: 'photo',
                        align: 0,
                        shape: 0,
                        width: 2481,
                        height: 1656,
                        zIndex: 1,
                        data: {
                          scale: 1,
                          naturalH: '801',
                          naturalW: '1200',
                          rotate: 0,
                          photoUrl:
                            'phosee/61542/e7754d5ac3374c3f8_微信图片_2021060310342338.jpg',
                          photoId: 'e7754d5ac3374c3f8',
                          shape: 0,
                          fileName: '微信图片_2021060310342338.jpg',
                          result:
                            'http://fcwz-paiban.phosee.cn/phosee/61542/e7754d5ac3374c3f8_微信图片_2021060310342338.jpg?imageView2/2/w/800/h/800',
                          orientation: null,
                          date: '2021/04/12 09:58:48',
                          isUpload: true,
                          isQiniu: true,
                          x: 0,
                          y: 0.03374999999994088,
                          width: 2481,
                          height: 1656.0674999999999,
                          initialW: 2481,
                          initialH: 1656.0674999999999,
                          invalid: false
                        }
                      }
                    ],
                    match: [1, 0, 0]
                  },
                  {
                    id: '1_2953*2953_2',
                    fill: false,
                    layer: [
                      {
                        x: 236,
                        y: 1061,
                        id: '1_2953*2953_2_1',
                        type: 'photo',
                        align: 0,
                        shape: 0,
                        width: 2481,
                        height: 1656,
                        zIndex: 1,
                        data: {
                          scale: 1,
                          naturalH: '801',
                          naturalW: '1200',
                          rotate: 0,
                          photoUrl:
                            'phosee/61542/f6fee21a7e45428e8_微信图片_2021060310342339.jpg',
                          photoId: 'f6fee21a7e45428e8',
                          shape: 0,
                          fileName: '微信图片_2021060310342339.jpg',
                          result:
                            'http://fcwz-paiban.phosee.cn/phosee/61542/f6fee21a7e45428e8_微信图片_2021060310342339.jpg?imageView2/2/w/800/h/800',
                          orientation: null,
                          date: '2021/04/12 09:51:43',
                          isUpload: true,
                          isQiniu: true,
                          x: 0,
                          y: 0.03374999999994088,
                          width: 2481,
                          height: 1656.0674999999999,
                          initialW: 2481,
                          initialH: 1656.0674999999999,
                          invalid: false
                        }
                      }
                    ],
                    match: [1, 0, 0]
                  }
                ]
              },
              '90368_4_y': {
                id: '90368_4_y',
                width: 5906,
                height: 2953,
                layers: [
                  {
                    id: '2_2953*2953_4',
                    fill: false,
                    layer: [
                      {
                        x: 555,
                        y: 236,
                        id: '2_2953*2953_4_2',
                        type: 'photo',
                        align: 0,
                        shape: 0,
                        width: 1843,
                        height: 1231,
                        zIndex: 1,
                        data: {
                          scale: 1,
                          naturalH: '801',
                          naturalW: '1200',
                          rotate: 0,
                          photoUrl:
                            'phosee/61542/4ca9d66b3325447da_微信图片_2021060310342345.jpg',
                          photoId: '4ca9d66b3325447da',
                          shape: 0,
                          fileName: '微信图片_2021060310342345.jpg',
                          result:
                            'http://fcwz-paiban.phosee.cn/phosee/61542/4ca9d66b3325447da_微信图片_2021060310342345.jpg?imageView2/2/w/800/h/800',
                          orientation: null,
                          date: '2021/04/12 09:53:37',
                          isUpload: true,
                          isQiniu: true,
                          x: 0.5973782771535525,
                          y: 0,
                          width: 1844.194756554307,
                          height: 1231,
                          initialW: 1844.194756554307,
                          initialH: 1231,
                          invalid: false
                        }
                      },
                      {
                        x: 555,
                        y: 1476,
                        id: '2_2953*2953_4_1',
                        type: 'photo',
                        align: 0,
                        shape: 0,
                        width: 1843,
                        height: 1230,
                        zIndex: 1,
                        data: {
                          scale: 1,
                          naturalH: '801',
                          naturalW: '1200',
                          rotate: 0,
                          photoUrl:
                            'phosee/61542/9f094af7668f4df78_微信图片_2021060310342348.jpg',
                          photoId: '9f094af7668f4df78',
                          shape: 0,
                          fileName: '微信图片_2021060310342348.jpg',
                          result:
                            'http://fcwz-paiban.phosee.cn/phosee/61542/9f094af7668f4df78_微信图片_2021060310342348.jpg?imageView2/2/w/800/h/800',
                          orientation: null,
                          date: '2021/04/12 09:51:07',
                          isUpload: true,
                          isQiniu: true,
                          x: 0,
                          y: 0.10125000000005002,
                          width: 1843,
                          height: 1230.2025,
                          initialW: 1843,
                          initialH: 1230.2025,
                          invalid: false
                        }
                      }
                    ],
                    match: [2, 0, 0]
                  },
                  {
                    id: '2_2953*2953_4',
                    fill: false,
                    layer: [
                      {
                        x: 555,
                        y: 236,
                        id: '2_2953*2953_4_2',
                        type: 'photo',
                        align: 0,
                        shape: 0,
                        width: 1843,
                        height: 1231,
                        zIndex: 1,
                        data: {
                          scale: 1,
                          naturalH: '801',
                          naturalW: '1200',
                          rotate: 0,
                          photoUrl:
                            'phosee/61542/84b8aeda5cdf4c9b8_微信图片_2021060310342344.jpg',
                          photoId: '84b8aeda5cdf4c9b8',
                          shape: 0,
                          fileName: '微信图片_2021060310342344.jpg',
                          result:
                            'http://fcwz-paiban.phosee.cn/phosee/61542/84b8aeda5cdf4c9b8_微信图片_2021060310342344.jpg?imageView2/2/w/800/h/800',
                          orientation: null,
                          date: '2021/04/12 09:53:12',
                          isUpload: true,
                          isQiniu: true,
                          x: 0.5973782771535525,
                          y: 0,
                          width: 1844.194756554307,
                          height: 1231,
                          initialW: 1844.194756554307,
                          initialH: 1231,
                          invalid: false
                        }
                      },
                      {
                        x: 555,
                        y: 1476,
                        id: '2_2953*2953_4_1',
                        type: 'photo',
                        align: 0,
                        shape: 0,
                        width: 1843,
                        height: 1230,
                        zIndex: 1,
                        data: {
                          scale: 1,
                          naturalH: '801',
                          naturalW: '1200',
                          rotate: 0,
                          photoUrl:
                            'phosee/61542/a90ab93f290945538_微信图片_2021060310342343.jpg',
                          photoId: 'a90ab93f290945538',
                          shape: 0,
                          fileName: '微信图片_2021060310342343.jpg',
                          result:
                            'http://fcwz-paiban.phosee.cn/phosee/61542/a90ab93f290945538_微信图片_2021060310342343.jpg?imageView2/2/w/800/h/800',
                          orientation: null,
                          date: '2021/04/12 09:53:00',
                          isUpload: true,
                          isQiniu: true,
                          x: 0,
                          y: 0.10125000000005002,
                          width: 1843,
                          height: 1230.2025,
                          initialW: 1843,
                          initialH: 1230.2025,
                          invalid: false
                        }
                      }
                    ],
                    match: [2, 0, 0]
                  }
                ]
              },
              '90368_5_y': {
                id: '90368_5_y',
                width: 5906,
                height: 2953,
                layers: [
                  {
                    id: '1_2953*2953_2',
                    fill: false,
                    layer: [
                      {
                        x: 236,
                        y: 1061,
                        id: '1_2953*2953_2_1',
                        type: 'photo',
                        align: 0,
                        shape: 0,
                        width: 2481,
                        height: 1656,
                        zIndex: 1,
                        data: {
                          scale: 1,
                          naturalH: '801',
                          naturalW: '1200',
                          rotate: 0,
                          photoUrl:
                            'phosee/61542/3d9755cfd92747118_微信图片_2021060310342340.jpg',
                          photoId: '3d9755cfd92747118',
                          shape: 0,
                          fileName: '微信图片_2021060310342340.jpg',
                          result:
                            'http://fcwz-paiban.phosee.cn/phosee/61542/3d9755cfd92747118_微信图片_2021060310342340.jpg?imageView2/2/w/800/h/800',
                          orientation: null,
                          date: '2021/04/12 09:51:17',
                          isUpload: true,
                          isQiniu: true,
                          x: 0,
                          y: 0.03374999999994088,
                          width: 2481,
                          height: 1656.0674999999999,
                          initialW: 2481,
                          initialH: 1656.0674999999999,
                          invalid: false
                        }
                      }
                    ],
                    match: [1, 0, 0]
                  },
                  {
                    id: '1_2953*2953_2',
                    fill: false,
                    layer: [
                      {
                        x: 236,
                        y: 1061,
                        id: '1_2953*2953_2_1',
                        type: 'photo',
                        align: 0,
                        shape: 0,
                        width: 2481,
                        height: 1656,
                        zIndex: 1,
                        data: {
                          scale: 1,
                          naturalH: '801',
                          naturalW: '1200',
                          rotate: 0,
                          photoUrl:
                            'phosee/61542/a67eeaab5ce347de9_微信图片_2021060310342335.jpg',
                          photoId: 'a67eeaab5ce347de9',
                          shape: 0,
                          fileName: '微信图片_2021060310342335.jpg',
                          result:
                            'http://fcwz-paiban.phosee.cn/phosee/61542/a67eeaab5ce347de9_微信图片_2021060310342335.jpg?imageView2/2/w/800/h/800',
                          orientation: null,
                          date: '2021/04/12 09:55:59',
                          isUpload: true,
                          isQiniu: true,
                          x: 0,
                          y: 0.03374999999994088,
                          width: 2481,
                          height: 1656.0674999999999,
                          initialW: 2481,
                          initialH: 1656.0674999999999,
                          invalid: false
                        }
                      }
                    ],
                    match: [1, 0, 0]
                  }
                ]
              },
              '90368_6_y': {
                id: '90368_6_y',
                width: 5858,
                height: 2965,
                layers: [{}, {}]
              },
              '90368_7_y': {
                id: '90368_7_y',
                width: 5858,
                height: 2965,
                layers: [{}, {}]
              },
              '90368_8_y': {
                id: '90368_8_y',
                width: 5858,
                height: 2965,
                layers: [{}, {}]
              },
              '90368_9_y': {
                id: '90368_9_y',
                width: 5858,
                height: 2965,
                layers: [{}, {}]
              },
              '90368_10_y': {
                id: '90368_10_y',
                width: 5858,
                height: 2965,
                layers: [{}, {}]
              },
              '90368_11_y': {
                id: '90368_11_y',
                width: 5858,
                height: 2965,
                layers: [{}, {}]
              },
              '90368_12_y': {
                id: '90368_12_y',
                width: 5858,
                height: 2965,
                layers: [{}, {}]
              },
              '90368_13_y': {
                id: '90368_13_y',
                width: 5858,
                height: 2965,
                layers: [{}, {}]
              },
              '90368_14_y': {
                id: '90368_14_y',
                width: 5858,
                height: 2965,
                layers: [{}, {}]
              },
              '90368_尾页_n_d': {
                id: '90368_尾页_n_d',
                width: 5906,
                height: 2953,
                isHalf: false,
                layers: [{}]
              },
              '90368_首页_n_d': {
                id: '90368_首页_n_d',
                width: 5906,
                height: 2953,
                isHalf: false,
                layers: [
                  {
                    id: '1_5906*2953_2',
                    fill: true,
                    layer: [
                      {
                        x: 3602,
                        y: 882,
                        id: '1_5906*2953_2_2',
                        type: 'photo',
                        align: 0,
                        shape: 0,
                        width: 1655,
                        height: 1105,
                        zIndex: 1,
                        data: {
                          scale: 1,
                          naturalH: '801',
                          naturalW: '1200',
                          rotate: 0,
                          photoUrl:
                            'phosee/61542/05ea2cc9096a465e8_微信图片_2021060310342350.jpg',
                          photoId: '05ea2cc9096a465e8',
                          shape: 0,
                          fileName: '微信图片_2021060310342350.jpg',
                          result:
                            'http://fcwz-paiban.phosee.cn/phosee/61542/05ea2cc9096a465e8_微信图片_2021060310342350.jpg?imageView2/2/w/800/h/800',
                          orientation: null,
                          date: '2021/04/12 09:50:21',
                          isUpload: true,
                          isQiniu: true,
                          x: 0.21535580524346187,
                          y: 0,
                          width: 1655.430711610487,
                          height: 1105,
                          initialW: 1655.430711610487,
                          initialH: 1105,
                          invalid: false
                        }
                      },
                      {
                        x: 5030,
                        y: 2007,
                        id: '1_5906*2953_2_1',
                        type: 'photo',
                        align: 0,
                        shape: 'logo',
                        width: 227,
                        height: 64,
                        zIndex: 1
                      }
                    ],
                    match: [1, 0, 0],
                    isPaper: true
                  }
                ]
              }
            }
          },
          is_group: false
        }
      };
    },
    computed: {
      pageList() {
        const { pagesIds, pagesObj } = this.a.pageInfo;
        return pagesIds.slice(0, 5).map(id => pagesObj[id]);
      }
    }
  };
</script>
```

:::
