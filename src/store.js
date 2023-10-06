import anecdoteReducer from "./reducers/anecdoteReducer"
import queryReducer from "./reducers/queryReducer"
import { configureStore } from "@reduxjs/toolkit"

const store = configureStore({
  reducer: {
    anecdotes: anecdoteReducer,
    query: queryReducer,
  }
})

export default store
