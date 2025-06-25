import React from 'react';

export const TodoItem = ({ todo }) => {

    const { id, description } = todo;

    return (
        <>
            <li id={id} key={id} className="list-group-item d-flex justify-content-between">
                <span className="align-self-center">{description}</span>
                <button className="btn btn-outline-danger">Delete</button>
            </li>
        </>
    );
};
