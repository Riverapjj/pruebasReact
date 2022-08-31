import React, { useState } from "react";
import Todo from "./Todo";

const Form = () => {

    const [todo, setTodo] = useState()

    const [todos, setTodos] = useState([
        {
            product: 'todo 1',
            order: 1
        },
        {
            product: 'todo 2',
            order: 2
        },
        {
            product: 'todo 3',
            order: 3
        }
    ])

    const handleChange = e => setTodo({...todo, [e.target.name] : e.target.value})
    const handleClickTask = e =>  {
        console.log(todo)
        setTodos([...todos, todo])
    }

    const deleteTodo = indice => {
        const newTodos = [...todos]
        newTodos.splice(indice, 1)
        setTodos(newTodos)
    }

    return (
        <>
            <form onSubmit={e => e.preventDefault()}>
                <label>Agregar tareas</label><br />
                <input type="text" name="product" onChange={handleChange} />
                <input type="text" name="order" onChange={handleChange} />
                <button onClick={handleClickTask}>Agregar</button>
            </form>
            {
                todos.map((value, index) => (<Todo todo={value.product} key={index} order={value.order} index={index} deleteTodo={deleteTodo}/>))
            }            
        </>
    )
}

export default Form