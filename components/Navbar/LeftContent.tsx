
import React from 'react';
import { Flex } from '@chakra-ui/react'
import Image from 'next/image';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/firebase.config';
import HomeMenu from './HomeMenu';

type Props = {

}

const LeftContent = () => {
    const [user] = useAuthState(auth);

    return (
        <Flex align={"center"} >

            <Flex alignItems={"center"} justifyContent={'center'} mr={1} width={{ base: '30px', lg: 'auto' }}>

                {/* IMAGE 1 */}
                <Flex width={{ base: '29px', md: '32px' }} height={{ base: '32px', md: '34px' }}>
                    <Image
                        src={'/images/redditFace.svg'}
                        width={'50'}
                        height={'50'}
                        alt={'logo-1'}
                    />
                </Flex>

                {/* IMAGE 2 */}
                <Flex display={{ base: 'none', lg: 'flex' }} width={{ base: '', lg: '70px' }}>
                    <Image
                        src={'/images/redditText.svg'}
                        width={100}
                        height={100}
                        alt={'logo-2'}
                    />
                </Flex>
            </Flex>

            {/* HOME MENU */}
            {user && <HomeMenu />}

        </Flex>
    )
}

export default LeftContent;