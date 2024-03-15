import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Toggle from './Hooks-01';
import ColorPicker from './ColorPicker';

function App() {
  const [toggle, setToggle] = useState();

  return (
    <div>
      <p>The toggle is {toggle}</p>
      <button onClick={() => setToggle('On')}>On</button>
      <button onClick={() => setToggle('Off')}>Off</button>

      <p>Ekinchi Toggle</p>
      <Toggle />
      <ColorPicker />
    </div>

  )
}

export default App;
