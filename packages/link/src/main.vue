<!--
 * @Author: your name
 * @Date: 2021-06-06 22:42:01
 * @LastEditTime: 2021-06-10 16:50:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /element/packages/page/src/main.vue
-->
<template>
  <div class="fc-page"
       :style="{ fontSize: scale + 'px' }">
    <!-- 框线 -->
    <!-- 出血 -->
    <!-- 图层 -->
    <div class="page"
         :style="{ width: page.width + 'em', height: page.height + 'em' }">
    </div>
    a
  </div>
</template>

<script>
export default {
  name: 'FcPage',
  props: {
    page: {
      type: Object,
      default() {
        return {
          width: 1,
          height: 1,
          bleed: [], // 出血
          layers: [], // 图层
          border: [] // 框线
        };
      }
    },
    scale: {
      type: Number,
      default: 1
    }
  },
  computed: {},
  components: {}
};
</script>
