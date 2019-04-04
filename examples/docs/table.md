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

# Table 表格

用于展示多条结构类似的数据，可对数据进行排序、筛选、对比或其他自定义操作。

### 基本用法

基础的表格展示用法。

<div class="demo-block">
  <div>
    <o-table :data="tableData">
     <template slot-scope="scope">  
        <o-table-column
          prop="date"
          label="日期"
          width="180">{{scope.row.date}}
        </o-table-column>
        <o-table-column
          prop="name"
          label="姓名"
          width="180">{{scope.row.name}}
        </o-table-column>
        <o-table-column
          prop="address"
          label="地址">{{scope.row.address}}
        </o-table-column>
      </template>
    </o-table>
  </div>
</div>

::: demo

```html
<o-table :data="tableData">
  <template slot-scope="scope">
    <o-table-column prop="date" label="日期" width="180"
      >{{scope.row.date}}
    </o-table-column>
    <o-table-column prop="name" label="姓名" width="180"
      >{{scope.row.name}}
    </o-table-column>
    <o-table-column prop="address" label="地址"
      >{{scope.row.address}}
    </o-table-column>
  </template>
</o-table>
<script>
  export default {
    data() {
      return {
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
    }
  }
</script>
```

:::

### 带斑马纹表格

使用带斑马纹的表格，可以更容易区分出不同行的数据。

<div class="demo-block">
  <div>
    <o-table :data="tableData" stripe>
     <template slot-scope="scope">  
        <o-table-column
          prop="date"
          label="日期"
          width="180">{{scope.row.date}}
        </o-table-column>
        <o-table-column
          prop="name"
          label="姓名"
          width="180">{{scope.row.name}}
        </o-table-column>
        <o-table-column
          prop="address"
          label="地址">{{scope.row.address}}
        </o-table-column>
      </template>
    </o-table>
  </div>
</div>

::: demo

```html
<o-table :data="tableData" stripe>
  <template slot-scope="scope">
    <o-table-column prop="date" label="日期" width="180"
      >{{scope.row.date}}
    </o-table-column>
    <o-table-column prop="name" label="姓名" width="180"
      >{{scope.row.name}}
    </o-table-column>
    <o-table-column prop="address" label="地址"
      >{{scope.row.address}}
    </o-table-column>
  </template>
</o-table>
<script>
  export default {
    data() {
      return {
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
    }
  }
</script>
```

:::

### 带边框表格

### Table Attributes

| 参数   | 说明               | 类型    | 可选值 | 默认值 |
| ------ | ------------------ | ------- | ------ | ------ |
| data   | 显示的数据         | array   | -      | -      |
| stripe | 是否为斑马纹 table | boolean | -      | false  |
