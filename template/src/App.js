import React from "react"
import { Button, ThemeProvider } from "@staccx/bento"

function App () {
  return (
    <ThemeProvider>
      <Button onClick={() => console.log("Something")}>Default</Button>
      <Button variant={"primary"} onClick={() => console.log("Something")}>Primary</Button>
      <Button variant={"secondary"} onClick={() => console.log("Something")}>Secondary</Button>
    </ThemeProvider>
  )
}

export default App
