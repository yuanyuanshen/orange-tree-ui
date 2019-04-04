# button 组件案例

常用的操作按钮。

### 基础用法

<div class="demo-block show-button">
  <div>
    <o-button>默认按钮</o-button>
    <o-button type="primary">主要按钮</o-button>
    <o-button type="success">成功按钮</o-button>
    <o-button type="warning">警告按钮</o-button>
    <o-button type="danger">危险按钮</o-button>
    <o-button type="text">文字按钮</o-button>
  </div>
</div>

::: demo

```html
<o-button>默认按钮</o-button>
<o-button type="primary">主要按钮</o-button>
<o-button type="success">成功按钮</o-button>
<o-button type="warning">警告按钮</o-button>
<o-button type="danger">危险按钮</o-button>
<o-button type="text">文字按钮</o-button>
```

:::

### 禁用状态

<div class="demo-block show-button">
  <div>
    <o-button :disabled="true">默认按钮</o-button>
    <o-button :disabled="true" type="primary">主要按钮</o-button>
    <o-button :disabled="true" type="success">成功按钮</o-button>
    <o-button :disabled="true" type="warning">警告按钮</o-button>
    <o-button :disabled="true" type="danger">危险按钮</o-button>
    <o-button :disabled="true" type="text">文字按钮</o-button>
  </div>
</div>

::: demo

```html
<o-button :disabled="true">默认按钮</o-button>
<o-button :disabled="true" type="primary">主要按钮</o-button>
<o-button :disabled="true" type="success">成功按钮</o-button>
<o-button :disabled="true" type="warning">警告按钮</o-button>
<o-button :disabled="true" type="danger">危险按钮</o-button>
<o-button :disabled="true" type="text">文字按钮</o-button>
```

:::

### 不同尺寸

<div class="demo-block show-button">
  <div>
    <o-button size="mini">超小按钮</o-button>
    <o-button size="small">小型按钮</o-button>
    <o-button size="medium">中型按钮</o-button>
    <o-button>默认尺寸</o-button>
    <o-button size="mini" type="text">文字按钮</o-button>
  </div>
</div>

::: demo

```html
<o-button size="mini">超小按钮</o-button>
<o-button size="small">小型按钮</o-button>
<o-button size="medium">中型按钮</o-button>
<o-button>默认尺寸</o-button>
<o-button size="mini" type="text">文字按钮</o-button>
```

:::

### 图标按钮

带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。

<div class="demo-block show-button">
  <div>
    <o-button type="primary" icon="o-icon_setting_fill"></o-button>
    <o-button type="primary" icon="o-icon-brush_fill"></o-button>
    <o-button type="primary" icon="o-icon_cspace_fill"></o-button>
    <o-button type="primary">搜索<i class="o-icon_search"></i></o-button>
    <o-button type="primary"><i class="o-icon-brush_fill">编辑</i></o-button>
  </div>
</div>

::: demo

```html
<o-button type="primary" icon="o-icon_setting_fill"></o-button>
<o-button type="primary" icon="o-icon-brush_fill"></o-button>
<o-button type="primary" icon="o-icon_cspace_fill"></o-button>
<o-button type="primary">搜索<i class="o-icon_search"></i></o-button>
<o-button type="primary"><i class="o-icon-brush_fill">编辑</i></o-button>
```

:::

### 按钮组

以按钮组的方式出现，常用于多项类似操作。

<div class="demo-block">
  <div>
    <o-button-group> 
      <o-button type="primary" icon="o-icon_left"></o-button>
      <o-button type="primary" icon="o-icon_next_arrow"></o-button>
    </o-button-group>
    <o-button-group> 
      <o-button type="primary">上一页</o-button>
      <o-button type="primary">中间</o-button>
      <o-button type="primary">中间</o-button>
      <o-button type="primary">下一页</o-button>
    </o-button-group>
  </div>
</div>

::: demo

```html
<o-button-group>
  <o-button type="primary" icon="o-icon_left"></o-button>
  <o-button type="primary" icon="o-icon_next_arrow"></o-button>
</o-button-group>
<o-button-group>
  <o-button type="primary">上一页</o-button>
  <o-button type="primary">中间</o-button>
  <o-button type="primary">中间</o-button>
  <o-button type="primary">下一页</o-button>
</o-button-group>
```

:::

### Attributes

| 参数     | 说明                         | 类型    | 可选值                         | 默认值 |
| -------- | ---------------------------- | ------- | ------------------------------ | ------ |
| size     | 尺寸                         | string  | default,medium,small，mini     | —      |
| type     | 类型                         | string  | primary,success,warning,danger | —      |
| disabled | 是否禁用状态                 | boolean | —                              | false  |
| icon     | 图标，已有的图标库中的图标名 | string  | —                              | —      |
