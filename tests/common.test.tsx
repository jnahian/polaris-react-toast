import * as React from "react"
import { render } from "@testing-library/react"

import "jest-canvas-mock"

import { ToastProvider } from "../src"

describe("ToastProvider render", () => {
  it("renders without crashing", () => {
    render(
      <ToastProvider>
        <></>
      </ToastProvider>
    )
  })
})
