
import { Box, Text, Input, Button } from '@chakra-ui/react';
import React from 'react'

interface Props {

}

const OAuthInputs = (props: Props) => {
    return (
        <Box mx={'auto'} maxWidth={'300px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} gap={2} >
            <Input placeholder={'Email'} />
            <Input placeholder={'Password'} />
            <Button variant={'solid'} height={'34px'} mt={2} width={'100%'}>Login</Button>
        </Box>
    )
}

export default OAuthInputs
