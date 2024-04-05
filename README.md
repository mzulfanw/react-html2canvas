# React with Html2canvas
thanks to [niklasvh](https://github.com/niklasvh/html2canvas) for create amazing packages 

# Installation
``` npm i react-html2canvas ```

# Basic Usage
```
import React, { useRef } from 'react'
import ReactHtml2Canvas from 'react-html2canvas'

const ref = useRef()

const handleClick = () => {
    ref.current.handleDownload();
}

<ReactHtml2Canvas id="example" ref={ref}>
  <p>hello</p>
</ReactHtml2Canvas>
<button onClick={handleClick}>Download</button>
```
