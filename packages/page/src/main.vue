<!--
 * @Author: your name
 * @Date: 2021-06-11 22:19:28
 * @LastEditTime: 2021-06-12 18:13:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /element/packages/page/src/main.vue
-->
<template>
  <div class="el-page"
       :style="fontSize">
    <div class="middle-line"></div>
    <pg-bleed :bleed="bleed"></pg-bleed>
    <pg-border :border="page.border"></pg-border>
    <div class="el-page-content"
         :style="size">
      <pg-layout v-for="(item,index) in page.layers"
                 :key="index"
                 :bleed="bleed"
                 :scale="scale"
                 :layout="item"></pg-layout>
    </div>
  </div>
</template>

<script>
import PgLayout from './layout';
import PgBleed from './bleed';
import PgBorder from './border';
export default {
  name: 'ElPage',
  components: {
    PgLayout,
    PgBleed,
    PgBorder
  },
  props: {
    page: {
      type: Object,
      default() {
        return {
          width: 1,
          height: 1,
          bleed: [3, 3, 3, 3],
          border: [10, 10, 10, 10],
          layers: [] // , { id: 2 }
        };
      }
    },
    scale: {
      type: Number,
      default: 1
    }
  },
  computed: {
    fontSize() {
      return {
        fontSize: this.scale + 'px'
      };
    },
    size() {
      const { width, height } = this.page;
      return {
        width: width + 'em',
        height: height + 'em'
      };
    },
    bleed() {
      const { output, bleed } = this.page;
      if (output === 'more') {
        return {
          borderWidth: bleed[0] + 'em'
        };
      } else if (output === 'one') {
        return bleed;
      } else {
        return bleed;
      }
    }
  }
};
</script>
