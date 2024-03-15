import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [toggle, setToggle] = useState();

  return (
    <div>
      <p>The toggle is {toggle}</p>
      <button onClick={() => setToggle('On')}>On</button>
      <button onClick={() => setToggle('Off')}>Off</button>
    </div>
  )
}

export default App;
