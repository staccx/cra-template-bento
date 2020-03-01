import { Button, theming } from "@staccx/bento"
import { css } from "styled-components"

/**
 * With no seconda argument will write to default theme
 */
Button.createVariants({
  button: {
    [theming.VARIANT_DEFAULT]: css`border-radius: 15px;`,
    primary: css`background-color: cornflowerblue;`,
    secondary: css`background-color: coral;`,
    tertiary: css`background-color: crimson;`,
    dotted: css`border: 1px dotted black;`
  }
})

/**
 * Use the second argument to createVariants on another theme
 */
Button.createVariants({
  button: {
    [theming.VARIANT_DEFAULT]: css`border-radius: 0px; color: #e1e1e1;`,
    primary: css`background-color: chartreuse;`,
    secondary: css`background-color: skyblue;`,
    tertiary: css`background-color: fuchsia;`,
    dotted: css`border: 1px dotted black;`
  }
}, "dark")
