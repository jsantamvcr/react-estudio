import { TodoList } from './TodoList.jsx';
import { TodoAdd } from './TodoAdd.jsx';
import { useTodo } from '../hooks/useTodo.js';


export const TodoApp = () => {

    const {
        todos,
        todosCount,
        pendingTodosCount,
        handleDeleteTodo,
        handleNewTodo,
        handleToggleTodo
    } = useTodo();

    return (
        <>
            <h1>Todos {todosCount}, <small>pending:{pendingTodosCount}</small></h1>
            <hr/>

            <div className="row">
                <div className="col-7">
                    <TodoList
                        todos={todos}
                        onDeleteTodo={handleDeleteTodo}
                        onToggleTodo={handleToggleTodo}
                    />
                </div>

                <div className="col-5">
                    <TodoAdd onNewTodo={handleNewTodo}/>
                </div>
            </div>
        </>
    );
};
