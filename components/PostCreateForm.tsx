

import { Box, Flex, Input, } from '@chakra-ui/react';;
import { FaReddit, FaRegImage, FaLink } from 'react-icons/fa';
import { BsLink45Deg } from 'react-icons/bs';
import { useRouter } from 'next/router';
import { IoImageOutline } from 'react-icons/io5'
export default function PostCreate({ }) {

    const router = useRouter();


    const onHandleClickForm = () => {
        // CHECKS FOR QUERY!
        if (router?.query?.CommunityId) {
            router.push(`${router?.query?.CommunityId}/submit`);
        }

        // OPEN MODAL WITH JOINED COMMUNITIES!
        console.log("Moadal Need")

    }

    return (<>
        <Box h={14} bg={'white'} onClick={onHandleClickForm} mx={'1px'} mb={4} borderRadius={5} 
             border={'1px solid'} borderColor={'gray.300'}>
            <Flex px={2} alignItems={'center'} w={'100%'} h={'100%'} gap={2}>
                
                {/* ICON */}
                <Box color={'gray.200'} >
                    <FaReddit size={34} />
                </Box>

                {/* INPUT */}
                <Input placeholder={'Create Post'} mx={2} _hover={{ border: '1px solid', borderColor: 'blue.500' }} />

                {/* IMAGE */}
                <Box color={'#8e8e8e'} _hover={{ bg: '#EEEEEE' }} p={1}>
                    <IoImageOutline size={24} />
                </Box>


                {/* LINK */}
                <Box color={'#8e8e8e'} _hover={{ bg: '#EEEEEE' }} p={1}>
                    <BsLink45Deg size={24} />
                </Box>

            </Flex>
        </Box>

    </>)
}