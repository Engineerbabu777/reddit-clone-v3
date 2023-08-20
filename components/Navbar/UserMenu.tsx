

import React,{useEffect} from 'react'
import {
    Icon, Flex, Menu,Text,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
} from '@chakra-ui/react'
import { HiOutlineUserCircle } from 'react-icons/hi';
import { BsChevronDown, BsStars } from 'react-icons/bs';
import {MdOutlineLogout} from 'react-icons/md';
import {BiUserCircle} from 'react-icons/bi';
import { AuthState } from '@/atoms/authAtoms';
import { useRecoilState } from 'recoil';
import { useAuthState } from 'react-firebase-hooks/auth';
import {auth} from '../../firebase/firebase.config';
import {signOut} from 'firebase/auth';
import {FaRedditSquare} from 'react-icons/fa';
import Image from 'next/image';
import {BsQuestionCircle} from 'react-icons/bs';
import {AiOutlineExclamationCircle , AiOutlineEye, AiFillTrademarkCircle, AiOutlineCopyright} from 'react-icons/ai';
import {FaClipboardList , FaBitcoin, FaWpexplorer}  from 'react-icons/fa';
import {TfiAnnouncement} from 'react-icons/tfi';
import {VscAccount} from 'react-icons/vsc';
import {TbShieldCheckered} from 'react-icons/tb';
import ToggleSwitch from './ToggleSwitches';


interface Props {

}

const UserMenu = (props: Props) => {

    const [authState,setAuthState] = useRecoilState(AuthState);
    const [user, loading, error] = useAuthState(auth);
    
    // TO OPEN MODAL
    const LoginSignUp = async() => {
     
        // OPEN THE MODAL!
      setAuthState((prev) => ({
        ...prev,
        open:true
      }));
    }
    useEffect(()=> {
   if(user){
    console.log(user);
   }
    },[user])

    // FUNCTION TO LOGOUT!
    const logoutUser = async() => {
        // IMPLEMENTATION SIGNOUT CURRENT USER!
        await signOut(auth);

        // RESET EVERYTHING!

    }
    
    return (
        <Menu>
            <MenuButton width={{base:'auto',lg:`${user ? '150px' : 'auto'}`}} borderRadius={4} _hover={{ outline: '1px solid', outlineColor: 'gray.200' }} px={{base:'3px',md:'0px'}}>
                { user ? (
                    <Flex justify={'center'} align={'center'} px={2} borderRadius={'10px'} gap={2}>
                    
                    {/* IMAGE FOR MENU */}
                    { user?.photoURL ? (<>
                     <Image src={`${user?.photoURL}`} height={21} width={21} alt={'img'} />
                    </>) : (<>
                       <Icon as={FaRedditSquare} fontSize={24} fontWeight={'light'} color={'gray.300'}/>
                    </>)} 

                    {/* DISPLAY NAME ON MENU */}
                <Flex flexDirection={'column'} fontSize={'8pt'} display={{base:'none',lg:'flex'}} mr={4}>
                    { user?.displayName ? (
                        <>
                        <Text fontWeight={'semibold'}>{user.displayName}</Text>
                    </> ) : ( <>
                        <Text fontWeight={'semibold'}>{user?.email?.split('@')[0].toString()}</Text>
                    </>
                    ) }
                    <Flex fontSize={'8pt'} gap={1} alignItems={'center'} justifyContent={'center'}  >
                    <Icon as={BsStars} fontSize={10} color={'brand.100'}/>
                    <Text color={'gray.400'} >1 Karma</Text>
                    </Flex>

                </Flex>

                    <Icon as={BsChevronDown} fontSize={10} fontWeight={'bold'}/>
                    </Flex>
                ) :  (
                <Flex justify={'center'} align={'center'} px={2} borderRadius={'10px'} gap={1}>
                    <Icon as={HiOutlineUserCircle} fontSize={28} fontWeight={'light'} />
                    <Icon as={BsChevronDown} fontSize={10} fontWeight={'bold'} />
                </Flex> 
                ) }
            
            </MenuButton>

           {/* CHECKS IF USER AVAILABLE */}
             {user ? (

                <MenuList  maxHeight='80vh' overflow={'auto'} mt={1}>

                    {/* MY STUFF! */}
                 <MenuItem _hover={{bg:'white'}} fontWeight={'semibold'}>
                  <Icon as={BiUserCircle} mr={2} fontSize={22} color={'gray.500'} />
                  <Text fontSize={'10pt'} color={'gray.500'} >My Stuff</Text>
                 </MenuItem>

                 {/* ONLINE */}
                  <MenuItem _hover={{}} fontWeight={'semibold'}>
                   {/* <Icon as={BiUserCircle} mr={2} fontSize={22} color={'gray.500'} /> */}
                   <Text fontSize={'10pt'} ml={7} >Online Status</Text>
                   <ToggleSwitch />
                  </MenuItem>

                 {/* PROFILE */}
                  <MenuItem _hover={{}} fontWeight={'semibold'}>
                   {/* <Icon as={BiUserCircle} mr={2} fontSize={22} color={'gray.500'} /> */}
                   <Text fontSize={'10pt'} ml={7}  >Profile</Text>
                  </MenuItem>

                 {/* CREATE AVATOR */}
                  <MenuItem _hover={{}} fontWeight={'semibold'}>
                   {/* <Icon as={BiUserCircle} mr={2} fontSize={22} color={'gray.500'} /> */}
                   <Text fontSize={'10pt'}  ml={7}>Create Avator</Text>
                  </MenuItem>

                 {/* USER SETTINGS */}
                  <MenuItem _hover={{}} fontWeight={'semibold'}>
                   {/* <Icon as={BiUserCircle} mr={2} fontSize={22} color={'gray.500'} /> */}
                   <Text fontSize={'10pt'}  ml={7}>User Settings</Text>
                  </MenuItem>


                 <MenuDivider />

                 {/* VIEW OPTIONS! */}
                 <MenuItem _hover={{bg:'white'}} fontWeight={'semibold'}>
                  <Icon as={AiOutlineEye} mr={2} fontSize={22} color={'gray.500'} />
                  <Text fontSize={'10pt'} color={'gray.500'} >View Options</Text>
                 </MenuItem>

                 {/* MOD MODE */}
                  <MenuItem _hover={{}} fontWeight={'semibold'} py={2}>
                   <Text fontSize={'10pt'} ml={7} >Mod Mode</Text>
                   <ToggleSwitch />
                  </MenuItem>

                 {/* DARK MODE */}
                  <MenuItem _hover={{}} fontWeight={'semibold'} py={2}>
                   <Text fontSize={'10pt'} ml={7}  >Dark Mode</Text>
                   <ToggleSwitch />
                  </MenuItem>

                 <MenuDivider />

                 {/* CREATE COMMUNITY */}
                 <MenuItem _hover={{}} fontWeight={'semibold'} py={2}>
                   <Icon as={BiUserCircle} mr={2} fontSize={22} color={'gray.500'} />
                   <Text fontSize={'10pt'} >Create a Community</Text>
                  </MenuItem>

                 {/* ADVERTISE ON REDDIT! */}
                 <MenuItem _hover={{bg:'blue.500',color:'white'}} fontWeight={'semibold'} py={2} >
                  <Icon as={TfiAnnouncement} mr={2} fontSize={20} />
                  <Text fontSize={'10pt'}>Advertise on Reddit</Text>
                 </MenuItem>

                 {/* COIN */}
                 <MenuItem _hover={{}} fontWeight={'semibold'} py={2}>
                   <Icon as={BiUserCircle} mr={2} fontSize={22} color={'gray.500'} />
                   <Text fontSize={'10pt'} >Coins</Text>
                  </MenuItem>

                 {/* PREMIUM! */}
                 <MenuItem _hover={{}} fontWeight={'semibold'} py={2}>
                   <Icon as={FaBitcoin} mr={2} fontSize={22} color={'gray.500'} />
                   <Text fontSize={'10pt'} >Premium</Text>
                  </MenuItem>

                 {/* EXPLORE! */}
                 <MenuItem _hover={{}} fontWeight={'semibold'} py={2}>
                   <Icon as={FaWpexplorer} mr={2} fontSize={22} color={'gray.500'} />
                   <Text fontSize={'10pt'} >Explore</Text>
                  </MenuItem>

                 {/* HELP CENTER! */}
                 <MenuItem _hover={{bg:'blue.500',color:'white'}} fontWeight={'semibold'} py={2} >
                  <Icon as={BsQuestionCircle} mr={2} fontSize={20} />
                  <Text fontSize={'10pt'}>Help Center</Text>
                 </MenuItem>

                 {/* MORE! */}
                 <MenuItem _hover={{}} fontWeight={'semibold'} py={2}>
                   <Icon as={AiOutlineExclamationCircle} mr={2} fontSize={22} color={'gray.500'} />
                   <Text fontSize={'10pt'} >More</Text>
                  </MenuItem>

                 {/* TERMS AND POLICIES! */}
                 <MenuItem _hover={{bg:'blue.500',color:'white'}} fontWeight={'semibold'} py={2} >
                  <Icon as={FaClipboardList} mr={2} fontSize={20} />
                  <Text fontSize={'10pt'}>Terms and Policies</Text>
                 </MenuItem>



                 <MenuItem _hover={{bg:'blue.500',color:'white'}} fontWeight={'semibold'} onClick={logoutUser}>
                  <Icon as={MdOutlineLogout} mr={2} fontSize={20} />
                  <Text fontSize={'10pt'}>Logout</Text>
                 </MenuItem>
                 
                 <MenuItem _hover={{bg:'white'}} onClick={logoutUser} mt={1}>
                  <Text fontSize={'9pt'} color={'#8e8e8e'} >Reddit, Inc. © 2023. All rights reserved.</Text>
                 </MenuItem>
                </MenuList>


                ) : (
                
                <MenuList>
                 <MenuItem _hover={{bg:'blue.500',color:'white'}} fontWeight={'semibold'}  >
                  <Icon as={BsQuestionCircle} mr={2} fontSize={20} />
                  <Text fontSize={'10pt'}>Help Center</Text>
                 </MenuItem>
                
                 <MenuItem _hover={{bg:'blue.500',color:'white'}} fontWeight={'semibold'} >
                  <Icon as={AiOutlineExclamationCircle} mr={2} fontSize={20} />
                  <Text fontSize={'10pt'}>More</Text>
                 </MenuItem>

                 <MenuItem _hover={{bg:'blue.500',color:'white'}} fontWeight={'semibold'} >
                  <Icon as={FaClipboardList} mr={2} fontSize={20} />
                  <Text fontSize={'10pt'}>Terms and Policies</Text>
                 </MenuItem>

                 <MenuItem _hover={{bg:'blue.500',color:'white'}} fontWeight={'semibold'} >
                  <Icon as={TfiAnnouncement} mr={2} fontSize={20} />
                  <Text fontSize={'10pt'}>Advertise on Reddit</Text>
                 </MenuItem>


                 <MenuDivider />

                 <MenuItem _hover={{bg:'blue.500',color:'white'}} fontWeight={'semibold'} onClick={LoginSignUp}>
                  <Icon as={MdOutlineLogout} mr={2} fontSize={20} />
                  <Text fontSize={'10pt'}>Login / SignUp</Text>
                 </MenuItem>
                </MenuList>
                
                )
             }

        </Menu>
    )
}

export default UserMenu;
