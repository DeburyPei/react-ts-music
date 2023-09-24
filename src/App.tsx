import React from 'react';
import { useRoutes } from 'react-router-dom'
import '@/App.css';
import routes from '@/router'
function App() {
  return (

    <div className="App">
      <h1>Hello</h1>
        { useRoutes(routes) }
    </div>
  );
}

export default App;
