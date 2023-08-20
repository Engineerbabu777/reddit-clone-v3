

import {Box, Flex , Text , Divider, Button,Input} from '@chakra-ui/react';
import {HiOutlineHome} from 'react-icons/hi';
import {BsFillArrowUpRightCircleFill,BsBoxArrowUpRight,BsEmojiSmile, BsCcCircleFill,BsArrowUpRightCircle ,
     BsCalendar, BsListUl, BsRobot} from 'react-icons/bs';
import {FaReddit , FaClipboardList} from 'react-icons/fa';
import {BiAddToQueue} from 'react-icons/bi'
import {IoMdMailOpen} from 'react-icons/io';
import {AiOutlineStar,AiOutlineSearch ,AiOutlineAppstoreAdd,AiOutlinePlus,AiFillRedditSquare ,
     AiOutlineArrowLeft, AiOutlineTag,AiFillControl} from 'react-icons/ai';
import {VscHome} from 'react-icons/vsc';
import {TbShieldCheckered , TbShirt} from 'react-icons/tb';
import {MdNotificationsNone, MdOutlineInsights} from 'react-icons/md';
import {HiOutlineUserCircle} from 'react-icons/hi';
import {GoKey} from 'react-icons/go';
import {RiBookLine , RiMoneyEuroBoxFill} from 'react-icons/ri';
import {CiSettings} from 'react-icons/ci';
import {FcReddit} from 'react-icons/fc';
import {useRouter} from 'next/router';
import Link from 'next/link'
import OptionComponent from './OptionComponent';


export default function ContentComponent({}) {


    return(<>
        <Box display={'flex'} flexDirection={'column'} mx={3} mt={10} >
          <Text fontSize={'.72rem'} color={'gray.500'} letterSpacing={-0.5} fontWeight={'700'} >CONTENT</Text>

          <OptionComponent 
           FirstIcon={RiBookLine} 
           Name={"Wiki"} 
           Param={"wiki"} />
       
          <OptionComponent 
           FirstIcon={AiOutlineTag} 
           Name={"Post Flair"} 
           Param={"postflair"} />
       
        </Box>

    
    
    
    </>)
}