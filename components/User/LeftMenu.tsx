

import {Box, Flex , Text , Divider, Button,Input} from '@chakra-ui/react';
import {HiOutlineHome} from 'react-icons/hi';
import {BsFillArrowUpRightCircleFill, BsCcCircleFill,BsArrowUpRightCircle} from 'react-icons/bs';
import {FaReddit} from 'react-icons/fa';
import {BiAddToQueue} from 'react-icons/bi'
import {IoMdMailOpen} from 'react-icons/io';
import {AiOutlineStar, AiOutlinePlus,AiFillRedditSquare} from 'react-icons/ai';
import {VscHome} from 'react-icons/vsc';
import {TbShieldCheckered , TbShirt} from 'react-icons/tb';
import {MdNotificationsNone} from 'react-icons/md';

export default function LeftMenu({}) {

    return(
    <Box bg={'white'} display={{base:'none',xl:'block'}} borderTop={'1px solid'} w={'20vw'} h={'100%'}   
    borderColor={'gray.200'} position={'relative'}  >
     <Flex bg={'white'}  flexDirection={'column'}  w={'20vw'} pt={14}  h={'calc(100% - 49px)'} position={'fixed'} left={0} bottom={0} 
     overflow={'auto'}>
     
     {/* FILTER  */}
     <Box  w={'80%'} h={10} ml={4}  >
       <Input placeholder={'Filter'} pl={2} borderRadius={0} h={8} bg={'gray.100'}
         _placeholder={{color:'#8e8e8e'}} borderColor={'gray.300'} _hover={{borderColor:"gray.300"}}/>
     </Box>

     <Box  w={'100%'} h={'100%'} mt={2} >

     {/* MODERATION! */}
     <Box >
        <Text fontSize={'.65rem'} color={'#8e8e8e'} letterSpacing={-0.5} fontWeight={'600'} pl={4} >MODERATING</Text>
        <Box display={'flex'} flexDirection={'column'} mt={2} >
          <Box display={'flex'} gap={2} alignItems={'center'} py={2} _hover={{bg:'#EEEEEE'}} cursor={'pointer'} pl={4} >
            {/* ICON! */}
            <BiAddToQueue className={"w-5 h-5"} />
            {/* TEXT! */}
            <Text fontSize={".9rem"}>Mod Queue</Text>
          </Box>

          <Box display={'flex'} gap={2} alignItems={'center'} py={2}  _hover={{bg:'#EEEEEE'}}  cursor={'pointer'} pl={4}>
            {/* ICON! */}
            <IoMdMailOpen className={"w-5 h-5"} />
            {/* TEXT! */}
            <Text fontSize={".9rem"}>Modmail</Text>
          </Box>

          <Box display={'flex'} gap={2} alignItems={'center'} py={2}   _hover={{bg:'#EEEEEE'}}  cursor={'pointer'} pl={4}>
            {/* ICON! */}
            <BiAddToQueue className={"w-5 h-5"} />
            {/* TEXT! */}
            <Text fontSize={".9rem"}>r/Mod</Text>
          </Box>

          <Box display={'flex'} gap={2} alignItems={'center'} py={2}   _hover={{bg:'#EEEEEE'}}  cursor={'pointer'} pl={4}>
            {/* ICON! */}
             <FaReddit className={"w-5 h-5 text-blue-500"} />
            {/* TEXT! */}
             <Text fontSize={".9rem"}>r/Reddit</Text>
            {/* STAR ICON! */}
             <AiOutlineStar className="w-5 h-5 ml-auto mr-1 text-[#83764F]" />
          </Box>
          
        </Box>
     </Box>


     {/* YOUR COMMUNITIES! */}
     <Box  pt={2}>
        {/* TOP HEADING! */}
     <Text fontSize={'.65rem'} color={'#8e8e8e'} letterSpacing={-0.5} fontWeight={'600'} pl={4} >YOUR COMMUNITIES</Text>
      
      <Box>
       <Box display={'flex'} gap={2} alignItems={'center'} py={2}   _hover={{bg:'#EEEEEE'}}  cursor={'pointer'} pl={4}>
            {/* ICON! */}
             <AiOutlinePlus className={"w-6 h-6 text-[#8e8e8e]"} />
            {/* TEXT! */}
             <Text fontSize={".9rem"}>Create Community</Text>
          </Box>
      </Box>

      <Box display={'flex'} gap={2} alignItems={'center'} py={2}   _hover={{bg:'#EEEEEE'}}  cursor={'pointer'} pl={4}>
            {/* ICON! */}
             <FaReddit className={"w-5 h-5 text-orange-600"} />
            {/* TEXT! */}
             <Text fontSize={".9rem"}>r/announcement</Text>
            {/* STAR ICON! */}
             <AiOutlineStar className="w-5 h-5 ml-auto mr-1 text-[#83764F]" />
      </Box>
          
      <Box display={'flex'} gap={2} alignItems={'center'} py={2}   _hover={{bg:'#EEEEEE'}}  cursor={'pointer'} pl={4}>
            {/* ICON! */}
             <FaReddit className={"w-5 h-5 text-blue-500"} />
            {/* TEXT! */}
             <Text fontSize={".9rem"}>r/Lahore</Text>
            {/* STAR ICON! */}
             <AiOutlineStar className="w-5 h-5 ml-auto mr-1 text-[#83764F]" />
          </Box>
          
          <Box display={'flex'} gap={2} alignItems={'center'} py={2}   _hover={{bg:'#EEEEEE'}}  cursor={'pointer'} pl={4}>
            {/* ICON! */}
             <FaReddit className={"w-5 h-5 text-blue-500"} />
            {/* TEXT! */}
             <Text fontSize={".9rem"}>r/Turkye</Text>
            {/* STAR ICON! */}
             <AiOutlineStar className="w-5 h-5 ml-auto mr-1 text-[#83764F]" />
          </Box>
          
     
     </Box>


     {/* FEED! */}
     <Box pt={2}>
       {/* HEADING */}
         <Text fontSize={'.65rem'} color={'#8e8e8e'} letterSpacing={-0.5} fontWeight={'600'} pl={4} >FEEDS</Text>

        {/* HOME! */}
        <Box display={'flex'} gap={2} alignItems={'center'} py={2}   _hover={{bg:'#EEEEEE'}}  cursor={'pointer'} pl={4}>
            {/* ICON! */}
             <VscHome className={"w-6 h-6 "} />
            {/* TEXT! */}
             <Text fontSize={".9rem"}>Home</Text>
        </Box>


        {/* POPLUAR! */}
        <Box display={'flex'} gap={2} alignItems={'center'} py={2}   _hover={{bg:'#EEEEEE'}}  cursor={'pointer'} pl={4}>
            {/* ICON! */}
             <BsArrowUpRightCircle className={"w-5 h-5 "} />
            {/* TEXT! */}
             <Text fontSize={".9rem"}>Popluar</Text>
        </Box>


        {/* ALL! */}
        <Box display={'flex'} gap={2} alignItems={'center'} py={2}   _hover={{bg:'#EEEEEE'}}  cursor={'pointer'} pl={4}>
            {/* ICON! */}
             <BsArrowUpRightCircle className={"w-5 h-5 "} />
            {/* TEXT! */}
             <Text fontSize={".9rem"}>All</Text>
        </Box>

        
     </Box>
     

     {/* OTHER! */}
     <Box pt={2}>
        {/* TOP HEADING! */}
     <Text fontSize={'.65rem'} color={'#8e8e8e'} letterSpacing={-0.5} fontWeight={'600'} pl={4} >OTHERS</Text>
      
      <Box>
       <Box display={'flex'} gap={2} alignItems={'center'} py={2}   _hover={{bg:'#EEEEEE'}}  cursor={'pointer'} pl={4}>
            {/* ICON! */}
             <AiFillRedditSquare className={"w-6 h-6 text-gray-300"} />
            {/* TEXT! */}
             <Text fontSize={".9rem"}>User Settings</Text>
          </Box>
      </Box>

      <Box display={'flex'} gap={2} alignItems={'center'} py={2}   _hover={{bg:'#EEEEEE'}}  cursor={'pointer'} pl={4}>
            {/* ICON! */}
             <AiFillRedditSquare className={"w-6 h-6 text-gray-300"} />
            {/* TEXT! */}
             <Text fontSize={".9rem"}>Messages</Text>
      </Box>
          
      <Box display={'flex'} gap={2} alignItems={'center'} py={2}   _hover={{bg:'#EEEEEE'}}  cursor={'pointer'} pl={4}>
            {/* ICON! */}
             <AiOutlinePlus className={"w-5 h-5 text-[#8e8e8e]"} />
            {/* TEXT! */}
             <Text fontSize={".9rem"} ml={1}>Create Post</Text>
          </Box>
          
          <Box display={'flex'} gap={2} alignItems={'center'} py={2}   _hover={{bg:'#EEEEEE'}}  cursor={'pointer'} pl={4}>
            {/* ICON! */}
             <MdNotificationsNone className={"w-6 h-6 "} />
            {/* TEXT! */}
             <Text fontSize={".9rem"}>Notifications</Text>
          </Box>

          <Box display={'flex'} gap={2} alignItems={'center'} py={2}   _hover={{bg:'#EEEEEE'}}  cursor={'pointer'} pl={4}>
            {/* ICON! */}
             <TbShieldCheckered className={"w-6 h-6"} />
            {/* TEXT! */}
             <Text fontSize={".9rem"}>Premium</Text>
          </Box>
          
          <Box display={'flex'} gap={2} alignItems={'center'} py={2}   _hover={{bg:'#EEEEEE'}}  cursor={'pointer'} pl={4}>
            {/* ICON! */}
             <TbShirt className={"w-6 h-6"} />
            {/* TEXT! */}
             <Text fontSize={".9rem"}>Avatar</Text>
          </Box>
          
     </Box>


     </Box>

     </Flex>
    </Box>
    
    )
}