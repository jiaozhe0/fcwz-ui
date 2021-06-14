<!--
 * @Author: your name
 * @Date: 2021-06-12 09:15:33
 * @LastEditTime: 2021-06-12 18:19:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /element/packages/page/src/layer.vue
-->
<template>
  <div class="pg-layer-div"
       :style="position">
    <div v-if="bleed.borderWidth"
         class="bleed"
         :style="bleed"></div>

    <div class="pg-layer-mask"
         v-if="layer.data">点击编辑</div>
    <component :is="layer.type+'Layer'"
               :scale="scale"
               :layer="layer"></component>
  </div>
</template>
<script>
import PhotoLayer from 'element-ui/packages/photo-layer';
export default {
  components: {
    PhotoLayer
  },
  props: {
    layer: Object,
    bleed: [Object, Array],
    scale: {
      type: Number,
      default: 1
    }
  },
  computed: {
    position() {
      const { x, y, width, height } = this.layer;
      return {
        left: x + 'em',
        top: y + 'em',
        width: width + 'em',
        height: height + 'em'
      };
    }
  }
};
</script>

