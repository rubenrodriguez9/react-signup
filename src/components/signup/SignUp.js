import React, { Component } from 'react'

import validator from "validator"
import Todo from "../Todo/Todo"

import Message from "../shared/Message"
import axios from "axios"
import "./Signup.css"

 class Signup extends Component {

  state ={
    isAuth: false,
    email: "",
    password: "",
    isError: false,
    isPasswordError: false,
    isPasswordErrorMessage: '',
    isSubmitError: false,
    isSubmitErrorMessage: "",
    signUpMessage: ""
  }

  handleEmailOnChange = (event) => {

    
    
    this.setState({
      [event.target.name]: event.target.value,
     isSubmitError: false
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
      [event.target.name]: event.target.value
      
    })

    const {password } = this.state

    let isPassword = validator.matches(password, "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")

      if(isPassword){
        this.setState({
          isPasswordError: false,
          isPasswordErrorMessage: ""
        })

      } else {
        this.setState({
          isPasswordError: true,
          isPasswordErrorMessage: "Password must contain one uppercase, one lowercase, one special character, and one of the symbols"
        })
      }

    
  }



  handleOnSubmit =  async (event) => {
    event.preventDefault()
    const{password, email} = this.state;


    if(validator.isEmpty(email) && validator.isEmpty(password)) {
      this.setState({
        isSubmitError: true,
        isSubmitErrorMessage: "Cannot have an empty email and password"
      }) 
    
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
    } else  this.setState({
      isSubmitError: false, 
      isSubmitErrorMessage: ""
    })

    if(validator.isEmpty(password)){
      this.setState({
        isSubmitError: true,
        isSubmitErrorMessage: "Cannot have an empty password"
      })
    } else  this.setState({
      isSubmitError: false,
      isSubmitErrorMessage: ""
    })
    
    try{
     let success = await axios.post('http://localhost:3000/api/users/create-user', {email: this.state.email, password: this.state.password})
     this.setState({
      signUpMessage: true
    })

    console.log(success);
    }
    catch (e){
      if(e.response.status === 404){
        this.setState({
          isSubmitError: true

        })
      }



    
    
      
    }
  }

 
  

  render() {

    const { isAuth, isError , isPasswordError, isPasswordErrorMessage, isSubmitError, signUpMessage} = this.state

    let showTodoComponnent = isAuth ? (<Todo />  
      ):( 
      
    <form onSubmit={this.handleOnSubmit}>
      <div>
        {isError ? <div> Please enter a correct email</div> : ""}
      </div>
      <div>
        {isSubmitError ? <Message className="error-message" message={"Email already taken."}/>: ""}
      </div>
      <div>{signUpMessage? <div style={{color: "blue"}}>You have successfully signed up!</div>: ""}</div>

     <input type="text" name="email" placeholder="Email"  
     value={this.state.email} 
     onChange={(event) => this.handleEmailOnChange(event)} 
      /> <br/> {isPasswordError ? <div>{isPasswordErrorMessage}</div> : ""}

     <input type="text" placeholder="Password" name="password" value={this.state.password} 
     onChange={(event) =>  this.handlePasswordOnChange(event)} 
     />  <br/>

     <button>Sign up</button>
    </form>);
   

    return (
     
    <div style={{textAlign: "center", marginTop: "15%"}} >
      {showTodoComponnent}
    </div>
      
      
    )
  }
}

export default Signup
