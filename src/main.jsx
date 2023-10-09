import ReactDOM from 'react-dom/client'
import { Provider } from "react-redux"
import App from "./App"
import store from "./store"
import { initializeAnecdotes } from "./reducers/anecdoteReducer"
import { NotificationContextProvider } from "./components/NotificationContext"

store.dispatch(initializeAnecdotes())

ReactDOM.createRoot(document.getElementById('root')).render(
  <NotificationContextProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </NotificationContextProvider>
)
