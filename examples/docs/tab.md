<script>
  export default {
    data() {
      return {
        activeName:'first',
        activeName1:'second',
        activeName2: 'third'
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

# Tabs 标签页

分隔内容上有关联但属于不同类别的数据集合。

### 基础用法

基础的、简洁的标签页。

<div class="demo-block">
  <div>
    <o-tabs v-model="activeName" >
      <o-tab-pane label="用户管理" name="first">用户管理</o-tab-pane>
      <o-tab-pane label="配置管理" name="second">配置管理</o-tab-pane>
      <o-tab-pane label="角色管理" name="third">角色管理</o-tab-pane>
      <o-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</o-tab-pane>
    </o-tabs>
  </div>
</div>

::: demo

```html
<script>
  export default {
    data() {
      return {
        activeName: 'first'
      }
    }
  }
</script>
<o-tabs v-model="activeName">
  <o-tab-pane label="用户管理" name="first">用户管理</o-tab-pane>
  <o-tab-pane label="配置管理" name="second">配置管理</o-tab-pane>
  <o-tab-pane label="角色管理" name="third">角色管理</o-tab-pane>
  <o-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</o-tab-pane>
</o-tabs>
```

:::

### 选项卡样式

选项卡样式的标签页。

<div class="demo-block">
  <div>
    <o-tabs v-model="activeName1" type="card" @tab-click="handleChange">
      <o-tab-pane label="用户管理" name="first">用户管理</o-tab-pane>
      <o-tab-pane label="配置管理" name="second">配置管理</o-tab-pane>
      <o-tab-pane label="角色管理" name="third">角色管理</o-tab-pane>
      <o-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</o-tab-pane>
    </o-tabs>
  </div>
</div>

::: demo

```html
<script>
  export default {
    data() {
      return {
        activeName1: 'second'
      }
    },
    methods: {
      handleChange(name) {
        console.log(name)
      }
    }
  }
</script>
<o-tabs v-model="activeName" type="card">
  <o-tab-pane label="用户管理" name="first">用户管理</o-tab-pane>
  <o-tab-pane label="配置管理" name="second">配置管理</o-tab-pane>
  <o-tab-pane label="角色管理" name="third">角色管理</o-tab-pane>
  <o-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</o-tab-pane>
</o-tabs>
```

:::

### 选项卡禁用

选项卡样式的禁用。

<div class="demo-block">
  <div>
    <o-tabs v-model="activeName2" type="card" @tab-click="handleChange">
      <o-tab-pane label="用户管理" name="first">用户管理</o-tab-pane>
      <o-tab-pane label="配置管理" name="second">配置管理</o-tab-pane>
      <o-tab-pane label="角色管理" name="third" :disabled='true'>角色管理</o-tab-pane>
      <o-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</o-tab-pane>
    </o-tabs>
  </div>
</div>

::: demo

```html
<script>
  export default {
    data() {
      return {
        activeName2: 'third'
      }
    }
  }
</script>
<o-tabs v-model="activeName" type="card">
  <o-tab-pane label="用户管理" name="first">用户管理</o-tab-pane>
  <o-tab-pane label="配置管理" name="second">配置管理</o-tab-pane>
  <o-tab-pane label="角色管理" name="third">角色管理</o-tab-pane>
  <o-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</o-tab-pane>
</o-tabs>
```

:::

### Tabs Attributes

| 参数    | 说明                      | 类型   | 可选值 | 默认值              |
| ------- | ------------------------- | ------ | ------ | ------------------- |
| v-model | 绑定值，选中选项卡的 name | string | -      | 第一个选项卡的 name |

### Tabs Events

| 事件名称  | 说明             | 回调参数              |
| --------- | ---------------- | --------------------- |
| tab-click | tab 被选中时触发 | 被选中的标签 tab 实例 |

### Tab-pane Attributes

| 参数     | 说明       | 类型    | 可选值 | 默认值 |
| -------- | ---------- | ------- | ------ | ------ |
| label    | 选项卡标题 | string  | -      | -      |
| disabled | 是否禁用   | boolean | -      | false  |
