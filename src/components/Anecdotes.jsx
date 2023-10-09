import { useDispatch, useSelector } from "react-redux"
import { voteForAnecdote, orderAnecdotes } from "../reducers/anecdoteReducer"
import { useNotificationDispatch, notify } from "../components/NotificationContext"

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
  const dispatchNotification = useNotificationDispatch()

  const handleClick = async (anecdote) => {
    dispatch(voteForAnecdote(anecdote))
    const payload = `voted for anecdote ${anecdote.content}`
    notify(dispatchNotification, payload)
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
