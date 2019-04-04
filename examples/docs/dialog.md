<script>
  export default {
    data() {
      return {
        dialogVisiable: false,
        dialogVisiable1: false,
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
    },
    methods: {
      handleClose(){
        this.dialogVisiable = false
        this.dialogVisiable1 = false
      }
    }
  }
</script>
<style lang="less" type="text/less" scoped>
</style>

# Dialog 对话框

在保留当前页面状态的情况下，告知用户并承载相关操作。

### 基本用法

Dialog 弹出一个对话框，适合需要定制性更大的场景。

<div class="demo-block">
  <div>
    <o-button type="text" @click="dialogVisiable = true">点击打开 Dialog</o-button>
    <o-dialog :visible="dialogVisiable" title="提示" :before-close="handleClose">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <o-button @click="handleClose">取 消</o-button>
        <o-button type="primary" @click="dialogVisiable = false">确 定</o-button>
      </span>
    </o-dialog>
  </div>
</div>

::: demo

```html
<o-button type="primary" @click="dialogVisiable = true"
  >点击打开 Dialog</o-button
>
<o-dialog
  :visible="dialogVisiable"
  title="提示"
  :before-close="handleClose"
  width="40%"
>
  <span>这是一段信息</span>
  <span slot="footer" class="dialog-footer">
    <o-button @click="handleClose">取 消</o-button>
    <o-button type="primary" @click="dialogVisiable = false">确 定</o-button>
  </span>
</o-dialog>
<script>
  export default {
    data() {
      return {
        dialogVisiable: false
      }
    },
    methods: {
      handleClose() {
        this.dialogVisiable = false
      }
    }
  }
</script>
```

:::

### 自定义内容

Dialog 组件的内容可以是任意的，甚至可以是表格或表单。

<div class="demo-block show-button">
  <div>
    <o-button type="text" @click="dialogVisiable1 = true">点击打开嵌套Table的Dialog</o-button>
    <o-dialog :visible="dialogVisiable1" title="提示" width="50%" :before-close="handleClose">
      <o-table :data="tableData">
        <template slot-scope="scope">  
            <o-table-column
              label="日期">{{scope.row.date}}
            </o-table-column>
            <o-table-column
              label="姓名">{{scope.row.name}}
            </o-table-column>
            <o-table-column
              label="地址">{{scope.row.address}}
            </o-table-column>
          </template>
      </o-table>
    </o-dialog>
  </div>
</div>

::: demo

```html
<o-button type="text" @click="dialogVisiable1 = true"
  >点击打开嵌套Table的Dialog</o-button
>
<o-dialog
  :visible="dialogVisiable1"
  title="提示"
  width="50%"
  :before-close="handleClose"
>
  <o-table :data="tableData">
    <template slot-scope="scope">
      <o-table-column label="日期">{{scope.row.date}} </o-table-column>
      <o-table-column label="姓名">{{scope.row.name}} </o-table-column>
      <o-table-column label="地址">{{scope.row.address}} </o-table-column>
    </template>
  </o-table>
</o-dialog>
<script>
  export default {
    data() {
      return {
        dialogVisiable1: false,
        tableData: [
          {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          },
          {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          },
          {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }
        ]
      }
    },
    methods: {
      handleClose() {
        this.dialogVisiable1 = false
      }
    }
  }
</script>
```

:::

### Attributes

| 参数    | 说明                               | 类型    | 可选值     | 默认值 |
| ------- | ---------------------------------- | ------- | ---------- | ------ |
| visible | 是否显示 Dialog，支持 .sync 修饰符 | boolean | true,false | false  |
| title   | Dialog 的标题                      | string  | -          | -      |
| width   | Dialog 的宽度                      | string  | -          | 30%    |
| top     | Dialog CSS 的 margin-top 的值      | string  | -          | 13vh   |

### Slot

| name   | 说明                    |
| ------ | ----------------------- |
| -      | Dialog 的内容           |
| footer | Dialog 按钮操作区的内容 |
