import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Components/Global/Inicio';

function App() {
  return (
    <Router>
      <Route path='/' component={Home}></Route>
    </Router>
  );
}

export default App;
