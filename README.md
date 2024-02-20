# Grafana Jsx Panel
一个 jsx 实时渲染的 grafana 面板插件

![demo](./static/demo.gif)

## Feature
- 基于 @babel/standalone 实时转码，可通过 jsx 语法写 react 组件方式来自定义面板
- 可直接使用 @grafana/ui 组件库

## Usage
集成到自己托管的 grafana

1. Grafana view index.html 中引入 babel/standalone cdn
```html
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
```

2. Build plugin
```bash
$ npm install
$ npm run build
```

3. Copy dist/ 目录到自托管 grafana 的插件目录

## Local Development

```bash
$ npm install
// 启动插件
$ npm run dev

// 启动 grafana 容器
$ npm run server
```