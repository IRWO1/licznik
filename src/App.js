import React from 'react';
import './App.css';

import Counter from './Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Counter App in React</h1>
      </header>

    {/* Licznik
    
    <Counter /> 
    
    */}

    {/* Licznik z porpsem  */}
    <Counter initValue={0} />
    </div>
  );
}

export default App;
