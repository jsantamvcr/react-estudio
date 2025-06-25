


const intialState = [{
    id: 1,
    todo: 'Buy milk',
    done: false
}]

const todoReducer = (state = intialState, action) => {

    if (action?.type === 'ADD_TODO') {
        return [...state, action.payload];
    }

    return state;
}

let todos = todoReducer();

const newTodo= {
    id: 2,
    todo: 'Buy bread',
    done: false
}

const addTodoAction = {
    type: 'ADD_TODO',
    payload: newTodo
}

todos = todoReducer(todos, addTodoAction );


console.log({state: todos});