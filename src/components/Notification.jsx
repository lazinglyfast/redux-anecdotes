import { useNotificationValue } from "../components/NotificationContext"

const Notification = () => {
  const notification = useNotificationValue()
  if (!notification) {
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
