import React, { useState } from 'react';
import "./App.css";

const App = () => {
  const [todo, settodo] = useState("");
  const [todos, settodos] = useState([]);
  const [editId, seteditId] = useState(0);


  const handlesubmit = (e) => {
    e.preventDefault();
    if (editId) {

      const editTodo = todos.find((i) => i.id === editId);
      console.log("srt", editTodo, editId)

      const updatetodo = todos.map((t) =>
        t.id === editTodo.id
          ? t = { id: t.id, todo: todo }
          : { id: t.id, todo: t.todo }
      )
      console.log(updatetodo)
      settodos(updatetodo);
      seteditId(0)
      settodo("");
      return;
    }
    if (todo !== "") {
      settodos([{ id: `${todo}-${Date.now()}`, todo }, ...todos])
      settodo("")
    }
  }
  const handleDelete = (id) => {
    const deleteTodo = todos.filter((to) => to.id !== id)
    settodos([...deleteTodo]);
  }

  const handleEdit = (id) => {
    const editTodo = todos.find((i) => {
      return i.id === id
    })
    settodo(editTodo.todo)
    seteditId(id)
  }

  return (
    <div className='App' id='app'>
      <div className='container'>
        <h1>Todo List</h1>
        <form className='todoForm' onSubmit={handlesubmit}>
          <input type='text' value={todo} onChange={(e) => settodo(e.target.value)} />
          <button type='submit'>{editId ? "edit" : "Go"}</button>
        </form>
        <ul className='allTodo'>
          {
            todos.map((t) => (
              <li key={t.id} className='singletodo'>
                <span className='span' key={t.id}>{t.todo}</span>
                <button onClick={() => handleEdit(t.id)}>edit</button>
                <button onClick={() => handleDelete(t.id)}>delete</button>

              </li>
            ))
          }

        </ul>
      </div>
    </div>

  )
}

export default App
