

import { Box, Text, Button, Input, InputGroup, InputLeftElement, Icon } from '@chakra-ui/react';
import { AiOutlineSearch } from 'react-icons/ai';
import { useAuthState } from 'react-firebase-hooks/auth';
import {auth} from '../../firebase/firebase.config';

type Props = {

}
const SearchBar = ({ }: Props) => {
    const [user] = useAuthState(auth);
    
    return (

        <InputGroup display={'flex'} flexGrow={1} maxWidth={!user ? '660px' : 'auto'}>

            {/* ICON ON LEFT SIDE */}
            <InputLeftElement pointerEvents={'none'}>
                <Icon as={AiOutlineSearch} fontSize={24} color={'gray.300'} />
            </InputLeftElement>

            <Input
                bg={'gray.50'}
                _hover={{bg:'transparent',border:'1px solid', borderColor:'blue.500'}}
                placeholder='Search Reddit'
            />

        </InputGroup>

    )
}


export default SearchBar;