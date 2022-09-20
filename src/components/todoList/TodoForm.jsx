import {useState} from "react";

export function TodoForm({onSubmit}) {

    const [todo, setTodo] = useState("");

    const todoChangeHandler = (e) => {
        setTodo(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(todo);
        setTodo("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3>Nuevo Pendiente</h3>
            <label htmlFor="input-todo">Descripci&oacute;n</label>
            <input type="text"
                   id="input-todo"
                   name="input-todo"
                   autoComplete="off"
                   value={todo}
                   onChange={todoChangeHandler}
            />
            <button type="submit" disabled={todo.length === 0}>
                Añadir pendiente
            </button>
        </form>
    );
}