import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Components/Global/Inicio';
import { Component } from 'react';
import ReactGA from 'react-ga';

class App extends Component {
  componentDidMount(){
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  componentDidUpdate = () => ReactGA.pageview(window.location.pathname + window.location.search);
  
  render(){
    return (
      <Router>
        <Route path='/' component={Home}></Route>
      </Router>
    );
  }

}

export default App;
