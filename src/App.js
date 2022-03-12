import React,{useState} from 'react';
import dummyData from './dummyData';
import './App.css';
import { Header } from './components/Header'
import { Footer } from './components/Footer';
import { TodoList } from './components/TodoList';
import { TodoForm } from './components/TodoForm';


function App() {

  const [todoList,setTodoList] = useState(dummyData)

  /* Todo Item on Click  */

  const todoOnClick = (id)=>{
    const newTodoList = todoList.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : {...todo})
    return setTodoList(newTodoList)
  }

  /* Add new todo item */

  const addTodo = (title)=>{
    const id = todoList.length + 1;
    const newTodo = {id,title,completed:false}
    return setTodoList([newTodo,...todoList])
  }

  return (
    <div className="App">
      <Header title="To Do App"/>
      {
        todoList.length > 0 ? 

          <TodoList 
            todoList={todoList} 
            btnClick={todoOnClick}
          /> 
          : 
          <h3>Your todo is empty...</h3>
      }
      <Footer>
        <TodoForm addTodo={addTodo}/>
      </Footer>
    </div>
  );
}

export default App;
