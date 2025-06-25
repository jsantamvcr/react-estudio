import { useForm } from '../hooks/index.js';


export const TodoAdd = ({ onNewTodo }) => {

    const {
        description,
        onInputChange,
        onResetForm
    } = useForm({
        description: ''
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        if (description.length < 1) return;

        const newTodo = {
            id: ~~(Math.random() * 100) + 1,
            description,
            done: false
        };

        onNewTodo(newTodo); // emit all the new todo to the parent component
        onResetForm();
    };

    return (
        <>
            <h4>Add Todo</h4>
            <hr/>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="What needs to be done?"
                    className="form-control"
                    name="description"
                    value={description}
                    onChange={onInputChange}
                />
                <button
                    type="submit"
                    className="btn btn-outline-primary mt-1 btn-block"
                >
                    Add
                </button>
            </form>
        </>
    );
};
