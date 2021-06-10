import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Store from './components/Pages/Store/Store';
function App() {
  return (
   <Router>
     <Switch>
       <Route exact path='/'>
          <Home/>
       </Route>
       <Route path='/store'>
          <Store/>
       </Route>
     </Switch>
   </Router>
  );
}

export default App;
