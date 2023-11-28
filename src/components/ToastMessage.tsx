// ToastMessage.tsx
import React from "react"
import { Action, Toast } from "@shopify/polaris"

interface ToastMessageProps {
  content: string
  onDismiss: () => void
  duration?: number
  error?: boolean
  action?: Action
}

const ToastMessage: React.FC<ToastMessageProps> = ({ content, onDismiss, duration, error, action }) => {
  return <Toast content={content} onDismiss={onDismiss} duration={duration} error={error} action={action} />
}

ToastMessage.defaultProps = {
  duration: 5000,
  error: false,
}

export default ToastMessage
