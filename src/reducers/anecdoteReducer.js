import { createSlice } from "@reduxjs/toolkit"

const generateId = () => Number((Math.random() * 1000000).toFixed(0))

const initialState = [
  {
    id: 0,
    content: "diogo friggo",
    votes: 0,
  },
  {
    id: 1,
    content: "diogo",
    votes: 1,
  },
  {
    id: 2,
    content: "friggo",
    votes: 2,
  },
]

const anecdoteSlice = createSlice({
  name: "anecdotes",
  initialState: [],
  reducers: {
    createAnecdote(state, action) {
      const content = action.payload
      state.push({
        id: generateId(),
        content,
        votes: 0,
      })
    },
    orderAnecdotes(state) {
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
    setAnecdotes(_state, action) {
      return action.payload
    }
  },
})

export const { createAnecdote, orderAnecdotes, voteForAnecdote, setAnecdotes } = anecdoteSlice.actions
export default anecdoteSlice.reducer
