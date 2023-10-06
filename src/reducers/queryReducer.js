import { createSlice } from "@reduxjs/toolkit"

const querySlice = createSlice({
  name: "filter",
  initialState: "",
  reducers: {
    search(_state, action) {
      return action.payload
    }
  }
})

export const { search } = querySlice.actions
export default querySlice.reducer
