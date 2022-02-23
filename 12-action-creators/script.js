import { combineReducers, createStore } from 'redux'

const INCREMENT = 'INCREMENT'
const increment = { type: INCREMENT }
const DECREMENT = 'DECREMENT'
const decrement = { type: DECREMENT }
const RESET = 'RESET'
const reset = { type: RESET }

const initialState = { counter: 0 }

const counter = (state = initialState.counter, action) =>
  action.type === INCREMENT
    ? state + 1
    : action.type === DECREMENT
    ? state - 1
    : action.type === RESET
    ? 0
    : state

const reducer = combineReducers({ counter })
const store = createStore(reducer)
console.log(store.getState())
store.dispatch(increment)
console.log(store.getState())

const count = document.createElement('div')
count.innerText = store.getState().counter
count.id = 'count'
document.body.append(count)

const decrementButton = document.createElement('button')
decrementButton.innerText = '-'
decrementButton.onclick = () => store.dispatch(decrement)
document.body.append(decrementButton)

const incrementButton = document.createElement('button')
incrementButton.innerText = '+'
incrementButton.onclick = () => store.dispatch(increment)
document.body.append(incrementButton)

const resetButton = document.createElement('button')
resetButton.innerText = 'reset'
resetButton.onclick = () => store.dispatch(reset)
document.body.append(resetButton)

const render = () => {
  document.getElementById('count').innerText = store.getState().counter
}

store.subscribe(render)
