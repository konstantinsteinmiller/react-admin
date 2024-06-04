import { createStore } from 'redux'

function userReducer(state = { name: '' }, action) {
  switch (action.type) {
    case 'user/setName':
      return { name: action.value }
    case 'user/deleteName':
      return { name: '' }
    default:
      return state
  }
}

let store = createStore(userReducer)
export default store
