import React from 'react';
import logo from './logo.svg';
import './App.css';

type Props = {
    todos: ITodo[],
    addTodo: (todo: ITodo) => void
}
function App({ todos, addTodo }: Props) {

    const onSavePressed = () => {
        const todo: ITodo = {
            id: 3, priority: 70, value: "Pertanyaanku untung dia balik jam 3 pagi."
        }
        console.log(JSON.stringify(todo))
        addTodo(todo)
    }
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                    <ul>
                        {todos.map(todo =>
                            <li key={todo.id}>{`${todo.value}, Priority: ${todo.priority}`}</li>
                        )}
                    </ul>
                </a>
                <button onClick={onSavePressed}>Save</button>
            </header>
        </div>
    );
}

export default App;
