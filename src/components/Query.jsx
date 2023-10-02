import { search } from "../reducers/queryReducer"
import { useDispatch } from "react-redux"

const Query = () => {
  const dispatch = useDispatch()
  const style = {
    marginBottom: 10,
  }
  return (
    <div style={style}>
      <label htmlFor="search">type to search</label>
      <input
        type="input"
        onChange={(e) => { dispatch(search(e.target.value)) }}
        name="search"
        id="search" />
    </div>
  )
}

export default Query
