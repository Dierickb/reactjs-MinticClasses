import { TodoItem } from "./TodoItem";

export function TodoList({ onToggle, todos = []}) {
    if (todos.length === 0) {
        return <p>No hay ning&uacute;na tarea pendiente</p>;
    }
    const incomplete = todos.filter(({isDone}) => !isDone);
    return <>
        <span>Pendientes: {incomplete.length}</span>
        <ul className="card">
            {todos?.map(({ id, description, isDone }) =>(
                <TodoItem key={id} id={id}
                          description={description}
                          isDone={isDone}
                          onToggle={onToggle}
                />
            ))}
        </ul>
    </>;
}