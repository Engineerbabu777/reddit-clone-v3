
import {FaReddit} from 'react-icons/fa';
import {Box , Text} from '@chakra-ui/react';


export default function TopBarSettings({}) {


    return(<>

        <Box display={'flex'}  alignItems={'center'} bg={'white'} 
        borderBottom={'1px solid'} h={"48px"} borderColor={'gray.200'}
         px={7} gap={2} position={'fixed'} right={0} left={0} >


            {/* ICON! */}
                <FaReddit className="text-2xl text-blue-500" />

            {/* NAME! */}
                <Text fontWeight={'600'} color={'blue.500'} fontSize={'.75rem'} textTransform={'uppercase'}>r/reddit
           
                </Text>
    
    
        </Box>
    
    </>)
}