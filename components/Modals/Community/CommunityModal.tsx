


import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton, Button, Text, Flex
} from '@chakra-ui/react';
import { CommunityState } from '@/atoms/communityAtom';
import { useRecoilState } from 'recoil';
import { AiOutlineExclamationCircle } from 'react-icons/ai';
import InputFields from './Input/Input';
import CheckBoxes from './checkboxes/CheckBoxes';
import AdultCheck from './adult/AdultCheck';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '@/firebase/firebase.config';
import { addDoc, updateDoc, deleteDoc, getDoc, doc, setDoc, serverTimestamp, runTransaction } from 'firebase/firestore';
import { toast } from 'react-hot-toast';


export interface COMMUNITY {
  Name: string;
  Length: number;
  type: string;
  adultContent: boolean;
}

const CommunityModal = () => {
  const [communityState, setCommunityState] = useRecoilState(CommunityState);
  const [user] = useAuthState(auth);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, seterror] = useState<string>('');

  const [community, setCommunity] = useState({
    Name: '' as string,
    Length: 21 as number,
    type: '' as string,
    adultContent: false as boolean,
  });

  const handleClose = () => {
    // CLOSE THE MODAL!
    setCommunityState((prev) => ({
      ...prev,
      open: false
    }));
  }


  // THAT WILL INTEGRATE WITH DATABASE AND CREATE THE COMMUNITY!
  const CreateCommunity = async () => {
    setIsLoading(true);

    if (!user) return;

    try {
      // Validte community!
      var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
      if (format.test(community.Name) || community.Name.trim().length < 3) {
        toast.error('Community name can only contains letters between 3-21 and only contain numbers, letters, underscores');
        setIsLoading(false);
        return;
      }

      const docRef = doc(db, 'communities', `${community.Name}`);

      await runTransaction(db, async (transaction) => {
        const CommunityDoc = await transaction.get(docRef);

        // CHECKS IF ALREADY EXISTS OR NOT!
        if (CommunityDoc.exists()) {
          toast.error('Community Name Already Taken!')
          setIsLoading(false)
          return
        }

        // MEANS ITS NEW COMMUNITY! AND CREATE/SET IT!
        // SAVING DATA TO DATA BASE!
        await transaction.set(docRef, {
          Name: community.Name, // SETTING THE NAME OF COMMUNITY!
          Type: community.type || 'Public', // SETTING THE TYPE OF COMMUNITY!
          isAdult: community.adultContent, // SETTING THE ADULTORY TYPE!
          Moderator: user?.uid,
          ModeratorDetails: user?.providerData[0],
          Members: 1,
          MemberIds: [user?.uid],
          createdAt: serverTimestamp(),
          image: '',
          bgImage: '',
        })

        // SET COMMUNITY SNIPPETS FOR USER!

        toast.success("Community Created!");
        // DEFAULT STATE!
        setCommunity({ Name: '', Length: 21, type: '', adultContent: false });
        handleClose(); // CLOSE THE MODAL!
      })
    } catch (err: any) {

      toast.error('Some Error Occuers, Try Again Later')
      setIsLoading(false);
    }

    setIsLoading(false);
  }

  return (
    <>

      <Modal isOpen={communityState.open} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>

          {/* HEADER ACCORD. TO ( VIEW ) */}
          <ModalHeader borderBottom={'1px solid'} borderColor={'gray.200'} p={3} mx={3}>
            <Text fontSize={'12pt'}>Create a community</Text>
            <ModalCloseButton mt={1} fontSize={'9pt'} color={'gray.600'} />

          </ModalHeader>

          <ModalBody py={5}>
            {/* BODY FOR MODAL */}

            {/* NAME_TEXT  */}
            <Flex flexDirection={'column'} >
              <Text fontSize={'12pt'} fontWeight={'500'}>Name</Text>
              <Text fontSize={'9pt'} color={'gray.500'} display={'flex'} gap={2} alignItems={'center'}>Community names including capitalization cannot be changed. <AiOutlineExclamationCircle fontSize={'10pt'} /></Text>
            </Flex>

            {/* INPUT-BOX! */}
            <InputFields community={community} setCommunity={setCommunity} />

            {/* CHECKBOXES! */}
            <CheckBoxes community={community} setCommunity={setCommunity} />

            {/* ADULTCOMPONENT */}
            <AdultCheck community={community} setCommunity={setCommunity} />



          </ModalBody>

          {/* FOOTER WITH TWO BUTTONS */}
          <ModalFooter bg={'gray.100'}>
            <Flex gap={2} >
              <Button disabled={isLoading} variant={'outline'} px={3} height={'32px'} fontWeight={'700'}
                onClick={handleClose}>Cancel</Button>
              <Button disabled={isLoading} loadingText={'Verifying'} isLoading={isLoading} variant={'solid'}
                px={3} height={'32px'} fontWeight={'700'} onClick={CreateCommunity}>Create Community</Button>
            </Flex>

          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default CommunityModal;