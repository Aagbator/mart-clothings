import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Auth from './pages/auth/auth.component';
import Header from './components/header/header.component';

import { auth } from './firebase/firebase.utils';


function About() {
  return (
    <h1>About Page is here</h1>
  )
}

class App extends React.Component {

  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unSubsribeFromAuth = null

  componentDidMount(){
    this.unSubsribeFromAuth = auth.onAuthStateChanged(user => {
      console.log(user);
      this.setState({currentUser: user});
    })
  }

  componentWillUnmount(){
    this.unSubsribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
            <Route exact={true} path='/' component={Homepage} />
            <Route exact={true} path='/shop' component={ShopPage} />
            <Route path='/about' component={About} />
            <Route path='/signin' component={Auth} />
        </Switch>
      </div>
    );
  }
}

export default App;
