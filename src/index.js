import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Maintenance from './Maintenance';
import About from './components/about';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/about" component={About}/>
  <React.StrictMode>
    {/* <Maintenance /> */}
    <App />
  </React.StrictMode>,
   </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
