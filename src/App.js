import React from 'react';
import './App.css';
import Header from './Header'
import Body from './Body'
import Timetable from 'timetable-generator'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import B2chemicals from './B2chemicals'
import B2petroleums from './B2petroleums'
import Chepreview from './Chepreview'
import B3chemicals from './B3chemicals'

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path='/chepreview'>
        <Header/>
        <Chepreview/>
        </Route>
      <Route path='/btech2chemical'>
       <Header/>
       <B2chemicals/>
     </Route>
     <Route path='/btech3chemical'>
       <Header/>
       <B3chemicals/>
     </Route>
     <Route path='/btech2petroleum'>
       <Header/>
       <B2petroleums/>
     </Route>

      <Route path='*'>
     <Header/>
     <Body/>
     </Route>

     
     </Switch>
    </div>
    </Router>
  );
}

export default App;
