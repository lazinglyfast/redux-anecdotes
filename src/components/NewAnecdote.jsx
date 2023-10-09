import { useDispatch } from "react-redux"
import { newAnecdote } from "../reducers/anecdoteReducer"
import { useNotificationDispatch, notify } from "../components/NotificationContext"

const NewAnecdote = () => {
  const dispatch = useDispatch()
  const dispatchNotification = useNotificationDispatch()

  const onSubmit = async (e) => {
    e.preventDefault()
    const content = e.target.content.value
    dispatch(newAnecdote(content))
    const payload = `created anecdote ${content}`
    notify(dispatchNotification, payload)
  }

  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="content" />
      <button>create</button>
    </form>
  )
}

export default NewAnecdote
