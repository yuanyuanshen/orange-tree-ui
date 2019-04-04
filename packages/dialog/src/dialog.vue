<template>
  <div v-if="visible"
       class="o__dialog__wrapper">
    <div class="o__dialog"
         :style="{width:width,'margin-top':top}">
      <div class="o__dialog__header">{{this.title}}
        <i class="o-icon-close"
           @click="beforeClose"></i>
      </div>
      <div class="o__dialog__body">
        <slot></slot>
      </div>
      <div class="o__dialog__footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ODialog',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    beforeClose: {
      type: Function,
      default: () => { }
    },
    width: {
      type: String,
      default: '30%'
    },
    top: {
      type: String,
      default: '13vh'
    }
  },
  data () {
    return {}
  }
}
</script>
