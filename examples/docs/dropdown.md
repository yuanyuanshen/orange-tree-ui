<script>
  export default {
    data() {
      return {
        activeName:'first',
        activeName1:'second'
      };
    },
    methods:{
      handleChange(name) {
        console.log(name)
      }
    }
  }
</script>
<style lang="less" type="text/less" scoped>
</style>

# Dropdown 下拉菜单

将动作或菜单折叠到下拉菜单中。

### 基础用法

移动到下拉菜单上，展开更多操作。
