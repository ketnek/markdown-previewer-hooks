import './textarea.scss'
import React from "react";
import { HeaderBar } from './headerBar';


export const Textarea = ({ input, setInput, zoom, setZoom }) => {
  const zoomClass =
    !zoom
      ? 'noZoom'
      : 'zoom';

  return (
    <div id='input'>
      <HeaderBar
        headline={'Editor'}
        zoom={zoom}
        setZoom={setZoom} />
      <textarea
        typeof='text'
        onChange={(event) => setInput(input = event.target.value)}
        value={input}
        id="editor" className={zoomClass}>
      </textarea>
    </div>
  );

}

