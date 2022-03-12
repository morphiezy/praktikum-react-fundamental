export const TodoItem = ({todoStyle,todoInfo,btnClick})=>{

    const {list,toggle,toggleText,todoComplete} = todoStyle;
    const {id,title,completed} = todoInfo

    return(
        <li className={list}>
            <button className={toggle} onClick={()=>btnClick(id)}>
                <span className={`${toggleText} ${completed ? todoComplete : "" } `}>{title}</span>
            </button>
        </li>
    )
}