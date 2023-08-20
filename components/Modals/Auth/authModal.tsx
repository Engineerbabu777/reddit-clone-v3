

import { AuthState } from '@/atoms/authAtoms';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,Button
  } from '@chakra-ui/react';
  import {useRecoilState} from 'recoil';
import Login from './Login/Login';
import SignUp from './SignUp/SignUp';
import ResetPassword from './ResetPassword/ResetPassword';

const AuthModalComponent = () => {
   const [authState,setAuthState] = useRecoilState(AuthState);

   const handleClose = () => {

    // CLOSE THE MODAL!
      setAuthState((prev) => ({
        ...prev,
        open:false
      }));
      
   }
    return (
      <>
  
        <Modal isOpen={authState.open} onClose={handleClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader textAlign={'center'}>
              {/* HEADER ACCORD. TO ( VIEW ) */}
              {authState.view === 'login' && 'Login'}
              {authState.view === 'register' && 'Sign Up'}
              {authState.view === 'resetPassword' && 'Reset Password'}
            </ModalHeader>
            <ModalCloseButton />
            
            <ModalBody py={5}>
              {/* BODY FOR MODAL */}
              { authState.view === 'login' && <Login /> }
              { authState.view === 'register' && <SignUp /> }
              { authState.view === 'resetPassword' && <ResetPassword /> }
            </ModalBody>
  
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default AuthModalComponent;