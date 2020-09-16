
// addTODO
export const ADD_TODO ="ADD_TODO"  // action type
export function addTodo (todo){
    return{
        type: ADD_TODO,
        payload:todo
    }
}
//DELETE TODO
 export const DELETE_TODO ="DELETE_TODO"
export function deleteTodo(todoID){
    return{
        type:DELETE_TODO,
        payload:todoID
    }
}
//EDIT TODO

export const EDIT_TODO =" EDIT_TODO"
export function editTodo(todo){
    return{
        type:EDIT_TODO,
        payload:todo
    }
}

export const COMPLETE_TODO="COMPLETE_TODO"
export function completeTodo(todoID){
    return {
        type:COMPLETE_TODO,
        payload:todoID
    }
}