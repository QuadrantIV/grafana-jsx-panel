import { css } from '@emotion/css';
import React, { useRef } from 'react';

import { PanelProps } from '@grafana/data';
import * as GrafanaUI from '@grafana/ui';

const Babel = require('@babel/standalone');

export interface Props extends PanelProps { }

const JSXPanel: React.FC<Props> = (props) => {
  const cssContainer = useRef<any>();
  const { width, height, options } = props;
  const code = Babel.transform(options.jsx, { presets: ['env', 'react'] }).code;

  if (!cssContainer.current) {
    cssContainer.current = document.createElement('style');
    cssContainer.current.textContent = options.css ?? '';
    document.head.appendChild(cssContainer.current);
  } else {
    cssContainer.current.textContent = options.css ?? '';
  }

  const F = new Function('React', `${code}; return render;`);
  const content = F(React)({
    ...props,
    GrafanaUI
  });
  return (
    <div
      className={css`
        position: relative;
        width: ${width}px;
        height: ${height}px;
      `}
    >
      { content }
    </div>
  );
};


export default JSXPanel;
