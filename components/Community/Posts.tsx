
import { TbArrowBigDown, TbArrowBigUp } from 'react-icons/tb';
import { RxThickArrowDown } from 'react-icons/rx';
import { Box, Flex, Text } from '@chakra-ui/react';
import { useState } from 'react';
import Link from 'next/link';
import moment from 'moment';
import Image from 'next/image';
import {GoComment} from 'react-icons/go';
import {GiRapidshareArrow} from 'react-icons/gi';
import {AiOutlineGift} from 'react-icons/ai'
import {BiDotsHorizontalRounded} from 'react-icons/bi';
import {TfiTag} from 'react-icons/tfi'
import usePostsHook from '@/hooks/usePosts';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth,db } from '@/firebase/firebase.config';
import {toast} from 'react-hot-toast';
import { getDoc, doc, updateDoc,collection,getDocs } from 'firebase/firestore';
import { useRecoilState } from 'recoil';
import { AuthState } from '@/atoms/authAtoms';
import { FaReddit } from 'react-icons/fa';
import { BsDot } from 'react-icons/bs';

type Props = {
  communityId: string | undefined | string[];
  creatorID: string;
  title: string;
  image?: string;
  numberOfComments: number;
  voteStatus: number;
  createdAt: any;
  creatorName: string | undefined;
  type: 'image' | 'post' | 'link' | 'poll';
  downVotesIds: [string],
  id: string,
  upVotesIds:[string],
  set: any;
  communityMembers?: [string],
  communityImage?: string;
  wid: string
}

export default function Posts({ title, communityId, image, numberOfComments
  , voteStatus, createdAt, creatorName, type , downVotesIds, id, upVotesIds,communityMembers,communityImage,wid }: Props) {

    const [user, loading, error] = useAuthState(auth);
    const {onVoteUp, onVoteDown} = usePostsHook();
    const [authState,setAuthState] = useRecoilState(AuthState);

    const [postValues, setPostValues] = useState({
     numberOfVotes:voteStatus,
     u: upVotesIds?.includes(user?.uid as never),
     d: downVotesIds?.includes(user?.uid as never),
     });

     // ONCHANGE UP/DOWN VOTES!
     const handleVotes = async(T:string) => {
       
         // CHECKS IF USER IS NOT LOGGED? THEN DISPLAY POPUP TO LOGIN!
        if(!user) {
            setAuthState((prev) => ({...prev,open:true}));
          return;
        }

         // CHECKS IF USER IS THE MEMBER OF COMMUNITY? THEN ASKED TO JOINED THE COMMUNITY!
        const isMember = communityMembers?.includes(user?.uid);
        if(!isMember){
           toast.error("JOIN COMMUNITY REQUIRED")
          return;
        }

        // ELSE PERFORM POSTS ACTIONS FOR LIKE/DISLIKE!
try{

  if(T === 'up'){
    // LIKE/UNLIKE A POST!
    setPostValues((prev) => ({...prev,u:!postValues.u,d:false}))
    onVoteUp(upVotesIds , user, id, downVotesIds, voteStatus,setPostValues);
    
  } else{
    // DISLIKE/UNDISLIKE A POST!
    setPostValues((prev) => ({...prev,d:!postValues.d,u:false}))
    onVoteDown(downVotesIds, user, id, upVotesIds, voteStatus,setPostValues);

  }

} catch(err:any){

  toast.error("Error:", err.message);
  console.log(err);
}

     }


  return (<>
    {/* MAIN CONTAINER! */}
    <Box display={'flex'} bg={'green.100'} h={`${type === 'image' ? 'auto' : ''}`} w={'100%'} borderRadius={1} 
      border={'1px solid'} borderColor={'gray.300'} _hover={{borderColor:'gray.400'}} cursor={'pointer'}>

      {/* UPVOTES & DOWNVOTES COLUMN! */}
      <Flex bg={'#f8f9fa'} flexDirection={'column'} alignItems={'center'} px={2} pt={1} >

        {/* UPVOTE ICON */}
        <Text p={"2px"} borderRadius={3}
          _hover={{ color: '#ff4500', bg: 'gray.200' }}
          cursor={'pointer'} color={`${postValues?.u ? '#ff4500' : 'gray.400'}`}>
          <TbArrowBigUp onClick={() => {;handleVotes('up')}} 
            size={22} fill={`${postValues.u ? '#ff4500' : 'transparent'}`} />
        </Text>

        {/* COUNT */}
        <Text>{postValues?.numberOfVotes}</Text>

        {/* DOWNVOTE ICON */}
        <Text p={"2px"} borderRadius={3}
          _hover={{ color: '#7193ff', bg: 'gray.200' }} cursor={'pointer'} 
           color={`${postValues?.d ? '#7193ff' : 'gray.400'}`}>
          <TbArrowBigDown onClick={() =>{handleVotes('down')}} 
           size={22} fill={`${postValues.d ? '#7193ff' : 'transparent'}`} />
        </Text>

      </Flex>

      {/* MAIN BODY FOR POSTS! */}
      <Flex flexGrow={1} bg={'white'} p={1} gap={1} flexDirection={'column'} pl={2}>
        <Flex gap={"1px"} fontSize={'0.716rem'} fontWeight={'400'} color={'gray.500'} mt={1} alignItems={'center'}>
          
          {  // ONLY BE SEEN WHEN ON HOME PAGE!
            !communityMembers && (<>
            
            {/* COMMUNITY */}
              <Flex gap={1} alignItems={'center'}>
  
                {/* PIC */}
  
                {communityImage ? (<>
                  <Image src={communityImage} height={'25'} width={'25'} alt={'pic'} />
                    </>) : (<>
                  <FaReddit color={'orange'} size={'1.6em'} border={'1px solid black'} />
                  </>)
                 }
  
               {/* NAME */}
             <Link href={'/r/'+communityId} className="text-black font-semibold transition-all duration-250 hover:underline">r/{communityId} </Link>
              </Flex>
             <BsDot size={10} />
            </>)
          }
        {/* POSTED BY */}
        <Text >Posted by <Link href={'/'} className="transition-all duration-250 hover:underline">u/{creatorName}</Link></Text>
        {/* TIME */}
        <Text ml={1}>{moment(new Date(createdAt?.seconds * 1000),"YYYYMMDD").fromNow()}</Text>
        </Flex>


<Flex flexDirection={'column'} gap={2}  >
        {/* TITLE */}
        <Text fontSize={'1.3rem'} fontWeight={'500'}>{title}</Text>

        {/* IMAGE */}
        {image && (<Flex w={'100'} h={'100%'} justifyContent={'center'}>
          <Image src={image} width={400} height={200} alt={'pic'} className="w-[3/4] rounded-md overflow-hidden"/>
          </Flex>
        )}

</Flex>

{/* ICONS! */}
<Flex gap={2} alignItems={'center'} >
  {/* COMMENTS! */}
    <Flex alignItems={'center'} gap={1} justifyContent={'center'} color={'gray.500'} _hover={{bg:'#e8e8e8'}}
       p={1} fontWeight={'700'} >
      <GoComment size={21} style={{paddingTop:'2px'}}/>
      <Text fontSize={'0.76rem'} textAlign={'center'}>0 Comments</Text>
    </Flex>
  {/* AWARDS */}
  <Flex alignItems={'center'} gap={1} justifyContent={'center'} color={'gray.500'} _hover={{bg:'#e8e8e8'}} 
   p={1} fontWeight={'700'} >
      <AiOutlineGift size={22}/>
      <Text fontSize={'0.76rem'} textAlign={'center'}>Award</Text>
    </Flex>
  {/* SHARES */}
  <Flex alignItems={'center'} gap={1} justifyContent={'center'} color={'gray.500'} _hover={{bg:'#e8e8e8'}} 
   p={1} fontWeight={'700'} >
      <GiRapidshareArrow size={22}/>
      <Text fontSize={'0.76rem'} textAlign={'center'}>Share</Text>
    </Flex>
  {/* SAVES */}
  <Flex alignItems={'center'} gap={1} justifyContent={'center'} color={'gray.500'} _hover={{bg:'#e8e8e8'}} 
   p={1} fontWeight={'700'} >
      <TfiTag size={22}/>
      <Text fontSize={'0.76rem'} textAlign={'center'}>Save</Text>
    </Flex>
  {/* SOME OPTIONS */}
  <Flex alignItems={'center'} gap={1} justifyContent={'center'} color={'gray.500'} _hover={{bg:'#e8e8e8'}} p={1} fontWeight={'600'} >
      <BiDotsHorizontalRounded size={24}/>
    </Flex>
</Flex>

      </Flex>

    </Box>
  </>)
}