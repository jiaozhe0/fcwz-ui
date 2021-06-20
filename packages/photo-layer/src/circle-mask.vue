<!--
 * @Author: your name
 * @Date: 2021-06-12 16:38:56
 * @LastEditTime: 2021-06-18 17:52:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /element/packages/photo-layer/src/circle-mask.vue
-->

<template>
  <clipPath transform="scale(1,1)"
            :id="layer.id">
    <circle :id="layer.id"
            :cx="pos.x"
            :cy="pos.r"
            :r="pos.r" />
  </clipPath>
</template>
<!-- <use :xlink:href="`#${layer.id}`"
             overflow="visible"></use> -->
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
        r: height / 2
      };
    }
  }
};
</script>
