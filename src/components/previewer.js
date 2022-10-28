import './previewer.scss'
import React from "react";
import Markdown from 'marked-react';


export const Previewer = ({ input }) => {

  return (
    <div id="htmlCode">
      <div id='preview'>
        <Markdown value={input} gfm='true' breaks='true' />
      </div>



    </div>
  );
}

