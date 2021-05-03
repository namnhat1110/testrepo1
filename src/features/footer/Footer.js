import React from 'react'
import { useSelector } from 'react-redux'
import { availableColors, capitalize } from '../fitlers/colors'
import { StatusFilters } from '../fitlers/filtersSlice'

const RemainingTodos = ({ count }) => {
  const suffix = count === 1 ? '' : 's'

  return (
    <div className="todo-count">
      <h5>Remaining Todos</h5>
      <strong>{count}</strong> item{suffix} left
    </div>
  )
}

// const statusFilter = ({ value: status, onChange }) => {
//   const renderFilters =
// }
const Footer = () => {
  const todosRemaining = useSelector((state) => {
    const uncompleteTodos = state.todos.filter((todo) => !todo.completed)
    return uncompleteTodos.length
  })
  // const { status, colors } = useSelector((state) => state.filters)

  return (
    <footer className="footer">
      <div className="actions">
        <h5>Actions</h5>
        <button className="button">Mark All Completed</button>
        <button className="button">Clear Completed</button>
      </div>

      <RemainingTodos count={todosRemaining} />
      {/* <StatusFilters value={status} onChange={onStatusChange} />
      <ColorFilters value={color} onChange={onColorChange} /> */}
    </footer>
  )
}

export default Footer
