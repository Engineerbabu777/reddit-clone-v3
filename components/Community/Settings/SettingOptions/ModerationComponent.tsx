
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


export default function ModerationComponent({}) {




    return(<>
    
    <Box display={'flex'} flexDirection={'column'} mx={3} mt={10} >
          <Text fontSize={'.72rem'} color={'gray.500'} letterSpacing={-0.5} fontWeight={'700'} >MODERATION</Text>

          <OptionComponent 
           FirstIcon={FaClipboardList} 
           Name={"Rules and Removal Reasons"} 
           Param={"rules"} />
       
          <OptionComponent 
           FirstIcon={AiOutlineTag} 
           Name={"User Flair"} 
           Param={"userflair"} />
       
          <OptionComponent 
           FirstIcon={AiFillControl} 
           Name={"Content Controls"} 
           Param={"settings"} />
       
          <OptionComponent 
           FirstIcon={BsListUl} 
           Name={"Mod Log"} 
           Param={"log"} />
       
          <OptionComponent 
           FirstIcon={BsRobot} 
           Name={"Auomod"} 
           Param={"automoderator"} />
       
          <OptionComponent 
           FirstIcon={GoKey} 
           Name={"Safety"} 
           Param={"safety"} />
       
         </Box>
    
    
    
    
    </>)
} 