const generateId = (anecdotes) => anecdotes.reduce((a, max) => a.id > max ? a.id : max, 0)

export const createAnecdote = (anecdotes, title) => {
  const anecdoteToCreate = {
    id: generateId(anecdotes),
    title,
    votes: 0,
  }

  return {
    type: "NEW_ANECDOTE",
    payload: anecdoteToCreate,
  }
}

export const orderAnecdotes = () => {
  return { type: "ORDER_ANECDOTES" }
}

export const voteForAnecdote = (id) => {
  return {
    type: "VOTE_FOR_ANECDOTE",
    payload: { id }
  }
}

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

const anecdoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case "NEW_ANECDOTE": {
      return [...state, action.payload]
    }
    case "VOTE_FOR_ANECDOTE": {
      const anecnoteToUpdate = state.find(anecdote => anecdote.id == action.payload.id)
      const updatedAnecdote = {
        ...anecnoteToUpdate,
        votes: anecnoteToUpdate.votes + 1,
      }
      return state.map(anecdote => anecdote.id == action.payload.id ? updatedAnecdote : anecdote)
    }
    case "ORDER_ANECDOTES": {
      const stateCopy = [...state]
      stateCopy.sort((a, b) => b.votes - a.votes)
      return stateCopy
    }
    default:
      return state
  }
}

export default anecdoteReducer
