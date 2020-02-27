import React from "react"
import { ThemeProvider } from "styled-components"
import { Button, CheckBox, ThemeProvider } from "@staccx/bento"

function App () {
  return (
    <ThemeProvider>
      <Button onClick={() => console.log("Something")}>This is a button</Button>
      <CheckBox id={"test"}>Tester</CheckBox>
    </ThemeProvider>
  )
}

export default App
