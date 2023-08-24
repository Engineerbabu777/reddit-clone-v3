
import React, { useState,useEffect,useCallback } from 'react';
import { Box, Flex, Icon, Text, Textarea, Input, Button, Divider } from '@chakra-ui/react';
import { GetServerSidePropsContext } from 'next';
import { db } from '@/firebase/firebase.config';
import { getDoc, doc, updateDoc,collection,getDocs,onSnapshot } from 'firebase/firestore';
import NotFoundPage from '@/components/Community/NotFoundPage';
import Header from '@/components/Community/Header';
import Layout from '@/components/Community/Layout';
import { BsThreeDots } from 'react-icons/bs';
import { toast } from 'react-hot-toast';
import { GiCakeSlice } from 'react-icons/gi';
import { format } from 'date-fns';
import moment from 'moment';
import { FaCircle } from 'react-icons/fa';
import { GoPencil } from 'react-icons/go';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase/firebase.config';
import { FaRedditSquare } from 'react-icons/fa';
import Image from 'next/image';
import firebase from 'firebase/app';
import Posts from '@/components/Community/Posts';
import {useRouter} from 'next/router';
import PostCreate from '@/components/PostCreateForm';


type Props = {
    communityDoc: any;
}

export default function CommunityPage({ communityDoc }: Props) {

    const [user, loading, error] = useAuthState(auth);
    const [community, setCommunity] = useState({
        description: '',
        Length: 500,
        box: false,
    });
  
    const [posts , setPosts] = useState<any>([]);
    const router = useRouter();
    console.log(user);

        // FUNCTION TO GET POST REGARDING THE COMMUNITY!
    const getPost = useCallback(async () => {
        // CREATING REFRENCE!
    const collectionRef = collection(db, 'Posts');
        // GETTING DOCS!
      onSnapshot(collectionRef,(data)=>{
         const documents = data.docs.map(doc => ({...doc.data(),key:doc.id}));
                // Make a query for only active community posts!
                  // LOGIC
    
               // Filtering Community Posts!
               setPosts([...documents.filter((n:any)=> n?.communityId === router?.query?.CommunityId)]);
        })
    },[router?.query?.CommunityId]);

 
    useEffect(() => {
       // GET DATA FROM FIRESTORE!
       getPost();
    },[getPost,]);

    const onChangeDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (community.description.length === 500) return;
        setCommunity((prev) => ({ ...prev, Length: 500 - e.target.value.length, description: e?.target?.value }));
    }

    const updateCommunity = async () => {

        if (community.description.length > 500) {
            toast.error('incorrect words must be less than 501')
            return;
        }

        const communityRef = doc(db, 'communities', communityDoc.Name);
        await updateDoc(communityRef, {
            description: community.description,
        });
        toast.success('Community Description Updated!!');
        setCommunity((prev:any) => ({ box: false, Length: 500, description: '' }));

    }



    // COMMUNITY NOT EXISTS THEN!
    if (!communityDoc) {
        return (<NotFoundPage />)
    }



    // COMMUNITY EXISTS!
    return (<>
        {/* HEADER! */}
        <Header isModerator={communityDoc?.Moderator} memberIds={communityDoc?.MemberIds} 
         Name={communityDoc.Name} image={communityDoc.image} bgImage={communityDoc.bgImage} 
        />
        {/* LAYOUT */}
        <Layout >

            {/* POSTS! */}
            <div>
                {/* CREATE POST */}
                <PostCreate />
           {/* POSTS TO SHOW! */}
             { posts?.length > 0 && (<Flex gap={3} alignItems={'center'} flexDirection={'column'}>
                        {posts?.map((post:any,ind:any) => (<Posts key={ind} {...post} communityMembers={communityDoc?.MemberIds} id={post.key}/>))}
             </Flex>)}
             <Text></Text>
            </div>

            {/* ABOUT COMMUNITY! */}
            <Box  h={'100%'}>
                {/* HEADER! */}
                <Flex color={'white'} bg={'#0079d3'} px={2} py={2} justifyContent={'space-between'} className="rounded-t-sm" >
                    <Text fontWeight={'semibold'} fontSize={'12pt'}>About Community</Text>
                    <BsThreeDots size={20} />
                </Flex>

                {/* BODY! */}
                <Box p={2} bg={'white'} boxShadow='base'
                    className=" rounded-b-md">
                    {/* DESCRIPTION NOT AVAILABLE! */}
                    {!communityDoc?.description && !community.box ? (
                        <Box bg={'gray.100'} onClick={() => { setCommunity((prev) => ({ ...prev, box: true })) }} cursor={'pointer'} border={'1px solid'} _hover={{ borderColor: '#0079d3' }} borderColor={'gray.300'} mt={3} borderRadius={5} >
                            <Text fontSize={'9pt'} color={'#0079d3'} fontWeight={'bold'} p={2} >Add description</Text>
                        </Box>) : (<>
                            <Text my={1} fontSize={'10pt'} fontWeight={'400'} letterSpacing={'0.3px'}>{communityDoc?.description}</Text>
                        </>)}

                    {community?.box && (<Box border={'1px solid'} borderRadius={5} borderColor={'blue.300'} mt={2} p={1}>
                        <textarea value={community.description} onChange={(e) => { onChangeDescription(e) }}
                            className="w-full resize-none border-none focus:border-0 focus:outline-0" placeholder={'Tell us about your community'} ></textarea>
                        <Flex alignItems={'center'} justifyContent={'space-between'}>
                            <Text fontSize={'9pt'} color={'gray.500'}>{community.Length} Characters remaining</Text>
                            <Box>
                                <Button color={'red'} fontSize={'9pt'} fontWeight={'bold'}
                                    onClick={() => { setCommunity((prev) => ({ ...prev, box: false, description: '', Length: 500 })) }}>Cancel</Button>
                                <Button color={'#0079d3'} fontSize={'9pt'} fontWeight={'bold'} ml={2} onClick={updateCommunity}>Save</Button>
                            </Box>
                        </Flex>
                    </Box>)}

                    <Flex color={'gray.500'} my={3} gap={2} >
                        <GiCakeSlice size={20} />
                        <Text fontSize={'11pt'}>Created {moment(new Date(communityDoc.createdAt!.seconds * 1000)).format("MMM DD, YYYY")}</Text>

                    </Flex>

                    <Divider />

                    {/* FLEX WITH THREE! */}
                    <Flex justifyContent={'space-between'} pr={'1.5rem'} my={2} >
                        <Flex flexDir={'column'}  >
                            <Text fontWeight={'600'} fontSize={'11pt'}>
                                {/* {communityDoc?.MemberIds?.length} */}
                                2.9m
                            </Text>
                            <Text fontWeight={'400'} fontSize={'9pt'} letterSpacing={'0.5px'} color={'gray.500'}>
                                Members
                            </Text>

                        </Flex>

                        <Flex flexDir={'column'} justifyContent={'space-between'}>
                            <Text fontWeight={'600'} fontSize={'11pt'} display={'flex'} color={'green.400'} alignItems={'center'} gap={1}>
                                <FaCircle size={8} /> <Text color={'black'}>
                                   {/* {Math.floor(Math.random()*communityDoc?.MemberIds?.length)} */}
                                    27.6k
                                </Text>
                            </Text>
                            <Text fontWeight={'400'} fontSize={'9pt'} letterSpacing={'0.5px'} color={'gray.500'}>
                                Online
                            </Text>

                        </Flex>

                        <Flex flexDir={'column'} justifyContent={'space-between'}>
                            <Text fontWeight={'600'} fontSize={'11pt'}>
                                Top 2%
                            </Text>
                            <Text fontWeight={'400'} fontSize={'9pt'} letterSpacing={'0.5px'} color={'gray.500'}>
                                Ranked by size
                            </Text>

                        </Flex>
                    </Flex>

                    <Divider />

                    {/* CREATE POST LINKED! */}
                    <Button onClick={() => router.push(`/r/${router?.query?.CommunityId}/submit`)} variant={'solid'} h={'28px'} letterSpacing={'0.5px'} my={3} w={'100%'}>Create Post</Button>

                    <Divider />

                    {/* PREVIEW! */}
                    <Box my={5}>

                        <Flex justifyContent={'space-between'} alignItems={'center'}>
                            <Text fontSize={'7pt'} fontWeight={'bold'} ml={1} letterSpacing={'0.6px'}>PREVIEW</Text>
                            <GoPencil size={17} />
                        </Flex>

                        <Flex alignItems={'center'} gap={2} my={4} color={'gray.600'}>
                            {/* IMAGE FOR MENU */}
                            {user?.photoURL ? (<>
                                <Image src={`${user?.photoURL}`} height={25} width={25} alt={'img'} />
                            </>) : (<>
                                <Icon as={FaRedditSquare} fontSize={30} fontWeight={'light'} color={'gray.300'} />
                            </>)}

                            {user?.displayName ? (
                                <>
                                    <Text fontWeight={'700'} fontSize={'8pt'}>{user.displayName}</Text>
                                </>) : (<>
                                    <Text fontWeight={'700'} fontSize={'8pt'}>{user?.email?.split('@')[0].toString()}</Text>
                                </>
                            )}

                        </Flex>

                        <Divider />

                    </Box>

                </Box>

                {/* FILTER BY FLAIRS! */}



                {/* RULES! */}



                {/* MODERATORS! */}



                {/* BACK TO TOP! */}

                    <Button onClick={() => { window.scrollTo(0, 0) }} mt={12} ml={24} textAlign={'center'} variant={'solid'} 
                        height={'30px'} px={3} letterSpacing={'0.3px'} position={'sticky'}
                        top={16}>Back to Top</Button>

            </Box>


        </Layout>

    </>)
}


export async function getServerSideProps(context: GetServerSidePropsContext) {


    try {

        const CommunityRef = doc(db, 'communities', context?.query?.CommunityId as string);
        const CommunityDoc = await getDoc(CommunityRef);

        return {
            props: {
                success: true,
                communityDoc: CommunityDoc.exists() ? JSON.parse(JSON.stringify({ id: CommunityDoc.id, ...CommunityDoc.data() })) : '',
            }
        }

    } catch (error: any) {
        throw new Error('Some Error Occur while accessing community Data!');
    }

}