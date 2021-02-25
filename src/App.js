import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from 'react';
import Header from './Components/Header'
import India from './Components/India'
import World from './Components/World'


class App extends Component {
  
  render(){
  return (
    <div className="container-fluid">
   <Router>
   <Header/>

   <Switch>
     <Route exact path="/">
       <India/>
     </Route>
     <Route exact path="/india">
       <India/>
     </Route>
     <Route exact path="/world">
       <World/>
     </Route>
   </Switch>


   </Router>

      
    </div>
  );
  }
}

export default App;
