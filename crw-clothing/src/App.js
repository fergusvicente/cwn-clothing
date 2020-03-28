import React from 'react';
import HomePage from './pages/homepage/homepage.component.jsx';
import './App.css';
import { Switch, Route} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from  './components/header/header.component';
import SignInAndUpPage from './pages/sign-in&up/sign-in&up.component';
import { auth } from './firebase/firebase.util';

class App extends React.Component {
constructor() {
  super();

  this.state = {
    currentUseer: null
  }
}

  unsubcribeFromAuth = null

 componentDidMount() { //es un extension de firebase permite ver si estas login
  this.unsubcribeFromAuth =  auth.onAuthStateChanged(user => {
     this.setState({currentUser: user});

     console.log(user);
   })
 }

 componentWillUnmount() {
   this.unsubcribeFromAuth();
 }

  render() {
  return (
    <div >
    <Header currentUser={this.state.currentUser} />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage}/>
        <Route path='/signin' component={SignInAndUpPage} />
      </Switch>
    </div>
  );
}
}
export default App;
