


import React from 'react'
import { Box, Flex, Text, Button } from '@chakra-ui/react';
import { RiCheckboxBlankCircleFill } from 'react-icons/ri';
import { useRouter } from 'next/navigation';
import { CommunityState } from '@/atoms/communityAtom';
import { useRecoilState } from 'recoil';

import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase/firebase.config';

type Props = {}

export default function NotFoundPage({ }: Props) {

  const router = useRouter();
  const [communityState, setCommunityState] = useRecoilState(CommunityState);
  const [user] = useAuthState(auth);


  return (<Box display={'flex'} flexDirection={'column'} mt={20} color={'#a8a8a8'} justifyContent={'center'} alignItems={'center'} >

    <RiCheckboxBlankCircleFill size={'8rem'} />

    <Text fontWeight={'600'} fontSize={'14pt'} color={'black'}>Sorry, there aren’t any communities on Reddit with that name.</Text>


    <Text fontSize={'10pt'} color={'black'} mt={4} fontWeight={'500'}>This community may have been banned or the community name is incorrect.</Text>

    <Flex gap={3} mt={'3rem'} mb={'2rem'}>
      {user && (
        <Button onClick={() => { setCommunityState((prev) => ({ ...prev, open: true })) }}
          variant={'outline'} _hover={{ bg: '#DDE6ED' }} px={5} height={'32px'} fontWeight={'700'}>
          Create Community</Button>
      )}
      <Button variant={'solid'} px={5} height={'32px'} fontWeight={'800'}
        onClick={() => { router.push('/') }} >Go To Home</Button>

    </Flex>

    <Text w={'96'} textAlign={'center'} fontSize={'8pt'} color={'gray'} fontWeight={'semibold'}>
      Use of this site constitutes acceptance of our User Agreement and Privacy Policy. Reddit, Inc. © 2023. All rights reserved. REDDIT and the ALIEN Logo are registered trademarks of reddit inc.
    </Text>

  </Box>)
}