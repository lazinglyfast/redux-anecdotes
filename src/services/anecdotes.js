import axios from "axios"

const baseUrl = "http://localhost:3005/anecdotes"

const getAll = async () => {
  return await axios.get(baseUrl)
}

export { getAll }
