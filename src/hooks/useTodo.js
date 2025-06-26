import { useEffect, useReducer } from 'react';
import { todoReducer } from '../reducers/TodoReducer.js';

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodo = (initialState = []) => {

    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleNewTodo = (todo) => {
        const action = {
            type: 'add',
            payload: todo
        };
        dispatch(action);
    };

    const handleDeleteTodo = (todoId) => {
        const action = {
            type: 'remove',
            payload: todoId
        };
        dispatch(action);
    };

    const handleToggleTodo = (todoId) => {
        const action = {
            type: 'toggle',
            payload: todoId
        };
        dispatch(action);
    };

    const todosCount = todos.length;
    const pendingTodosCount = todos.filter(todo => !todo.done).length;

    return {
        todos,
        todosCount,
        pendingTodosCount,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo
    };
}