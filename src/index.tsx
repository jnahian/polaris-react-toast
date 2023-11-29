import { AppProvider, Frame } from "@shopify/polaris"
import "@shopify/polaris/build/esm/styles.css"
import enTranslations from "@shopify/polaris/locales/en.json"
import { ToastProvider } from "polaris-react-toaster"
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

root.render(
  <React.StrictMode>
    <AppProvider i18n={enTranslations}>
      <Frame>
        <ToastProvider options={{ duration: 4000 }}>
          <App />
        </ToastProvider>
      </Frame>
    </AppProvider>
  </React.StrictMode>
)
