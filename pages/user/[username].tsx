

import SettingsLayout from '@/components/SettingsLayout';
import TopNavigation from '@/components/User/TopNavigation';
import { Box, Text, Button } from '@chakra-ui/react';
import UserLayout from '@/components/User/UserLayout';
import LeftMenu from '@/components/User/LeftMenu';
import { AiOutlineCamera, AiFillRedditSquare, AiOutlinePlus ,AiFillRedditCircle} from 'react-icons/ai';
import { FaRedditSquare } from 'react-icons/fa';
import { CiSettings } from 'react-icons/ci';
import { GiFlowerStar, GiCakeSlice } from 'react-icons/gi';
import { useState } from 'react';
import LeftSideMain from '@/components/User/LeftSideMain';

export default function Index({ }) {

  const [show, setShow] = useState < boolean > (false);

  return (<>

    <SettingsLayout>

      {/* TOP NAVIGATION FOR USER! */}
      <Box h={'100%'} bg={'white'}  >

        <TopNavigation />

      </Box>


      {/* SETTINGS MENU! */}
      <LeftMenu />


      {/* SETTINGS! */}
      <UserLayout>

        <Box h={'100%'}  >
          <LeftSideMain />
        </Box>

        <Box  h={'100%'} position={'relative'} >

          {/* USER OPTIONS BOX! */}
          <Box h={show ? '60vh' : '50vh'} w={'100%'}  position={'relative'} bg={'white'}>

            <Box h={show ? '21%' : '25%'} bg={'#33A8FF'} position={'relative'}>

              <div className="bg-white rounded-full border-1 border-blue-500 w-9 h-9 absolute bottom-2 right-2 items-center flex justify-center">
                <AiOutlineCamera className="w-6 h-6 text-blue-500" />
              </div>
            </Box>

            <Box h={show ? '22%' : '27%'} w={show ? '30%' : '30%'} bg={'white'} position={'absolute'} top={"5%"} left={'3%'} borderRadius={5}>
              {/* <FaRedditSquare className="w-full h-full text-gray-300"/> */}
              <img src={'/test.png'} className="w-full h-full" alt="img" />
              <Box h={8} w={8} bg={'white'} border={'1px solid'} borderColor={'blue.500'} display={'flex'} alignItems={'center'} justifyContent={'center'} position={'absolute'} top={'68%'} right={'-8%'} borderRadius={70}>
                <AiOutlineCamera className="w-5 h-5 text-blue-500" />
              </Box>

            </Box>

            {/* NAME + SETTING ICON */}
            <Box h={12} w={'100%'} display={'flex'} alignItems={'center'} pt={3} px={2}>
              <Text fontSize={'.77rem'} fontWeight={'semibold'} mt={1.5} >u/rocky78</Text>
              <CiSettings className="w-6 h-6 mb-4 text-blue-500 ml-auto cursor-pointer" />
            </Box>

            {/* BUTTON1 */}
            <Box display={'flex'} justifyContent={'center'} alignItems={'center'} _hover={{ opacity: '.95' }}>
              <Button w='94%' fontSize={'.90rem'} color={'white'} letterSpacing={'1px'} h={8} mx={'auto'} bgGradient='linear(to-r, red.500, orange.400)' >
                Create Avatar
              </Button>
            </Box>

            {/* KARMS + BIRH_DAY! */}
            <Box display={'flex'} justifyContent={'space-between'} px={2}  w={'100%'} mt={1}>
              {/* KARMA */}
              <Box display={'flex'} flexDirection={'column'} gap={.2} >
                <Text fontSize={'.88rem'} fontWeight={'semibold'}>Karma</Text>
                <Text display={'flex'} alignItems={'center'}>
                  <GiFlowerStar className={"w-3 h-3 text-blue-400"} />
                  <Text fontSize={'.84rem'} color={'gray.500'} mb={1}>1</Text>
                </Text>
              </Box>

              {/* CAKE DAYE */}
              <Box display={'flex'} flexDirection={'column'} gap={.2} mr={8}>
                <Text fontSize={'.88rem'} fontWeight={'semibold'}>Cake day</Text>
                <Text display={'flex'} alignItems={'center'}>
                  <GiCakeSlice className={"w-3 h-3 text-blue-400 mr-1"} />
                  <Text fontSize={'.84rem'} color={'gray.500'} mb={1}>August 27, 2021</Text>
                </Text>
              </Box>

            </Box>

            {/* ADD SOCIAL LINKS! */}
            <Button display={'flex'} alignItems={'center'} bg={'gray.100'} px={2} h={8} mt={0.5} ml={2}>
              <AiOutlinePlus className="w-5 h-5" />
              <Text fontSize={'.75rem'} fontWeight={'bold'}>Add social link</Text>
            </Button>

            {/* NEW POST! */}
            <Box display={'flex'} justifyContent={'center'} alignItems={'center'} _hover={{ opacity: '.95' }} mt={2}>
              <Button variant={'solid'} w={'94%'} h={8}>
                New Post
              </Button>
            </Box>

            {/* SHOW IF ASKED! */}
            {show && (<>
              <Button display={'block'} bg={'gray.100'} px={2} py={1} mt={2} ml={2}>Profile Moderation</Button>
              <Button display={'block'} bg={'gray.100'} px={2} py={1} mt={1} ml={2}>Custom Feed</Button>
            </>)
            }

            {/* </Box> */}

            <Box  w={'100%'} mt={2} display={'flex'} cursor={'pointer'}
              onClick={() => setShow(!show)} >
              <Text color={'#1D5D9B'} _hover={{ bg: 'gray.200' }} px={2} py={1} borderRadius={30} fontWeight={'700'} fontSize={'.90rem'} ml="auto" mr={8}>{show ? 'Fewer Options' : 'More Options'}</Text>
            </Box>

          </Box>


          {/* MY COMMUNITIES! OR I AM MODERATOR! */}
          <Box h={'16vh'} w={'100%'} mt={5} bg={'white'} p={2} >
             {/* HEADING */}
              <Text fontSize={'0.9rem'} fontWeight={'700'}  mr={12} lineHeight={'1rem'} >You&apos;re a moderator of these communities</Text>

             {/* TEXT + BUTTON! */}
             <Box display={'flex'} justifyContent={'space-between'} mt={4} >
               {/* USER */}
                <Box display={'flex'} alignItems={'center'} gap={2} >
                  {/* ICON */}
                  <AiFillRedditCircle className="w-8 h-8 text-blue-500" />

                  {/* TEXT */}
                   <Box  >
                     <Text fontSize={'.82rem'} fontWeight={'600'}>r/reddit</Text>
                     <Text  mt={-1} fontSize={'.82rem'}> 1 member</Text>
                   </Box>

                </Box>

               {/* BUTTON! */}
                <Button variant={'outline'} w={'5rem'} h={'32px'} >
                   Joined
                </Button>

             </Box>

          </Box>


          {/* TROPHY CASE! */}
          <Box h={'13vh'} w={'100%'}  mt={5} bg={'white'} p={2}>
             <Text fontSize={'0.9rem'} fontWeight={'700'}  lineHeight={'1rem'}>Trophy Case (1)</Text>

             <Box display={'flex'} gap={2} mt={4}>
              {/* IMAGE! */}
               <img className="w-9 h-9 object-contain" src={"/images/year_club.png"} alt={"img"}/>

              {/* TEXT! */}
              <Text fontSize={".9rem"} fontWeight={'600'}>One-Year Club</Text>
             </Box>

          </Box>

          {/* BUTTON! */}
          <Box  onClick={() => { window.scrollTo(0, 0) }} w={'100%'} display={'flex'} alignItems={'center'} justifyContent={'center'} mt={4} position={'sticky'} top={'93vh'}>
          <Button variant={'solid'} h={'32px'} w={'8rem'}>
            Back To Top
          </Button>
          </Box>


        </Box>

      </UserLayout>

    </SettingsLayout>

  </>
  )
}