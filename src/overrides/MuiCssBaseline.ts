import fontFamily from "../theme/fontFamily";
import fontWeight from "../theme/fontWeight";

const MuiCssBaseLine = {
  "@global": {
    "@font-face": [
      {
        fontStyle: "normal",
        fontWeight: fontWeight.normal,
        fontFamily: fontFamily.primary,
        src: `
          url('../fonts/montserrat-v15-latin-regular.eot'),
          url('../fonts/montserrat-v15-latin-regular.eot?#iefix') format('embedded-opentype'), 
          url('../fonts/montserrat-v15-latin-regular.woff2') format('woff2'), 
          url('../fonts/montserrat-v15-latin-regular.woff') format('woff'), 
          url('../fonts/montserrat-v15-latin-regular.ttf') format('truetype'), 
          url('../fonts/montserrat-v15-latin-regular.svg#Montserrat') format('svg')
        `,
      },
      {
        fontStyle: "italic",
        fontWeight: fontWeight.normal,
        fontFamily: fontFamily.primary,
        src: `
          url('../fonts/montserrat-v15-latin-italic.eot?#iefix') format('embedded-opentype'), 
          url('../fonts/montserrat-v15-latin-italic.woff2') format('woff2'), 
          url('../fonts/montserrat-v15-latin-italic.woff') format('woff'), 
          url('../fonts/montserrat-v15-latin-italic.ttf') format('truetype'), 
          url('../fonts/montserrat-v15-latin-italic.svg#Montserrat') format('svg')
        `,
      },
      {
        fontStyle: "normal",
        fontWeight: fontWeight.medium,
        fontFamily: fontFamily.primary,
        src: `
          url('../fonts/montserrat-v15-latin-500.eot?#iefix') format('embedded-opentype'), 
          url('../fonts/montserrat-v15-latin-500.woff2') format('woff2'), 
          url('../fonts/montserrat-v15-latin-500.woff') format('woff'), 
          url('../fonts/montserrat-v15-latin-500.ttf') format('truetype'), 
          url('../fonts/montserrat-v15-latin-500.svg#Montserrat') format('svg')
        `,
      },
      {
        fontStyle: "italic",
        fontWeight: fontWeight.medium,
        fontFamily: fontFamily.primary,
        src: `
          url('../fonts/montserrat-v15-latin-500italic.eot?#iefix') format('embedded-opentype'), 
          url('../fonts/montserrat-v15-latin-500italic.woff2') format('woff2'), 
          url('../fonts/montserrat-v15-latin-500italic.woff') format('woff'), 
          url('../fonts/montserrat-v15-latin-500italic.ttf') format('truetype'), 
          url('../fonts/montserrat-v15-latin-500italic.svg#Montserrat') format('svg')
        `,
      },
      {
        fontStyle: "normal",
        fontWeight: fontWeight.normal,
        fontFamily: fontFamily.secondary,
        src: `
          url('../fonts/space-grotesk-v5-latin-regular.eot?#iefix') format('embedded-opentype'),
          url('../fonts/space-grotesk-v5-latin-regular.woff2') format('woff2'),
          url('../fonts/space-grotesk-v5-latin-regular.woff') format('woff'),
          url('../fonts/space-grotesk-v5-latin-regular.ttf') format('truetype'),
          url('../fonts/space-grotesk-v5-latin-regular.svg#SpaceGrotesk') format('svg')
        `,
      },
      {
        fontStyle: "normal",
        fontWeight: fontWeight.medium,
        fontFamily: fontFamily.secondary,
        src: `
          url('../fonts/space-grotesk-v5-latin-500.eot?#iefix') format('embedded-opentype'),
          url('../fonts/space-grotesk-v5-latin-500.woff2') format('woff2'),
          url('../fonts/space-grotesk-v5-latin-500.woff') format('woff'),
          url('../fonts/space-grotesk-v5-latin-500.ttf') format('truetype'),
          url('../fonts/space-grotesk-v5-latin-500.svg#SpaceGrotesk') format('svg')
        `,
      },
      {
        fontStyle: "normal",
        fontWeight: fontWeight.semi,
        fontFamily: fontFamily.secondary,
        src: `
          url('../fonts/space-grotesk-v5-latin-600.eot?#iefix') format('embedded-opentype'),
          url('../fonts/space-grotesk-v5-latin-600.woff2') format('woff2'),
          url('../fonts/space-grotesk-v5-latin-600.woff') format('woff'),
          url('../fonts/space-grotesk-v5-latin-600.ttf') format('truetype'),
          url('../fonts/space-grotesk-v5-latin-600.svg#SpaceGrotesk') format('svg')
        `,
      },
      {
        fontStyle: "normal",
        fontWeight: fontWeight.bold,
        fontFamily: fontFamily.secondary,
        src: `
          url('../fonts/space-grotesk-v5-latin-700.eot?#iefix') format('embedded-opentype'),
          url('../fonts/space-grotesk-v5-latin-700.woff2') format('woff2'),
          url('../fonts/space-grotesk-v5-latin-700.woff') format('woff'),
          url('../fonts/space-grotesk-v5-latin-700.ttf') format('truetype'),
          url('../fonts/space-grotesk-v5-latin-700.svg#SpaceGrotesk') format('svg')
        `,
      },
    ],
  },
};

export default MuiCssBaseLine;
