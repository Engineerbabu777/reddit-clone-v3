import OAuthButtons from "./OAuthButtons";
import UserMenu from "./UserMenu";
import { Flex,Text } from '@chakra-ui/react';
import AuthModalComponent from '../Modals/Auth/authModal';
import { useAuthState } from 'react-firebase-hooks/auth';
import {auth} from '../../firebase/firebase.config';
import NavbarIcons from './NavbarIcons';

interface Props {

}

const RightContent = ({ }: Props) => {
    const [user, loading, error] = useAuthState(auth);

    return (
        <>
            {/* MODAL TO SHOW */}
            <AuthModalComponent />

            <Flex gap={2}>
                
                {/* CHECKS IF USER AVAILABLE OR NOT! */}
                { user ? (<>
{/* NAVBAR ICONS COMPONENT */}
                 <NavbarIcons />

                  </>) : <>
                  
                 {/* TWO BUTTONS */}
                 <OAuthButtons />

                  </>
                }

                {/* CHECKS ENDS FOR USER AVAILBLE */}
                

                {/* USER MENU */}
                <UserMenu />

            </Flex>
        </>
    )
}

export default RightContent;