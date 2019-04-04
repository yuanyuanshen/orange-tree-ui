<script>
  var iconList = require('../icon.json');
  export default {
    data() {
      return {
        icons: iconList
      };
    }
  }
</script>
<style lang="less" type="text/less" scoped>
ul.icon-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0 0 !important;
    border: 1px solid #eaeefb;
    border-radius: 4px;    
}
.icon-list li {
    display: block;
    width: 20%;
    height: 120px;
    line-height:120px;
    text-align: center;
    transition: color .15s linear;
    border-right: 1px solid #eee;
    border-bottom: 1px solid #eee;
    margin-right: -1px;
    margin-bottom: -1px;
    
}
.icon-list li span{
    display: inline-block;
    line-height: normal;
    vertical-align: middle;
    font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;
    color: #99a9bf;
}
.icon-list li i {
    display: block;
    font-size: 24px;
    margin-bottom: 15px;
    color: #3f536e;
}
</style>

# Icon 图标

语义化的矢量图形，使用开源的 Iconfont 作为图标库，并制作成了 icon font。

### 使用方法

使用 class="o-icon..." 来声明图标，具体图标的名称请 copy 相应的标签

<div class="demo-block icon-show">
    <i class="o-icon_roundclose_fill"></i>
    <i class="o-icon_setting_fill"></i>
    <i class="o-icon-homepage"></i>
    <i class="o-icon-brush_fill"></i>
</div>

::: demo

```html
<i class="o-icon_roundclose_fill"></i>
<i class="o-icon_setting_fill"></i>
<i class="o-icon-homepage"></i>
<i class="o-icon-brush_fill"></i>
```

:::

### 图标示例

<ul class="icon-list icon-show">
  <li v-for="name in icons" :key="name">
    <span>
      <i :class="'o-' + name"></i>
      {{'o-' + name}}
    </span>
  </li>
</ul>
