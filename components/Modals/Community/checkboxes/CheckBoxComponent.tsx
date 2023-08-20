
import { Flex, Checkbox, Box, Text } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import React from 'react';



type Props = {
    icon: IconType
    mainText: string
    desc: string
    Checked: (val: string) => void
    communityType: string
}

export default function CheckBoxComponent({ icon: Icon, mainText, desc, communityType, Checked }: Props) {

    return (
        <Flex gap={2} color={'gray.500'} alignItems={'center'} mt={1}>
            <Checkbox size={'md'} onChange={() => Checked(mainText)} isChecked={(communityType === mainText) ? true : false} />

            <Icon size={14} />
            <Text fontWeight={'semibold'} color={'black'} fontSize={'10pt'}
                display={'flex'} alignItems={'center'}>{mainText} <Text color={'gray.500'}
                    fontWeight={'normal'} fontSize={'7pt'} ml={1} mt={1}>{desc}</Text>
            </Text>

        </Flex>
    )
}