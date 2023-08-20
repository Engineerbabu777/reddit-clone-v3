
import { Flex, Box,Text,Divider,Button,Grid,GridItem,Wrap, WrapItem,Center  } from '@chakra-ui/react';
import { BsChevronDown, BsStars,BsChevronUp } from 'react-icons/bs';
import React , {useState} from 'react';
import { Fade, ScaleFade, Slide, SlideFade, Collapse } from '@chakra-ui/react';
import Link from 'next/link';

type Props = {
  name: string;
  Icon?: any;
}

export default function PopComComponent({name,Icon}:Props) {

    const [show , setShow] = useState<boolean>(false);

    return(<>
              <Flex py={2} w={'100%'} fontSize={'0.60rem'} fontWeight={'700'} onClick={() => setShow(!show)} 
          color={'gray.500'} px={2} alignItems={'center'} justifyContent={Icon ? '' : 'space-between'} cursor={'pointer'}>
           
          
          {/* ICON! */}
            {Icon}
        
            {/* TEXT */}
           <Text color={'black'} textTransform={'uppercase'} ml={Icon ? 2: '0px'} letterSpacing={'1px'}>{name}</Text>
           
            {/* ICON */}
            { !show ? (<Box ml={Icon? 'auto': '0px'}> <BsChevronDown size={18} /> </Box>) : (<Box ml={Icon? 'auto': '0px'}> <BsChevronUp size={18} /> </Box>) }

        </Flex>
        
        <Collapse in={show} animateOpacity>
        <Box
         px={2}
         bg='white'
         shadow='md'
         w={'100%'}
        >
        <Flex py={1} gap={5}>
            <Text _hover={{textDecoration:'underline'}} cursor={'pointer'} fontSize={'0.75rem'} 
             fontWeight={'600'} >AskReddit</Text>
            <Text _hover={{textDecoration:'underline'}} cursor={'pointer'} fontSize={'0.75rem'} 
             fontWeight={'600'} >TurkeyeDevelopers</Text>
        </Flex>
        </Box>
      </Collapse>

        <Divider color={'gray.300'} />
        
    </>)
}