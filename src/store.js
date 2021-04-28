import React from 'react'
import { createStore } from 'redux'

const initialState = {
  todos: [
    { id: 1, text: 'Learn Redux' },
    { id: 2, text: 'Make my teacher proud' },
  ],
}

const reducer = (state = initialState, action) => {
  return state
}
const store = createStore(reducer)

export default store
