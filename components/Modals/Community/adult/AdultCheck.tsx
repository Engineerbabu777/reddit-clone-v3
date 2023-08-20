
import {Box , Checkbox,Text,Flex} from '@chakra-ui/react';
import React from 'react';
import {COMMUNITY} from '../CommunityModal';


type Props = {
    community: COMMUNITY,
    setCommunity: React.Dispatch<React.SetStateAction<COMMUNITY>>
  }

export default function AdultCheck({community, setCommunity}:Props) {


    return(<Box mt={8}>
    
    <Text fontSize={'12pt'} fontWeight={'500'}>Adult content</Text>
    
    <Flex gap={2} alignItems={'center'} >
        <Checkbox size={'lg'} borderRadius={'full'} 
         onChange={() => setCommunity((prev) => ({...prev,adultContent:!community.adultContent}))} 
         isChecked={community.adultContent}/>
        <Text bg={'red.400'} color={'white'} px={'3px'} fontSize={'8pt'} fontWeight={'500'}>NSFW</Text>
        <Text fontSize={'11pt'} fontWeight={'semibold'}>18+ year old community</Text>

    </Flex>
    
    </Box>)
}