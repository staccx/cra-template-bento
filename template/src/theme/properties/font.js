import { theming } from "@staccx/bento"

/*

Sizes:
3 rem: 72px
2 rem: 48px
1.5rem: 36px
1 rem: 24px
0.75rem: 18px
0.666666667rem = 16px
0.625rem: 15px
0.5rem: 12px


*/

theming.theme.append({
  fontFamily: {
    heading: "IBM Plex Mono",
    body: "IBM Plex Mono"
  },
  font: {
    h1: "1.2rem",
    h2: "0.666666667rem",
    h3: "0.666666667rem",
    h4: "0.666666667rem",
    h5: "0.666666667rem",
    h6: "0.6rem",
    base: "0.666666667rem",
    small: "0.6rem",
    tiny: "0.5rem",
    input: "0.666666667rem",
    giga: "3rem",
    huge: "2rem",
    lineHeight: "1.5"
  },
  fontWeight: {
    bold: "700",
    normal: "400"
  }
})
