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
  Route
} from "react-router-dom"
ReactDOM.render(
  <React.StrictMode>
      <Router>
          <Route exact path="/">
            <Blog />
          </Route>
          <Route exact path="/blog">
            <Blog />
          </Route>
          <Route exact path="/protfolio">
            <Protfolio />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
