<!--
 * @Author: your name
 * @Date: 2021-06-17 17:31:31
 * @LastEditTime: 2021-06-19 16:52:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /element/packages/page-svg/src/layer.vue
-->
<template>
  <g :transform="`translate(${layer.x} ${layer.y})`">
    <component :is="layer.type + 'Layer'"
               :layer="layer"></component>
  </g>
</template>

<script>
import PhotoLayer from 'element-ui/packages/photo-layer';
import TextLayer from 'element-ui/packages/text-layer';
export default {
  props: {
    layer: Object
  },
  components: {
    PhotoLayer,
    TextLayer
  }
};
</script>