# 项目搭建

项目搭建参考 [从零开始搭建 Vue 组件库 VV-UI](http://www.cnblogs.com/tiedaweishao/p/7825997.html)

[项目地址](https://vv-ui.github.io/VV-UI/#/)

记录模仿 VV-UI 组件库造轮子中遇到的问题，以及解决方案

### 新建项目

对于脚手架环境的问题，目前已经有非常成熟的 vue 官方的脚手架，我们拿来用就好了

```
npm install vue-cli -g
vue init webpack origin-ui
cd origin-ui
npm install
npm run dev
```

项目可以正常启动，在此基础上进行改造

### 更改目录

```
|-- examples            // 原 src 目录，改成 examples 用作示例展示
  |-- assets            // api文档logo 样式文件
  |-- docs              // api文档
  |-- router            // api文档路由
|-- packages            // 新增 packages 用于编写存放组件
  |-- button            // 组件
  |-- theme-default     // 组件样式 gulp 运行目录
  |-- lib               // 编译后css
  |-- src               // 编译前css
  |-- gulpfile.js       // gulp 写打包css的task
  |-- salad.config.json // BEM的配置文件
  |-- index.js          // 导出组件

```

原 src 目录，改成 examples 用作示例展示，需要对应修改 webpack 配置

把原先的编译指向 src 的目录改成 examples

```js
{
  test: /\.(js|vue)$/,
  loader: 'eslint-loader',
  include: [resolve('examples'), resolve('test'), resolve('packages')],// 修改
}
entry: {
  app: './examples/main.js' // 程序入口修改
},
resolve: {
  alias: {
    vue$: 'vue/dist/vue.esm.js',
    '@': resolve('examples') // 根据实际情况修改
  }
},
```

### 如何编写文档

使用[vue-markdown-loader](https://github.com/QingWei-Li/vue-markdown-loader)在 vue 下可以去写 markdown 文档

#### 安装

```js
# For Vue2
npm i vue-markdown-loader -D
npm i  vue-loader vue-template-compiler -D
```

#### 使用

webpack.config.js file:

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.md$/,
        loader: 'vue-markdown-loader'
      }
    ]
  }
}
```

在 example/docs 目录下新建 test.md

同时创建一个新的路由，指向我们的 md 文件：

```js
{
  path: '/test',
  name: 'test',
  component: r => require.ensure([], () => r(requi('../docs/test.md')))
}
```

打开浏览器访问http://localhost:8080/#/test

#### 实现 demo/代码演示

- 需求 1 就是拦截 import,并且解析 markdowm 语法
- 需求 2 在析 markdown 中也可以写 Vue 的组件

全部配置可参考[Vue 加载 Markdown 格式组件](https://blog.csdn.net/m0_37972557/article/details/81089887)有详细注释

markdown-it，支持 options 选项。这样我们就可以为我们的 markdown 定义独特的标识符，这里我用 demo 标识需要显示代码块的地方，所以我需要配置 options 选项 ：

```js
const vueMarkdown = {
  preprocess: (MarkdownIt, source) => {
    MarkdownIt.renderer.rules.table_open = function() {
      return '<table class="table">'
    }
    MarkdownIt.renderer.rules.fence = utils.wrapCustomClass(
      MarkdownIt.renderer.rules.fence
    )
    return source
  },
  use: [
    [
      MarkdownItContainer,
      'demo',
      {
        // 用于校验包含demo的代码块
        validate: params => params.trim().match(/^demo\s*(.*)$/),
        render: function(tokens, idx) {
          var m = tokens[idx].info.trim().match(/^demo\s*(.*)$/)

          if (tokens[idx].nesting === 1) {
            var desc = tokens[idx + 2].content
            // 编译成html
            const html = utils.convertHtml(
              striptags(tokens[idx + 1].content, 'script')
            )
            // 移除描述，防止被添加到代码块
            tokens[idx + 2].children = []

            return `<demo-block>
                        <div slot="desc">${html}</div>
                        <div slot="highlight">`
          }
          return '</div></demo-block>\n'
        }
      }
    ]
  ]
}
```

这里简单的描述一下这段代码是干什么的：首先把内容里面 vue 片段编译成 html，用于显示，另一方面用 highlight 来高亮代码块。demo-block 本身是我们定义好的组件：

```html
<template>
  <div class="docs-demo-wrapper">
    <div :style="{maxHeight: isExpand ? '700px' : '0'}" class="demo-container">
      <div span="14">
        <div class="docs-demo docs-demo--expand">
          <div class="highlight-wrapper">
            <slot name="highlight"></slot>
          </div>
        </div>
      </div>
    </div>
    <span class="docs-trans docs-demo__triangle" @click="toggle"
      >{{isExpand ? '隐藏代码' : '显示代码'}}</span
    >
  </div>
</template>
```

基本用法：

```html
::: demo
<o-button>默认按钮</o-button>
:::
```

### 如何编写组件

环境准备完毕，紧接着要开始编写组件，考虑的是组件库，所以我们竟可能让我们的组件支持全局引入和按需引入，如果全局引入，那么所有的组件需要要注册到 Vue component 上，并导出：

```js
const install = function(Vue) {
  if (install.installed) return
  components.map(component => Vue.component(component.name, component))
}

export default {
  install
}
```

着要实现按需加载，我们只需要单个导出组件即可：

```js
import Button from './button/index.js'
import Row from './row/index'
import Col from './col/index'

const components = [Button, Row, Col]

const install = function(Vue) {
  if (install.installed) return
  components.map(component => Vue.component(component.name, component))
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export { install, Button, Row, Col }
```

既然是单页面应用，必然要去解决样式冲突问题，如果组件内使用 soped，那么样式就无法从组件内抽离出来，达不到可定制化主题颜色的目的。我们需要一套可以分离处理的样式，可以自行编译，可以相互不污染。这时候 css 的 BEM 规范就显得尤为重要。如果你还不知道什么是 BEM 参考： http://www.w3cplus.com/css/css-architecture-1.html。
说到这里，目前对 BEM 规范支持较好的插件就是 postcss 了，他允许我们配置 BEM 之间的连接符和缩写：

```json
{
  "browsers": ["ie > 8", "last 2 versions"],
  "features": {
    "bem": {
      "shortcuts": {
        "component": "b",
        "modifier": "m",
        "descendent": "e"
      },
      "separators": {
        "descendent": "__",
        "modifier": "--"
      }
    }
  }
}
```

这样我们就可以把样式单独的抽离出来，通过 gulp 进行打包编译：

```js
gulp.task('compile', function() {
  return gulp
    .src('./src/*.css')
    .pipe(postcss([salad]))
    .pipe(cssmin())
    .pipe(gulp.dest('./lib'))
})
```

关于 gulp 的使用

```js
npm install --global gulp
npm install --save-dev gulp
```

进入 packages/theme-default 中，运行 gulp

```js
gulp
```
