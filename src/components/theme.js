// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react'
import { Global } from '@emotion/react'

// import { ButtonStyles as Button } from 'components/elements/buttonStyles'
// 2. Add your color mode config
const config = {
    initialColorMode: 'light',
    useSystemColorMode: true,
}


// 3. extend the theme
const theme = extendTheme({
    config,
    fonts: {
        heading: 'Righteous',
        body: 'Quicksand',
    },
    styles: {
        global: {
            'html, body': {
                height: '100%',
            },
        },
    },

    colors: {
        themeOrange: '#FBD38D',
        darkOrange: '#DD6B20',
       
    },
    fontSizes: {
        xsmall: '12px',
        small: '14px',
        medium: '16px',
        large: '18px',
        xlarge: '20px',
        '2xlarge': '24px',
        '3xlarge': '30px',
        '4xlarge': '36px',
        '5xlarge': '40px',
        '6xlarge': '50px',
        '7xlarge': '60px',
    },
    shadows: {
        default: '1px 1px 6px rgba(36, 43, 62, 0.08)',
        hover: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        hoverDark: '0 10px 15px -3px rgba(0, 0, 0, 0.21), 0 4px 6px -2px rgba(0, 0, 0, 0.25)',
        fileUpload: '1px 1px 6px rgba(36, 43, 62, 0.08)',
    },
    textStyles: {
        mainTitle: {
            fontSize: ['3xlarge', '3xlarge', '3xlarge', '5xlarge', '5xlarge'],
            lineHeight: ['50px', '50px', '50px', '70px', '70px'],
            fontFamily: 'Righteous',
        },
        subTitle: {
            fontSize: ['2xlarge', '2xlarge', '2xlarge', '4xlarge', '4xlarge'],
            lineHeight: ['28px', '28px', '28px', '53px', '53px'],
            fontFamily: 'Righteous',
        },
        smallTitle: {
            fontSize: ['xlarge', 'xlarge', 'xlarge', 'xlarge', '2xlarge', '2xlarge'],
            lineHeight: ['32px', '32px', '32px', '40px', '40px'],
            fontFamily: 'Righteous',
        },
        xSmallTitle: {
            fontSize: ['large', 'large', 'large', 'xlarge', 'xlarge', 'xlarge'],
            lineHeight: ['32px', '32px', '32px', '40px', '40px'],
            fontFamily: 'Righteous',
        },
        mainText: {
            fontSize: ['xlarge', 'xlarge', 'xlarge', '2xlarge', '2xlarge'],
            lineHeight: ['30px', '30px', '30px', '36px', '36px'],
            fontFamily: 'Righteous',
        },
        description: {
            fontSize: ['medium', 'medium', 'medium', 'large', 'large'],
            lineHeight: ['24px', '24px', '24px', '34px', '34px'],
            fontFamily: 'Righteous'
        },
        menu: {
            fontSize: '2xlarge',
            lineHeight: '30px',
            fontFamily: 'Righteous'
        },
        button: {
          fontSize: 'large',
          lineHeight: '30px',
          fontFamily: 'Righteous'
      },
        formLabel: {
            fontSize: '2xlarge',
            lineHeight: '30px',
            fontFamily: 'Righteous'
        },
        baseText: {
            fontSize: 'medium',
            lineHeight: '20px',
            fontFamily: 'Righteous'
        },
        smallText: {
            fontSize: 'small',
            lineHeight: '20px',
            fontFamily: 'Righteous'
        },
       
   
    },
    // components: {
    //     Button,
    // },
})

export default theme



export const Fonts = () => (
  <Global
    styles={`
      /* vietnamese */
@font-face {
  font-family: 'Dancing Script';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/dancingscript/v24/If2RXTr6YS-zF4S-kcSWSVi_szLviuEViw.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: ;
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/dancingscript/v24/If2RXTr6YS-zF4S-kcSWSVi_szLuiuEViw.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Dancing Script';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/dancingscript/v24/If2RXTr6YS-zF4S-kcSWSVi_szLgiuE.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* vietnamese */
@font-face {
  font-family: 'Dancing Script';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/dancingscript/v24/If2RXTr6YS-zF4S-kcSWSVi_szLviuEViw.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Dancing Script';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/dancingscript/v24/If2RXTr6YS-zF4S-kcSWSVi_szLuiuEViw.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Dancing Script';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/dancingscript/v24/If2RXTr6YS-zF4S-kcSWSVi_szLgiuE.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* vietnamese */
@font-face {
  font-family: 'Quicksand';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/quicksand/v30/6xK-dSZaM9iE8KbpRA_LJ3z8mH9BOJvgkP8o58m-wi40.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Quicksand';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/quicksand/v30/6xK-dSZaM9iE8KbpRA_LJ3z8mH9BOJvgkP8o58i-wi40.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Quicksand';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/quicksand/v30/6xK-dSZaM9iE8KbpRA_LJ3z8mH9BOJvgkP8o58a-wg.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* latin-ext */
@font-face {
  font-family: 'Righteous';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/righteous/v13/1cXxaUPXBpj2rGoU7C9WhnGFucE.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Righteous';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/righteous/v13/1cXxaUPXBpj2rGoU7C9WiHGF.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
      `}
  />
)

