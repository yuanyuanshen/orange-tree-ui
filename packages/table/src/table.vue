<template>
  <table class="o__table"
         :class="{'o__table--striped':stripe}">
    <thead>
      <tr>
        <th v-for="label in labelArray"
            :key="label">{{label}}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item,index) in data"
          :key="index">
        <slot :row="item"
              :index="index"></slot>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  name: 'OTable',
  props: {
    data: {
      type: Array,
      default: () => []
    },
    stripe: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      labelArray: []
    }
  },
  mounted () {
    this.initLabelArray()
  },
  methods: {
    initLabelArray () {
      // td的总数除以行数
      let length = this.$children.length / this.data.length
      for (let i = 0; i < length; i++) {
        this.labelArray.push(this.$children[i].label)
      }
    }
  }
}
</script>
