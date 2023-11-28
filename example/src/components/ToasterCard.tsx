import { BlockStack, Box, Button, Card, Divider, Text } from "@shopify/polaris"
import React from "react"

interface ToasterCardProps {
  title: string
  content: string
  onAction(): unknown
  actionText?: string
  isCritical?: boolean
}

const ToasterCard = ({ title, content, actionText = "Show Toast", onAction, isCritical = false }: ToasterCardProps) => {
  return (
    <Card>
      <BlockStack gap="400">
        <Text as="h4" variant="headingMd">
          {title}
        </Text>
        <Text as="p">{content}</Text>

        <Box>
          <Button variant="primary" onClick={onAction} tone={isCritical ? "critical" : undefined}>
            {actionText}
          </Button>
        </Box>
      </BlockStack>
    </Card>
  )
}

export default ToasterCard
