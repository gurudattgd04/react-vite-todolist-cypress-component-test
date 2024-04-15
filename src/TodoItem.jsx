export function TodoItem({completed, id, title, toggleTodo, deleteTodo}) {
    return (<li>
        <label>
          <input type="checkbox" checked= {completed}
          onChange={e => toggleTodo(id, e.target.checked)}
          className={completed ? "todo strike": "todo"}
          />{title}
          </label>
          <button
           onClick={() => deleteTodo(id)} 
           className="btn btn-danger">Delete</button>
      </li>)
}