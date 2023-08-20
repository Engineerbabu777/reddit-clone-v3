
import {Box , Text} from '@chakra-ui/react';
import Image from 'next/image';

type Props = {
    pic: boolean;

}

export default function PostMiddleSection({pic} : Props) {


    return(<>

    {/* DEPENDS UPON TYPE OF POST! */}

    {/* ITS POST WITH TEXT ONLY! */}
   { !pic &&  <Box border={'2px solid red'}>
       {/* HEADING TEXT! */}
        <Text fontWeight={'600'} mb={2} color={'#8e8e8e'} fontSize={'1.05rem'}>Its My New Post</Text>

       {/* Optional DESCRIPTION TEXT! */}
        <Text lineHeight={'.90rem'} color={'#8e8e8e'} fontSize={'.90rem'}>Its the description for my new post ... that will tell you about my newer post , I added on reddit clone web application</Text>
      </Box>}

    {/* ITS POST WITH PIC/VID! */}
    { pic && <Box border={'1px solid green'}>
      {/* HEADING TITLE! */}
       <Text fontWeight={'600'} mb={2} color={'#8e8e8e'} fontSize={'1.05rem'}>Reddit User Settings Developer</Text>

       {/* IMAGE! */}
        <img src={"/images/developer.jpg"} alt={'image'} className="w-full h-full object-contain" />

    </Box>

    }

    {/* POLL OPTIONS! */}

    {/* TYPE OF LINKS! */}
    
    </>)
}