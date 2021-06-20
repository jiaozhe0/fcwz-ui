<!--
 * @Author: your name
 * @Date: 2021-06-15 19:17:48
 * @LastEditTime: 2021-06-16 23:59:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /element/packages/photo-album/src/main.vue
-->
<template>
  <div class="el-photo-album el-page"
       :style="{fontSize: scale + 'px'}">
    <div class="photo-album-content"
         :style="size">
      <div class="left"
           :style="album.left"
           @click="leftTurn">
        <fc-page-layout v-for="(item, index) in leftList"
                        :key="index"
                        :id="'album-left-'+index"
                        :scale="scale"
                        :layout="item"></fc-page-layout>
        <!--  -->
      </div>
      <div class="right"
           :style="album.right"
           @click="rightTurn">
        <fc-page-layout v-for="(item, index) in rightList"
                        :key="index"
                        :id="'album-right-'+index"
                        :scale="scale"
                        :layout="item"
                        :class="{fill: item.fill}"
                        :styles="{zIndex: -index}"></fc-page-layout>
      </div>
    </div>
  </div>
</template>

<script>
import FcPageLayout from '../../page-layout-item';
export default {
  name: 'FcPhotoAlbum',
  props: {
    frame: {
      type: Object,
      default() {
        return {
          bleed: [30, 30, 30, 30]
        };
      }
    },
    pageList: Array,
    scale: {
      type: Number,
      default: 1
    }
  },
  data() {
    this.pageMap = {};
    return {
      leftList: [],
      rightList: [],
      curPage: 0
    };
  },

  computed: {
    size() {
      const { bleed } = this.frame;
      const { width, height } = this.pageList[0];
      return {
        height: height - bleed[0] * 2 + 'em',
        width: width - bleed[1] * 2 + 'em'
      };
    },
    album() {
      const { bleed } = this.frame;
      const { width, height } = this.pageList[0];
      const w = width / 2 + 'em';
      const h = height + 'em';
      return {
        left: {
          left: -bleed[1] + 'em',
          top: -bleed[0] + 'em',
          width: w,
          height: h
        },
        right: {
          // right: -bleed[1] + 'em',
          top: -bleed[0] + 'em',
          width: w,
          height: h
        }
      };
    }
  },
  created() {
    this.formatPageList();
  },
  methods: {
    formatPageList() {
      const leftList = [];
      const rightList = [];
      this.pageList.forEach(page => {
        const { layers, isHalf } = page;
        const [left, right] = layers;
        leftList.push(isHalf ? left : left);
        rightList.push(right ? right : left);
      });
      this.leftList = Object.freeze(leftList);
      this.rightList = Object.freeze(rightList);
    },
    leftTurn() {
      const lPageId = `#album-left-${this.curPage}`;
      this.pageMap[lPageId] =
        this.pageMap[lPageId] || document.querySelector(lPageId).style;
      this.pageMap[lPageId].transform = 'rotateY(180deg)';
      this.pageMap[lPageId].webkitTransform = 'rotateY(180deg)';

      const rPageId = `#album-right-${this.curPage - 1}`;
      this.pageMap[rPageId] =
        this.pageMap[rPageId] || document.querySelector(rPageId).style;
      this.pageMap[rPageId].transform = 'rotateY(0deg)';
      this.pageMap[rPageId].webkitTransform = 'rotateY(0deg)';
      this.curPage--;
    },
    rightTurn() {
      const lPageId = `#album-left-${this.curPage + 1}`;
      this.pageMap[lPageId] =
        this.pageMap[lPageId] || document.querySelector(lPageId).style;
      this.pageMap[lPageId].transform = 'rotateY(0deg)';
      this.pageMap[lPageId].webkitTransform = 'rotateY(0deg)';

      const rPageId = `#album-right-${this.curPage}`;
      this.pageMap[rPageId] =
        this.pageMap[rPageId] || document.querySelector(rPageId).style;
      this.pageMap[rPageId].transform = 'rotateY(-180deg)';
      this.pageMap[rPageId].webkitTransform = 'rotateY(-180deg)';
      this.curPage++;
    }
  },
  components: {
    FcPageLayout
  }
};
</script>
