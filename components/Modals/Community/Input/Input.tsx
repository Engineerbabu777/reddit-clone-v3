



import React, { ReactElement, useState } from 'react'
import { Input, Text, InputGroup } from '@chakra-ui/react';
import {COMMUNITY} from '../CommunityModal';


type Props = {
  community: COMMUNITY,
  setCommunity: React.Dispatch<React.SetStateAction<COMMUNITY>>
}

function InputFields({community, setCommunity}:Props) {


  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => { 

    // Checks for length if exceeds than return !
    if (e.target.value.length > 21) return;
    setCommunity((prev) => ({...prev, Length: 21 - e.target.value.length, Name: e.target.value }));

  }

  return (

    <>

      <InputGroup position={'relative'}>
        
        <Text color={'gray.500'} top={5} left={2} mt={1} fontSize={'12pt'} position={'absolute'}>r/</Text>
        
        <Input
          variant={'unstyled'}
          outline={'0.5px solid'}
          outlineColor={'gray.200'}
          _focus={{ outline: '2px solid black' }}
          padding={'4px 4px 3px 21px'}
          borderRadius={'3px'}
          mt={5}
          _hover={{outline: '2px solid black'}}
          value={community.Name}
          onChange={onChangeInput}
        />

      </InputGroup>
      
      <Text color={community.Length > 0 ? 'gray.400' : 'red.500'} fontSize={'8pt'} mt={2} >{community.Length} Characters remaining</Text>

    </>
  )
}

export default InputFields;
