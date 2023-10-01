import { useDispatch, useSelector } from "react-redux"

const Anecdote = ({ anecdote, handleClick }) => {
  const button = (
    <button type="button" onClick={() => handleClick(anecdote)}>vote</button>
  )
  return (
    <div>
      {anecdote.title} has {anecdote.votes} votes {button}
    </div>
  )
}

const Anecdotes = () => {
  const anecdotes = useSelector(store => store)
  const dispatch = useDispatch()
  const voteForAnecdote = (id) => {
    return {
      type: "VOTE_FOR_ANECDOTE",
      payload: { id }
    }
  }
  const handleClick = (anecdote) => {
    dispatch(voteForAnecdote(anecdote.id))
    dispatch({ type: "ORDER_ANECDOTES" })
  }
  return anecdotes.map(anecdote => (
    <Anecdote
      key={anecdote.id}
      anecdote={anecdote}
      handleClick={handleClick}
    />
  ))
}

export default Anecdotes
