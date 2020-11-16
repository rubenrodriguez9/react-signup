import {v4 as uuidV4} from "uuid"
import TodoView from "./TodoView"


import React, { Component } from 'react';

class Todo extends Component {
  
    state = {
      todoList:[
        {
          id: uuidV4(),
          todo: "keep coding",
          editToggle: false,
        },
        {
          id: uuidV4(),
          todo: "more coding",
          editToggle: false
        },  
        {
          id: uuidV4(),
          todo: "some more coding",
          editToggle: false
        },
      ],
      todoValue: "",
      errorMessage: false,
      disable: false,
      editTodoValue: ""
    }

    appHandleDelete= (targetID) => {
      let filtered = this.state.todoList.filter((item) => {
        if(targetID !== item.id) {
          return item
        }
      })

      this.setState({
        todoList : filtered
      })
      
    }
    
    appHandleOnchange = (event) => {


      this.setState({
        [event.target.name]: event.target.value,
        errorMessage: false
      })
    }

    appHandleOnClick = () => {
      if(this.state.todoValue.length === 0){
        this.setState({
          errorMessage:true
        })
        return
      }

      let newArray = [...this.state.todoList, {id:uuidV4, todo: this.state.todoValue}]

      this.setState({
        todoList: newArray,
        todoValue: "",
      })
    }

    appHandleEditOnClick = (targetID)  => {
      let arr = [...this.state.todoList].map((item) => {
          if(targetID === item.id){
            item.editToggle = true
          }
          return item
        }
        
        )
        arr.editTodoValue = 

      this.setState({
        todoList: arr,
        disable: true
      })
      
      
    }

    appHandleEditOnChange = (event) => {


          this.setState({
            [event.target.name]: event.target.value 
          })
    }

    appHandleUpdateOnClick = () => {
      let arr = [...this.state.todoList].map((item) => {
          if(item.editToggle){
            
            item.todo = this.state.editTodoValue
            item.editToggle = false
          }
          return item
      })

      this.setState({
        todoList: arr,
        disable: false
      })
    }


  render() {

    const {todoList, errorMessage, disable, editTodoValue } = this.state



    return (
      <div style={{textAlign: "center"}} >
        {errorMessage ? <div>Please enter a todo</div> : null}

        <input  onChange={this.appHandleOnchange} type='text' value={this.state.todoValue} name="todoValue" />
        <button onClick={this.appHandleOnClick} >Submit</button>
        
        <TodoView
        todoList={todoList}
        appHandleOnClick={this.appHandleOnClick}
        appHandleOnchange={this.appHandleOnchange}
        appHandleDelete={this.appHandleDelete}
        appHandleEditOnClick={this.appHandleEditOnClick}
        disable={disable}
        appHandleEditOnChange={this.appHandleEditOnChange}
        editTodoValue={editTodoValue}
        appHandleUpdateOnClick={this.appHandleUpdateOnClick}
        />
        {todoList.length === 0 ? <div>No todos left.</div> : null}
        
      </div>
    );
  }
}

export default Todo ;