import ReactDOM from 'react-dom/client'
import { Provider } from "react-redux"
import App from "./App"
import { createStore, combineReducers } from "redux"
import anecdoteReducer from "./reducers/anecdoteReducer"
import queryReducer from "./reducers/queryReducer"

const reducer = combineReducers({
  anecdotes: anecdoteReducer,
  query: queryReducer,
})

const store = createStore(reducer)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
