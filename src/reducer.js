import todosReducer from './features/todos/todosSlice'
import filtersReducer from './features/fitlers/filtersSlice'
import { combineReducers } from 'redux'

// export default function rootReducer(state = {}, action) {
//   return {
//     todos: todosReducer(state.todos, action),
//     filters: filtersReducer(state.filters, action),
//   }
// }

const rootReducer = combineReducers({
  todos: todosReducer,
  fitlers: filtersReducer,
})

export default rootReducer
