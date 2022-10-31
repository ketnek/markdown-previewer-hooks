import './App.scss';
import React, { useState } from 'react';
import { Textarea } from './components/textarea';
import { Previewer } from './components/previewer';
import { prevText } from './previewText';
import { Zoom } from './components/zoom';


const App = () => {

  const [input, setInput] = useState(prevText);

  return (
    <div id='app'>
      <Zoom>
        <Textarea input={input} setInput={setInput} />
      </Zoom>
      <Zoom>
        <Previewer input={input} />
      </Zoom>
    </div>
  );
}


export default App;
