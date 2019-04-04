<template>
  <button :disabled="disabled"
          class="o__button"
          :class="[
          'o__button--'+type,'o__button--size-'+size]"
          @click="handleClick">
    <i v-if="icon !== ''"
       :class="icon"></i>
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: 'OButton',
  props: {
    // 修改颜色
    type: {
      type: String,
      default: 'default'
    },
    // 禁用
    disabled: Boolean,
    // 大小
    size: {
      type: String,
      default: 'default'
    },
    // 图标
    icon: {
      type: String,
      default: ''
    }
  },
  data () {
    return {}
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e)
    }
  }
}
</script>
