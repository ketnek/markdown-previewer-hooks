import './previewer.scss'
import React from "react";
import Markdown from 'marked-react';
import { HeaderBar } from './headerBar';


export const Previewer = ({ input }) => {

  return (
    <div id="htmlCode">
      <HeaderBar header='Previewer' />
      <div id='preview'>
        <Markdown value={input} gfm='true' breaks='true' />
      </div>
    </div>
  );
}

