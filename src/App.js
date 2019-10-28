import React from 'react';
import './App.css';
import DashBoard from './dashboard';

import Store from './Store'

function App() {
  return (
    <div className="App">
      <Store>
        <DashBoard/>
      </Store>
    </div>
  );
}

export default App;
