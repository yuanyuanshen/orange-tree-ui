<script>
  export default {
    data() {
      return {
        tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
      };
    }
  }
</script>
<style lang="less" type="text/less" scoped>
</style>

# Tooltip 文字提示

常用于展示鼠标 hover 时的提示信息。

### 基础用法

可以通过以下完整示例来理解。

<div class="demo-block">
  <div>
    <o-tooltip content="这里是消息提示">
      <o-button>显示Tip</o-button>
    </o-tooltip>
  </div>
</div>

::: demo

```html
<o-tooltip content="这里是消息提示">
  <o-button>显示Tip</o-button>
</o-tooltip>
```

:::

<div class="demo-block">
  <div>
    <o-tooltip content="这里是消息提示">
      <o-button>Dark</o-button>
    </o-tooltip>
    <o-tooltip content="这里是消息提示" effect="light">
      <o-button>Light</o-button>
    </o-tooltip>
  </div>
</div>

::: demo

```html
<o-tooltip content="这里是消息提示">
  <o-button>Dark</o-button>
</o-tooltip>
<o-tooltip content="这里是消息提示" effect="light">
  <o-button>Light</o-button>
</o-tooltip>
```

:::

### 主题

Tooltip 组件提供了两个不同的主题：dark 和 light。

### 组件属性

| 参数    | 说明           | 类型   | 可选值     | 默认值 |
| ------- | -------------- | ------ | ---------- | ------ |
| content | 消息提示文字   | string | -          | -      |
| effect  | 默认提供的主题 | string | dark/light | dark   |
