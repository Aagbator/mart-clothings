import React from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Auth from './pages/auth/auth.component';
import Header from './components/header/header.component';

import checkoutPage from './pages/checkout/checkout.component'

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import {setCurrentUser} from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';

function About() {
  return (
    <h1>About Page is here</h1>
  )
}

class App extends React.Component {

  unSubsribeFromAuth = null

  componentDidMount(){
    console.log('mounted App');

    const {setCurrentUser} = this.props;
 
  
    this.unSubsribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

      userRef.onSnapshot(snapShot => {
        console.log('#', snapShot);
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }
    
      setCurrentUser(userAuth);
    })
  }

  componentWillUnmount(){
    this.unSubsribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header />
        <Switch>
            <Route exact={true} path='/' component={Homepage} />
            <Route path='/shop' component={ShopPage} />
            <Route path='/about' component={About} />
            <Route path='/signin' render={() => this.props.currentUser ? (<Redirect to='/'/>) : (<Auth></Auth>)} />
            <Route exact path='/checkout' component={checkoutPage} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser : selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
