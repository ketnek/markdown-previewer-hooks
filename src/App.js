import './App.scss';
import React, { useState } from 'react';
import { Textarea } from './components/textarea';
import { Previewer } from './components/previewer';


const App = () => {

  const [input, setInput] = useState('');

  return (
    <div id='app'>
      <Textarea input={input} setInput={setInput} />
      <Previewer input={input} />
    </div>
  );
}


export default App;
