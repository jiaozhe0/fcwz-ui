<!--
 * @Author: your name
 * @Date: 2021-06-12 16:39:17
 * @LastEditTime: 2021-06-18 17:53:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /element/packages/photo-layer/src/ellipse-mask.vue
-->

<template>
  <clipPath :id="layer.id">
    <ellipse :cx="pos.x"
             :cy="pos.y"
             :rx="pos.x"
             :ry="pos.y"></ellipse>
  </clipPath>
</template>

<script>
export default {
  props: {
    layer: Object
  },
  computed: {
    pos() {
      const { width, height } = this.layer;
      return {
        x: width / 2,
        y: height / 2
      };
    }
  }
};
</script>