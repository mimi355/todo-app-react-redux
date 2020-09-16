import React,{useState} from 'react'
import { addTodo } from '../redux/action'
import{useDispatch} from 'react-redux';
export default function InputForm() {
   let[text,setText]=useState()
   let dispatch = useDispatch()
    return (
        
        <div  className='text-addtodo' >
        <input onChange={e=>setText(e.target.value)} value={text} type='text' name='todo' placeholder='Enter your task here....' />
        <button  className='btn' type='submit'  onClick={()=>{
           dispatch(addTodo(

              {
                  id:Math.random(),
                  text
              }))
               setText('');
        }}>Add</button>
        </div>       
    )
}
