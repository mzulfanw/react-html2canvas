import React, { useRef } from 'react';
import ReactHtml2Canvas from '../src/index.jsx';

export default {
  component: ReactHtml2Canvas,
  title: 'React Html2Canvas',
}

export const Default = () => {
  const ref = useRef();

  const handleClick = () => {
    ref.current.handleDownload();
  }

  return (
    <div>
      <ReactHtml2Canvas ref={ref} id="capture" name="example">
        <h1>Hello World</h1>
      </ReactHtml2Canvas>
      <button onClick={handleClick}>Download</button>
    </div>
  );
}