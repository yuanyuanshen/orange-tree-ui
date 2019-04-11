<template>
  <div class="o__tooltip"
       @mouseover="mouseover"
       @mouseout="mouseout">
    <transition name="o__tooltip-fade">
      <div class="o__tooltip--top"
           v-show="show"
           style="z-index:100000000">
        <div :class="textClass">{{content}}</div>
        <div class="o__tooltip--icon"><span></span></div>
      </div>
    </transition>
    <div class="o__tooltip--content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'OTooltip',
  props: {
    content: {
      type: String,
      default: ''
    },
    effect: {
      type: String,
      default: 'dark'
    }
  },
  computed: {
    textClass () {
      return `o__tooltip--text--${this.effect}`
    }
  },
  data () {
    return {
      show: false
    }
  },
  methods: {
    mouseover () {
      this.show = true
    },
    mouseout () {
      this.show = false
    }
  }
}
</script>
