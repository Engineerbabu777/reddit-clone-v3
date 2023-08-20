import React,{useState,useEffect} from 'react';
import { Box, Text } from '@chakra-ui/react';
import LeftContent from './LeftContent';
import SearchBar from './SearchBar';
import RightContent from './RightContent';
import { useAuthState } from 'react-firebase-hooks/auth';
import {auth} from '../../firebase/firebase.config';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);

    useEffect(()=> {
      if(user){
        console.log("USER-> ",user)
      }
    },[user])
 
    return (
            <Box bg={'white'} w={'100%'} h={50} position={'fixed'} top={0} display={'flex'} 
              gap={2} justifyContent={'space-between'} alignItems={'center'} zIndex={10000} px={6} 
              borderBottom={'1px solid'} borderColor={'gray.100'} >
               
                {/* LEFT CONTENT */}
                <LeftContent />

                {/* SEARCH BAR */}
                <SearchBar />

                {/* RIGHT CONTENT */}
                <RightContent />

            </Box>
    )
}

export default Navbar;