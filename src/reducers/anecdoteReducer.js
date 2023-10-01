const anecdoteReducer = (state, action) => {
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
      return []
  }
}

export default anecdoteReducer
