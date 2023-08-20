
import React from 'react';
import { Flex ,Text,Box} from '@chakra-ui/react';
import PopularCommunities from './PopularCommunities';
import RedditPolicy from './RedditPolicy';
import Main from '@/components/HomePage/Main';

export default function BottomRight({}) {


    return(<>
      
       <Flex gap={5} w={{base:'100%',lg:''}} >

        <Flex  flexDirection={'column'} mb={-14}  w={{base:'100%',lg:'auto'}}  >
         <Main  />
        </Flex>

        <Flex flexDirection={'column'} display={{base:'none',lg:'block'}} position={'relative'}  bg={'gray.200'} mr={5} 
          w={'40%'}  h={'100%'} >
           <PopularCommunities />
           <RedditPolicy />
        </Flex>

       </Flex>


       
       
     </>)
}