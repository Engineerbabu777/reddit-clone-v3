import React from 'react';
import {BsArrowUpRightCircle, BsCameraVideo, BsChatDots} from 'react-icons/bs';
import {IoNotificationsOutline, IoFilterCircleOutline} from 'react-icons/io5';
import {GrAdd} from 'react-icons/gr';
import {FaRedditSquare} from 'react-icons/fa';
import {Divider, Icon, Flex} from '@chakra-ui/react';


const NavbarIcons = () => {
    return(
        <Flex  alignItems={'center'} justifyContent={'center'}>
<Flex display={{base:'none',md:'flex'}} borderRight={'1px solid'} borderColor={'gray.300'} alignItems={'center'} justifyContent={'center'}>
            <Flex _hover={{bg:'gray.200'}}  padding={1} cursor={'pointer'} borderRadius={4} mr={1.5} ml={1.5}>
             <Icon as={BsArrowUpRightCircle} fontSize={20} />
            </Flex>

            <Flex _hover={{bg:'gray.200'}} padding={1} cursor={'pointer'} borderRadius={4} mr={1.5} ml={1.5}>
             <Icon as={IoFilterCircleOutline} fontSize={22} />
            </Flex>

            <Flex _hover={{bg:'gray.200'}} padding={1} cursor={'pointer'} borderRadius={4} mr={1.5} ml={1.5}>
             <Icon as={BsCameraVideo} fontSize={22} />
            </Flex>
</Flex>

            <Flex _hover={{bg:'gray.200'}} padding={1} cursor={'pointer'} borderRadius={4} mr={1.5} ml={1.5}>
             <Icon as={BsChatDots} fontSize={20} />
            </Flex>

            <Flex _hover={{bg:'gray.200'}} padding={1} cursor={'pointer'} borderRadius={4} mr={1.5} ml={1.5}>
             <Icon as={IoNotificationsOutline} fontSize={20} />
            </Flex>

            <Flex display={{base:'none',md:'flex'}} _hover={{bg:'gray.200'}} padding={1} cursor={'pointer'} borderRadius={4} mr={1.5} ml={1.5}>
             <Icon as={GrAdd} fontSize={20}  />
            </Flex>

        </Flex>
    )
}

export default NavbarIcons;