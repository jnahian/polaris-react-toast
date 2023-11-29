import { BlockStack, Page } from "@shopify/polaris"
import { useToast } from "polaris-react-toaster"
import React from "react"
import ToasterCard from "./components/ToasterCard"

function App() {
  const { addToast } = useToast()

  const showToastWithAction = () =>
    addToast({
      content: "Toast with action displayed",
      action: {
        content: "undo",
        onAction() {
          console.log("undo clicked")
        },
      },
      duration: 10000,
    })

  const showToast = () => addToast({ content: "Default toast displayed" })
  const showErrorToast = () => addToast({ content: "Error toast displayed", error: true })

  return (
    <Page title="Polaris React Toast" narrowWidth>
      <BlockStack gap={"600"}>
        <ToasterCard
          title="Default toast message"
          content="Use toasts for only short messages that confirm an action. Make toast messages three words or fewer. Toasts are only for non-critical messages that are relevant at the moment."
          onAction={showToast}
        />

        <ToasterCard
          title="Error toast message"
          content="The toast component is a non-disruptive message that appears at the bottom of the interface to provide
              quick, at-a-glance feedback on the outcome of an action."
          onAction={showErrorToast}
          isCritical={true}
        />

        <ToasterCard
          title="Toast message with action"
          content="The toast component is a non-disruptive message that appears at the bottom of the interface to provide
              quick, at-a-glance feedback on the outcome of an action."
          onAction={showToastWithAction}
        />
      </BlockStack>
    </Page>
  )
}

export default App
