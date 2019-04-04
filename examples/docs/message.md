<script>
  var iconList = require('../icon.json');
  export default {
    methods: {
      open() {
        this.$message('这是一条消息提示');
      },
      open1() {
        this.$message.success('恭喜你，这是一条成功消息')
      },
      open2() {
        this.$message({
          message: '警告哦，这是一条警告消息',
          type: 'warning'
        });
      },
      open3() {
        this.$message({
          message: '这是一条警告消息',
          type: 'info'
        });
      },
      open4() {
        this.$message({
          message: '错了哦，这是一条错误消息',
          type: 'error'
        });
      }
    }
  }
</script>

# Message 消息提示

常用于主动操作后的反馈提示。与 Notification 的区别是后者更多用于系统级通知的被动提醒。

### 基础用法

从顶部出现，3 秒后自动消失。

<div class="demo-block show-button">
    <o-button @click="open">打开消息提示</o-button>
</div>

::: demo

```html
<o-button @click="open">打开消息提示</o-button>
<script>
  var iconList = require('../icon.json')
  export default {
    methods: {
      open() {
        this.$message('这是一条消息提示')
      }
    }
  }
</script>
```

:::

### 不同状态

用来显示「成功、警告、消息、错误」类的操作反馈。

<div class="demo-block show-button">
    <o-button @click="open1">成功</o-button>
    <o-button @click="open2">警告</o-button>
    <o-button @click="open3">消息</o-button>
    <o-button @click="open4">错误</o-button>
</div>

::: demo

```html
<o-button @click="open1">成功</o-button>
<o-button @click="open2">警告</o-button>
<o-button @click="open3">消息</o-button>
<o-button @click="open4">错误</o-button>
<script>
  var iconList = require('../icon.json')
  export default {
    methods: {
      open1() {
        this.$message.success('恭喜你，这是一条成功消息')
      },
      open2() {
        this.$message({
          message: '警告哦，这是一条警告消息',
          type: 'warning'
        })
      },
      open3() {
        this.$message({
          message: '这是一条警告消息',
          type: 'info'
        })
      },
      open4() {
        this.$message({
          message: '错了哦，这是一条错误消息',
          type: 'error'
        })
      }
    }
  }
</script>
```

:::

### Options

| 参数    | 说明     | 类型   | 可选值                     | 默认值 |
| ------- | -------- | ------ | -------------------------- | ------ |
| message | 消息文字 | string | -                          | —      |
| type    | 主题     | string | success/warning/info/error | info   |
