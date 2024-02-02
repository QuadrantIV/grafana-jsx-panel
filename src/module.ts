import { PanelPlugin } from '@grafana/data';

import JSXPanel from './components/jsx-panel';
import CodeEditor from './components/setter/code-editor';

export const plugin = new PanelPlugin(JSXPanel).setPanelOptions((builder) => {
  return builder
    .addCustomEditor({
      id: 'jsx',
      path: 'jsx',
      name: 'JS',
      description: '',
      editor: CodeEditor,
      defaultValue: 
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
      settings: {
        language: 'typescript',
      },
    })
    .addCustomEditor({
      id: 'css',
      path: 'css',
      name: 'CSS',
      description: '',
      editor: CodeEditor,
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
