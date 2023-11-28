// ToastProvider.tsx
import React, { createContext, useState, useContext, ReactNode } from "react"
import ToastMessage from "./ToastMessage"
import { Action } from "@shopify/polaris"

interface ToastProps {
  content: string
  error?: boolean
  action?: Action
  id?: number
  duration?: number
}

interface ToastContextProps {
  addToast: ({ content, error, action, duration }: ToastProps) => void
  removeToast: (id: number) => void
}

const ToastContext = createContext<ToastContextProps | undefined>(undefined)

interface ToastProviderProps {
  children: ReactNode
  options?: { duration?: number }
}

const ToastProvider: React.FC<ToastProviderProps> = ({ children, options }) => {
  const [toasts, setToasts] = useState<ToastProps[]>([])

  const addToast = ({ content, error, action, duration = 4000 }: ToastProps) => {
    if (content.split(" ").length > 3) {
      console.warn("content must be less then 3 words in BFS standard.")
    }
    const newToast = {
      id: Date.now(),
      content,
      error,
      action,
      duration,
    }

    setToasts((prevToasts) => [...prevToasts, newToast])
  }

  const removeToast = (id?: number) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id))
  }

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      {toasts.map((toast) => (
        <ToastMessage
          key={toast.id}
          content={toast.content}
          onDismiss={() => removeToast(toast.id)}
          duration={toast?.duration || options?.duration}
          error={toast?.error}
          action={toast?.action}
        />
      ))}
    </ToastContext.Provider>
  )
}

const useToast = () => {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider")
  }
  return context
}

export { ToastProvider, useToast }
