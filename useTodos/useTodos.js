import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";



const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}


export const useTodos = () => {


    const [todos, dispatch] = useReducer(todoReducer, [], init)
    //Aqui se almacen nuestro estado, que se va a modificar por la acción de los componentes

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    

    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo,
        }

        dispatch(action);
    }

    const handleDeleteTodo = (id) => {
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        })
    }

    const handleToggleTodo = (id) => {
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id
        })
    }

    
    

  return {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
    pendingTodosCount: todos.filter(todo => !todo.done).length,
    }
}
