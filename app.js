import React, { useState }from 'react';
import './App.css';

function App() {
  const [active, setActive] = useState(false)

  function change() {
    setActive(!active)
  }
  return (
    <>
      <button onClick={change}>click</button>
      <h1 className={active ? 'open' : 'close'}>Test</h1>
    </>
  );
}

export default App;
