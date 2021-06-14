<!--
 * @Author: your name
 * @Date: 2021-06-06 22:50:27
 * @LastEditTime: 2021-06-12 15:33:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /element/packages/page/src/line.vue
-->
<template>
  <div class="pg-border">
    <div v-for="(item,index) in borderList"
         :key="index"
         :class="['border-item', item.type]"
         :style="item"></div>
  </div>
</template>

<script>
export default {
  props: {
    border: Array
  },
  computed: {
    borderList() {
      return this.border.map((item, index) => {
        switch (index) {
          case 0:
            return {
              top: -item + 'em',
              left: 0,
              height: item + 'em',
              type: ' horizontal'
            };
          case 1:
            return {
              right: -item + 'em',
              top: 0,
              width: item + 'em',
              type: 'vertical'
            };
          case 2:
            return {
              bottom: -item + 'em',
              height: item + 'em',
              left: 0,
              type: 'horizontal'
            };
          case 3:
            return {
              top: 0,
              left: -item + 'em',
              type: 'vertical',
              width: item + 'em'
            };
        }
      });
    }
  }
};
</script>
