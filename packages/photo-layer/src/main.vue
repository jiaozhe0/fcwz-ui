<!--
 * @Author: your name
 * @Date: 2021-06-12 16:14:44
 * @LastEditTime: 2021-06-20 11:06:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /element/packages/photo-layer/src/main.vue
-->
<template>
  <svg :viewBox="`0 0 ${layer.width} ${layer.height}`"
       :width="layer.width * scale"
       :height="layer.height * scale"
       preserveAspectRatio="xMinYMin meet"
       :clip-path="clipPath"
       class="el-photo-layer">
    <g v-if="layer.data"
       :transform="gTransform">
      <image :xlink:href="layer.data.result"
             :href="layer.data.result"
             :width="layer.data.width"
             :height="layer.data.height"
             :transform="imageTransform"
             preserveAspectRatio="xMinYMin"
             image-rendering="optimizeQuality"></image>
    </g>
    <g v-else>
      <rect :width="layer.width"
            :height="layer.height"
            :fill="view ? '#fff': '#D1D1D1'"></rect>
    </g>
    <component v-if="layer.style"
               :is="layer.style+'Mask'"
               :layer="layer"></component>
  </svg>
</template>

<script>
import circleMask from './circle-mask';
import ellipseMask from './ellipse-mask';
export default {
  name: 'ElPhotoLayer',
  props: {
    layer: Object,
    scale: {
      type: Number,
      default: 1
    },
    view: Boolean
  },
  computed: {
    gTransform() {
      let value = '';
      if (!this.layer.data) return value;
      let { rotate, x, y } = this.layer.data;
      x = -Math.abs(x);
      y = -Math.abs(y);
      return [270, 90].includes(rotate)
        ? `translate(${y} ${x})`
        : `translate(${x} ${y})`;
    },
    imageTransform() {
      let value = '';
      return value;
    },
    iconTransform() {
      // let { width, height } = this.layer;
      return '';
    },
    clipPath() {
      const { style, id } = this.layer;
      return style ? `url(#${id})` : '';
    }
  },
  components: {
    circleMask,
    ellipseMask
  }
};
</script>
