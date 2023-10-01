import { useSelector, useDispatch } from "react-redux"

const NewAnecdote = () => {
  const anecdotes = useSelector(state => state)
  const generateId = () => anecdotes.reduce((a, max) => a.id > max ? a.id : max, 0)

  const dispatch = useDispatch()
  const createAnecdote = (title) => {
    const anecdoteToCreate = {
      id: generateId(),
      title,
      votes: 0,
    }

    return {
      type: "NEW_ANECDOTE",
      payload: anecdoteToCreate,
    }
  }

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(createAnecdote(e.target.title.value))
  }

  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="title" />
      <button>create</button>
    </form>
  )
}

export default NewAnecdote
