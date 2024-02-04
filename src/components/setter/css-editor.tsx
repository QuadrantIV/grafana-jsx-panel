
import * as React from 'react';
import { StandardEditorProps } from '@grafana/data';
import { CodeEditor as GrafanaCodeEditor } from '@grafana/ui';

const CodeEditor = (props: StandardEditorProps) => {
  const { onChange } = props;

  return (
    <GrafanaCodeEditor
      height={'33vh'}
      value={props.value}
      language={'css'}
      showLineNumbers={true}
      onSave={onChange}
      onBlur={onChange}
      monacoOptions={{
        contextmenu: true,
      }}
    />
  )
}

export default CodeEditor;
