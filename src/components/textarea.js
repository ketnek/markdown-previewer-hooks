import './textarea.scss'
import React from "react";
import { HeaderBar } from './headerBar';


export const Textarea = ({ input, setInput }) => {

  return (
    <div id='input'>
      <HeaderBar header='Editor' />
      <textarea
        typeof='text'
        onChange={(event) => setInput(input = event.target.value)}
        value={input}
        id="editor" className='converter'>
      </textarea>
    </div>
  );
}

