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
    background-color: ${theming.color("lightBlue")};
  }
  h1,
  h4,
  h5,
  h6 {
    font-weight: 400;
  }
  a {
    text-decoration: none;
    color: ${theming.color("links")};
  }
`

const uu = css`
  :focus {
    outline: none;
    box-shadow: 0px 0px 0 5px ${theming.color("white")},
      0px 0px 0 7px ${theming.color("blue")};
    border-radius: 1px;
  }
  nav *:focus {
    box-shadow: 0px 0px 0 5px ${theming.color("bg")},
      0px 0px 0 7px ${theming.color("blue")};
  }
  footer *:focus {
    box-shadow: 0px 0px 0 3px ${theming.color("darkBg")},
      0px 0px 0 5px ${theming.color("white")};
  }
  :focus:active {
    box-shadow: none !important;
  }
  :focus:hover {
    box-shadow: none !important;
  }
  /* Debug:
  * {
    outline: red 1px solid !important;
  } */
`

theming.theme.append(
  theming.createGlobal({
    base: theming.cssResets,
    remFix: remFix,
    font: font,
    uu: uu
  })
)
