


import React,{useState,useEffect} from 'react'
import { Box, Flex, Text, Button } from '@chakra-ui/react';
import { FaReddit } from 'react-icons/fa';
import { IoMdNotifications } from 'react-icons/io';
import Image from 'next/image';
import useCommunityHook from '@/hooks/useCommunityHook';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth,db } from '@/firebase/firebase.config';
import {toast} from 'react-hot-toast';
import { getDoc, doc, updateDoc,collection,getDocs } from 'firebase/firestore';
import {useRouter} from 'next/router';


type Props = {
    Name: string;
    image: string;
    bgImage: string;
    memberIds:[string],
    isModerator:any,

}

export default function Header({ Name, image, bgImage , memberIds, isModerator }: Props) {

    const {onJoined , onLeave} = useCommunityHook();
    const [user] = useAuthState(auth);
    const [isJoined,setIsJoined] = useState(false);
    const [isLoading , setIsLoading]  = useState(false);

    const router = useRouter();

    useEffect(() => {
     
        if(user){
        setIsJoined(memberIds?.includes(user?.uid))
     }

    },[user,memberIds])


    const handleJoinOrLeave = async() => {

        if(!user) return;

        // CHECKS CURRENT USER UID IF PRESENT IN COMMUNITY USERS!
         const isAlreadyMember = memberIds?.includes(user?.uid);
      
         // VERIFY THAT IS IT THE ADMIN/MODERATOR OR NOT!
         const isAdmin = isModerator === user?.uid;

         console.log("a: ",isAlreadyMember , "b: ",isAdmin)

         // VERIFY ADMINS!
         if(isAlreadyMember && isAdmin ) {
             toast.error("Admins can't leave!")
             return;
         } 

         setIsLoading(true);

         // IF EXISTS THEN NEEDS TO REMOVE!
         if(isAlreadyMember)
          onLeave(Name , memberIds,setIsJoined , isJoined ,setIsLoading);

         
         // IF NOT EXISTS THEN NEED TO ADD!
         if(!isAlreadyMember)
          onJoined(Name , memberIds, setIsJoined , isJoined,setIsLoading);

          
      
    }

    return (

        <Box h={'14rem'} mt={13}>

            {/* BACKGROUND-IMAGE/BACKGROUND-COLOR*/}
            <Box bg={'blue.500'} h={'7.5rem'} >

            </Box>

            {/* WHITE BOX */}

            <Box bg={'white'} w={'100'} h={'5.5rem'}>
                <Box maxWidth={'960px'} px={{ base: 2, md: 0 }} minWidth={'100'} mx={'auto'} h={'6rem'} >

                    {/*IMAGE/LOGO-COMMUNITY */}
                    <Box position={'relative'}>
                        <Box border={'3px solid'} color={'blue.400'} p={0} borderRadius={100} top={-4}
                            position={'absolute'} borderColor={'white'} overflow={'hidden'}>
                            {image ? (<>
                                <Image src={'/test.png'} height={'75'} width={'75'} alt={'pic'} />
                            </>) : (<>
                                <FaReddit size={'4.8em'} border={'1px solid black'} />
                            </>)

                            }
                        </Box>
                    </Box>


                    <Box ml={'6.5rem'} display={'flex'} gap={7}>
                        <Flex flexDirection={'column'}>
                            {/* COMMUNITTY NAME */}
                            <Text pt={2} fontSize={'19pt'} fontWeight={'700'} letterSpacing={'1px'} >{Name}</Text>
                            {/* COMMUNITY REDDIT r/NAME */}
                            <Text color={'gray.500'} fontWeight={'semibold'} fontSize={'11pt'} mt={1}>r/{Name}</Text>
                        </Flex>


                        <Flex gap={2}>
                            {/* BUTTON TO JOINED/REMOVE! */}
                            <Button isLoading={isLoading} 
                             loadingText={isJoined ? 'Leaving' : 'Joining'} onClick={handleJoinOrLeave} 
                             variant={isJoined ? 'outline':'solid'} height={'30px'} px={6} mt={3}>
                                {isJoined ? 'Leave' : 'Join'}
                            </Button>

                            {/* NOTIFICATIONS! */}
                            <Box border={'1px solid'} color={'blue.600'} p={'2px'} h={'30px'} w={'30px'}
                                cursor={'pointer'} borderRadius={'100'} mt={3} overflow={'hidden'} borderColor={'blue.500'}>
                                <IoMdNotifications size={24} />
                            </Box>
                        </Flex>

                    </Box>

                </Box>

            </Box>


































        </Box>
    )
}