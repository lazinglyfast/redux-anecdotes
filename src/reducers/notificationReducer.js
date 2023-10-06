import { useDispatch } from "react-redux"
import { createSlice } from "@reduxjs/toolkit"

const initialState = ""
const notificationSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    notify(_state, action) {
      dispatch = useDispatch()
      const message = action.payload
      setTimeout(() => {
        dispatch(notify(""))
      }, 3000)
      return message
    },
  },
})

export const { notify } = notificationSlice.actions
export default notificationSlice.reducer
