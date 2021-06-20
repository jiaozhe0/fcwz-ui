<!--
 * @Author: your name
 * @Date: 2021-06-12 16:16:19
 * @LastEditTime: 2021-06-18 14:49:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /element/packages/page-svg/src/main.vue
-->
<template>
  <svg :viewBox="`0 0 ${page.width} ${page.height}`"
       :width="sSize.width"
       :height="sSize.height">
    <rect x="0"
          y="0"
          :width="page.width"
          :height="page.height"
          fill="#fff"></rect>
    <layout-item v-for="(item, index) in layers"
                 :key="item.item + index"
                 :index="index"
                 :layout="item"></layout-item>
  </svg>
</template>

<script>
import LayoutItem from './layout';
export default {
  name: 'ElPageSvg',
  props: {
    width: {
      type: Number,
      default: 0
    },
    height: {
      type: Number,
      default: 0
    },
    page: {
      type: Object,
      default: {
        layers: []
      }
    }
  },
  components: {
    LayoutItem
  },
  computed: {
    layers() {
      const { layers } = this.page;
      return layers || [this.page];
    },
    sSize() {
      const { width: scaleWidth, height: scaleHeight } = this;
      const { width, height } = this.page;
      if (scaleWidth > 0 && scaleHeight > 0) {
        return { width: scaleWidth, height: scaleHeight };
      }
      if (scaleWidth) {
        const scale = scaleWidth / width;
        return {
          width: scaleWidth,
          height: scale * height
        };
      } else {
        const scale = scaleHeight / height;
        return {
          width: scale * width,
          height: scaleHeight
        };
      }
    }
  }
};
</script>
