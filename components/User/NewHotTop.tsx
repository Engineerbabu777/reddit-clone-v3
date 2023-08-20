

import {BsFire} from 'react-icons/bs';
import {HiOutlineChartBar } from 'react-icons/hi';
import {GiMeepleCircle} from 'react-icons/gi';
import {Box , Flex, Text, Grid} from '@chakra-ui/react';

export default function NewHotTop({}) {


    return(<>
    
    <Box h={14} bg={'white'} mx={'1px'} mb={4} borderRadius={5} border={'1px solid'} borderColor={'gray.300'}>
     <Flex px={2} alignItems={'center'} w={'100%'} h={'100%'} gap={2}>
       
        {/* NEW */}
         <Flex color={'#8e8e8e'} cursor={'pointer'} _hover={{bg:'#EEEEEE'}} alignItems={'center'} gap={2}  borderRadius={20} p={1} px={3}>
          <GiMeepleCircle size={18} />
          <Text fontSize={"0.87rem"}  fontWeight={'bold'}>New</Text>
         </Flex>

          {/* HOT */}
           <Flex color={'#8e8e8e'} _hover={{bg:'#EEEEEE'}} cursor={'pointer'} 
              alignItems={'center'} gap={2} borderRadius={20} p={1} px={2}>
              <BsFire size={16} />
              <Text fontSize={"0.80rem"}  fontWeight={'bold'}>Hot</Text>
           </Flex>


          {/* TOP */}
           <Flex color={'#8e8e8e'} cursor={'pointer'} _hover={{bg:'#EEEEEE'}} alignItems={'center'} gap={2}  borderRadius={20} p={1} px={3}>
              <HiOutlineChartBar size={18} />
              <Text fontSize={"0.87rem"}  fontWeight={'bold'}>Top</Text>
           </Flex>

     </Flex>
    </Box>
    
    </>)
}