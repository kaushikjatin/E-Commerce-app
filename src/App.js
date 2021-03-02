import React from 'react';
import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {Route,Switch} from 'react-router-dom';
import {auth } from './firebase/firebase.utils';
import './App.css';

class App extends React.Component{

  constructor()
  {
    super();

    this.state={
      currentUser : null
    }
  }

  unsubscribefromauth=null;
  componentDidMount(){
      this.unsubscribefromauth=auth.onAuthStateChanged( user=>{
        this.setState({currentUser:user});
        console.log(user);
      })
  }

  componentWillUnmount(){
    this.unsubscribefromauth();
  }

  render(){
    return(
      <div>
        <Header currentUser={this.state.currentUser}></Header>
        <Switch>
          <Route exact path='/' component={Homepage}></Route>
          <Route exact path='/shop' component={ShopPage}></Route>
          <Route exact path='/signin' component={SignInAndSignUpPage}></Route>
        </Switch>
      </div>
    )
  }
}

export default App;
