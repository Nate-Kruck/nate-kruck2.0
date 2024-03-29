import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact'

const ThemeContext = React.createContext('rubberband');

ReactDOM.render(
   <ThemeContext.Provider value="wasted">
      <Router>
        <Switch>
          <Route exact path="/about" component={About}/>
          <Route exact path="/projects" component={Projects}/>
          <Route exact path="/contact" component={Contact}/>
          <App />
        </Switch>
      </Router>
    </ThemeContext.Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
