import { useSelector } from "react-redux"

const Notification = () => {
  // wanted to have this inside notificationReducer.reducers.notify but couldn't
  const notification = useSelector(state => state.notification)
  if (notification === "") {
    return
  }
  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1,
  }

  return (
    <div style={style}>
      {notification}
    </div>
  )
}

export default Notification
