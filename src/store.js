import anecdoteReducer from "./reducers/anecdoteReducer"
import queryReducer from "./reducers/queryReducer"
import notificationReducer from "./reducers/notificationReducer"
import { configureStore } from "@reduxjs/toolkit"

const store = configureStore({
  reducer: {
    anecdotes: anecdoteReducer,
    query: queryReducer,
    notification: notificationReducer,
  }
})

export default store
