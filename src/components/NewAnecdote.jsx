import { useDispatch } from "react-redux"
import { createAnecdote } from "../reducers/anecdoteReducer"
import { notify } from "../reducers/notificationReducer"

const NewAnecdote = () => {
  const dispatch = useDispatch()
  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(createAnecdote(e.target.title.value))
    dispatch(notify("created"))
    // wanted to have this inside notificationReducer.reducers.notify but couldn't
    setTimeout(() => {
      dispatch(notify(""))
    }, 3000)
  }

  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="title" />
      <button>create</button>
    </form>
  )
}

export default NewAnecdote
