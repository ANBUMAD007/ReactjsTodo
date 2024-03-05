import React, { useState } from 'react';
import "./App.css";
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

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
         <TodoForm handlesubmit={handlesubmit} editId ={editId} settodo={settodo} todo={todo}/> 
         <TodoList todos={todos} handleEdit={handleEdit} handleDelete={handleDelete} />
        
      </div>
    </div>

  )
}

export default App
