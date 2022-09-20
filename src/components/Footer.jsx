import { Link } from 'react-router-dom'
import { Box, useColorModeValue, Flex, Text, HStack, Icon } from '@chakra-ui/react'
import { IoLogoLinkedin, IoLogoGithub, IoMailSharp } from 'react-icons/io5'

const Footer = () => {

  


    return (
        <Box as='footer' py='30px' bg='rgb(119, 119, 119)' color='white'>
            <Flex maxWidth={['100%', '100%', '80%']} m='auto' px={['20px', '20px', '0']} justifyContent='center'  direction= 'row'>
                <Box>
                    <HStack spacing={16}>
                        <a href='https://www.linkedin.com/in/dragana-bogicevic/' target='blank'>
                            <IoLogoLinkedin size='40px' color='black'/>
                        </a>
                        <a href='https://github.com/draganabogicevic' target='blank'>
                            <IoLogoGithub size='40px' color='black'/>
                        </a>
                        <Link to='/contact'>
                            <IoMailSharp size='40px' color='black'/>
                        </Link>
                    </HStack>
                </Box>
            </Flex>
            {/* <Box maxWidth={['98%', '98%', '80%']} borderTop='1px solid' borderColor='white' m='auto' mt='10px'>
                <Text textStyle='smallText' textAlign='center' mt='10px'>&copy; Copyright 2022. Made by Dragana Bogicevic.</Text>
            </Box> */}
        </Box>
    )
}

export default Footer