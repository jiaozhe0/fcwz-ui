<!--
 * @Author: your name
 * @Date: 2021-06-11 22:19:28
 * @LastEditTime: 2021-06-22 17:03:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /element/packages/page/src/main.vue
-->
<template>
  <div :class="['el-page', { 'is-view': view }]"
       :style="fontSize">
    <div v-if="frame.isLine"
         class="middle-line"></div>
    <pg-bleed v-if="!bleed.borderWidth"
              :bleed="bleed"></pg-bleed>
    <pg-border :border="frame.border"></pg-border>
    <div class="el-page-wrap"
         :style="size">
      <div class="el-page-content"
           :style="sizeWithBleed">
        <pg-layout v-for="(item, index) in page.layers"
                   :key="index"
                   :pageId="page.id"
                   :lIndex="index"
                   :bleed="bleed"
                   :scale="scale"
                   :layout="item"></pg-layout>
      </div>
    </div>
  </div>
</template>

<script>
import PgLayout from './layout';
import PgBleed from './bleed';
import PgBorder from './border';
export default {
  name: 'FcPage',
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
          layers: [] // , { id: 2 }
        };
      }
    },
    frame: {
      type: Object,
      default() {
        return {
          output: '',
          bleed: [3, 3, 3, 3],
          border: [40, 40, 40, 40],
          type: ''
        };
      }
    },
    scale: {
      type: Number,
      default: 1
    },
    view: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    fontSize() {
      return {
        fontSize: this.scale + 'px'
      };
    },
    sizeWithBleed() {
      const { width, height } = this.page;
      const { output, bleed } = this.frame;
      let left = 0;
      let top = 0;
      if (this.view && !output) {
        const [t, l] = bleed;
        left = -l + 'em';
        top = -t + 'em';
      }
      return {
        width: width + 'em',
        height: height + 'em',
        left,
        top
      };
    },
    size() {
      let { width, height } = this.page;
      const { output, bleed } = this.frame;
      if (this.view && !output) {
        width -= bleed[1] * 2;
        height -= bleed[0] * 2;
      }
      return {
        width: width + 'em',
        height: height + 'em'
      };
    },
    bleed() {
      const { output, bleed } = this.frame;
      if (output !== 'more') return bleed;
      return {
        borderWidth: bleed[0] + 'em'
      };
    },
    isLine() {
      const { isPart } = this.page;
      const { type } = this.frame;
      return !isPart && type === 'photo_album';
    }
  }
};
</script>
<style lang="scss" scoped>
.el-page {
  display: table;
  position: relative;
  &.is-view {
    .bleed {
      border-color: #fff !important;
    }
  }
  .middle-line {
    position: absolute;
    left: 50%;
    width: 1px;
    height: 100%;
    z-index: 2;
    background-color: orange;
  }
  .el-page-wrap {
    position: relative;
    top: 0;
    left: 0;
    font-size: inherit;
    overflow: hidden;
  }
  .el-page-content {
    position: relative;
    display: table;
    font-size: inherit;
    background: #eee;
  }
}
</style>
