
import { ComponentStyleConfig } from '@chakra-ui/react'

const Button: ComponentStyleConfig = {
  // style object for base or default style
  baseStyle: {
    borderRadius: "60px",
    fontSize: "10pt",
    fontWeight: 700,
    _focus: {
      boxShadow: "none",
    },
  },

  // styles for different sizes ("sm", "md", "lg")
  sizes: {
    sm: {
      fontSize: "8pt",
    },
    md: {
      fontSize: "10pt",
      // height: "28px",
    },
  },

  // styles for different visual variants ("outline", "solid")
    variants: {
      solid: {
        color: "white",
        bg: "blue.500",
        _hover: {
          bg: "blue.400",
        },
      },
      outline: {
        color: "blue.500",
        border: "1px solid",
        borderColor: "blue.500",
        _hover:{
          bg:"gray.200"
        },
      },
      oauth: {
        height: "34px",
        border: "1px solid",
        borderColor: "gray.300",
        _hover: {
          bg: "gray.50",
        },
      },
      black: {
        color: "white",
        bg: "gray.700",
        _hover: {
          bg: "gray.600",
        },
      },
      orangeV: {
        bg:'#ff5414',
        height:'32px',
        color: 'white',
        fontSize:'.95rem',
        _hover: {
          opacity: 0.9,
        }
      },
      grayV: {
        bg: 'gray.100',
        height: '32px',
        color: 'black',

        _hover:{
          bg: 'gray.200',
        },
      },
      boutline: {
        color: "gray.600",
        letterSpacing:'0.5px',
        h:'30px',
        border:"1px solid",
        borderColor:"gray.700",
        _hover: {
          bg: "gray.100",
        },
      },
  },
  // default values for 'size', 'variant' and 'colorScheme'
  defaultProps: {
    size: '',
    variant: '',
    colorScheme: '',
  },
}

export default Button;