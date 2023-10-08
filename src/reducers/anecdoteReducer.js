import { createSlice } from "@reduxjs/toolkit"
import anecdotesService from "../services/anecdotes"

const anecdoteSlice = createSlice({
  name: "anecdotes",
  initialState: [],
  reducers: {
    createAnecdote(state, action) {
      state.push(action.payload)
    },
    orderAnecdotes(state) {
      state.sort((a, b) => b.votes - a.votes)
    },
    updateAnecdote(state, action) {
      const anecdote = action.payload
      const i = state.findIndex(a => a.id === anecdote.id)
      state[i] = anecdote
    },
    appendAnecdote(state, action) {
      state.push(action.payload)
    },
    setAnecdotes(_state, action) {
      return action.payload
    }
  },
})

export const { createAnecdote, appendAnecdote, orderAnecdotes, updateAnecdote, setAnecdotes } = anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdotesService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const newAnecdote = (content) => {
  return async dispatch => {
    const anecdoteToCreate = {
      content,
      votes: 0,
    }
    const createdAnecdote = await anecdotesService.createNew(anecdoteToCreate)
    return dispatch(appendAnecdote(createdAnecdote))
  }
}

export const voteForAnecdote = (anecdote) => {
  return async dispatch => {
    const anecdoteToUpdate = {
      ...anecdote,
      votes: anecdote.votes + 1
    }
    const updatedAnecdote = await anecdotesService.update(anecdoteToUpdate)
    return dispatch(updateAnecdote(updatedAnecdote))
  }
}

export default anecdoteSlice.reducer
