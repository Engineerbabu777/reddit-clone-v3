import Layout from "@/components/Community/Layout";
import { Box, Text, Flex, Button, Divider } from '@chakra-ui/react';
import { BiShieldQuarter } from 'react-icons/bi';
import Main from '@/components/HomePage/Main';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase/firebase.config';
import MainBodyComponent from '@/components/NotLoggedPage/MainBodyComponent';
import {useCallback, useEffect} from 'react';
import axios from 'axios';

export default function Home() {

  const [user, loading, error] = useAuthState(auth);

  
  return (<>
  
   {/* USER NOT AVAILABLE! */}
      {  (!user && !loading ) && (<>
    
          {/* NOT LOGGED IN FRONT PAGE! */}
            <MainBodyComponent />

        </>)
      }

   {/* USER AVAILABLE! */}
    { (user && !loading) && 
   <Layout>

      <Box mt={14} mb={-14}>
    
        {/* LEFT-SIDE-HOME-PAGE! */}
        <Main />

      </Box>
      


      <Box h={'100%'} position={'relative'} mt={14}>

        {/* TOP BOX PREMIUM! */}
        <Box p={2} bg={'white'} mb={5} w={'100%'} borderRadius={5}  border={'1px solid'} borderColor={'gray.300'}>
          <Flex alignItems={'center'} gap={2}>
            {/* ICON! */}
            <Text color={'#ff5414'}>
              <BiShieldQuarter size={32} />
            </Text>
            {/* TEXT! */}
            <Flex gap={1} flexDirection={'column'}>
              <Text fontSize={'0.84rem'} fontWeight={'500'}>Reddit Premium</Text>
              <Text fontSize={'0.78rem'}>The best Reddit experience, with monthly Coins</Text>
            </Flex>

          </Flex>
          <Button variant={'solid'} mt={1} h={'28px'} w={'100%'} bg={'#ff5414'} _hover={{ opacity: 0.92 }}>Try Now</Button>
        </Box>


        {/* CREATE POST / CREATE COMMUNITY BOX! */}
        <Box bg={'white'} pb={2} borderRadius={5}  border={'1px solid'} borderColor={'gray.300'}>

          <Box position={'relative'} h={24} >

            {/* TOP IMAGE */}
            <img src={'https://www.redditstatic.com/desktop2x/img/id-cards/home-banner@2x.png'}
              className="w-full h-8" alt={'picc'} />

            {/* IMAGE + HOME! */}
            <Flex w={'100'}>
              <img src={'https://www.redditstatic.com/desktop2x/img/id-cards/snoo-home@2x.png'}
                alt={'logo'} className="h-18 w-10 absolute top-4 left-2 " />
              <Text position={'absolute'} fontWeight={'600'} top={12} left={16}>Home</Text>
            </Flex>

            {/* BUTTONS! */}

          </Box>

          <Box bg={'white'} px={2} mt={-1}>

            <Text fontSize={'0.84rem'}>
              Your personal Reddit front page. Come here to check in with your favorite communities.
            </Text>

            <Divider color={'gray.200'} mt={4} mb={3} />
            <Flex flexDirection={'column'} gap={2}>
              <Button variant={'solid'} h={'30px'} w={'100%'}>Create Post</Button>
              <Button variant={'outline'} h={'30px'} w={'100%'}>Create Community</Button>
            </Flex>

          </Box>



        </Box>




        {/* AGGREMENT LISENCE! */}
        <Box bg="white"  mt={5} p={3} color={'gray.700'}  position={'sticky'} top={"3.5rem"}
        fontSize={'.80rem'} borderRadius={5}  border={'1px solid'} borderColor={'gray.300'}>

          <Flex gap={8}>

            <Flex flexDirection={'column'} flex={1} gap={1} >
              <Text>User&nbsp;Agreement</Text>
              <Text>Privacy&nbsp;Policy</Text>
            </Flex>

            <Flex flexDirection={'column'} flex={1} gap={1}>
              <Text>Content&nbsp;Policy</Text>
              <Text>Moderator&nbsp;Code Of Conduct</Text>
            </Flex>

          </Flex>

          <Divider color={'gray.300'} my={3} />

          <Flex gap={8}>

            <Flex flexDirection={'column'} flex={1} gap={1}>

              <Text>English</Text>
              <Text>Spanish</Text>
              <Text>Italaino</Text>

            </Flex>

            <Flex flexDirection={'column'} flex={1} gap={1}>
              <Text>Deutsch</Text>
              <Text>Español</Text>
              <Text>Portegauo</Text>

            </Flex>

          </Flex>

          <Divider color={'gray.300'} my={3} />

          <Text>Reddit, Inc. © 2023. All rights reserved.</Text>


        </Box>
        {/* BACK TOP TOP! */}

        <Button onClick={() => { window.scrollTo(0, 0) }} mt={4} ml={24} textAlign={'center'} variant={'solid'} 
            height={'30px'} px={3} letterSpacing={'0.3px'} position={'sticky'} top={"18rem"}>Back to Top</Button>
            


      </Box>


    </Layout>
}
  </>)
}
