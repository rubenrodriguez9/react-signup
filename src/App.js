import React, { Component } from 'react'
import Todo from "./components/Todo/Todo"
import validator from "validator"


 class App extends Component {

  state ={
    isAuth: false,
    email: "",
    password: "",
    isError: false,
    isPasswordError: false,
    isPasswordErrorMessage: '',
    isSubmitError: false,
    isSubmitErrorMessage: ""
  }

  handleEmailOnChange = (event) => {

    
    
    this.setState({
      [event.target.name]: event.target.value,
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



  handleOnSubmit =  (event) => {
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
    
    
  }

  render() {

    const { isAuth, isError , isPasswordError, isPasswordErrorMessage, isSubmitError, isSubmitErrorMessage} = this.state

    let showTodoComponnent = isAuth ? (<Todo />  
      ):( 
      
    <form onSubmit={this.handleOnSubmit}>
      <div>
        {isError ? <div> Please enter a correct email</div> : ""}
      </div>
      <div>
        {isSubmitError ? <div> {isSubmitErrorMessage}</div> : ""}
      </div>

     <input type="text" name="email" placeholder="Email"  
     value={this.state.email} 
     onChange={(event) => this.handleEmailOnChange(event)} 
      /> <br/> {isPasswordError ? <div>{isPasswordErrorMessage}</div> : ""}

     <input type="password" placeholder="Password" name="password" value={this.state.password} 
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

export default App
