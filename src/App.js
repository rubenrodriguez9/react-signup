import React, { Component } from 'react'
import Todo from "./components/Todo/Todo"
import validator from "validator"


 class App extends Component {

  state ={
    isAuth: false,
    email: "",
    password: "",
    isError: false
  }

  handleEmailOnChange = (event) => {

    
    
    this.setState({
      [event.target.name]: event.target.value
    })

    let isEmail = validator.isEmail(this.state.email)
      if(!isEmail){
        this.setState({
          isError: true
        })
      } else this.setState({
        isError: false
      })
      console.log(this.state.isError);
  }

  handlePasswordOnChange = (event) => {

    
   
    this.setState({
      [event.target.name]: event.target.value
    })

    
  }



  handleOnSubmit =  (event) => {
    event.preventDefault()
    console.log(this.state);
  }

  render() {

    const { isAuth, isError } = this.state

    let showTodoComponnent = isAuth ? (<Todo />  
      ):( 
      
    <form onSubmit={this.handleOnSubmit}>
      <div>
        {isError ? <div> Please enter a correct email</div> : ""}
      </div>
     <input type="text" name="email" placeholder="Email"  
     value={this.state.email} 
     onChange={(event) => this.handleEmailOnChange(event)} 
     /> <br/> 

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
