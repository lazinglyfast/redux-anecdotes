import { useDispatch } from "react-redux"
import { createAnecdote } from "../reducers/anecdoteReducer"
import { setNotification, unsetNotification } from "../reducers/notificationReducer"

const NewAnecdote = () => {
  const dispatch = useDispatch()
  const onSubmit = (e) => {
    e.preventDefault()
    const content = e.target.content.value
    dispatch(createAnecdote(content))
    dispatch(setNotification(`created anecdote ${content}`))
    setTimeout(() => {
      dispatch(unsetNotification())
    }, 5000)
  }

  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="content" />
      <button>create</button>
    </form>
  )
}

export default NewAnecdote
