
// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react"
import Button from "./Buttons";

// 2. Call `extendTheme` and pass your custom values
export const theme = extendTheme({
   breakpoints: {
     
  
     sm: '320px',
   
     md: '768px',
     lg: '960px',
     xl: '1200px',
    '2xl': '1536px',

  },
   colors: {
     brand: {
       100:"#FF3c08",
    },
   },
//    fonts:{
//      body: [inter.className],
//   },
  styles:{
     global:()=> ({
    body: {
     bg: 'gray.200'
    }
     })
  },
  components:{
     // Buttons
     Button,
     Checkbox: {
      baseStyle: {
        control: {
          borderRadius: "full", // Make the checkbox circular
        },
      },
    },
  }
 })
