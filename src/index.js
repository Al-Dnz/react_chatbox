import React from 'react';
import ReactDOM from 'react-dom';
import Connexion from './components/connexion/initForm'
import './index.css';
import App from './components/App.js';
import './components/connexion/initForm.css'
import * as serviceWorker from './serviceWorker';
import NotFound from './components/NotFound.js';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
// import Miss from 'react-router-dom';
// import Match from 'react-router-dom';
// import {   } from 'react-router-dom';


const Root = () => {
  return(
    <Router>
          <div>
            <Switch>
              <Route exact path="/" component={Connexion}/>
              <Route exact path="/pseudo/:pseudo" component={App}/>
              <Route component={NotFound} />
            </Switch>
          </div>
    </Router>
  )
}


  ReactDOM.render(<Root />, document.getElementById('root'));
//  ReactDOM.render(<Connexion />, document.getElementById('root'));








// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
