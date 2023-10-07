import ReactDOM from 'react-dom/client'
import { Provider } from "react-redux"
import App from "./App"
import store from "./store"
import { getAll } from "./services/anecdotes"
import { setAnecdotes } from "./reducers/anecdoteReducer"

getAll().then(response => {
  console.log(response)
  store.dispatch(setAnecdotes(response.data))
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
