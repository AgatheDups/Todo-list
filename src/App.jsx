/* eslint-disable react/prop-types */
import { useTodo } from "./hooks/useTodo"
import "./App.css"

function App() {
  const {visibleTodos, removeTodo, clearCompleted, toggleFilter, toggleTodo, showCompleted} = useTodo()

  return <div className="content">
    <p>
      <input type="checkbox" checked={showCompleted} onChange={toggleFilter} />
        Afficher les tâches accomplies
    </p>
    <div className="todo-list-item">
      {visibleTodos.map(todo => (<div className="item" key={todo.name}>
        <div>
          <input type="checkbox" onChange={() => toggleTodo (todo)} checked={todo.checked}/>
          {todo.name}
        </div>
        <button className="btn btn-danger btn-delete" onClick={() => removeTodo (todo)}>X</button>
      </div>))}
    </div>
    <button onClick={clearCompleted} className="btn btn-danger">Supprimer les tâches accomplies</button>
  </div>
}

export default App