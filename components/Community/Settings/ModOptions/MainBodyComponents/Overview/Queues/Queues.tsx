
import {Box , Text} from '@chakra-ui/react';
import Layout from './Layout';
import {GrTools} from 'react-icons/gr';
import {AiOutlineClose} from 'react-icons/ai';
import {BsChevronDown ,BsChevronRight} from 'react-icons/bs';
import {BiCheckboxMinus} from 'react-icons/bi';


export default function Queues({}) {



return(<Layout>

 
      {/* CHILD 0*/}
        <Box width={'100%'} border={'3px solid gray'} >
          
          {/* TOP BOX! */}
           <Box h={16} borderRadius={5} px={2} bg={'gray.100'}  justifyContent={'space-between'} alignItems={'center'} mt={1} display={'flex'} mx={'auto'} w={'90%'} border={'2px solid green'}>
              <Box display={'flex'} gap={2} alignItems={'center'} textAlign={'center'}>
                
                <Box bg={'red.500'} h={10} w={10} display={'flex'}  borderRadius={5} alignItems={'center'} justifyContent={'center'}  >
                  <GrTools className=" w-6 h-6"/>
                </Box>
                
                <Box display={'flex'} flexDirection={'column'}>
                  <Text fontWeight={'700'} fontSize={'1rem'}>NEW! Automatically filter content from ban evading users.</Text>
                    <Box display={'flex'} fontSize={'0.90rem'}>
                  <Text>To try it out, turn on the new ban evasion setting.</Text>
                  <Text color={'blue.600'} fontWeight={'600'}>Try it now</Text>
                </Box>
              
              </Box>
            </Box>

            <AiOutlineClose className="text-gray-600 w-4 h-4"/>
           </Box>

          {/* QUEUES MENU! */}
             {/* TEXT */}
             <Box h={8} border={'2px solid yellow'} alignItems={'center'} px={2} justifyContent={'space-between'} mt={2} display={'flex'} 
                mx={'auto'} w={'90%'} >
                 {/* TEXT! */}
                  <Text fontWeight={'700'} fontSize={'1.10rem'}>Queues</Text>

                 {/* IMAGE! */}
                  <div className="flex items-center justify-center h-6 w-6 bg-green-300 border-1 border-blue-300 rounded-full overflow-hidden">
                    <img src={"https://www.redditstatic.com/avatars/defaults/v2/avatar_default_0.png"}
                     className="w-6 h-6 object-contain" alt={"pic"} />
                  </div>
             </Box>

             <Box h={12} border={'2px solid red'} gap={4} mt={2} display={'flex'} mx={'auto'} w={'90%'}>
               <Box bg={'#D2DADD'} width={'fit-content'} height={'fit-content'} p={2} borderRadius={30}>
                 <Text fontWeight={'semibold'} fontSize={'.95rem'}>Mod Queue</Text>
               </Box>

               <Box bg={'#D2DADD'} width={'fit-content'} height={'fit-content'} p={2} borderRadius={30}>
                 <Text fontWeight={'semibold'} fontSize={'.95rem'}>Reported</Text>
               </Box>

               <Box bg={'#D2DADD'} width={'fit-content'} height={'fit-content'} p={2} borderRadius={30}>
                 <Text fontWeight={'semibold'} fontSize={'.95rem'}>Removed</Text>
               </Box>

               <Box bg={'#D2DADD'} width={'fit-content'} height={'fit-content'} p={2} borderRadius={30}>
                 <Text fontWeight={'semibold'} fontSize={'.95rem'}>Edited</Text>
               </Box>

               <Box bg={'#D2DADD'} width={'fit-content'} height={'fit-content'} p={2} borderRadius={30}>
                 <Text fontWeight={'semibold'} fontSize={'.95rem'}>Unmoderated</Text>
               </Box>
             </Box>
          {/* N _ P & C BOX! */}
             <Box  h={9} border={'2px solid blue'} px={2} justifyContent={'space-between'} mt={2} alignItems={'center'} display={'flex'} mx={'auto'} w={'90%'} >
               {/* TWO */}
                 <Box display={'flex'} gap={3} alignItems={'center'} fontSize={'0.70rem'} fontWeight={'700'}>
                  <Box display={'flex'} gap={1} alignItems={'center'}>
                    <Text>NEWEST FIRST</Text>
                    <BsChevronDown className="w-3 h-3" />
                  </Box>
                  <Box display={'flex'} gap={1} alignItems={'center'}>
                    <Text>POST AND COMMENTS</Text>
                    <BsChevronDown className="w-3 h-3" />
                  </Box>
                 </Box>
               {/* ONE */}
                 <Box display={'flex'} alignItems="center" color={'#8e8e8e'} >
                  <BiCheckboxMinus className={"w-7 h-7"} />
                  <BsChevronDown className={"w-3 h-3"}/>
                 </Box>
             </Box>

          {/* MAIN BOX! */}
             <Box h={96} border={'2px solid green'} flexDirection={'column'} gap={2} mt={1} display={'flex'} 
              mx={'auto'} w={'90%'} >
             {/* UPPER! */}
              <Box border={'1px solid gray'} h={'11%'} w={'100%'}>
                <Box m={1} borderRight={'1px solid gray'} display={'flex'} gap={1} h={8} w={12} alignItems={'center'}>
                  <Box h={5} w={5} border={'1px solid red'} borderRadius={2}>

                  </Box>
                  <BsChevronDown className="w-3 h-3" />
                </Box>
              </Box>
             {/* LOWER! */}
               <Box h={'89%'} w={'100%'} border={'1px solid orange'} flexDirection={'column'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                 <img className="object-contain w-[17rem] h-[17rem] mix-blend-multiply" src={"/images/cato.png"} alt={'cat'} />
                 <Box  mt={-5} display={'flex'} flexDirection={'column'} gap={1} alignItems={'center'} justifyContent={'center'}>
                  <Text fontWeight={'600'} fontSize={'1.1rem'}>The queue is clean!</Text>
                  <Text fontSize={'0.95rem'} fontWeight={'semibold'} color={'gray.500'}>kitteh is pleased</Text>
                 </Box>
               </Box>

             </Box>

        </Box>



      {/* CHILD 1*/}
        <Box>
          
          {/* BOX! */}
           <Box h={'17rem'} borderRadius={5} flexDirection={'column'} border={'2px solid blue'} mt={2} pt={4} display={'flex'}  w={'85%'} >
             <Box border={'1px solid green'} h={8} w={'90%'} mb={4} display={'flex'} mx={'auto'} alignItems={'center'}  justifyContent={'space-between'} fontWeight={'700'} fontSize={'.63rem'}>
              <Text textTransform={'uppercase'}>last 7 days insights</Text>
              <BsChevronDown className="w-3 h-3 "/>
             </Box>

             <Box border={'1px solid red'} h={'fit-content'} w={'90%'}  display={'flex'} gap={1} mx={'auto'} >
              
              <Box w={'10%'}>
              <Box w={5} h={5} borderRadius={50} bg={'green.300'} ></Box>
              </Box>
              <Box display={'flex'} flexDirection={'column'} fontSize={'0.70rem'} w={'90%'} pr={10}>
                <Text  fontWeight={'700'} fontSize={'.80rem'}>1 active mod</Text>
                <Text color={'gray.500'} fontSize={'0.70rem'}>Your team made 4 mod actions this week, Keep it up!</Text>
              </Box>

             </Box>

             <Box border={'1px solid green'} h={'fit-content'} w={'90%'} display={'flex'} gap={1} mx={'auto'} >
                  
              <Box w={'10%'}>
              <Box w={5} h={5} borderRadius={50} bg={'yellow.300'} ></Box>
              </Box>
              <Box display={'flex'} flexDirection={'column'} fontSize={'0.70rem'} w={'90%'} pr={10}>
                <Text  fontWeight={'700'} fontSize={'.80rem'}>1 published posts</Text>
                <Text color={'gray.500'} fontSize={'0.70rem'}>It&apos;s more than the previous 7 days</Text>
              </Box>

             </Box>

             <Box border={'1px solid yellow'} h={'fit-content'} w={'90%'} display={'flex'} gap={1} mx={'auto'} >
                   
              <Box w={'10%'}>
              <Box w={5} h={5} borderRadius={50} bg={'blue.300'} ></Box>
              </Box>
              <Box display={'flex'} flexDirection={'column'} fontSize={'0.70rem'} w={'90%'} pr={10}>
                <Text  fontWeight={'700'} fontSize={'.80rem'}>0 published comments</Text>
                <Text color={'gray.500'} fontSize={'0.70rem'}>It&apos;s more than the previous 7 days</Text>
              </Box>

             </Box>

             <Box border={'1px solid blue'} h={'fit-content'} w={'90%'} display={'flex'} gap={1} mx={'auto'} >
                    
              <Box w={'10%'}>
              <Box w={5} h={5} borderRadius={50} bg={'red.300'} ></Box>
              </Box>
              <Box display={'flex'} flexDirection={'column'}  w={'90%'} pr={10}>
                <Text  fontWeight={'700'} fontSize={'.80rem'}>0 reports on post and comments</Text>
              </Box>

             </Box>

             <Text display={'flex'} alignItems={'center'} gap={2} fontWeight={'bold'} fontSize={'.70rem'} color={'blue.500'} mt={3} ml={2}>More Insights  <BsChevronRight className="text-blue-500 h-3 w-4" /></Text>


           </Box>

        </Box>





    </Layout>)

}