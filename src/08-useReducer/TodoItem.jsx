import React from 'react';

export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {


    return (
        <>
            <li id={todo.id} key={todo.id} className="list-group-item d-flex justify-content-between">
                <span
                    className={`align-self-center ${todo.done ? 'text-decoration-line-through' : ''}`}
                    onDoubleClick={() => onToggleTodo(todo.id)}
                >{todo.description}
                </span>
                <button
                    className="btn btn-outline-danger"
                    onClick={() => onDeleteTodo(todo.id)}
                > Delete
                </button>
            </li>
        </>
    );
};
