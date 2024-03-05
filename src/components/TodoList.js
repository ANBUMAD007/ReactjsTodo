import React from 'react'

const TodoList = ({todos,handleEdit,handleDelete}) => {
  return (
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
  )
}

export default TodoList
