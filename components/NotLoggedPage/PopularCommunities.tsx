
import { Flex, Box,Text,Divider,Button,Grid,GridItem,Wrap, WrapItem ,Center  } from '@chakra-ui/react';
import { BsChevronDown, BsStars,BsChevronUp } from 'react-icons/bs';
import {useState} from 'react';
import { Fade, ScaleFade, Slide, SlideFade, Collapse } from '@chakra-ui/react';
import Link from 'next/navigation';
import PopComComponent from './PopComComponent';

export default function PopularCommunities({}) {

    return(
        
        <Box  bg={'white'} >
        
        <PopComComponent name={'Popular Communities'} />
        <PopComComponent name={'Gaming'} />
        <PopComComponent name={'Sports'} />
        <PopComComponent name={'TV'} />
        <PopComComponent name={'Travel'} />
        <PopComComponent name={'Health & fitness'} />
        <PopComComponent name={'Fashion'} />
        
        </Box>
    )
}