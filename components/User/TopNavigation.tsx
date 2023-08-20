

import {Box, Text, Flex,Grid} from '@chakra-ui/react'
import TEXT from './TopText';
import {useState} from 'react';
import {BsThreeDots} from 'react-icons/bs';


export default function TopNavigation() {
    
    const [currentState , setCurrentState] = useState<string>('OVERVIEW');
    
    return(<>

       
    <Box display={'flex'}     pt={3}  gap={1} 
     alignItems={'center'} justifyContent={'center'}>

      <Box display={{base:'none' , xl:'block'}} bg={'red.200'} width={'20vw'}>
    
      </Box>
          
          {/* OVERVIEW MODE! */}
           <TEXT text={'OVERVIEW'} currentState={currentState} setState={setCurrentState} />
          
          {/* POSTS MODE! */}
           <TEXT text={'POSTS'} currentState={currentState} setState={setCurrentState} />

          {/* COMMENTS MODE! */}
           <Box display={{base:'none',sm:'flex'}}>
             <TEXT text={'COMMENTS'} currentState={currentState} setState={setCurrentState}/>
           </Box>

          {/* HISTORY MODE!  */}
           <Box display={{base:'none',md:"flex"}}>
             <TEXT text={'HISTORY'} currentState={currentState} setState={setCurrentState}/>
           </Box>

          {/* SAVED! */}
           <Box display={{base:'none',md:"flex"}}>
             <TEXT text={'SAVED'} currentState={currentState} setState={setCurrentState}/>
           </Box>

          {/* HIDDEN!  */}
           <Box display={{base:'none',md:'flex'}}>
            <TEXT text={'HIDDEN'} currentState={currentState} setState={setCurrentState}/>
           </Box>

          {/* UPVOTED! */}
           <Box display={{base:'none',md:'flex'}}>
            <TEXT text={'UPVOTED'} currentState={currentState} setState={setCurrentState}/>
           </Box>

           {/* DOWNVOTED! */}
            <Box display={{base:'none',lg:"block"}}>
              <TEXT text={'DOWNVOTED'} currentState={currentState} setState={setCurrentState}/>
            </Box>

           {/* AWARD RECIEVED! */}
               <Text fontWeight={'500'} display={{base:'none' , xl:'block'}} bg={'gray.100'} px={2} py={1} _hover=     {{color:'blue.500'}} onClick={() => setCurrentState('AWARD GIVEN')} color={currentState === 'AWARD GIVEN' ?  'blue.500':''} cursor={'pointer'} borderBottom={currentState=== 'AWARD GIVEN' ? '2px solid':''} borderColor={'blue.500'} >AWARD&nbsp;RECIEVED</Text>

           {/* AWARD GIVEN!  */}
               <Text fontWeight={'500'} bg={'gray.100'} display={{base:'none', '2xl':"block"}}  px={2} py={1} _hover={{color:'blue.500'}} onClick={() => setCurrentState('AWARD RECIEVED')}color={currentState === 'AWARD RECIEVED' ? 'blue.500':''} cursor={'pointer'} borderBottom={currentState=== 'AWARD RECIEVED' ? '2px solid':''} borderColor={'blue.500'}  >AWARD&nbsp;RECIEVED</Text>

            {/* THREE DOTS! */ }
                <Box display={{base:'block' , '2xl':'none'}} color={'#8e8e8e'}  my={2} mx={1} gap={1} alignItems={'center'} px={3} _hover={{ bg: '#EEEEEE' }} cursor={'pointer'} >
                   {/* ICON */}
                    <BsThreeDots className="h-5 w-5 " />
                </Box>

    </Box>

    
    </>)
}