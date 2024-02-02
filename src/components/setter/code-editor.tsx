import * as monacoType from 'monaco-editor/esm/vs/editor/editor.api';
import * as React from 'react';

import { StandardEditorProps } from '@grafana/data';
import { CodeEditor as GrafanaCodeEditor } from '@grafana/ui';

import ReactTypes from '../../types/react';

const CodeEditor = (props: StandardEditorProps) => {
  const { item, onChange } = props;

  const onBeforeEditorMount = (monaco: typeof monacoType) => {
    monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
      target: monaco.languages.typescript.ScriptTarget.Latest,
      allowNonTsExtensions: true,
      moduleResolution: monaco.languages.typescript.ModuleResolutionKind.NodeJs,
      module: monaco.languages.typescript.ModuleKind.CommonJS,
      noEmit: true,
      esModuleInterop: true,
      jsx: monaco.languages.typescript.JsxEmit.React,
      reactNamespace: "React",
      allowJs: true,
      typeRoots: ["node_modules/@types"],
    });

    monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
      noSemanticValidation: false,
      noSyntaxValidation: false,
    });

    monaco.languages.typescript.typescriptDefaults.addExtraLib(
      ReactTypes,
    );
  }

  return (
    <GrafanaCodeEditor
      height={'33vh'}
      value={props.value}
      language={item.settings.language}
      showLineNumbers={true}
      onBeforeEditorMount={onBeforeEditorMount}
      onSave={onChange}
      onBlur={onChange}
      monacoOptions={{
        contextmenu: true,
      }}
    />
  )
}

export default CodeEditor;
