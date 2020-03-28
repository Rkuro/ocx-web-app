import React from 'react';
import './App.css';
import { Sidebar } from './components/sidebar/Sidebar';
import { Counter } from './components/counter/Counter';

function App() {
  return (
      <React.Fragment>
        <div className="App">
            <Sidebar/>

            <Counter/>

        </div>
      </React.Fragment>
    
  );
}

export default App;
