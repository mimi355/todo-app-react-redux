import React,{useState} from 'react'
import {useDispatch} from 'react-redux';
import {  deleteTodo } from '../redux/action';

import { editTodo } from '../redux/action';
export default function TodoItem({todo}) {
    const[editable,setEditable]=useState(false)
    const[text,setText]=useState(todo.text)
    let dispatch=useDispatch();
    
    return (
    
        <li>
       
        {editable? <input  type="text" value={text} onChange={e=>setText(e.target.value)} />:<p > {todo.text}</p>  }
        
        <i onClick={()=>{
            dispatch(editTodo(
                   {
                       ...todo,
                       text:text
                   }
            ));
           if(editable){
               setText(todo.text)
           }

            setEditable(!editable);
        }}                     class="fas fa-edit"></i>
       <i   class="fas fa-trash-alt"  onClick={()=>dispatch(deleteTodo(todo.id))}     ></i>

      </li>
     
    )
}
