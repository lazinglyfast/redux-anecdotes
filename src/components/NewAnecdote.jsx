import { useDispatch } from "react-redux"
import { newAnecdote } from "../reducers/anecdoteReducer"
import { notify } from "../reducers/notificationReducer"

const NewAnecdote = () => {
  const dispatch = useDispatch()
  const onSubmit = async (e) => {
    e.preventDefault()
    const content = e.target.content.value
    dispatch(newAnecdote(content))
    dispatch(notify(`created anecdote ${content}`, 1))
  }

  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="content" />
      <button>create</button>
    </form>
  )
}

export default NewAnecdote
