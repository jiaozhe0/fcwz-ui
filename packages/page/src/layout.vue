<!--
 * @Author: your name
 * @Date: 2021-06-11 23:12:15
 * @LastEditTime: 2021-06-20 15:20:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /element/packages/page/src/layout.vue
-->
<template>
  <div class="fc-layout-item"
       :style="styles">
    <div v-if="layout.id"
         class="layout-item-content">
      <pg-layer v-for="layer in layout.layer"
                :key="layer.id"
                :lIndex="lIndex"
                :pageId="pageId"
                :bleed="bleed"
                :scale="scale"
                :layer="layer"></pg-layer>
    </div>
    <div v-else
         class="layout-item-empty">
      没有画面
    </div>
  </div>
</template>

<script>
import PgLayer from './layer';
export default {
  props: {
    layout: Object,
    lIndex: {
      type: Number,
      default: 0
    },
    pageId: String,
    bleed: {
      bleed: Object,
      default() {
        return {};
      }
    },
    scale: {
      type: Number,
      default: 1
    },
    styles: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  components: {
    PgLayer
  }
};
</script>
<style lang='scss' >
.fc-layout-item {
  position: absolute;
  width: 100%;
  height: 100%;
  display: table-cell;
  font-size: inherit;
  .layout-item-content {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    font-size: inherit;
  }
}
</style>