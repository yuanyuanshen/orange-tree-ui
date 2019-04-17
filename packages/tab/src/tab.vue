<template>
  <div class="o__tab">
    <div class="o__tab__header">
      <div class="o__tab__wrapper">
        <div class="o__tab__item"
             :class="{'o__tab__item--active':activeName === item}"
             v-for="item in labelArray"
             :key="item"
             @click="clickItem(item)">{{item}}</div>
      </div>
    </div>
    <div class="o__tab__body">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import Emitter from '../../utils/emitter.js'
export default {
  name: 'OTabs',
  mixins: [Emitter],
  model: {
    prop: 'activeName',
    event: 'change'
  },
  props: {
    type: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      labelArray: [],
      // 传入的激活tab名
      activeName: ''
    }
  },
  mounted () {
    this.initLabel()
  },
  methods: {
    initLabel () {
      for (let i = 0; i < this.$children.length; i++) {
        this.labelArray.push(this.$children[i].label)
      }
      if (this.labelArray.length > 0) {
        this.activeName = this.activeName || this.labelArray[0]
        this.broadcast('OTabPane', 'change', this.activeName)
      }
    },
    clickItem (name) {
      this.$emit('change', name)
      this.activeName = name
      this.broadcast('OTabPane', 'change', name)
    }
  }
}
</script>
