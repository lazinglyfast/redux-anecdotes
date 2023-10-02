import { useDispatch, useSelector } from "react-redux"
import { voteForAnecdote, orderAnecdotes } from "../reducers/anecdoteReducer"

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
  const anecdotes = useSelector(store =>
    console.log(store) || store.query
      ? store.anecdotes.filter(a => a.title.includes(store.query))
      : store.anecdotes)

  const dispatch = useDispatch()

  const handleClick = (anecdote) => {
    dispatch(voteForAnecdote(anecdote.id))
    dispatch(orderAnecdotes())
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
