import { useSelector, useDispatch } from "react-redux"
import { createAnecdote } from "../reducers/anecdoteReducer"

const NewAnecdote = () => {
  const anecdotes = useSelector(state => state.anecdotes)
  const dispatch = useDispatch()
  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(createAnecdote(anecdotes, e.target.title.value))
  }

  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="title" />
      <button>create</button>
    </form>
  )
}

export default NewAnecdote
