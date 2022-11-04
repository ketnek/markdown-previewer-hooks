import './previewer.scss'
import React from "react";
import Markdown from 'marked-react';
import { HeaderBar } from './headerBar';


export const Previewer = ({ input, zoom, setZoom }) => {

  return (
    <div id="htmlCode">
      <HeaderBar
        headline={'Prewiever'}
        zoom={zoom}
        setZoom={setZoom} />

      <div id='preview'>
        <Markdown value={input} gfm='true' breaks='true' />
      </div>
    </div>
  );
}

