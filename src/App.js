import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';

import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

function App() {  
  return (
      <div>
        <Router>
        <Nav />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/about' exact component={About} />
            <Route path='/experience' exact component={Experience}/>
          </Switch>
        </Router>
        <Footer/>
        </div>
  );
}

export default App;