
import { Flex ,Text,Box} from '@chakra-ui/react';
import Image from 'next/image';
import {FaReddit} from 'react-icons/fa';
import Link from 'next/link';



type Props = {
   img: string;
   heading: string;
   text:string;
   communityName:string;
   color: string;
}

export default function News({img, heading, text, communityName,color }:Props) {


    return(
        <>
         <Box position={'relative'} cursor={'pointer'} h={48} minWidth={'260px'} borderRadius={10} 
          overflow={'hidden'} color={'white'} backdropFilter="auto" backdropBlur="6px">
       
       <img 
          src={img} 
          className=""
          style={{ width: '100%', height: '100%',position:'absolute', opacity:0.7 }}
          alt={'newi'}/>
         
         {/* HEADING */}
         <Text position={'absolute'} px={3} lineHeight={1} fontWeight={'700'}  
          bottom={16} zIndex={1000} fontSize={'1.01rem'} opacity={1} mb={1}>{heading}</Text>
 
         {/* TEXT */}
         <Text position={'absolute'} px={3} fontSize={'.88rem'} zIndex={1} lineHeight={4}  bottom={8} 
          zIndex={1000} >
          {text}
         </Text>
 
         {/* COMMUNITY */}
         <Flex position={'absolute'} px={3} bottom={2} gap={1} alignItems={'center'} zIndex={1}>
   
        {/* PIC */}
          <FaReddit color={color} size={'1.1em'} border={'1px solid black'} />
    
        {/* NAME */}
          <Link href={'/'}  className="text-[0.76rem] transition-all duration-250 
            hover:underline">r/{communityName}</Link>
        
        </Flex>

        <Box bg={'black'} zIndex={-2} position={'absolute'} bottom={'1px'} h={'100%'} w={'100%'} opacity={0.82}/>
        <Box bg={'black'} zIndex={0} position={'absolute'} bottom={'0px'} h={24} w={'100%'} opacity={0.5}/>
          
        
     </Box>
        
        </>
    )
}