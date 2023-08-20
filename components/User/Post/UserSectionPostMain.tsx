
import {BsFire} from 'react-icons/bs';
import {RiRocketFill } from 'react-icons/ri';
import {GiMeepleCircle} from 'react-icons/gi';
import {Box , Flex, Text, Grid} from '@chakra-ui/react';
import {HiOutlineChartBar, HiOutlineArchiveBoxXMark} from 'react-icons/hi'
import {GoComment} from 'react-icons/go';
import {GiRapidshareArrow} from 'react-icons/gi';
import { TbArrowBigDown, TbArrowBigUp } from 'react-icons/tb';
import {AiOutlineCheckCircle} from 'react-icons/ai';
import {CiCircleCheck} from 'react-icons/ci';
import {GoCircleSlash} from 'react-icons/go';
import {MdOutlineInsights} from 'react-icons/md';
import {FiShield, FiBookmark} from 'react-icons/fi';
import {FaReddit} from 'react-icons/fa';
import {BsDot , BsThreeDots} from 'react-icons/bs';
import PostMiddleSection from '../PostMiddleSection';


type Props = {
    pic: boolean;
}

export default function UserPostMain({pic=false}: Props){

    return(<>
    
    <Box h={'auto'} bg={'white'} w={'100%'} mx={'1px'} mb={4} borderRadius={5} border={'1px solid'} 
      borderColor={'gray.300'} display={'flex'} >
        {/* 2 SIDES! */}
         <Box border={'1px solid red'} width={'8%'} h={'100%'} display={'flex'} flexDirection={'column'} alignItems={'center'} >
           {/* TOP */}
            <TbArrowBigUp className={`w-7 h-9 text-gray-400 hover:text-blue-500 cursor-pointer hover:bg-[#EEEEEE] 
            p-[2px] rounded-md`}  />

           {/* NUMBER */}
            <Text fontWeight={'semibold'}>1</Text>

           {/* DOWN! */}
            <TbArrowBigDown className={`w-7 h-9 text-gray-400 hover:text-orange-400 cursor-pointer hover:bg-[#EEEEEE] 
             p-[2px] rounded-md`} />
            
         </Box>

         <Box border={'1px solid blue'} width={'92%'} h={'100%'}> 
        
           {/* TOP */}
            <Box border={'1px solid purple'} h={'auto'} m={1} display={'flex'} alignItems={'center'} gap={'3px'} >
             <FaReddit className="w-6 h-6 text-orange-400" />
             
             <Text fontWeight={'semibold'} _hover={{textDecoration:'underline'}} cursor={'pointer'} 
             fontSize={'.75rem'} mr={-1} >r/Reddit</Text>

             <BsDot className="w-3 h-3 text-[#8e8e8e] text-center " />
             
             <Text fontSize={'.75rem'} color={'#8e8e8e'} ml={-1}>
             Posted by u/rocky478
             </Text>

             <Text fontSize={'.75rem'} color={'#8e8e8e'}>1 month ago</Text>

             {/* REMOVAL REASON */}

            </Box>


           {/* MIDDLE */}
            <Box border={'1px solid gray'} h={'auto'} m={1}>
              <PostMiddleSection pic={pic} />
            </Box>


           {/* BOTTOM */}
            <Box border={'1px solid orange'} h={10} display={'flex'} gap={1} m={1} >
              
              {/* COMMENTS */ }
                <Box color={'#8e8e8e'} display={'flex'} gap={1} alignItems={'center'}
                  px={3} _hover={{ bg: '#EEEEEE' }} cursor={'pointer'} >
                   {/* ICON */}
                    <GoComment className="h-5 w-5 " />
                   {/* TEXT */}
                    <Text fontSize={'0.75rem'} fontWeight={'bold'} mb={'4px'} >0 Comments</Text>
                </Box>

                
              {/* SHARE */ }
                <Box color={'#8e8e8e'} display={'flex'} gap={1} alignItems={'center'}
                  px={3} _hover={{ bg: '#EEEEEE' }} cursor={'pointer'} >
                   {/* ICON */}
                    <GiRapidshareArrow className="h-5 w-5 " />
                   {/* TEXT */}
                    <Text fontSize={'0.75rem'} fontWeight={'bold'} mb={'4px'} >Share</Text>
                </Box>

               {/* FOR MODERATORS! */}
                {/* APPROVED */}
                {/* REMOVED */}
                {/* SPAMMED */}

                
              {/* SAVES */ }
                <Box color={'#8e8e8e'} display={'flex'} gap={1} alignItems={'center'}
                  px={3} _hover={{ bg: '#EEEEEE' }} cursor={'pointer'} >
                   {/* ICON */}
                     <FiBookmark className="h-5 w-5 " />
                   {/* TEXT */}
                     <Text fontSize={'0.75rem'} fontWeight={'bold'} mb={'4px'} >Save</Text>
                </Box>

               
              {/* INSIGHTS */ }
                <Box color={'#8e8e8e'} display={'flex'} gap={1} alignItems={'center'}
                  px={3} _hover={{ bg: '#EEEEEE' }} cursor={'pointer'} >
                   {/* ICON */}
                     <HiOutlineChartBar className="h-5 w-5 " />
                   {/* TEXT */}
                     <Text fontSize={'0.75rem'} fontWeight={'bold'} mb={'4px'} >Insights</Text>
                </Box>
               
               {/* THREE DOTS! */ }
                <Box color={'#8e8e8e'} display={'flex'} my={2} mx={1} gap={1} alignItems={'center'}
                  px={3} _hover={{ bg: '#EEEEEE' }} cursor={'pointer'} >
                   {/* ICON */}
                    <BsThreeDots className="h-5 w-5 " />
                </Box>


            </Box>


         </Box>

         </Box>
    
    
    </>)
}