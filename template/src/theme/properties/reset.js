import { theming } from "@staccx/bento"
import { css } from "styled-components"

const remFix = css`
  html {
    font-size: 24px;
    @media screen and (min-width: 900px) {
      font-size: 26.6666667px;
    }
  }
  body {
    font-size: 0.6rem;
    background-color: ${theming.color("bg")};
  }
  a {
    text-decoration: none;
    color: ${theming.color("links")};
  }
`

theming.theme.append(
  theming.createGlobal({
    base: theming.cssResets,
    remFix: remFix
  })
)
