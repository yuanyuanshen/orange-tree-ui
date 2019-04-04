<template>
  <div class="o__message"
       :class="[{'o__message-active':isShow},'o__message--' + type]"
       :style="{'z-index':zIndex}">{{text}}</div>
</template>
<script>
export default {
  name: 'OMessage',
  data () {
    return {
      isShow: false,
      zIndex: 2000
    }
  },
  mounted () {
    this.isShow = true
    setTimeout((message) => {
      this.isShow = false
      setTimeout((message) => {
        this.$destroy()
        this.$el.remove()
      }, 300)
    }, 3000)
  }
}
</script>
