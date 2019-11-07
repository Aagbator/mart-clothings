import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';


function About() {
  return (
    <h1>About Page is here</h1>
  )
}

function App() {
  return (
    <div>
      <Switch>
          <Route exact={true} path='/' component={Homepage} />
          <Route exact={true} path='/shop' component={ShopPage} />
          <Route path='/about' component={About} />
      </Switch>
    </div>
  );
}

export default App;
