
import React from 'react';
import {Box ,Flex, Text,Grid} from '@chakra-ui/react';

type Props = {
    children: React.ReactNode | any | undefined | null;
}

export default function LayoutFront({children} : Props) {

    return(
        <Flex>

            {/* LEFT! */}
            <Flex  maxWidth={'21vw'} minWidth={'16vw'} display={{base:'none',lg:'flex'}}  
               >{children[0]}</Flex>

            {/* RIGHT */}
            <Flex maxWidth={'76vw'} minWidth={'81vw'} >{children[1]}</Flex>

        </Flex>
    )

}