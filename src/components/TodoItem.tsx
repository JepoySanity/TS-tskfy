import React from 'react'
import { Todo } from '../model'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import { MdDone } from 'react-icons/md'

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoItem: React.FC<Props> = ({todo, todos, setTodos}) => {
  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) => 
        todo.id === id ? {...todo, isDone: !todo.isDone } : todo
      )
    )
  }

  const handleDelete = (id: number) => {

  }

  return (
    <form className='todos__single'>
      {
        todo.isDone ? (
          <s className='todos__single--text'>{todo.todo}</s>
        ) : (
          <span className='todos__single--text'>{todo.todo}</span>
        )
      }

      <div>
        <span className="icons"><AiFillEdit/></span>
        <span className="icons" onClick={() => handleDelete(todo.id)}><AiFillDelete/></span>
        <span className="icons" onClick={() => handleDone(todo.id)}><MdDone/></span>
      </div>
    </form>
  )
}

export default TodoItem