import React from 'react'
import { useSelector } from 'react-redux'
import TodoListItem from './TodoListItem'

const selectTodos = (state) => state.todos

const TodoList = () => {
  const todos = useSelector(selectTodos)
  return (
    <div>
      <ul className="todo-list">
        {todos.map((todo) => (
          <TodoListItem id={todo.id} {...todo} />
        ))}
      </ul>
    </div>
  )
}

export default TodoList
