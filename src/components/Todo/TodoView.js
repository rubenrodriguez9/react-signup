import React from 'react'
import PropTypes from 'prop-types'
import "./TodoView.css" 
import Span from "../shared/Span"

const TodoView = ({todoList, appHandleDelete, appHandleEditOnClick, disable, appHandleEditOnChange, editTodoValue, appHandleUpdateOnClick}) => {
    return (
        <div>
          
        <ul  >
        {todoList.map(({id, todo, editToggle}) => {
          return <li style={{margin: 20}} key={id} >
            
            
            {editToggle?
             <input value={editTodoValue}
              name="editTodoValue" 
              onChange={(event) => {appHandleEditOnChange(event)}} /> 
              : 
              <Span value={todo}/>}
          
            {editToggle === true ? 
              <Span value="Update"
              className="todo-button-shared-style edit-button"
              onClick={() => appHandleUpdateOnClick()} 
              />
              : 
              <Span value="Edit" id={id}
              onClick={() => appHandleEditOnClick(id)}
              className={`todo-button-shared-style edit-button ${disable ? "disabled" :"" }`}
              />}
              
              <Span value="Delete" id={id}
              onClick={() => appHandleDelete(id)}
              className={`todo-button-shared-style delete-button ${disable ? "disabled" :"" }`}
              disabledClass="disabled"
              disableButton={disable}
            />
          </li>
        })}
        </ul> 
        </div>
    )
}

TodoView.propTypes = {

}

export default TodoView
