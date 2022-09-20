import { useState } from 'react'
import { Box, Grid, GridItem, useColorModeValue, Text } from '@chakra-ui/react'
import { IoLogoLinkedin, IoLogoGithub } from 'react-icons/io5'
import { Button } from '../../components/UI'

import style from './HomePage.module.css'

const HomePage = () => {
    const [isInFocus, setIsInFocus] = useState(false) 
    const iconColor = useColorModeValue('black', 'white')
    const iconBgColor = useColorModeValue('white', 'RGBA(0, 0, 0, 0.80)')

    const handleMouseLeave = () => {
        setIsInFocus(false)
    }
    const handleMouseOver = () => {
        setIsInFocus(true)
    }

    const animationClass = isInFocus? style.socialNetworksBox : style.notHoveredBox

    return (
        <Box pt={['50px', '50px', '50px', '100px']} px={['20px', '20px', '20px', '0']} m='0'>
            <Grid  
                templateColumns='repeat(12, 1fr)'
                m='0'
            >
                <GridItem>
                    <Box 
                        className={animationClass}
                        bg={iconBgColor} 
                        width={['0', '0', '0', '80px']} 
                        mr='30px' 
                        flexDirection='column' 
                        justifyContent='center' 
                        alignItems='center' 
                        py='30px' 
                        display={['none', 'none', 'none', 'flex']}
                        onMouseOver={handleMouseOver}
                        onMouseLeave={handleMouseLeave}
                    >
                        <Box>
                            <a href='https://www.linkedin.com/in/dragana-bogicevic/' target='blanc'>
                                <IoLogoLinkedin size='45px' color={iconColor} />
                            </a>
                        </Box>
                        <Box mt='30px'>
                            <a href='https://github.com/draganabogicevic' target='blanc'>
                                <IoLogoGithub size='45px' />
                            </a>    
                        </Box>
                    </Box>
                </GridItem>
                <GridItem colSpan={[12, 12, 12, 10]}>
                    <Box textStyle='mainTitle' maxWidth='700px' m='auto' textAlign='center' mt='50px'>
                        <Text>HELLO, I'M DRAGANA BOGICEVIC</Text>
                    </Box>
                    <Text textAlign={['justify', 'justify', 'justify', 'center']} mt={['30px', '30px', '30px', '20px']} mx={['0', '0', '0', '50px']} textStyle='mainText'>Junior front end developer with deep experience in sales, especially B2B, that has been drawn to front-end development.
Astonished by getting the ideas based on predefined concepts, I enjoy shaping them into beatiful websites.
I am very dedicated in experimenting to make their appearance and functionality flawless and to bring the best UI/UX experience.</Text>
                </GridItem>
                <GridItem colSpan={12}>
                    <Box display='flex' justifyContent='center' my='50px'>
                        <Button url='/projects' text='PROJECTS' />        
                    </Box>
                </GridItem>
            </Grid>

        </Box>
    )
}

export default HomePage