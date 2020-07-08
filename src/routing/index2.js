import React from 'react';
import ReactDOM from 'react-dom';
import {Route,Link,Switch,BrowserRouter as Router} from "react-router-dom"
import './index.css';
import App from './App';
import Visit from './Visit';
import NotFound from '../NotFound';
import User from './User';

const routing = (
  <Router >

    <div>
      <ul>
        <li><Link to="/"> Home</Link></li>
        <li><Link to="/user">User</Link></li>
        <li><Link to="/visit">Visit </Link></li>
      </ul>
    </div>


    <Switch>

      <Route exact path="/" component={App} />
      <Route path="/user" component={User} />
      <Route path="/visit" component={Visit} />
      <Route component={NotFound} />

    </Switch>

    
  </Router>
 )

ReactDOM.render(
    routing,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

