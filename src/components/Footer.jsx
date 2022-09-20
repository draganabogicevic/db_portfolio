import { Box, useColorModeValue, Flex, Text, HStack } from '@chakra-ui/react'
import { IoLogoLinkedin, IoLogoGithub } from 'react-icons/io5'

const Footer = () => {

    const borderColor = useColorModeValue('black', 'white')

    return (
        <Box as='footer' py='70px'>
            <Flex maxWidth={['100%', '100%', '80%']} m='auto' px={['20px', '20px', '0']} justifyContent='space-between'  direction={['column', 'column', 'row']}>
                <Box maxWidth={['100%', '100%', '60%']} >
                    <Text textStyle='xSmallTitle' mb='20px'>Dragana Bogicevic</Text>
                    <Text textStyle='baseText'>I’m a Front-End Developer from Serbia. I have a great passion for creating successful responsive websites that will bring the best UI/UX experience to its users. The tools I use for that are HTML, CSS, JS, ReactJs. Visit my <a href='https://www.linkedin.com/in/dragana-bogicevic/' target='blank'><Text color='darkOrange' as='span'>LinkedIn</Text></a> profile for more details or contact me directly instead.</Text>
                </Box>
                <Box>
                    <Text textStyle='xSmallTitle' mt={['30px', '30px', '0']} mb='20px'>SOCIAL</Text>
                    <HStack spacing={4}>
                        <a href='https://www.linkedin.com/in/dragana-bogicevic/' target='blank'>
                            <IoLogoLinkedin size='40px'/>
                        </a>
                        <a href='https://github.com/draganabogicevic' target='blank'>
                            <IoLogoGithub size='40px'/>
                        </a>
                    </HStack>
                </Box>
            </Flex>
            <Box maxWidth={['98%', '98%', '80%']} borderTop='1px solid' borderColor={borderColor} m='auto' mt='70px'>
                <Text textStyle='smallText' textAlign='center' mt='30px'>&copy; Copyright 2022. Made by Dragana Bogicevic.</Text>
            </Box>
        </Box>
    )
}

export default Footer