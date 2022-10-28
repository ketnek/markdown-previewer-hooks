import './textarea.scss'
import React from "react";

export const Textarea = ({ input, setInput }) => {

  return (
    <textarea
      typeof='text'
      onChange={(event) => setInput(input = event.target.value)}
      value={input}
      id="editor" className='converter'>

    </textarea>
  );
}

