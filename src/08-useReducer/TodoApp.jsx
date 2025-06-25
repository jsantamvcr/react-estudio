import { useReducer } from 'react';
import { todoReducer } from './TodoReducer.js';
import { TodoList } from './TodoList.jsx';
import { TodoAdd } from './TodoAdd.jsx';

export const TodoApp = () => {

    const initialState = [
        {
            id: ~~(Math.random() * 100) + 1,
            description: 'Learn React',
            done: false
        },
        {
            id: ~~(Math.random() * 100) + 1,
            description: 'Learn useReducer',
            done: false
        },
        {
            id: ~~(Math.random() * 100) + 1,
            description: 'Learn useContext',
            done: false
        }
    ];

    const handleNewTodo = (todo) => {
        const action = {
            type: 'add',
            payload: todo
        };

        dispatch(action);
    }

    const [todos, dispatch] = useReducer(todoReducer, initialState);

    return (
        <>
            <h1>Todos 10, <small>pending:8</small></h1>
            <hr/>

            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos}/>
                </div>

                <div className="col-5">
                    <TodoAdd onNewTodo={handleNewTodo}/>
                </div>
            </div>
        </>
    );
};
