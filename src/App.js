import './App.scss';
import React, { useState } from 'react';
import { prevText } from './previewText';
import { ZoomController } from './components/zoomController';


const App = () => {

  const [input, setInput] = useState(prevText);

  return (
    <div id='app'>
      <ZoomController
        input={input}
        setInput={setInput}
      />
    </div>
  );
}


export default App;
