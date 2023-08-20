

import { VStack , Button,Text } from '@chakra-ui/react';
import Image from 'next/image';
import React,{useState} from 'react'
import { db, app, storage, auth,google } from '@/firebase/firebase.config';
import {signInWithPopup} from 'firebase/auth';
import { useRecoilState } from 'recoil';
import { AuthState } from '@/atoms/authAtoms';

interface Props {
    
}

const OAuthProviders = (props: Props) => {
    const [isLoading, setIsLoading] = useState(false);
    const [authState, setAuthState] = useRecoilState(AuthState);

    
// SIGN IN WITH GOOGLE!
const googleSignIn = async() => {
    setIsLoading(true);
    // WILL SIGN IN!  
    const {user} = await signInWithPopup(auth,google);
    setIsLoading(false);

    // CLOSE MODAL
    setAuthState((prev) => ({...prev,open:false}));


}


    return (
        <VStack gap={1}>
            <Button isLoading={isLoading} onClick={googleSignIn} variant={"oauth"} px={3} width={'300px'} height={'32px'} display={'flex'} gap={2}>
            <Image src={'/images/googlelogo.png'} width={20} height={20} alt={'Google logo'} />
            <Text>Continue with Google</Text>
            </Button>
            <Button variant={"oauth"} px={3}  width={'300px'} height={'32px'}>Some Other Providers</Button>
        </VStack>
    )
}

export default OAuthProviders
