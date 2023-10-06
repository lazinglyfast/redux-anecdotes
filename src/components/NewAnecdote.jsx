import { useDispatch } from "react-redux"
import { createAnecdote } from "../reducers/anecdoteReducer"
import { setNotification, unsetNotification } from "../reducers/notificationReducer"

const NewAnecdote = () => {
  const dispatch = useDispatch()
  const onSubmit = (e) => {
    e.preventDefault()
    const title = e.target.title.value
    dispatch(createAnecdote(title))
    dispatch(setNotification(`created anecdote ${title}`))
    setTimeout(() => {
      dispatch(unsetNotification())
    }, 5000)
  }

  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="title" />
      <button>create</button>
    </form>
  )
}

export default NewAnecdote
