
import { Box, Text } from '@chakra-ui/react';
import OAuthProviders from '../OAuthProviders';
import OAuthInputs from './OAuthInputs';
import { useRecoilState } from 'recoil';
import { AuthState } from '@/atoms/authAtoms';

const SignUp = () => {
    const [authState, setAuthState] = useRecoilState(AuthState);

    return (
        <>

            {/* OAUTH PROVIDERS */}
            <OAuthProviders />


            {/* OR */}
            <Box w={'100'} py={5} textAlign={'center'}>
                <Text fontWeight={'semibold'} color={'gray.400'}>OR</Text>
            </Box>


            {/* OAUTH INPUTS */}
            <OAuthInputs />


            {/* SignUp */}
            <Box display={'flex'} mt={1} justifyContent={'center'} gap={1}>
                <Text fontSize={'9pt'} >Already a Redditor ?</Text>
                <Text color={'blue.500'} fontWeight={'semibold'} fontSize={'10pt'} cursor={'pointer'}
                    onClick={() => setAuthState((prev) => ({ ...prev, view: 'login' }))}>Login</Text>
            </Box>


        </>
    )
}


export default SignUp;