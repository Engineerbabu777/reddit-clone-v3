
import { AiFillHome } from 'react-icons/ai';
import { BsChevronDown } from 'react-icons/bs';
import { GrAdd } from 'react-icons/gr';
import {
    Icon, Flex, Menu, Text,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
} from '@chakra-ui/react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/firebase.config';
import { CommunityState } from '@/atoms/communityAtom';
import { useRecoilState } from 'recoil';
import CommunityModal from '../Modals/Community/CommunityModal';

const HomeMenu = () => {
    const [user, loading, error] = useAuthState(auth);
    const [communityState, setCommunityState] = useRecoilState(CommunityState);

    return (
        <>
            <CommunityModal />

        <Menu >
            <MenuButton _hover={{ outline: '1px solid', outlineColor: 'gray.200' }} borderRadius={4}>

                <Flex justifyContent={'between'} alignItems={'center'} gap={1} p={1} ml={1} width={{ base: 'auto', lg: '200px' }}>

                    {/* ICON */}
                    <Icon as={AiFillHome} fontSize={20} />
                    {/* TEXT */}
                    <Text fontWeight={'normal'} fontSize={'12pt'} ml={1} display={{ base: 'none', lg: 'block' }}>Home</Text>
                    {/* ICON */}
                    <Icon as={BsChevronDown} fontSize={12} ml={{ base: '1px', lg: 'auto' }} />

                </Flex>

            </MenuButton>

            {/* MENU FOR HOME-PAGE */}
            <MenuList width={'100px'}>
                <MenuItem onClick={() => setCommunityState((prev) => ({ view: 'create', open: true }))} _hover={{ bg: 'blue.500', color: 'white' }} fontWeight={'semibold'} display={'flex'} alignItems={'center'}>
                    <Icon as={GrAdd} fontSize={20} mr={2} />
                    <Text fontSize={'10pt'}>Community</Text>
                </MenuItem>
            </MenuList>

        </Menu>
        </>
    )
}

export default HomeMenu;