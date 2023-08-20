

import {useRouter} from 'next/router';
import { Box } from '@chakra-ui/react';
import OverviewMain from './MainBodyComponents/Overview/OverviewMain';


export default function ModMainComponent({}) {


    
    const router = useRouter(); // USING USEROUTER TO CHECK FOR DIFFERENT ROUTES!
    const {modOption} = router?.query; // FORM ROUTES GETTING DYNAMIC ROUTE NAMED AS (modOptions)!


    return(<>


    {/* WILL DISPLAYED MIDDLE BASED ON ( modOptions ) */}

    <Box h={'100vh'} mt={'96px'} width={{base:'100vw',xl:'80%'}} >

        {/* OVERVIEW--MODE! */}
          {(modOption === 'modqueue' || 'mod' || 'banned' || 'scheduledposts' || 'insights') && <OverviewMain /> }

        {/* MODERATION--MODE!  */}

        {/* CONTENT--MODE! */}

        {/* APPS--MODE! */}

        {/* SETTINGS--MODE! */}

        {/* SUPPORTM--MODE! */}

    </Box>

    
    </>)
}