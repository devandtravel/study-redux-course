import { combineReducers, createStore } from 'redux'

const INCREMENT = 'INCREMENT'
const ADD_TODO = 'ADD_TODO'
const increment = { type: INCREMENT }
const addTodo = { type: ADD_TODO }
const initialState = {
  counter: 0,
  todos: []
}

const counter = (state = initialState.counter, action) =>
  action.type === INCREMENT ? state + 1 : state

const todos = (state = initialState.todos, action) =>
  action.type === ADD_TODO ? [...state, 'Redux'] : state

const rootReducer = combineReducers({
  counter,
  todos
})

const store = createStore(rootReducer)

console.log(store.getState())
store.dispatch(increment)
store.dispatch(addTodo)
console.log(store.getState())
