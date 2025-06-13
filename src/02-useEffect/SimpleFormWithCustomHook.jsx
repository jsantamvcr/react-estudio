import { useForm } from "../hooks/useForm.js";

export const SimpleFormWithCustomHook = () => {

    const {
        username,
        email,
        password,
        onInputChange,
        onResetForm,
    } = useForm(
        {
            username: "john",
            email: "jsantamv@live.com",
            password: ""
        }
    );


    return (
        <>
            <h1> Simple Form - useEffect Hook </h1>

            <hr/>
            <input
                className="form-control"
                type="text"
                placeholder="Type a number"
                name="username"
                value={username}
                onChange={onInputChange}
            />

            <input
                className="form-control mt-2"
                type="email"
                placeholder="jsantamv@live.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />

            <input
                className="form-control mt-2"
                type="password"
                placeholder="password"
                name="password"
                value={password}
                onChange={onInputChange}
            />

            <button className="btn btn-primary btn-block mt-2" onClick={onResetForm}>Reset form</button>

        </>
    );

}
