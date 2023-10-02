export const search = (query) => {
  return {
    type: "SEARCH",
    payload: { query }
  }
}

const queryReducer = (state = "", action) => {
  switch (action.type) {
    case "SEARCH":
      return action.payload.query
    default:
      return state
  }
}

export default queryReducer
