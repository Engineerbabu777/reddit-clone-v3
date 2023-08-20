import {Box, Flex , Text } from '@chakra-ui/react';
import {BsFillArrowUpRightCircleFill,BsBoxArrowUpRight,BsEmojiSmile, BsCcCircleFill,BsArrowUpRightCircle ,
     BsCalendar, BsListUl, BsRobot} from 'react-icons/bs';
import {FaReddit , FaClipboardList} from 'react-icons/fa';
import {BiAddToQueue} from 'react-icons/bi'
import {AiOutlineStar,AiOutlineSearch ,AiOutlineAppstoreAdd,AiOutlinePlus,AiFillRedditSquare ,
     AiOutlineArrowLeft, AiOutlineTag,AiFillControl} from 'react-icons/ai';
import {MdNotificationsNone, MdOutlineInsights} from 'react-icons/md';
import {GoKey} from 'react-icons/go';
import {RiBookLine , RiMoneyEuroBoxFill} from 'react-icons/ri';
import {CiSettings} from 'react-icons/ci';
import {FcReddit} from 'react-icons/fc';
import {useRouter} from 'next/router';
import Link from 'next/link'
import OptionComponent from './SettingOptions/OptionComponent';

export default function SupportComponent({}) {



    return(<>
    
    <Box display={'flex'} flexDirection={'column'} mx={3} mt={10} >
          <Text fontSize={'.72rem'} color={'gray.500'} letterSpacing={-0.5} fontWeight={'700'} >SUPPORT</Text>

          <Box display={'flex'} color={'gray.500'} gap={3} alignItems={'center'} py={2} _hover={{bg:'#EEEEEE'}} 
          cursor={'pointer'} pl={2} >
            {/* ICON! */}
            <FcReddit className={"w-5 h-5"} />
            {/* TEXT! */}
            <Text fontSize={".92rem"}>Mod Help Center</Text>

            <BsBoxArrowUpRight className="w-5 h-5 ml-auto" />

          </Box>

          <Box display={'flex'} color={'gray.500'} gap={3} alignItems={'center'} py={2} _hover={{bg:'#EEEEEE'}} 
          cursor={'pointer'} pl={2} >
            {/* ICON! */}
            <FcReddit className={"w-5 h-5"} />
            {/* TEXT! */}
            <Text fontSize={".92rem"}>Mod Code of Conduct</Text>

            <BsBoxArrowUpRight className="w-5 h-5 ml-auto" />

          </Box>

          <Box display={'flex'} color={'gray.500'} gap={3} alignItems={'center'} py={2} _hover={{bg:'#EEEEEE'}} 
          cursor={'pointer'} pl={2} >
            {/* ICON! */}
            <FcReddit className={"w-5 h-5"} />
            {/* TEXT! */}
            <Text fontSize={".92rem"}>ModSupport</Text>

            <BsBoxArrowUpRight className="w-5 h-5 ml-auto" />

          </Box>

     
          <Box display={'flex'} color={'gray.500'} gap={3} alignItems={'center'} py={2}  
          cursor={'pointer'} pl={2} >
            {/* ICON! */}
            <FcReddit className={"w-5 h-5"} />
            {/* TEXT! */}
            <Text fontSize={".92rem"}>ModHelp</Text>

            <BsBoxArrowUpRight className="w-5 h-5 ml-auto" />

          </Box>

          <Box display={'flex'} color={'gray.500'} gap={3} alignItems={'center'} py={2} 
           cursor={'pointer'} pl={2} >
            {/* ICON! */}
            <FcReddit className={"w-5 h-5"} />
            {/* TEXT! */}
            <Text fontSize={".92rem"}>Automod</Text>

            <BsBoxArrowUpRight className="w-5 h-5 ml-auto" />

          </Box>

          <Box display={'flex'} color={'gray.500'} gap={3} alignItems={'center'} py={2}  
          cursor={'pointer'} pl={2} >
            {/* ICON! */}
            <FcReddit className={"w-5 h-5"} />
            {/* TEXT! */}
            <Text fontSize={".9rem"}>Contact Reddit</Text>

            <BsBoxArrowUpRight className="w-5 h-5 ml-auto" />

          </Box>
           
         </Box>
    
    
    </>)
}