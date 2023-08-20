
import {Text} from '@chakra-ui/react';


type Props = {
 text:  string;
 currentState:  string;
 setState: any;
}

export default function TEXT({text , currentState, setState}:Props) {

    const updateState = () => {
       setState(text)
    }

  return(<>
  
  <Text fontWeight={'500'} bg={'gray.100'} px={2} py={1} _hover={{color:'blue.500'}} onClick={updateState}
    color={currentState === text ? 'blue.500':''} cursor={'pointer'} borderBottom={currentState===text ? '2px solid':''} 
    borderColor={'blue.500'}  >{text}</Text>
  </>)

}