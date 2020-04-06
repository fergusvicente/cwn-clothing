import React from 'react';
import HomePage from './pages/homepage/homepage.component.jsx';
import './App.css';
import { Switch, Route, Redirect} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from  './components/header/header.component';
import SignInAndUpPage from './pages/sign-in&up/sign-in&up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.util';
import { setCurrentUser } from './redux/user/user.action'
import {connect} from 'react-redux';


class App extends React.Component {
unsubcribeFromAuth = null

 componentDidMount() { 
   
    const {setCurrentUser} = this.props;

  this.unsubcribeFromAuth =  auth.onAuthStateChanged(async userAuth => {
     if(userAuth) {
       const userRef = await createUserProfileDocument(userAuth);

       userRef.onSnapshot(snapShot => {
        setCurrentUser({
             id: snapShot.id,
             ...snapShot.data()
           });
          });
        }
         
       setCurrentUser(userAuth);
     
    });
 }

 componentWillUnmount() {
   this.unsubcribeFromAuth();
 }

  render() {
  return (
    <div >
    <Header  />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage}/>
        <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : (
          <SignInAndUpPage />
        ) } />
      </Switch>
    </div>
  );
}
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch( setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
