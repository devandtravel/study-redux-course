import { combineReducers, createStore } from 'redux'

const INCREMENT = 'INCREMENT'
const ADD_TODO = 'ADD_TODO'
const increment = { type: INCREMENT }
const addTodo = { type: ADD_TODO }
const initialState = {
  counter: 0,
  todos: []
}

const counterReducer = (state = initialState.counter, action) =>
  action.type === INCREMENT ? state + 1 : state

const todosReducer = (state = initialState.todos, action) =>
  action.type === ADD_TODO ? [...state, 'Redux'] : state

const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todosReducer
})

const store = createStore(rootReducer)

console.log(store.getState())
store.dispatch(increment)
store.dispatch(addTodo)
console.log(store.getState())
