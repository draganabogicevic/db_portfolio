import { Button, ModalButton } from '../../components/UI'
import Res from '../../res/Res'

import { Box, Flex, Text, useColorModeValue } from '@chakra-ui/react'

import style from './AboutMe.module.css'
const About = () => {

    const bgPhoto = useColorModeValue(Res.images.grapes, Res.images.grapesDark)
    const textColorFreeTime = useColorModeValue('black', 'black')


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
            <Flex maxWidth={['100%', '100%', '80%']} justifyContent='space-between' m='auto' mt={['30px', '30px', '30px', '80px']} direction={['column', 'column', 'column', 'row']} >
                <Box width={['100%', '100%','100%','50%']} mt='30px' display='flex' flexDirection='column'>
                    <Text textStyle='smallTitle' textAlign={['center', 'center', 'left']}>Who am I?</Text>
                    <Text textStyle='description' mt='30px' textAlign={['center', 'center', 'justify']}>A Frontend Web Developer focused on building Websites and Web Applications leading to the success of the overall product. With my previous experience in sales and customer service, I have learned to listen and understand clients needs and requirements. My main goal was to provide them reliability and good partnership, to gain their trust and satisfaction. With all this acquired skills and mastered frontend tools, I strongly believe I will be able to transfer any client needs in good-looking web presentation. Check out some of my work in the Projects section. I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me. </Text>
                    <Flex direction='row' mt='30px' justifyContent={['center', 'center', 'center', 'flex-start']}>
                        <Box>
                            <Button url={'/contact'} text='CONTACT ME' />
                        </Box>
                        <Box onClick={downloadCV} ml='30px'>
                            <ModalButton text='DOWNLOAD CV' type='' />
                        </Box>   
                    </Flex> 
                </Box>
                <Box width={['100%', '100%', '100%', '50%']} mt='50px' mb={['230px', '230px', '230px', '30px']}>
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
            <Flex maxWidth={['100%', '100%', '90%']} m='auto' py='80px' >
                <Box 
                    mt='30px' 
                    display='flex' 
                    flexDirection='column' 
                    bgImage={bgPhoto}
                    bgRepeat='no-repeat'
                    bgSize='cover'
                    borderRadius='20px'
                >
                    <Box maxWidth={['100%', '100%', '90%']} m='auto' py='80px' px={['20px', '20px', 0]} color={textColorFreeTime}>
                        <Text textStyle='smallTitle' textAlign={['center', 'center', 'left']}>In my free time...</Text>
                        <Text textStyle='description' mt='30px' textAlign={['center', 'center', 'justify']}>As a mother and wife, I like to devote my free time to my family. Cooking and preparing goodies for them is a great passion for me. I like to find new recipes on the internet and try them out with enthusiasm if everything works out.</Text>
                        <Text textStyle='description' mt='10px' textAlign={['center', 'center', 'justify']}>Besides cooking, I like to spend my free time outdoors, in my garden, growing with flowers or with various fruits. This is something that lets me clear my head and find a place of peace.</Text>
                        <Text textStyle='description' mt='10px' textAlign={['center', 'center', 'justify']}>Travelling is another great passion of mine. I especially enjoy the change that it brings, can never get enough exploring new regions, diverse cultures, people, languages and food.</Text>
                    </Box>
                </Box>
            </Flex>
        </Box>
    )
}

export default About

