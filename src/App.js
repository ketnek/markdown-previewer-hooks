import './App.scss';
import React, { useState } from 'react';
import { ZoomController } from './components/zoomController';


export const App = ({ prevText }) => {

  const [input, setInput] = useState(prevText);

  return (
    <div id='app'>
      <ZoomController input={input} setInput={setInput} />
    </div>
  );
}
