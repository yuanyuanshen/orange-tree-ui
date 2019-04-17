<template>
  <div class="o__tab">
    <div class="o__tab__header">
      <div class="o__tab__wrapper">
        <div class="o__tab__item"
             :class="[{'o__tab__item--active':activeName === nameArray[index],'o__tab__item--disabled':disableArray.indexOf(nameArray[index]) > -1},'o__tab__item--'+type]"
             v-for="(item,index) in labelArray"
             :key="item"
             :aaa="item"
             @click="clickItem(nameArray[index])">{{item}}</div>
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
    event: 'binder'
  },
  props: {
    type: {
      type: String,
      default: ''
    },
    // 传入的激活tab名
    activeName: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      labelArray: [],
      nameArray: [],
      disableArray: []
    }
  },
  mounted () {
    this.initLabel()
  },
  methods: {
    initLabel () {
      for (let i = 0; i < this.$children.length; i++) {
        this.labelArray.push(this.$children[i].label)
        this.nameArray.push(this.$children[i].name)
        if (this.$children[i].disabled) {
          this.disableArray.push(this.$children[i].name)
        }
      }
      if (this.labelArray.length > 0) {
        const activeName = this.activeName || this.nameArray[0]
        this.broadcast('OTabPane', 'change', activeName)
      }
    },
    clickItem (name) {
      if (this.disableArray.indexOf(name) > -1) return
      this.$emit('binder', name)
      this.$emit('tab-click', name)
      this.broadcast('OTabPane', 'change', name)
    }
  }
}
</script>
