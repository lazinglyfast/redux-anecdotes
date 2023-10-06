import { createSlice } from "@reduxjs/toolkit"

const generateId = () => Number((Math.random() * 1000000).toFixed(0))

const initialState = [
  {
    id: 0,
    title: "diogo friggo",
    votes: 0,
  },
  {
    id: 1,
    title: "diogo",
    votes: 1,
  },
  {
    id: 2,
    title: "friggo",
    votes: 2,
  },
]

const anecdoteSlice = createSlice({
  name: "anecdotes",
  initialState,
  reducers: {
    createAnecdote(state, action) {
      const title = action.payload
      console.log("eiaeiaeaeiaeiaeaeaieaeiaeiaeiaeiaeiaei ", title)
      state.push({
        id: generateId(),
        title,
        votes: 0,
      })
    },
    orderAnecdotes(state, _action) {
      state.sort((a, b) => b.votes - a.votes)
    },
    voteForAnecdote(state, action) {
      const id = action.payload
      const anecnoteToUpdate = state.find(a => a.id === id)
      const updatedAnecdote = {
        ...anecnoteToUpdate,
        votes: anecnoteToUpdate.votes + 1,
      }
      return state.map(a => a.id == id ? updatedAnecdote : a)
    },
  },
})

export const { createAnecdote, orderAnecdotes, voteForAnecdote } = anecdoteSlice.actions
export default anecdoteSlice.reducer
