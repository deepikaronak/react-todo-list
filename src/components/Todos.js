import React from "react"
import {
    TextField,
    IconButton,
    List,
    ListItem,
    ListItemText,
    ListItemSecondaryAction,
    Checkbox,
    Typography,
    Paper,
  } from '@material-ui/core';
  import { withStyles } from '@material-ui/core/styles';
  import {
    AddCircle as AddCircleIcon,
    Delete as DeleteIcon,
  } from '@material-ui/icons';

  class _Todos extends React.Component {
    state = {
        todos: [],
        newTodoDescription: "",
    }


    handleTodoClick = currentTodo => {
        
    currentTodo.isDone = !currentTodo.isDone;

        const updatedState = {
            todos: this.state.todos
        };
        this.setState(updatedState)
    };

    handleAddTodo = ()=> {
        //Step 1: get new todo description
        const newTodoDescription = this.state.newTodoDescription
        //Step 2: create  new todo description 
        const newTodo =  {
        description: newTodoDescription,
        isDone: false,
        };
        //Step 3: update react component state
        const newTodos =[
        ...this.state.todos,
        newTodo,
        ];
        this.setState({
            todos:newTodos,
        });
        
    };

    handleOnChange = (event) =>{
        const {name, value} = event.target;
        this.setState({
          [name]: value,
        });
    }

    render(){ 
        return (
        <div>
            <h1> Things to do</h1>
            <label htmlFor = "newTodoDescription">Add Todo </label>
            <input type='text'
            value={this.state.newTodoDescription}
            name = "newTodoDescription"
            id= "newTodoDescription"
            onChange={this.handleOnChange}/>
            <button onClick={this.handleAddTodo}>+</button>
            <ul>
                {this.state.todos.map((todo) => {
                    let completeClass = "";
                    if (todo.isDone){
                        completeClass = "complete";
                    }
                    return (
                        <li className = {completeClass} 
                        onClick = {() => this.handleTodoClick (todo)} > 
                        {todo.description}
                        </li>
                    )
                })}
            </ul>
        </div>
        )
    }
}


const styles = {
    doneTodo: {
      textDecoration: 'line-through',
    },
    todoContainer: {
      maxWidth: '600px',
      minHeight: '700px',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
    },
  };
  
  export const Todos = withStyles(styles)(_Todos);
