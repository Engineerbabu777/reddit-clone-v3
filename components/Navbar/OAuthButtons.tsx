import { Box, Button, Flex } from "@chakra-ui/react";
import { useRecoilState } from 'recoil';
import { AuthState } from '@/atoms/authAtoms';
import {MdQrCodeScanner} from 'react-icons/md'; 

const OAuthButtons = () => {

    const [authState,setAuthState] = useRecoilState(AuthState);


    return (
        <Flex gap={2} display={{base:'none',md:'flex'}}>

            
            <Button onClick={()=> setAuthState({view:'login',open:true})} 
            variant={'grayV'} px={'26px'} textAlign={'center'} display={'flex'} alignItems={'center'} gap={2}> <MdQrCodeScanner size={18} />Get App</Button>
            <Button onClick={()=> setAuthState({view:'login',open:true})} 
               variant={'orangeV'} px={'34px'}>Log In</Button>

        </Flex>
    )
}

export default OAuthButtons;