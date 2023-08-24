
import React from 'react';
import {Box ,Flex, Text} from '@chakra-ui/react';
import TopRight from './TopRight';
import BottomRight from './BottomRight';


export default function Right({}) {

    return(<>

       <Flex flexDirection={'column'} px={{base:'0px',lg:8}}  w={{base:'100vw',lg:'80vw'}} 
        h={'fit-content'} ml={{lg:3.5}}>

         {/* RIGHT - TOP! */}
          <Flex height={{base:'250px',md:'37vh'}} w={{base:'100vw',lg:'77vw'}}   >
            <TopRight />
          </Flex>

         <Text color={'gray.700'} fontSize={'0.871rem'} fontWeight={'600'} fontFamily={'Serif'}>Popular Posts</Text>


         {/* LEFT - TOP!  */}
           <Flex mt={4} w={{base:'98vw',lg:'77vw'}} >
            <BottomRight />
           </Flex>

           

       </Flex>

    </>)

}