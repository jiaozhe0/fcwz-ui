<!--
 * @Author: your name
 * @Date: 2021-06-12 16:14:44
 * @LastEditTime: 2021-06-12 18:21:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /element/packages/photo-layer/src/main.vue
-->
<template>
  <svg :viewBox="`0 0 ${layer.width} ${layer.height}`"
       :width="layer.width * scale"
       :height="layer.height * scale"
       preserveAspectRatio="xMinYMin meet"
       class="el-photo-layer">
    <g v-if="layer.data"
       :transform="gTransform">
      <image :xlink:href="layer.data.url"
             :href="layer.data.url"
             :width="layer.data.width"
             :height="layer.data.height"
             :transform="imageTransform"
             preserveAspectRatio="xMinYMin"
             image-rendering="optimizeQuality"></image>
    </g>
    <rect v-else
          :width="layer.width"
          :height="layer.height"
          fill="#D1D1D1"
          stroke="#D1D1D1"></rect>
    <!-- <component v-if="layer.style" :is="layer.style"></component> -->
  </svg>
</template>

<script>
export default {
  name: 'ElPhotoLayer',
  props: {
    layer: Object,
    scale: {
      type: Number,
      default: 1
    }
  },
  computed: {
    gTransform() {
      let value = '';
      if (!this.layer.data) return value;
      let { rotate, x, y } = this.layer.data;
      //  x = -Math.abs(x);
      //  y = -Math.abs(y);
      return [270, 90].includes(rotate)
        ? `translate(${y} ${x})`
        : `translate(${x} ${y})`;
    },
    imageTransform() {
      let value = '';
      return value;
    }
  }
};
</script>
