
import {Box , Grid} from '@chakra-ui/react';


type Props = {
  children: any;
}

export default function SettingsLayout({children}:Props) {



    return(<>

    <Box h={'3.1rem'} minWidth={'475px'} mx={'auto'}   mt={'48px'} >
      {children[0]}
    </Box>

    <Grid h={'85vh'} templateColumns={{base:'1fr',xl:'1fr 4fr'}}  >

        <Box display={{base:'none' , xl:'block'}}  >{children[1]}</Box>

        <Box display={'block'}  >{children[2]}</Box>

    </Grid>
    
    </>)
}

