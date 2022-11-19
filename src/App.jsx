import { useState } from 'react';
import { nanoid } from 'nanoid';
import './App.css';

function App() {
    const INIT_TODOS = [
        {
            id: nanoid(),
            title: 'coding',
            content: 'I have to code a lot.',
            isEdited: false,
        },
    ];
    const [todos, setTodos] = useState(INIT_TODOS);

    const addTodo = (e) => {
        e.preventDefault();

        const { title, content } = e.currentTarget.elements;

        const newTodo = {
            id: nanoid(),
            title: title.value,
            content: content.value,
            isEdited: false,
        };
        setTodos((prevTodos) => [...prevTodos, newTodo]);
        e.currentTarget.reset();
    };

    const deleteTodo = (id) => {
        setTodos((todos) => todos.filter((todo) => todo.id !== id));
    };

    return (
        <div className="App">
            <form onSubmit={addTodo}>
                <input type="text" name="title" placeholder="Title..." />
                <input type="text" name="content" placeholder="Content..." />
                <button>Add todo</button>
            </form>
            <ul>
                {todos.map(({ id, title, content }) => {
                    return (
                        <li key={id}>
                            <h1>{title}</h1>
                            <p>{content}</p>
                            <button onClick={() => deleteTodo(id)}>X</button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default App;
