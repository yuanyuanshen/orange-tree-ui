<template>
  <div class="o__tab__pannel"
       :class="{'o__tab__pannel--active':name==currentLabel}">
    <slot></slot>
  </div>
</template>
<script>
import Emitter from '../../utils/emitter.js'
export default {
  name: 'OTabPane',
  mixins: [Emitter],
  props: {
    label: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      currentLabel: ''
    }
  },
  mounted () {
    this.$on('change', this.change)
  },
  methods: {
    change (item) {
      this.currentLabel = item
    }
  }
}
</script>
