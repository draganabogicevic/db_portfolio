import { Button, ModalButton } from '../../components/UI'

import { Box, Flex, Text, useColorModeValue } from '@chakra-ui/react'

import style from './AboutMe.module.css'
const About = () => {

    const downloadCV = () => {
        fetch('CVDraganaBogicevic.pdf').then(response => 
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob)
                // Setting various property values
                let alink = document.createElement('a')
                alink.href = fileURL;
                alink.download = 'CVDraganaBogicevic.pdf'
                alink.click()
            }))
    }

    return (
        <Box pt={['50px', '50px', '50px', '150px']} px='20px'>
            <Flex direction='column' alignItems='center' >
                <Text textStyle='subTitle'>ABOUT ME</Text>
                <Text mt='30px' textStyle='mainText' textAlign={['center', 'center', '']}>Below you can find more information about me, what I do, and which are my current skills.</Text>
            </Flex>
            <Flex maxWidth={['100%', '100%', '80%']} justifyContent='space-between' m='auto' mt={['30px', '30px', '80px']} direction={['column', 'column', 'row']} >
                <Box width={['100%', '100%', '50%']} mt='30px' display='flex' flexDirection='column'>
                    <Text textStyle='smallTitle' textAlign={['center', 'center', 'left']}>Who am I?</Text>
                    <Text textStyle='description' mt='30px' textAlign={['center', 'center', 'left']}>A Frontend Web Developer focused on building Websites and Web Applications leading to the success of the overall product. With my previous experience in sales and customer service, I have learned to listen and understand clients needs and requirements. My main goal was to provide them reliability and good partnership, to gain their trust and satisfaction. With all this acquired skills and mastered frontend tools, I strongly believe I will be able to transfer any client needs in good-looking web presentation. Check out some of my work in the Projects section. I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me. </Text>
                    <Flex direction='row' mt='30px'>
                        <Box>
                            <Button url={'/contact'} text='CONTACT ME' />
                        </Box>
                        <Box onClick={downloadCV} ml='30px'>
                            <ModalButton text='DOWNLOAD CV' type='' />
                        </Box>   
                    </Flex> 
                </Box>
                <Box width={['100%', '100%', '40%']} my={['60px', '60px', '60px', '30px']}>
                    <Text textStyle='smallTitle' textAlign={['center', 'center']}>My Skills</Text>
                    <Flex flexWrap='wrap' alignItems='center' justifyContent='center' mt='100px'>
                        <Box className={style.stage}>
                            <Box className={style.cubespinner}  bg='red'>
                                <Box className={style.face1}>HTML</Box>
                                <Box className={style.face2}>CSS, SCSS</Box>
                                <Box className={style.face3}>JavaScript</Box>
                                <Box className={style.face4}>TypeScript</Box>
                                <Box className={style.face5}>ReactJs</Box>
                                <Box className={style.face6}>Git</Box>
                            </Box>
                        </Box>
                    </Flex>
                </Box>
            </Flex>
            <Flex maxWidth={['100%', '100%', '80%']} m='auto' pb='150px' pt='80px'>
                <Box mt='30px' display='flex' flexDirection='column'>
                    <Text textStyle='smallTitle' textAlign={['center', 'center', 'left']}>In my free time...</Text>
                    <Text textStyle='description' mt='30px' textAlign={['center', 'center', 'left']}></Text>
                </Box>
            </Flex>
        </Box>
    )
}

export default About

