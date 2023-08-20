
import {Box,Flex , Text, Divider,Button} from '@chakra-ui/react';


export default function RedditPolicy ({}) {


    return(
    <Box bg={'gray.200'} 
         h={44} px={6} pt={5} position={'sticky'} top={'50px'}  display={'flex'} 
         alignItems={'center'} justifyContent={'center'} w={'100%'} flexDirection={'column'}>
 <Flex gap={8} color={'#8e8e8e'} fontSize={'.77rem'}>

<Flex flexDirection={'column'} flex={1}  >
  <Text>User&nbsp;Agreement</Text>
  <Text>Privacy&nbsp;Policy</Text>
</Flex>

<Flex flexDirection={'column'} flex={1}>
  <Text>Content&nbsp;Policy</Text>
  <Text>Moderator&nbsp;Code Of Conduct</Text>
</Flex>

</Flex>

<Box bg={'white'} my={2} color={'white'} w={'100%'} >

<Divider   />
</Box>

<Text color={'#8e8e8e'} fontSize={'.77rem'} >Reddit, Inc. © 2023. All rights reserved.</Text>


<Button onClick={() => { window.scrollTo(0, 0) }} bg={'white'} _hover={{bg:'gray.200',outline:'1px solid gray'}}
 color={'black'}  mt={8} height={'30px'} px={3} letterSpacing={'0.3px'}
     >Back to Top</Button>



    </Box>
    
    )
}