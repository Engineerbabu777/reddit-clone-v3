
import { Grid, Box } from '@chakra-ui/react';
import React from 'react';


type Props = {
   children: any;
}


export default function Layout({ children }: Props) {


    return (<Grid templateColumns={{base:'1fr',lg:'1.4fr 0.7fr'}} gap={4} h={'100vh'} position={'relative'} mt={5} 
               maxWidth={{lg:'960px',xl:'70vw'}} px={{ base: 0, md: 0 }} minWidth={'100'} mx={'auto'} >

        {/* CHILDREN 0 */}
        <Box  >
            {children[0]}
        </Box>

        {/* CHILDREN 1 */}
        <Box display={{base:'none',lg:'block'}} >
            {children[1]}
        </Box>

    </Grid>)
}