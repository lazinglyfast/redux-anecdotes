import { useDispatch, useSelector } from "react-redux"
import { updateAnecdote, orderAnecdotes } from "../reducers/anecdoteReducer"
import { setNotification, unsetNotification } from "../reducers/notificationReducer"
import anecdotesService from "../services/anecdotes"

const Anecdote = ({ anecdote, handleClick }) => {
  const button = (
    <button type="button" onClick={() => handleClick(anecdote)}>vote</button>
  )
  return (
    <div>
      {anecdote.content} has {anecdote.votes} votes {button}
    </div>
  )
}

const Anecdotes = () => {
  const anecdotes = useSelector(store =>
    store.query
      ? store.anecdotes.filter(a => a.content.includes(store.query))
      : store.anecdotes)

  const dispatch = useDispatch()

  const handleClick = async (anecdote) => {
    const anecdoteToUpdate = {
      ...anecdote,
      votes: anecdote.votes + 1,
    }
    const updatedAnecdote = await anecdotesService.update(anecdoteToUpdate)
    dispatch(updateAnecdote(updatedAnecdote))

    // wanted to have this inside notificationReducer.reducers.notify but couldn't
    dispatch(setNotification(`voted for anecdote ${anecdote.content}`))
    setTimeout(() => {
      dispatch(unsetNotification())
    }, 5000)
    dispatch(orderAnecdotes())
  }

  return anecdotes.map(anecdote => (
    <Anecdote
      key={anecdote.id}
      anecdote={anecdote}
      handleClick={() => handleClick(anecdote)}
    />
  ))
}

export default Anecdotes
