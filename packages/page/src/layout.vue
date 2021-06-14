<!--
 * @Author: your name
 * @Date: 2021-06-11 23:12:15
 * @LastEditTime: 2021-06-12 18:19:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /element/packages/page/src/layout.vue
-->
<template>
  <div class="layout-item">
    <div v-if="layout.id"
         class="layout-item-content">
      <pg-layer v-for="layer in layout.layer"
                :key="layer.id"
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
    bleed: Array,
    scale: {
      type: Number,
      default: 1
    }
  },
  components: {
    PgLayer
  }
};
</script>
<style lang='less' scoped>
</style>