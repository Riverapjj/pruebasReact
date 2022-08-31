import React from "react";

const Todo = ({todo, order, index, deleteTodo}) => {
    return (
        <>
            <div className="list">
                <h3>{order} - {todo}</h3> <button className="btn-delete" onClick={() => deleteTodo(index)}></button>
            </div>
        </>
    )
}

export default Todo