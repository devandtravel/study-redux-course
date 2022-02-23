import { createStore } from 'redux'

const ADD_TODO = 'ADD_TODO'
const TOGGLE_TODO = 'TOGGLE_TODO'

let nextTodoId = 0

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO: {
      return [
        ...state,
        {
          id: ++nextTodoId,
          title: action.title,
          completed: false
        }
      ]
    }
    case TOGGLE_TODO: {
      return [
        state.map(todo =>
          todo.id === action.todoId
            ? { ...todo, completed: !todo.completed }
            : todo
        )
      ]
    }
    default: {
      return state
    }
  }
}
const defaultValues = [
  { id: 1, title: 'hi', completed: false },
  { id: 2, title: 'hey', completed: true }
]
const store = createStore(todos, defaultValues)

// action creators
const addTodo = title => ({ type: ADD_TODO, title })
const toggleTodo = todoId => ({ type: TOGGLE_TODO, todoId })

console.log(store.getState())

store.dispatch(addTodo('Redux'))
console.log(store.getState())

store.dispatch(addTodo('React'))
console.log(store.getState())

store.dispatch(toggleTodo(1))
console.log(store.getState())
