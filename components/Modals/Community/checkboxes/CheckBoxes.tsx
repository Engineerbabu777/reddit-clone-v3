
import { Flex, Checkbox, Box, Text, VStack } from '@chakra-ui/react';
import { FaUserAlt } from 'react-icons/fa';
import CheckBoxComponent from './CheckBoxComponent';
import { RiGitRepositoryPrivateFill } from 'react-icons/ri'
import { AiTwotoneEyeInvisible } from 'react-icons/ai';
import React, { useState } from 'react';
import {COMMUNITY} from '../CommunityModal';

type Props = {
    community: COMMUNITY,
    setCommunity: React.Dispatch<React.SetStateAction<COMMUNITY>>
  }

const CheckBoxes = ({community, setCommunity}:Props) => {

    const [communityType, setCommunityType] = useState<string>('');
    const [adultContent , setAdultContent] = useState<boolean>(false);

    // FUNCTION THAT WILL SELECT THE TYPE OF COMMUNITY!
    const onChange = (type: string) => {
        // setCommunityType(type)
        setCommunity((prev) => ({...prev,type:type}))
    }


    return (
        <Box mt={5}>

            {/* HEADING! */}
            <Text fontSize={'12pt'} fontWeight={'500'}>Community type</Text>

            {/* CHECKBOXES */}
        

            <CheckBoxComponent icon={FaUserAlt} mainText={'Public'}
                desc={'Anyone can view, post, and comment to this community'} Checked={onChange} 
                communityType={community.type} />

            <CheckBoxComponent icon={AiTwotoneEyeInvisible} mainText={'Restricted'}
                desc={'Anyone can view this community, but only approved users can post'} Checked={onChange} 
                communityType={community.type} />

            <CheckBoxComponent icon={RiGitRepositoryPrivateFill} mainText={'Private'}
                desc={'Only approved users can view and submit to this community'} Checked={onChange} 
                communityType={community.type} />


        </Box>
    )
}

export default CheckBoxes;