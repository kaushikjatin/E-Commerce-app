import React from 'react';
import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {Route,Switch,Redirect} from 'react-router-dom';
import {auth } from './firebase/firebase.utils';
import {createUserProfileDocument} from './firebase/firebase.utils';
import './App.css';
import {setCurrentUser} from './redux/user/user.actions';
import {connect} from 'react-redux'

class App extends React.Component
{
  unsubscribefromauth=null;
  componentDidMount()
  {
      const {setCurrentUser}=this.props;
      this.unsubscribefromauth=auth.onAuthStateChanged(async userAuth => {
          if(userAuth)
          {  
              const userRef=await createUserProfileDocument(userAuth);
              userRef.onSnapshot(snapshot => {
                  setCurrentUser({
                      id:snapshot.id,
                      ...snapshot.data()
                    })
                  }) 
          }
          else 
          {
            setCurrentUser(null);
          }
       });
  }

  componentWillUnmount(){
    this.unsubscribefromauth();
  }

  render(){
    return(
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={Homepage}></Route>
          <Route exact path='/shop' component={ShopPage}></Route>
          <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage/>)}></Route>
        </Switch>
      </div>
    )
  }
}


// mapDispatchToProps returns us a object which have an element 'setCurrentUser' which points to a function which we can call 
// whenever we want to update our 
const mapDispatchToProps = (dispatch) =>({
    setCurrentUser: (user) => dispatch(setCurrentUser(user))   
})

// so whenever this SetCurrentUser pointing function will be called with user as the argument...then it will call the dispatch function
// and the dispatch function will pass the action object (which will be returned by our action creater function) to every reducer.

const mapStateToProps= (state)=>({   // mapStateToProps function will br called with argument as the state of the store...which is a big giant object
  currentUser:state.user.currentUser 
}) // this function will return an object which will be given to our Header component as props automatically.

export default connect(mapStateToProps,mapDispatchToProps)(App);
