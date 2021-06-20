<!--
 * @Author: your name
 * @Date: 2021-06-17 17:27:53
 * @LastEditTime: 2021-06-18 14:49:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /element/packages/page-svg/src/layout.vue
-->
<template>
  <g :transform="transform">
    <svg :width="layout.width"
         :height="layout.height"
         :viewBox="`0 0 ${layout.width} ${layout.height}`">
      <g v-if="layout.id">
        <layer-item v-for="item in layout.layer"
                    :key="item.id"
                    :layer="item"></layer-item>
      </g>
    </svg>
  </g>
</template>

<script>
import LayerItem from './layer';
export default {
  props: {
    layout: {
      type: Object
    },
    index: {
      type: Number,
      default: 0
    }
  },
  computed: {
    transform() {
      const { index, layout } = this;
      const { width } = layout;
      return `translate(${width * index} 0)`;
      // return 'transform(${})';if (!view)
    }
  },
  components: {
    LayerItem
  }
};
</script>
<style lang='less' scoped>
</style>