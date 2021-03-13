import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css'
// import Header from "./header/header";
import Content from "./content/content";
function App() {
  return (


    <Router>
      <Route path="/" exact component={ <Content/> } />
    </Router>

  );
}

export default App;
