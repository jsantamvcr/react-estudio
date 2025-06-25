export const todoReducer = (initialState = [], action) => {

    switch (action.type) {
        case 'add':
            return [...initialState, action.payload];

        case 'remove':
            throw new Error('Action type "add" is not implemented yet');
            //return state.filter(todo => todo.id !== action.payload);

        case 'toggle':
            throw new Error('Action type "add" is not implemented yet');
            // return state.map(todo => {
            //     if (todo.id === action.payload) {
            //         return {
            //             ...todo,
            //             done: !todo.done
            //         }
            //     }
            //     return todo;
            // });

        default:
            return initialState;
    }
}
