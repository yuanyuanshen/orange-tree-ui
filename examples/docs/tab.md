<script>
  export default {
    data() {
      return {
        activeName:'first'
      };
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

```html
<o-tabs v-model="activeName" type="card">
  <o-tab-pane label="用户管理" name="first">用户管理</o-tab-pane>
  <o-tab-pane label="配置管理" name="second">配置管理</o-tab-pane>
  <o-tab-pane label="角色管理" name="third">角色管理</o-tab-pane>
  <o-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</o-tab-pane>
</o-tabs>
```

### 组件属性

| 参数    | 说明           | 类型   | 可选值     | 默认值 |
| ------- | -------------- | ------ | ---------- | ------ |
| content | 消息提示文字   | string | -          | -      |
| effect  | 默认提供的主题 | string | dark/light | dark   |
