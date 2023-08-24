

import LayoutFront from './Layout';
import {Box ,Flex, Text} from '@chakra-ui/react';
import Right from './Right';
import Left from './Left';


export default function MainBodyComponent({}) {


    return(<>

    <LayoutFront>

        <Box>
           <Left />
        </Box>


        <Box position={'relative'} alignItems={'center'} mt={12} justifyContent={'center'}>
            <Right />
        </Box>

    </LayoutFront>

    {/* LAYOUT! */}

    {/* TRENDING NEWS! */}

    {/* POPULAR POSTS! */}

    {/* POPULAR COMMUNITIES! */}

    </>)
}