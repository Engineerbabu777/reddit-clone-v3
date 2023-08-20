
import OptionComponent from '../SettingOptions/OptionComponent';
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

export default function OverviewComponent({}) {


    return(<>
    
        <Box display={'flex'} flexDirection={'column'} mx={3} mt={12} >
          <Text fontSize={'.72rem'} color={'gray.500'} letterSpacing={-0.5} fontWeight={'700'} >OVERVIEW</Text>

          <OptionComponent  FirstIcon={BiAddToQueue}  Name={"Queues"}  Param={"modqueue"} />

          <OptionComponent 
           FirstIcon={IoMdMailOpen} 
           Name={"Modmail"} 
           Param={"/mod"} 
           SecondIcon={BsBoxArrowUpRight}
           />

          <OptionComponent 
           FirstIcon={BsCalendar} 
           Name={"Scheduled Posts"} 
           Param={"scheduledposts"} />

          <OptionComponent 
           FirstIcon={HiOutlineUserCircle} 
           Name={"User Management"} 
           Param={"banned"} />

          <OptionComponent 
           FirstIcon={MdOutlineInsights} 
           Name={"Insights"} 
           Param={"insights"} />
       
         </Box>
    
    
    </>)
}