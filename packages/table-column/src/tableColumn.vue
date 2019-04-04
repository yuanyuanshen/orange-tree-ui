<template>
  <td>
    <slot></slot>
  </td>
</template>
<script>
export default {
  name: 'OTableColumn',
  props: {
    label: {
      type: String,
      default: ''
    }
  }
}
</script>
