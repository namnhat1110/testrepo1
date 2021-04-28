import React from 'react'
import { createStore } from 'redux'

const initialState = {
  todos: [
    { id: 1, text: 'Learn Redux' },
    { id: 2, text: 'Make my teacher proud' },
  ],
}

const reducer = (state = initialState, action) => {
  if (action.type === 'addTodo') {
    return { todos: [...state.todos, { id: 3, text: action.payload }] }
  }
  return state
}
const store = createStore(reducer)

export default store
