import React from 'react'
import style from './Header.module.css'

export const Header = ({title})=>{
    return(
        <header className={style.container}>
            <h1 className={style.title}>{title}</h1>
        </header>
    )
}