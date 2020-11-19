import React, { Component } from 'react'

import validator from "validator"
import Todo from "../Todo/Todo"

import Message from "../shared/Message"
import axios from "axios"
import "./Signin.css"
let log = console.log
 class Signin extends Component {

  state ={
    isAuth: false,
    email: "",
    password: "",
    isError: false,
    isSubmitError: false,
    isSubmitErrorMessage: "",
    
  }

  handleEmailOnChange = (event) => {

    
    
    this.setState({
      [event.target.name]: event.target.value,
      isSubmitErrorMessage: false
    })
    let isEmail = validator.isEmail(this.state.email)
    
    if(!isEmail) {this.setState({
      isError: true
    })
  } else this.setState({
      isError: false
    })
    

  }
  handlePasswordOnChange = (event) => {

    
   
    this.setState({
      [event.target.name]: event.target.value,
      
    })
    
  }



  handleOnSubmit =  async (event) => {
    event.preventDefault()
    


    const{password, email} = this.state;


    if(validator.isEmpty(email) && validator.isEmpty(password)) {
      this.setState({
        isSubmitError: true,
        isSubmitErrorMessage: "Cannot have an empty email and password"
      }) 
    
      log(this.state.isSubmitErrorMessage, this.state.isSubmitError)
      
      return
    
    } else {this.setState({
      isSubmitError: false,
      isSubmitErrorMessage: ""
    }) }

    
    if(validator.isEmpty(email)){
      this.setState({
        isSubmitError: true,
        isSubmitErrorMessage: "Cannot have an empty email"
      })
      return
    } else  this.setState({
      isSubmitError: false, 
      isSubmitErrorMessage: ""
    })

    if(validator.isEmpty(password)){
      this.setState({
        isSubmitError: true,
        isSubmitErrorMessage: "Cannot have an empty password"
      })
      return
    } else  this.setState({
      isSubmitError: false,
      isSubmitErrorMessage: ""
    })
    
    try{
    
     let success = await axios.post('http://localhost:3000/api/users/sign-in', {email: this.state.email, password: this.state.password})
     
    


console.log(success)
    
    }
    
    catch (e){
      
      
        console.log(e.response)


       


    
      
      
    
  }


  }

  render() {

    const { isAuth, isError ,   isSubmitError, signUpMessage} = this.state

    let showTodoComponnent = isAuth ? (<Todo />  
      ):( 
      
    <form onSubmit={this.handleOnSubmit}>
      <div>
        {isError ? <div> Please enter a correct email</div> : ""}
      </div>
      <div>
        {isSubmitError ? <Message className="error-message" message={this.state.isSubmitErrorMessage}/>: ""}
      </div>
      <div>{signUpMessage? <div style={{color: "blue"}}>You have successfully signed up!</div>: ""}</div>

     <input type="text" name="email" placeholder="Email"  
     value={this.state.email} 
     onChange={(event) => this.handleEmailOnChange(event)} 
      /> <br/> 

     <input type="text" placeholder="Password" name="password" value={this.state.password} 
     onChange={(event) =>  this.handlePasswordOnChange(event)} 
     />  <br/>

     <button>Sign in</button>
    </form>);
   

    return (
     
    <div style={{textAlign: "center", marginTop: "15%"}} >
      {showTodoComponnent}
    </div>
      
      
    )
  }
}

export default Signin
