import React from 'react';
import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import checkout from './pages/checkout/checkout.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {Route,Switch,Redirect} from 'react-router-dom';
import {auth } from './firebase/firebase.utils';
import {createUserProfileDocument} from './firebase/firebase.utils';
import './App.css';
import {setCurrentUser} from './redux/user/user.actions';
import {connect} from 'react-redux'
import {selectCurrentUser} from './redux/user/user.selectors'

class App extends React.Component
{
  unsubscribefromauth=null;
  componentDidMount()  // componenetdidMount function is only called once in the lifetime..in the start when the componenet is created by DOM for 1st time.
  {
      const {setCurrentUser}=this.props;
      // When subscribing to a new listener, such as onAuthStateChanged, a new reference to it is made in memory which has no knowledge of the 
      // React environment. If a component within your app mounts and subscribes, the method will still trigger even if your component unmounted. 
      // If this happens and you're updating state, you'll get a yellow box warning.

      // To get around this, Firebase returns an unsubscribe function to every subscriber method, which when calls removes the subscription from 
      // memory.
      this.unsubscribefromauth=auth.onAuthStateChanged(async userAuth => {
          if(userAuth)
          {  
              const userRef=await createUserProfileDocument(userAuth);
              userRef.onSnapshot(snapshot => {  //this onSnapshot() method returns the snapshot object of the document on whose reference it is called.
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
          {/* <Route path="/users" component={Users} />
          <Route path="/users/create" component={CreateUser} />
          Now the problem here, when we go to http://app.com/users the router will go through all of our defined routes and return the 
          FIRST match it finds. So in this case, it would find the Users route first and then return it. All good.

          But, if we went to http://app.com/users/create, it would again go through all of our defined routes and return the FIRST match
           it finds. React router does partial matching, so /users partially matches /users/create, so it would incorrectly return the 
           Users route again! */}
          <Route exact path='/' component={Homepage}></Route>
          <Route path='/shop' component={ShopPage}></Route>
          <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage/>)}></Route>
          <Route exact path='/checkout' component={checkout}></Route>
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
  currentUser:selectCurrentUser(state),
}) // this function will return an object which will be given to our Header component as props automatically.

export default connect(mapStateToProps,mapDispatchToProps)(App);
