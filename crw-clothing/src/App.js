import React from 'react';
import HomePage from './pages/homepage.component';
import './App.css';
import { Switch, Route} from 'react-router-dom';
  
const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

function App() {
  return (
    <div >
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop/hats' component={HatsPage}/>
      </Switch>
    </div>
  );
}

export default App;