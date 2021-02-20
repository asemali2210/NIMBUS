import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Protfolio from './pages/Protfolio';
import Contact from './pages/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap/dist/react-bootstrap';
import './style.scss'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom"
ReactDOM.render(
  <React.StrictMode>
      <Router>
      <Switch>
          <Route  path="/">
            <Home />
          </Route>
          <Route  path="/blog">
            <Blog />
          </Route>
          <Route  path="/protfolio">
            <Protfolio />
          </Route>
          <Route  path="/contact">
            <Contact />
          </Route>
      </Switch>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
