<!--
 * @Author: your name
 * @Date: 2021-06-20 10:50:53
 * @LastEditTime: 2021-06-20 15:02:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /element/packages/page/src/layer-photo.vue
-->
<template>
  <div class="pg-photo-layer"
       data-move="true"
       :data-photoid="layer.data && layer.data.photoId"
       :data-layerid="layerId">
    <div v-if="bleed.borderWidth"
         :style="bleed"
         class="bleed"></div>
    <div class="pg-layer-mask"
         v-if="layer.data">
      <div class="centre">点击编辑</div>
    </div>
    <div v-else
         class="pg-layer-hint centre">
      <svg viewBox="0 0 1024 1024"
           version="1.1"
           xmlns="http://www.w3.org/2000/svg"
           p-id="1746"
           width="30px"
           height="30px">
        <path d="M856.32 428.064c-94.816 0-144.928 90.656-185.184 163.52-25.824 46.688-52.512 94.944-78.72 97.568-28.544-5.664-48.096-23.2-70.656-43.36-31.744-28.448-67.488-60.288-130.464-57.952-76.8 3.328-146.24 57.696-206.4 161.696a32 32 0 0 0 55.392 32.064c48.48-83.84 100.224-127.488 153.728-129.824 36.928-1.44 56.96 16.576 84.992 41.664 26.88 24.096 57.344 51.36 105.888 59.392a31.584 31.584 0 0 0 5.216 0.448c64.704 0 101.44-66.464 136.96-130.72 28.352-51.328 57.504-104 97.184-123.072v369.984H128V231.68h488.16a32 32 0 1 0 0-64H96a32 32 0 0 0-32 32v701.824a32 32 0 0 0 32 32h760.32a32 32 0 0 0 32-32v-441.44a32 32 0 0 0-32-32z"
              p-id="1747"
              fill="#8a8a8a"></path>
        <path d="M180.96 424.32c0 57.952 47.168 105.12 105.12 105.12S391.2 482.272 391.2 424.32s-47.168-105.088-105.12-105.088-105.12 47.136-105.12 105.088z m146.24 0a41.152 41.152 0 0 1-82.24 0 41.152 41.152 0 0 1 82.24 0zM960 174.656h-61.376V113.28a32 32 0 1 0-64 0v61.344H752.64a32 32 0 1 0 0 64h81.984v81.984a32 32 0 1 0 64 0v-81.952H960a32 32 0 1 0 0-64z"
              p-id="1748"
              fill="#8a8a8a"></path>
      </svg>
    </div>
    <photo-layer :layer="layer"
                 :scale="scale"></photo-layer>
  </div>
</template>

<script>
import PhotoLayer from 'element-ui/packages/photo-layer';
export default {
  props: {
    layer: Object,
    pageId: String,
    lIndex: Number,
    bleed: [Object, Array],
    scale: {
      type: Number,
      default: 1
    }
  },
  components: {
    PhotoLayer
  },
  computed: {
    layerId() {
      const { pageId, lIndex, layer } = this;
      return `${pageId}&${lIndex}&${layer.id}`;
    }
  }
};
</script>
<style scoped lang="scss">
.pg-photo-layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  .centre {
    position: absolute;
    display: inline-block;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
  .pg-layer-hint {
  }
  .pg-layer-mask {
    position: absolute;
    display: none;
    width: 100%;
    height: 100%;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.4);
    cursor: pointer;
  }
  .bleed {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    border: 10px solid rgba(255, 49, 49, 0.3);
    box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 5px 1px inset;
  }

  &:hover {
    .pg-layer-mask {
      display: block;
    }
  }
}
</style>
