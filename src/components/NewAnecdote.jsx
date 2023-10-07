import { useDispatch } from "react-redux"
import { createAnecdote } from "../reducers/anecdoteReducer"
import { setNotification, unsetNotification } from "../reducers/notificationReducer"
import anecdotesService from "../services/anecdotes"

const NewAnecdote = () => {
  const dispatch = useDispatch()
  const onSubmit = async (e) => {
    e.preventDefault()
    const content = e.target.content.value
    const anecdoteToCreate = {
      content,
      votes: 0,
    }

    const createdAnecdote = await anecdotesService.createNew(anecdoteToCreate)

    dispatch(createAnecdote(createdAnecdote))
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
