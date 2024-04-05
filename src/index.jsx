import React, { forwardRef, useImperativeHandle } from 'react'
import PropTypes from 'prop-types';
import html2canvas from 'html2canvas';

const ReactHtml2Canvas = forwardRef((props, ref) => {
  const { children, id, options, name } = props

  const handleDownload = () => {
    html2canvas(document.getElementById(id),{
      ...options
    }).then(canvas => {
      const link = document.createElement('a')
      link.download = `${name}.png`
      link.href = canvas.toDataURL('image/png')
      link.click()
    })
  }

  useImperativeHandle(ref, () => ({
    handleDownload,
  }));

  return (
    <div id={id}>
      {children}
    </div>
  )
})

ReactHtml2Canvas.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
}

export default ReactHtml2Canvas