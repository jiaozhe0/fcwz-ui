<!--
 * @Author: your name
 * @Date: 2021-06-06 13:18:40
 * @LastEditTime: 2021-06-10 16:41:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /element/packages/button/src/button.vue
-->
<template>
  <button class="el-button"
          @click="handleClick"
          :disabled="buttonDisabled || loading"
          :autofocus="autofocus"
          :type="nativeType"
          :class="[
      type ? 'el-button--' + type : '',
      buttonSize ? 'el-button--' + buttonSize : '',
      {
        'is-disabled': buttonDisabled,
        'is-loading': loading,
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle
      }
    ]">
    <i class="el-icon-loading"
       v-if="loading"></i>
    <i :class="icon"
       v-if="icon && !loading">
      <line></line>
    </i>
    <span v-if="$slots.default">
      <fc-test></fc-test>
      <slot></slot>
    </span>
  </button>
</template>
<script>
import Line from './line.jsx';
import FcTest from './test';
export default {
  name: 'ElButton',
  inject: {
    elForm: {
      default: ''
    },
    elFormItem: {
      default: ''
    }
  },
  components: {
    Line,
    FcTest
  },
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: String,
    icon: {
      type: String,
      default: ''
    },
    nativeType: {
      type: String,
      default: 'button'
    },
    loading: Boolean,
    disabled: Boolean,
    plain: Boolean,
    autofocus: Boolean,
    round: Boolean,
    circle: Boolean
  },

  computed: {
    _elFormItemSize() {
      return (this.elFormItem || {}).elFormItemSize;
    },
    buttonSize() {
      return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
    },
    buttonDisabled() {
      return this.disabled || (this.elForm || {}).disabled;
    }
  },

  methods: {
    handleClick(evt) {
      this.$emit('click', evt);
    }
  }
};
</script>
