
import React,{useState , useEffect,useCallback} from 'react';
import { getDoc, doc, updateDoc,collection,getDocs,onSnapshot,query,orderBy } from 'firebase/firestore';
import {useRouter} from 'next/router';
import {Flex , Box,Text} from '@chakra-ui/react';
import Posts from '@/components/Community/Posts';
import {BsFire, BsChevronDown,BsThreeDots} from 'react-icons/bs';
import {GiMeepleCircle} from 'react-icons/gi';
import {HiOutlineChartBar} from 'react-icons/hi';
import {RiCheckboxIndeterminateLine,RiRocketFill} from 'react-icons/ri';
import PostCreate from '@/components/PostCreateForm';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth,db } from '@/firebase/firebase.config';

export default function Main() {


    const [posts , setPosts] = useState<any>([]);
    const router = useRouter();
    const [user , loading] = useAuthState(auth);
  

        // FUNCTION TO GET POST REGARDING THE COMMUNITY!
    const getTopPosts = useCallback(async () => {
        

        const PostsQuery = query(collection(db,'Posts'),orderBy('createdAt','desc'));
        const postDoc = await getDocs(PostsQuery)

        // CREATING REFRENCE!
    const collectionRef = collection(db, 'Posts');
        // GETTING DOCS!
      onSnapshot(PostsQuery,(data)=>{
         const documents = data.docs.map(doc => ({...doc.data(),key:doc.id}));
                setPosts(documents);
        })
    },[]);

    useEffect(() => {
      
        getTopPosts();

    },[getTopPosts])

    return(
        <>
       
       {/* CREATE POST FORM! */}
       { (user && !loading) && (<>
        <PostCreate />
       </>) }


       {/* BEST HOT NEW TOP BOX! */}
       <Box h={14} bg={'white'} mx={'1px'} mb={4} borderRadius={5} border={'1px solid'} borderColor={'gray.300'}>
        <Flex px={2} alignItems={'center'} w={'100%'} h={'100%'} gap={2}>

            {/* USER AVAILABLE! */}
            { user && (
            <Flex color={'blue.500'} cursor={'pointer'} alignItems={'center'} gap={2} bg={'gray.100'} borderRadius={20} p={1} px={2}>
             <RiRocketFill size={16} />
             <Text fontSize={"0.80rem"}  fontWeight={'bold'}>Best</Text>
            </Flex>
            ) }

 {/* HOT */}
  <Flex color={user ? '#8e8e8e' :'blue.500'} _hover={{bg:user?'#EEEEEE':'gray.200'}} cursor={'pointer'} 
    alignItems={'center'} gap={2} bg={user ? '' :'gray.100'} 
    borderRadius={20} p={1} px={2}>
     <BsFire size={16} />
     <Text fontSize={"0.80rem"}  fontWeight={'bold'}>Hot</Text>
  </Flex>

 {/* EVERYWHERE */}
 {!user && (
     <Flex color={'blue.500'} cursor={'pointer'} alignItems={'center'} gap={2} bg={'gray.100'}
      borderRadius={20} p={1} px={3}>
        <Text fontSize={"0.87rem"}  fontWeight={'bold'}>Everywhere</Text>
        <BsChevronDown size={12} />
     </Flex>
 )}
 {/* NEW */}
  <Flex color={'#8e8e8e'} cursor={'pointer'} _hover={{bg:'#EEEEEE'}} alignItems={'center'} gap={2}  borderRadius={20} p={1} px={3}>
     <GiMeepleCircle size={18} />
     <Text fontSize={"0.87rem"}  fontWeight={'bold'}>New</Text>
  </Flex>

 {/* TOP */}
  <Flex color={'#8e8e8e'} cursor={'pointer'} _hover={{bg:'#EEEEEE'}} alignItems={'center'} gap={2}  borderRadius={20} p={1} px={3}>
     <HiOutlineChartBar size={18} />
     <Text fontSize={"0.87rem"}  fontWeight={'bold'}>Top</Text>
  </Flex>

  <Flex _hover={{bg:'#EEEEEE'}} cursor={'pointer'} borderRadius={15} p={2} >
    <BsThreeDots size={20} color={'#8e8e8e'}/>
  </Flex>

  <Flex color={'#8e8e8e'} _hover={{bg:'#EEEEEE'}} alignItems={"center"} borderRadius={13} p={1} cursor={'pointer'} ml={'auto'} mr={1}>
    <RiCheckboxIndeterminateLine size={22}/>
    <BsChevronDown size={11} />
  </Flex>

        </Flex>




{/* DOTS! */}

{/* BOX! */}
       </Box>
        


       {/* POSTS! */}

       { posts?.length > 0 && (<Flex gap={3} alignItems={'center'} mt={2} flexDirection={'column'}>
                {posts?.map((post:any,ind) => (<Posts key={ind} {...post} 
                    id={post.key}/>))}
        </Flex>)}

        
        </>
    )
}