import ReactDOM from 'react-dom/client'
import { Provider } from "react-redux"
import App from "./App"
import { createStore } from "redux"
import anecdoteReducer from "./reducers/anecdoteReducer"

const store = createStore(anecdoteReducer)

store.dispatch({
  type: "NEW_ANECDOTE",
  payload: {
    title: "new anecdote",
    id: 0,
    votes: 0,
  }
})

store.dispatch({
  type: "VOTE_FOR_ANECDOTE",
  payload: {
    id: 0,
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
