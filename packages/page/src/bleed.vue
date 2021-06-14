<!--
 * @Author: your name
 * @Date: 2021-06-06 22:50:27
 * @LastEditTime: 2021-06-11 23:59:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /element/packages/page/src/line.vue
-->
<template>
  <div class="pg-bleed">
    <div v-for="item in bleedList"
         :class="['bleed-item', item.type]"
         :style="item"></div>
  </div>
</template>

<script>
export default {
  props: {
    bleed: Array
  },
  computed: {
    bleedList() {
      return this.bleed.map((item, index) => {
        switch (index) {
          case 0:
            return {
              top: item + 'em',
              left: 0,
              type: ' horizontal'
            };
          case 1:
            return {
              right: item + 'em',
              top: 0,
              type: 'vertical'
            };
          case 2:
            return {
              bottom: item + 'em',
              left: 0,
              type: 'horizontal'
            };
          case 3:
            return {
              top: 0,
              left: item + 'em',
              type: 'vertical'
            };
        }
      });
    }
  }
};
</script>
<style lang='less' scoped>
</style>