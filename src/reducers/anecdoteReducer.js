const generateId = () => {
  return 2
}

const anecdoteReducer = (state, action) => {
  switch (action.type) {
    case "NEW_ANECDOTE": {
      const anecdote = {
        ...action.payload,
        id: generateId(),
        votes: 0,
      }
      return [...state, anecdote]
    }
    case "VOTE_FOR_ANECDOTE": {
      const anecnoteToUpdate = state.find(anecdote => anecdote.id == action.payload.id)
      const updatedAnecdote = {
        ...anecnoteToUpdate,
        votes: anecnoteToUpdate.votes + 1,
      }
      return state.map(anecdote => anecdote.id == action.payload.id ? updatedAnecdote : anecdote)
    }
    default:
      return []
  }
}

export default anecdoteReducer
