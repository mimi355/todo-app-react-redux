import React from 'react'
import TodoItem from './TodoItem';
import {useSelector} from 'react-redux'


export default function TodoList() {
   let todos=useSelector (state=>state)
   
   
   
    return (
        
           <ul>

{todos.map(todo=>{
    return (<TodoItem  key={todo.id} todo={todo} /> )
})}


               
              
               </ul> 
       
    )
}
