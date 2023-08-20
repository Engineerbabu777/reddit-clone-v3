
import { Box  , Text } from '@chakra-ui/react';
import {useEffect , useState} from 'react';
import {BsShieldFill} from 'react-icons/bs';
import {useRouter} from 'next/router';


export default function MainContainerSettings({}) {


    const router = useRouter();

   
    console.log(router.query)


    return(<>

    {/* BASED ON PARAMS IN URL! */}
     {/* NO PARAM! */}
      <Box h={'100vh'} mt={'96px'} width={{base:'100vw',xl:'80%'}} >

        <Box bg={'#F6F7F8'} h={48} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} 
         border={'2px solid red'} w={'90%'} mx={'auto'} mt={12} gap={2}>
            {/* SHILED */}
            <BsShieldFill className="text-[#8e8e8e] w-6 h-6" />

            {/* TEXT */}
             <Text >Welcome to the mod tools for r/reddit</Text>
            
        </Box>

      </Box>
    
    
    </>)
}