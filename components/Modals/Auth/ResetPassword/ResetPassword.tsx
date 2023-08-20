import { Box, Icon, Text, Input, Button, Flex } from "@chakra-ui/react";
import { FaReddit } from 'react-icons/fa';
import { BsDot } from 'react-icons/bs';
import { useRecoilState } from 'recoil';
import { AuthState } from '@/atoms/authAtoms';


const ResetPassword = () => {
    const [authState, setAuthState] = useRecoilState(AuthState);
    return (
        <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} px={12} >

            {/* LOGO */}
            <Icon as={FaReddit} fontSize={40} color={'brand.100'} />


            {/* RESET-TEXT */}
            <Text fontSize={'12pt'} fontWeight={'semibold'}>Reset your password</Text>


            {/* RESET-DESCREPTION */}
            <Text fontSize={'sm'} textAlign={'center'}>Enter the email associated with your account and we will send you a reset link</Text>
            <Input my={2} placeholder={'Enter your email'} _placeholder={{ fontSize: '10pt' }} />


            {/* RESET BUTTONS */}
            <Button variant={'solid'} height={'32px'} w={'100%'} mt={2}>Reset Password</Button>


            {/* LAST-TEXTS */}
            <Flex gap={1} mt={1} justifyContent={'center'} alignItems={'center'} color={'blue.400'} fontWeight={'semibold'}>
                <Text onClick={() => setAuthState((prev) => ({ ...prev, view: 'login' }))} cursor={'pointer'}>Login</Text>
                <Icon as={BsDot} fontSize={10} />
                <Text onClick={() => setAuthState((prev) => ({ ...prev, view: 'register' }))} cursor={'pointer'}>SignUp</Text>
            </Flex>

        </Box>
    )
}

export default ResetPassword;