import { createSlice } from "@reduxjs/toolkit"

const initialState = ""
const notificationSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    setNotification(_state, action) {
      const message = action.payload
      // doesn't work
      // setTimeout(() => {
      //   unsetNotification()
      // }, 5000)
      return message
    },
    unsetNotification(_state, _action) {
      return ""
    },
  },
})

export const { setNotification, unsetNotification } = notificationSlice.actions
export default notificationSlice.reducer
