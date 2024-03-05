import React from 'react'

const TodoForm = ({handlesubmit,todo,settodo,editId}) => {
  return (
    <div>
        <form className='todoForm' onSubmit={handlesubmit}>
          <input type='text' value={todo} onChange={(e) => settodo(e.target.value)} />
          <button type='submit'>{editId ? "edit" : "Go"}</button>
        </form>
    </div>
  )
}

export default TodoForm
