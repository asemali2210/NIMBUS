import Home from './Home';
import Blog from './Blog';
import Protfolio from './Protfolio';
import Contact from './Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap/dist/react-bootstrap';
import '../style.scss'
import {
    BrowserRouter as Router,
    Route,
    Switch
  } from "react-router-dom"
function App(){
    return(
    <Router>
        <Switch>

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
        </Switch>
    </Router>
    )
}

export default App;