/** @jsx jsx */
import { Box, Flex, Link, useColorMode, jsx } from "theme-ui"

const Footer = () => {
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`
  const toggleColorMode = (e: any) => {
    setColorMode(isDark ? `light` : `dark`)
  }

  return (
    <Box as="footer" variant="footer">
      <button
        sx={{ variant: `buttons.toggle`, fontWeight: `semibold`, display: `block`, mx: `auto`, mb: 3 }}
        onClick={toggleColorMode}
        type="button"
        aria-label="Toggle dark mode"
      >
        {isDark ? `Light` : `Dark`}
      </button>
      Copyright &copy; {new Date().getFullYear()}. All Rights Reserved. 
      <br />
      <Flex
        sx={{
          justifyContent: `center`,
          alignItems: `center`,
          mt: 3,
          color: `text`,
          fontWeight: `semibold`,
          a: { color: `text` },
        }}
      >
        <div sx={{
         padding:`5px 7px`,
         borderRadius: `12px`,
         marginTop:`-8px`,
background: !isDark? `#cdd4db` : `#2d3748`,
boxShadow:  !isDark?`8px 8px 9px 0px #acadaf, -15px -15px 33px #ffffff` : `8px 8px 9px 0px #262f3d, -15px -15px 33px #343f53`,

        }}>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="30" height="30" viewBox="0 -30 366.000000 384.000000" preserveAspectRatio="xMidYMid meet">
<g transform="translate(0.000000,384.000000) scale(0.100000,-0.100000)" fill={isDark ? "var(--theme-ui-colors-text,#e2e8f0)" : "#000000"} stroke="none">
<path d="M2009 3589 c-297 -29 -622 -233 -722 -454 -22 -48 -25 -149 -8 -223 11 -43 22 -60 65 -98 28 -24 80 -59 116 -77 59 -29 73 -32 155 -32 150 1 264 40 356 123 111 100 151 205 153 406 l1 131 49 3 c76 5 211 -15 274 -41 138 -56 328 -211 373 -305 54 -111 52 -74 56 -1229 l4 -1073 118 0 118 0 6 613 c6 633 -6 1539 -22 1662 -32 237 -305 494 -605 569 -123 31 -319 41 -487 25z m-112 -330 c17 -35 -2 -141 -36 -211 -24 -47 -32 -55 -76 -70 -111 -37 -227 -13 -233 48 -2 25 6 41 42 81 80 88 227 187 271 181 11 -2 25 -15 32 -29z"/>
<path d="M1215 2624 c-293 -18 -509 -57 -722 -130 -133 -45 -135 -47 -128 -102 12 -88 27 -126 60 -159 32 -32 36 -33 109 -33 42 0 129 11 193 24 337 70 641 91 973 66 271 -20 435 -76 491 -167 47 -75 17 -199 -69 -286 -112 -114 -199 -139 -608 -176 -126 -12 -292 -28 -369 -36 -77 -8 -146 -15 -154 -15 -11 0 -12 -18 -6 -92 3 -51 10 -109 14 -128 l7 -35 449 0 c401 -1 458 -3 525 -19 96 -24 144 -48 198 -100 59 -56 84 -108 90 -186 9 -124 -54 -213 -202 -285 -137 -67 -315 -100 -632 -115 -221 -11 -472 1 -724 35 -215 29 -208 28 -214 8 -14 -50 -37 -204 -34 -234 6 -60 100 -98 283 -114 39 -3 140 -13 225 -22 352 -36 802 11 1124 118 337 112 539 277 598 488 39 141 -14 321 -129 443 -49 51 -160 138 -177 138 -3 0 -19 8 -36 19 l-31 18 53 39 c84 61 196 174 228 230 66 114 77 268 28 375 -97 210 -389 351 -858 415 -105 14 -442 25 -555 18z"/>
</g>
</svg></div>
        <Link
          aria-label="Link to the theme's Deepak repository"
          sx={{ ml: 2 }}
          href="#"
        >
          Deepak Padukone M
        </Link>
      </Flex>
    </Box>
  )
}

export default Footer