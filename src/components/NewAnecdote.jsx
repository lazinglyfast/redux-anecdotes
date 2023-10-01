import { useSelector, useDispatch } from "react-redux"

const NewAnecdote = () => {
  const anecdotes = useSelector(state => state)
  const generateId = () => anecdotes.reduce((a, max) => a.id > max ? a.id : max, 0)

  const dispatch = useDispatch()
  const createAnecdote = (e) => {
    e.preventDefault()
    const anecdoteToCreate = {
      id: generateId(),
      title: e.target.title.value,
      votes: 0,
    }

    dispatch({
      type: "NEW_ANECDOTE",
      payload: anecdoteToCreate,
    })
  }

  return (
    <form onSubmit={createAnecdote}>
      <input type="text" name="title" />
      <button>create</button>
    </form>
  )
}

export default NewAnecdote
