import { useState } from 'react';
import { nanoid } from 'nanoid';

const INIT_TODOS = [
    {
        id: nanoid(),
        title: 'coding',
        content: 'I have to code a lot.',
        isEdited: false,
    },
];

const App = () => {
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

    const isEditedToggle = (id, e) => {
        e.preventDefault();
        setTodos((todos) =>
            todos.map((todo) => (todo.id === id ? { ...todo, isEdited: !todo.isEdited } : todo))
        );
    };

    const editTodo = (id, e) => {
        e.preventDefault();
        const { title, content } = e.currentTarget.elements;

        setTodos((todos) =>
            todos.map((todo) =>
                todo.id === id
                    ? {
                          ...todo,
                          title: title.value,
                          content: content.value,
                          isEdited: false,
                      }
                    : todo
            )
        );
    };

    return (
        <div className="App">
            <form onSubmit={addTodo}>
                <input type="text" name="title" placeholder="Title..." />
                <input type="text" name="content" placeholder="Content..." />
                <button>Add todo</button>
            </form>
            <ul>
                {todos.map(({ id, title, content, isEdited }) => {
                    return isEdited ? (
                        <li key={id}>
                            <form onSubmit={(e) => editTodo(id, e)}>
                                <input type="text" name="title" defaultValue={title} />
                                <input type="text" name="content" defaultValue={content} />
                                <button>Confirm</button>
                            </form>

                            <button onClick={(e) => isEditedToggle(id, e)}>unedit</button>
                        </li>
                    ) : (
                        <li key={id}>
                            <h1>{title}</h1>
                            <p>{content}</p>
                            <button onClick={(e) => isEditedToggle(id, e)}>edit</button>
                            <button onClick={() => deleteTodo(id)}>X</button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default App;
