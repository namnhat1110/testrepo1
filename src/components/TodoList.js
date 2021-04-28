import React from 'react'
import { useSelector } from 'react-redux'
import TodoListItem from './TodoListItem'

const selectTodos = (state) => state.todos
console.log({ selectTodos })
const TodoList = () => {
  const todos = useSelector(selectTodos)

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <TodoListItem key={todo.id} {...todo} />
        ))}
      </ul>
    </div>
  )
}

export default TodoList
