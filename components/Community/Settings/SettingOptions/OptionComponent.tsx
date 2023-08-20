

import {IconType} from 'react-icons';
import {Box , Text} from '@chakra-ui/react';
import Link from 'next/link';
import {useRouter} from 'next/router';


type Props = {
    FirstIcon: IconType;
    Name: string;
    SecondIcon?: IconType;
    Param: string;
}

export default function OptionComponent({FirstIcon , Name , SecondIcon , Param}:Props)  {


    const router = useRouter();


    return(<>


        <Link href="/r/[CommunityId]/about/[modOption]" as={`/r/${router?.query?.CommunityId}/about/${Param}`} >
        
            <Box display={'flex'} color={'gray.500'} gap={3} alignItems={'center'} py={2} 
                cursor={'pointer'} pl={2} >
        
                    {/* FIRST ICON! */}
                      <FirstIcon className={"w-5 h-5"} />
        
                    {/* TEXT! */}
                      <Text fontSize={".92rem"}>{Name}</Text>


                    {/* SECOND ICON!  */}
                      {SecondIcon &&  <SecondIcon className="w-5 h-5 ml-auto" />}
        
            </Box>
        
        </Link>
    
    
    
    </>)
}