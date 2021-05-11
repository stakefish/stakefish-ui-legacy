import fontFamily from "../theme/fontFamily";
import fontWeight from "../theme/fontWeight";

const MuiCssBaseLine = {
  "@global": {
    "@font-face": [
      {
        fontStyle: "normal",
        fontWeight: fontWeight.normal,
        fontFamily: fontFamily.sans,
        src: `
          url('../assets/fonts/montserrat-v15-latin-regular.eot'),
          url('../assets/fonts/montserrat-v15-latin-regular.eot?#iefix') format('embedded-opentype'), 
          url('../assets/fonts/montserrat-v15-latin-regular.woff2') format('woff2'), 
          url('../assets/fonts/montserrat-v15-latin-regular.woff') format('woff'), 
          url('../assets/fonts/montserrat-v15-latin-regular.ttf') format('truetype'), 
          url('../assets/fonts/montserrat-v15-latin-regular.svg#Montserrat') format('svg')
        `,
      },
      {
        fontStyle: "italic",
        fontWeight: fontWeight.normal,
        fontFamily: fontFamily.sans,
        src: `
          url('../assets/fonts/montserrat-v15-latin-italic.eot?#iefix') format('embedded-opentype'), 
          url('../assets/fonts/montserrat-v15-latin-italic.woff2') format('woff2'), 
          url('../assets/fonts/montserrat-v15-latin-italic.woff') format('woff'), 
          url('../assets/fonts/montserrat-v15-latin-italic.ttf') format('truetype'), 
          url('../assets/fonts/montserrat-v15-latin-italic.svg#Montserrat') format('svg')
        `,
      },
      {
        fontStyle: "normal",
        fontWeight: fontWeight.medium,
        fontFamily: fontFamily.sans,
        src: `
          url('../assets/fonts/montserrat-v15-latin-500.eot?#iefix') format('embedded-opentype'), 
          url('../assets/fonts/montserrat-v15-latin-500.woff2') format('woff2'), 
          url('../assets/fonts/montserrat-v15-latin-500.woff') format('woff'), 
          url('../assets/fonts/montserrat-v15-latin-500.ttf') format('truetype'), 
          url('../assets/fonts/montserrat-v15-latin-500.svg#Montserrat') format('svg')
        `,
      },
      {
        fontStyle: "italic",
        fontWeight: fontWeight.medium,
        fontFamily: fontFamily.sans,
        src: `
          url('../assets/fonts/montserrat-v15-latin-500italic.eot?#iefix') format('embedded-opentype'), 
          url('../assets/fonts/montserrat-v15-latin-500italic.woff2') format('woff2'), 
          url('../assets/fonts/montserrat-v15-latin-500italic.woff') format('woff'), 
          url('../assets/fonts/montserrat-v15-latin-500italic.ttf') format('truetype'), 
          url('../assets/fonts/montserrat-v15-latin-500italic.svg#Montserrat') format('svg')
        `,
      },
      {
        fontStyle: "normal",
        fontWeight: fontWeight.normal,
        fontFamily: fontFamily.serif,
        src: `
          url('../assets/fonts/space-grotesk-v5-latin-regular.eot?#iefix') format('embedded-opentype'),
          url('../assets/fonts/space-grotesk-v5-latin-regular.woff2') format('woff2'),
          url('../assets/fonts/space-grotesk-v5-latin-regular.woff') format('woff'),
          url('../assets/fonts/space-grotesk-v5-latin-regular.ttf') format('truetype'),
          url('../assets/fonts/space-grotesk-v5-latin-regular.svg#SpaceGrotesk') format('svg')
        `,
      },
      {
        fontStyle: "normal",
        fontWeight: fontWeight.medium,
        fontFamily: fontFamily.serif,
        src: `
          url('../assets/fonts/space-grotesk-v5-latin-500.eot?#iefix') format('embedded-opentype'),
          url('../assets/fonts/space-grotesk-v5-latin-500.woff2') format('woff2'),
          url('../assets/fonts/space-grotesk-v5-latin-500.woff') format('woff'),
          url('../assets/fonts/space-grotesk-v5-latin-500.ttf') format('truetype'),
          url('../assets/fonts/space-grotesk-v5-latin-500.svg#SpaceGrotesk') format('svg')
        `,
      },
      {
        fontStyle: "normal",
        fontWeight: fontWeight.semi,
        fontFamily: fontFamily.serif,
        src: `
          url('../assets/fonts/space-grotesk-v5-latin-600.eot?#iefix') format('embedded-opentype'),
          url('../assets/fonts/space-grotesk-v5-latin-600.woff2') format('woff2'),
          url('../assets/fonts/space-grotesk-v5-latin-600.woff') format('woff'),
          url('../assets/fonts/space-grotesk-v5-latin-600.ttf') format('truetype'),
          url('../assets/fonts/space-grotesk-v5-latin-600.svg#SpaceGrotesk') format('svg')
        `,
      },
      {
        fontStyle: "normal",
        fontWeight: fontWeight.bold,
        fontFamily: fontFamily.serif,
        src: `
          url('../assets/fonts/space-grotesk-v5-latin-700.eot?#iefix') format('embedded-opentype'),
          url('../assets/fonts/space-grotesk-v5-latin-700.woff2') format('woff2'),
          url('../assets/fonts/space-grotesk-v5-latin-700.woff') format('woff'),
          url('../assets/fonts/space-grotesk-v5-latin-700.ttf') format('truetype'),
          url('../assets/fonts/space-grotesk-v5-latin-700.svg#SpaceGrotesk') format('svg')
        `,
      },
      {
        fontStyle: "normal",
        fontWeight: fontWeight.normal,
        fontFamily: fontFamily.monospace,
        src: `
          url('../assets/fonts/source-code-pro-v14-latin-regular.eot?#iefix') format('embedded-opentype'),
          url('../assets/fonts/source-code-pro-v14-latin-regular.woff2') format('woff2'),
          url('../assets/fonts/source-code-pro-v14-latin-regular.woff') format('woff'),
          url('../assets/fonts/source-code-pro-v14-latin-regular.ttf') format('truetype'),
          url('../assets/fonts/source-code-pro-v14-latin-regular.svg#SourceCodePro') format('svg')
        `,
      },
      {
        fontStyle: "normal",
        fontWeight: fontWeight.semi,
        fontFamily: fontFamily.monospace,
        src: `
          url('../assets/fonts/source-code-pro-v14-latin-600.eot?#iefix') format('embedded-opentype'),
          url('../assets/fonts/source-code-pro-v14-latin-600.woff2') format('woff2'),
          url('../assets/fonts/source-code-pro-v14-latin-600.woff') format('woff'),
          url('../assets/fonts/source-code-pro-v14-latin-600.ttf') format('truetype'),
          url('../assets/fonts/source-code-pro-v14-latin-600.svg#SourceCodePro') format('svg')
        `,
      },
    ],
  },
};

export default MuiCssBaseLine;
