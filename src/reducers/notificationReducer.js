import { createSlice } from "@reduxjs/toolkit"

const initialState = ""
const notificationSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    setNotification(_state, action) {
      const message = action.payload
      return message
    },
    unsetNotification() {
      return ""
    },
  },
})

export const { setNotification, unsetNotification } = notificationSlice.actions

export const notify = (notification, seconds = 5) => {
  return dispatch => {
    dispatch(setNotification(notification))
    setTimeout(() => {
      dispatch(unsetNotification())
    }, seconds * 1000)
  }
}

export default notificationSlice.reducer
