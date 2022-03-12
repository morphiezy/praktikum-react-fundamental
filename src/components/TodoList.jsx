import { TodoItem } from "./TodoItem";
import Todo from './Todo.module.css'

export const TodoList = ({todoList,btnClick})=>{
    return(
        <ul className={Todo.container}>
            {
                todoList.map(todo => {
                    return  <TodoItem 
                                key= {todo.id} 
                                todoInfo= {todo} 
                                todoStyle= {Todo} 
                                btnClick={btnClick}
                            />
                })
            }
        </ul>
    )
}