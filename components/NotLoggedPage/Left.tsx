
import {Box, Flex , Text , Divider, Button} from '@chakra-ui/react';
import {HiOutlineHome} from 'react-icons/hi';
import {BsFillArrowUpRightCircleFill, BsCcCircleFill} from 'react-icons/bs';
import {FaReddit} from 'react-icons/fa';
import PopComComponent from './PopComComponent';
import { BsChevronDown, BsStars,BsChevronUp } from 'react-icons/bs';
import {SiYoutubegaming} from 'react-icons/si';
import {MdOutlineSportsBaseball} from 'react-icons/md';


export default function Left({}) {

    return(
    <Box bg={'white'} borderTop={'1px solid'} w={'20vw'} h={'100%'} mt={"50px"}  borderColor={'gray.200'} position={'relative'}  >
     <Flex bg={'white'}  flexDirection={'column'} w={'20vw'}  h={'92vh'} position={'fixed'} left={0} bottom={0}>

{/* TOP! */}
      <Flex  h={'64vh'} px={4} alignItems={'flex-start'} overflow={'auto'}   flexDirection={'column'} gap={3} pt={3}  >
          {/* FEEDS */}
           <Text fontSize={'0.65rem'} fontWeight={'600'} letterSpacing={'0.5px'} ml={1} 
             fontFamily={'monospace'} color={'#8e8e8e'}>FEEDS</Text>
        <Flex fontFamily={'monospace'} alignItems={'center'}  py={1} mb={-2}  gap={2} w={'100%'} 
         cursor={'pointer'} _hover={{bg:'#EEEEEE'}} >
          <HiOutlineHome size={20} />
          <Text fontSize={'0.95rem'}>Home</Text>
        </Flex>
        <Flex fontFamily={'monospace'} alignItems={'center'}   py={1}  w={'100%'} gap={2} cursor={'pointer'} 
         _hover={{bg:'#EEEEEE'}} >
          <BsFillArrowUpRightCircleFill size={20} />
          <Text fontSize={'.95rem'}>Popular</Text>
        </Flex>


        {/* RECENT! */}
        <Flex flexDirection={'column'} mt={4}  w={'100%'}>
        <Text fontSize={'0.65rem'} fontWeight={'600'} letterSpacing={'0.5px'} mb={4}  ml={1}  
             fontFamily={'monospace'} color={'#8e8e8e'}>RECENT</Text>
       
        <Flex fontFamily={'monospace'} color={'green.300'} alignItems={'center'}  py={2}  gap={2} w={'100%'} 
         cursor={'pointer'} _hover={{bg:'#EEEEEE'}} >
          <FaReddit size={20} />
          <Text fontSize={'0.95rem'} color={'black'}>r/GreenReddit</Text>
        </Flex>

        <Flex fontFamily={'monospace'} color={'blue.400'} alignItems={'center'}   py={2}  w={'100%'} gap={2} cursor={'pointer'} 
         _hover={{bg:'#EEEEEE'}} >
          <FaReddit size={20} />
          <Text fontSize={'.95rem'} color={'black'}>r/blueReddit</Text>
        </Flex>

        <Flex fontFamily={'monospace'} color={'gray.400'} alignItems={'center'}   py={2}  w={'100%'} gap={2} cursor={'pointer'} 
         _hover={{bg:'#EEEEEE'}} >
          <FaReddit size={20} />
          <Text fontSize={'.95rem'} color={'black'}>r/GrayReddit</Text>
        </Flex>
        </Flex>


        {/* TOPICS! */}

        <Box w={'100%'} >
          <Text  fontSize={'0.65rem'} fontWeight={'600'} letterSpacing={'0.5px'} 
             mb={4}  ml={1} fontFamily={'monospace'} color={'#8e8e8e'}>TOPICS</Text>
        <PopComComponent Icon={<SiYoutubegaming size={20}/>} name={'Gaming'} />
        <PopComComponent Icon={<MdOutlineSportsBaseball size={20}/>} name={'Sports'} />
        <PopComComponent Icon={<BsCcCircleFill size={20}/>} name={'Crypto'} />
        </Box>



      </Flex>

{/* BOTTOM! */}
      <Flex h={'28vh'}  flexDirection={'column'} px={4} >
        <Box mt={3} mb={2} bg={'gray.700'} >
        <Divider   />
        </Box>
        <Text fontSize={'0.87rem'} fontWeight={'500'} pr={8} color={'gray.800'} >Create an account to follow your favorite communities and 
           start taking part in conversations.</Text>

          <Button bg={'#ff5414'} color={'white'} height={'36px'} fontSize={'1.05rem'} w={'100%'} my={3}>Join Reddit</Button>
          
      </Flex>
     
     </Flex>
    </Box>
    
    )
}