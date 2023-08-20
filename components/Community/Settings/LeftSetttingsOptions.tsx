import {Box, Flex , Text } from '@chakra-ui/react';
import {AiOutlineArrowLeft} from 'react-icons/ai';
import {useRouter} from 'next/router';
import Link from 'next/link'
import OptionComponent from './SettingOptions/OptionComponent';
import OverviewComponent from './SettingOptions/OverviewComponent';
import ModerationComponent from './SettingOptions/ModerationComponent';
import ContentComponent from './SettingOptions/ContentComponent';
import CommunityAppsComponent from './SettingOptions/AppsComponents';
import SettingsComponent from './SettingOptions/SettingsComponent';
import SupportComponent from './SettingOptions/SupportComponent';

export default function LeftCommunitySettings({}) {

     const router = useRouter();
      
      return( 
        <Box bg={'white'} display={{base:'none',xl:'block'}} borderTop={'1px solid'} w={'20vw'} h={'100%'}   
          borderColor={'gray.200'} position={'relative'}  >
            <Flex bg={'white'}  flexDirection={'column'}  w={'20vw'} pt={2}  h={'calc(100% - 96px)'} position={'fixed'} 
              left={0} bottom={0} overflow={'auto'}>


          {/* EXIT! */}
            <Link href={`/r/${router?.query?.CommunityId}`}>
               <Box cursor={'pointer'} display={'flex'} mx={3} gap={2} alignItems={'center'} width={'fit-content'} >
                 {/* ICON! */}
                   <AiOutlineArrowLeft className="w-6 h-6 text-gray-500"/>

                 {/* TEXT! */}
                   <Text color={'gray.500'} >Exit mod tools</Text>
               </Box>
            </Link>

        {/* OVERVIEW! */}
           <OverviewComponent />


        {/* MODERATION! */}
           <ModerationComponent />


        {/* CONTENT! */}
           <ContentComponent />


        {/* COMMUNITY APPS! */}
          <CommunityAppsComponent />


        {/* SETTINGS! */}
          <SettingsComponent />

      
        {/* SUPPORT! */}
          <SupportComponent />


        {/* TEXT COPYRIGHT!*/}
         <Box mx={5} my={2} w={'40%'} color={'gray.500'}>
           <Text fontSize={'.70rem'} fontWeight={'500'}>
           Reddit Inc © 2023 All rights reserved
           </Text>
         </Box>
    
     </Flex>
    </Box>
    
    )
}