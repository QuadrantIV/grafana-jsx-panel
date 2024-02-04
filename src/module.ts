import { PanelPlugin } from '@grafana/data';

import JSXPanel from './components/jsx-panel';
import JSXEditor from './components/setter/js-editor';
import CssEditor from './components/setter/css-editor';

export const plugin = new PanelPlugin(JSXPanel).setPanelOptions((builder) => {
  return builder
    .addCustomEditor({
      id: 'jsx',
      path: 'jsx',
      name: 'JS',
      description: '',
      editor: JSXEditor,
      defaultValue: {
        source: 
`/**
* JSX real time render
* @param PanelProps & GrafanaUI (https://developers.grafana.com/ui/latest/index.html)
*/
function render({ data, GrafanaUI }) {
  console.log(data, GrafanaUI);
  return (
    <div className="jsx-wrapper">
    <GrafanaUI.Icon name="cube" />
    This is a custom code component, please use JSX syntax / 此为自定义代码组件，请使用 JSX 语法
    </div>
  )
}`,
        compiled: 
`"use strict";

/**
* JSX real time render
* @param PanelProps & GrafanaUI (https://developers.grafana.com/ui/latest/index.html)
*/
function render(_ref) {
  var data = _ref.data,
    GrafanaUI = _ref.GrafanaUI;
  console.log(data, GrafanaUI);
  return /*#__PURE__*/React.createElement("div", {
    className: "jsx-wrapper"
  }, /*#__PURE__*/React.createElement(GrafanaUI.Icon, {
    name: "cube"
  }), "This is a custom code component, please use JSX syntax / \u6B64\u4E3A\u81EA\u5B9A\u4E49\u4EE3\u7801\u7EC4\u4EF6\uFF0C\u8BF7\u4F7F\u7528 JSX \u8BED\u6CD5");
}`
      }

    })
    .addCustomEditor({
      id: 'css',
      path: 'css',
      name: 'CSS',
      description: '',
      editor: CssEditor,
      defaultValue: 
`.jsx-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}`,
      settings: {
        language: 'css',
      },
    });
});
