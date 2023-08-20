
import { Text, Flex, Box, Divider, Button, Grid, Input, Textarea, Checkbox } from '@chakra-ui/react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react'
import { BsChevronDown, BsReddit, BsLink45Deg, BsFillImageFill } from 'react-icons/bs';
import Layout from '@/components/Community/Layout';
import { TiDocumentText } from 'react-icons/ti';
import { BiPoll } from 'react-icons/bi';
import { AiOutlineExclamationCircle } from 'react-icons/ai';
import React, { useState } from 'react';
import Image from 'next/image';
import { IoMdCloseCircle } from 'react-icons/io';
import { db, storage } from '@/firebase/firebase.config';
import { getStorage, getDownloadURL, uploadString, ref } from 'firebase/storage';
import { addDoc, getDoc, getDocs, doc, setDoc, updateDoc, serverTimestamp, runTransaction, collection } from 'firebase/firestore';
import { useRouter } from 'next/router';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase/firebase.config';
import { Post } from '@/atoms/postAtoms';
import { toast } from 'react-hot-toast';
import { ClipLoader } from 'react-spinners';

export default function Submit({ }) {

  const router = useRouter();
  const [user] = useAuthState(auth);

  // CURRENT-STATE!
  const [selectedTab, setSelectedTab] = useState({
    tab: "images" as string,
    image: null,
    title: "" as string,
    loading: false,
  })

  const onSelectFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
    // FILES EXISTS!
    if (!event.target.files) return;
    const reader = new FileReader();
    if (event?.target?.files[0]) {
      reader.readAsDataURL(event.target.files[0])
    }
    reader.onload = (readerEvent) => {
      if (readerEvent?.target?.result) {
        setSelectedTab((prev) => ({ ...prev, image: readerEvent.target.result as string }));
      }
    }
  };



  // OnPost CALL!
  const onPost = async () => {
    // Check if the user is logged in!
    if (!user) return;
    setSelectedTab((prev) => ({ ...prev, loading: true }));


    // CREATED NEW POST!
    const newPost: Post = {
      communityId: router?.query?.CommunityId,
      creatorID: user?.uid,
      title: selectedTab.title,
      numberOfComments: 0,
      voteStatus: 0,
      createdAt: serverTimestamp(),
      creatorName: user?.displayName || user?.email?.split('@')[0],
      type: 'image',
      downVotesIds:[],
      upVotesIds:[],
    }

    // SAVE DATA IN DATABASE!
    const postKey = `${Date.now()}`
    await setDoc(doc(db, 'Posts', postKey), newPost);

    // TIME TO SAVE IMAGE IF EXISTS!

    // NOT EXISTS WILL RETURN!
    if (!selectedTab?.image) {
      toast.success('Post Saved!');
      return;
    }

    // OTHERWHISE IMAGE EXISTS!
    try {

      const postDocRef = doc(db, 'Posts', postKey); // Collection Access;

      // Check for selcted file
      if (selectedTab?.image) {

        const imageRef = ref(storage, `posts/${postDocRef.id}/image`);

        await uploadString(imageRef, selectedTab.image, "data_url");
        const downloadURL = await getDownloadURL(imageRef);

        await updateDoc(postDocRef, {
          image: downloadURL,
        })
      }


      toast.success('Post Saved!');

    } catch (err: any) {
      console.log('Storage database error: ', err);
    }

    setSelectedTab((prev) => ({ ...prev, loading: false }));

  }

  return (<Layout>

    <Box h={'100%'} mt={14}>
      {/* CREATE A POST TAG! */}
      <Flex justifyContent={'space-between'} alignItems={'center'} my={'0.9rem'} px={2}>
        <Text color="gray.600" fontWeight={'500'} >Create a post</Text>
        <Text display={'flex'} gap={1} alignItems={'center'} color={'blue.500'} letterSpacing={'0.3px'} fontSize={'0.9rem'} fontWeight={'semibold'}>Drafts <Text bg={'gray.500'} borderRadius={2} h={'1.2rem'} px={'2px'} fontSize={'0.8rem'} textAlign={'center'} color={'white'} >0</Text></Text>
      </Flex>

      <Divider color={'black'} bg={'white'} h={'0.9px'} />


      {/* OPTIONS TO WHICH COMMUNITY TO POSTS! */}
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />} bg={'white'} p={1} px={2} h={'34px'} borderRadius={4} mt={2} >
          <Flex color={'blue.500'} gap={'0.5rem'} alignItems={'center'}>
            {/* ICON */}
            <BsReddit size={20} />

            {/* COMMUNITY NAME */}
            <Text color={'gray.700'} fontWeight={'500'} pr={3}>r/{router.query.CommunityId}</Text>
          </Flex>
        </MenuButton>

      </Menu>


      {/* POST-BOX-START */}
      <Box bg={'white'} mt={2} borderRadius={4}>

        <Grid w={'100'} templateColumns={'1fr 1fr 1fr 1fr'} alignItems={'center'} h={'2.8rem'} >
          {/* POST */}
          <Flex color={'gray.300'} fontWeight={'semibold'} borderBottom={'1px solid'} borderRight={'1px solid'} borderColor={'gray.200'} alignItems={'center'} cursor={'not-allowed'} h={'100%'} gap={'0.4rem'} justifyContent={'center'}  >
            <TiDocumentText size={20} />
            <Text fontSize={'0.9rem'}>Post</Text>
          </Flex>

          <Flex _hover={{ bg: 'gray.100' }}
            borderBottom={'1px solid'} borderRight={'1px solid'} borderColor={'gray.200'}
            bg={`${selectedTab.tab === 'images' ? 'gray.100' : ''}`}
            color={`${selectedTab.tab === 'images' ? '#0079d3' : 'gray.500'}`}
            cursor={'pointer'} alignItems={'center'} h={'100%'} gap={'0.4rem'} justifyContent={'center'} flexGrow={1}
            onClick={() => { setSelectedTab(prev => ({ ...prev, tab: 'images' })) }} >
            <BsFillImageFill size={18} />
            <Text fontSize={'0.9rem'} fontWeight={'semibold'}>Images & Videos</Text>
          </Flex>

          <Flex _hover={{ bg: 'gray.100' }}
            borderBottom={'1px solid'} borderRight={'1px solid'} borderColor={'gray.200'}
            bg={`${selectedTab.tab === 'link' ? 'gray.100' : ''}`}
            color={`${selectedTab.tab === 'link' ? '#0079d3' : 'gray.500'}`} cursor={'pointer'} alignItems={'center'} h={'100%'} gap={'0.4rem'} justifyContent={'center'} flexGrow={1} onClick={() => { setSelectedTab(prev => ({ ...prev, tab: 'link' })) }}>
            <BsLink45Deg size={20} />
            <Text fontSize={'0.9rem'} fontWeight={'semibold'}>Link</Text>
          </Flex>

          <Flex
            borderBottom={'1px solid'} borderColor={'gray.200'}
            color={'gray.300'} fontWeight={'semibold'} alignItems={'center'} cursor={'not-allowed'} h={'100%'} gap={'0.4rem'} justifyContent={'center'} flexGrow={1}>
            <BiPoll size={20} />
            <Text fontSize={'0.9rem'}>Polls</Text>
          </Flex>

        </Grid>

        {/* GRID-END! */}
        {/* BODY! */}
        <Box p={4} >

          {/* INPUT! */}
          <Input
            fontSize={'.8rem'}
            placeholder={'Title'}
            variant={'unstyled'}
            outline={'0.5px solid'}
            outlineColor={'gray.200'}
            _focus={{ outline: '1px solid black' }}
            padding={'4px 8px 4px 12px'}
            borderRadius={'3px'}
            mt={5}
            value={selectedTab.title}
            onChange={(e) => { setSelectedTab((prev) => ({ ...prev, title: e.target.value })) }}
          />

          {/* IMAGE INSERT BOX! */}
          {selectedTab.tab === 'images' && !selectedTab.image && (<>
            <Box display={'flex'} mt={2} h={'300px'} justifyContent={'center'} alignItems={'center'} w={'100'}
              border={'1px dotted'} borderColor={'gray.300'} borderRadius={5} gap={3}>

              <Text color={'#0079d3'} fontSize={'0.8rem'}>Drag and drop images or</Text>
              <Button variant={'outline'} height={'30px'} w={'70px'}
                color={'#0079d3'} >
                <label className="w-full h-full text-center flex items-center justify-center cursor-pointer">
                  Upload
                  <input type="file" className="hidden" onChange={(ev) => { onSelectFile(ev) }} />
                </label>
              </Button>

            </Box>
          </>)}

          {/* IF IMAGE EXISTS! */}
          {selectedTab?.tab === "images" && selectedTab?.image && (<>
            <Box display={'flex'} mt={2} p={3} w={'100'}
              border={'1px solid'} borderColor={'gray.300'} borderRadius={5} gap={3}>
              {/* ARRAY OF IMAGES LATER */}
              <Box display={'flex'} mt={2} h={'5rem'} position={'relative'} justifyContent={'center'} alignItems={'center'} w={'5rem'} border={'1px solid'} borderColor={'gray.300'} borderRadius={5} gap={3}>
                <Text cursor={'pointer'} position={'absolute'} mb={8} ml={12} onClick={() => setSelectedTab((prev) => ({ ...prev, image: '' }))}>
                  <IoMdCloseCircle size={24} />
                </Text>
                <Image src={selectedTab?.image} alt={'image'} width={48} height={48} />
              </Box>
              <Box display={'flex'} mt={2} h={'5rem'} justifyContent={'center'} alignItems={'center'} w={'5rem'}
                border={'1px dotted'} borderColor={'gray.300'} borderRadius={5} gap={3}>
                <label className="text-gray-500 hover:text-black w-full h-full text-center flex items-center justify-center cursor-pointer">
                  <Text fontSize={'2.2rem'} fontWeight={'700'}>+</Text>
                  <input type="file" className="hidden" />
                </label>
              </Box>



            </Box>
          </>)}

          {/* LINK INSERT BOX! */}
          {selectedTab.tab === 'link' && (<>

            <Textarea
              placeholder={'Url'}
              fontSize={'.8rem'}
              mt={2}
              p={'4px 8px 4px 12px'}
              resize={'none'}
            />

          </>)}

          {/* FOURS BUTTONS */}

          <Divider my={4} />
          {/* BUTTONS FOR BOTH! */}
          <Flex justifyContent={'flex-end'} gap={2}>
            {selectedTab.tab === 'images' && (
              <Button variant={'outline'} h={'28px'} w={'66px'}>Cancel</Button>
            )}

            {selectedTab.tab === 'link' && (
              <Button variant={'outline'} h={'28px'} w={'80px'}>Save Draft</Button>
            )
            }
            {/* DEPONDS UPON IMAGE IF SELETCTED THAN SHOW ELSE NOT */}
            {
              <Button
                variant={`${(selectedTab?.title && selectedTab?.image) ? 'solid' : ''}`}
                bg={`${(!selectedTab?.title || !selectedTab.image) ? '#8e8e8e' : 'blue.500'}`}
                _hover={{ bg: `${(!selectedTab?.title || !selectedTab?.image) ? '#8e8e8e' : 'blue.400'}` }}
                color={`${(selectedTab?.title && selectedTab?.image) ? 'white' : 'gray.300'}`}
                h={'28px'} w={'66px'}
                cursor={`${(selectedTab?.title && selectedTab?.image && !selectedTab.loading) ? 'pointer' : 'not-allowed'}`}
                onClick={onPost}>
                {selectedTab.loading ? (<>
                  <ClipLoader size={14} />
                </>) : (<>
                  Post
                </>)

                }
              </Button>

            }
          </Flex>


        </Box>

        {/* BOTTOM BODY!  */}
        <Box bg={'gray.50'} borderTop={'1px solid'} borderColor={'gray.200'} mt={4} h={20} p={2} fontSize={'.8rem'} fontWeight={'500'}>
          {/* CHECKBOX + TEXT! */}
          <Flex gap={2} alignItems={'center'}>
            <Checkbox borderColor={'gray.400'} />
            <Text pb={1}>Send me post reply notifications</Text>
          </Flex>

          {/* TEXT + ICON! */}
          <Flex cursor={'pointer'} alignItems={'center'} gap={1} color={'gray.400'}>
            <Text color={'#0079d3'} _hover={{ textDecoration: 'underline' }}>Connect accounts to share your post</Text>
            <AiOutlineExclamationCircle fontSize={20} />

          </Flex>

        </Box>



      </Box>
      {/* POST-BOX-END */}
    </Box>

    <Box>

    </Box>

  </Layout>)
}