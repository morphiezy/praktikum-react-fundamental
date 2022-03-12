import React,{useState} from "react"
import style from './Todo.module.css';

// It's just additional feature of my task

export const TodoForm = ({addTodo})=>{

    const [inputValue,setValue] = useState("")
    const {form,formInput,hiddenBtn,btnAdd,btnAddIcon} = style

    const handleFormSubmit = (e)=>{
        e.preventDefault();
        if(inputValue.trim() !== "") addTodo(inputValue);

        return setValue("")
    }

    return(
        <form onSubmit={(e)=>handleFormSubmit(e)} className={form}>
            <input type="text" 
                   name="todo-input" 
                   value={inputValue} 
                   placeholder="Add your todo"
                   onChange={(e)=> setValue(e.target.value)}
                   className={formInput}
            />
            <input type="submit" id="add" className={hiddenBtn}/>
            <label htmlFor="add">
                <button className={btnAdd}>
                    <span className={`material-icons-round ${btnAddIcon}`}>send</span>    
                </button>    
            </label>
        </form>
    )

}