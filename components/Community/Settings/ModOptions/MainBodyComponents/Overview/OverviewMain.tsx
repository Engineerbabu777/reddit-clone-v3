

import {useRouter} from 'next/router';
import { Box  , Text } from '@chakra-ui/react';
import {useEffect , useState} from 'react';
import Queues from './Queues/Queues';
import ScheduledPosts from './ScheduledPosts/ScheduledPosts';
import UserMangement from './UserMangement/UserMangement';
import Insights from './Insights/Insights';

export default function OverviewMain({}) {

        
    const router = useRouter(); // USING USEROUTER TO CHECK FOR DIFFERENT ROUTES!
    const {modOption} = router?.query; // FORM ROUTES GETTING DYNAMIC ROUTE NAMED AS (modOptions)!

    return(<>

    {/* QUEUES! */}
     {modOption === 'modqueue' && <Queues />}


    {/* SCEDULED POSTS! */}
     {modOption === 'scheduledposts' && <ScheduledPosts />}


    {/* USER MANGEMENTS */}
     {modOption === 'banned' && <UserMangement />}


    {/* INSIGHTS! */}
     {modOption === 'insights' && <Insights />}

     
    </>)
}