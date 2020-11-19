import React, { Component } from 'react'
import Signup from "./components/signup/SignUp"
import Signin from "./components/signin/Signin"
import Home from "./components/home/home"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"



 class App extends Component {



  render() {

    return (
      <Router>
        <Switch>
        <Route exact path="/sign-in" component={Signin} />
        <Route exact path="/sign-up" component={Signup} />
          
          
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    )
  }
}
export default App