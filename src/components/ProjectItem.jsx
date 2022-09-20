import { useState } from 'react'
import { ModalButton } from './UI'
import ModalWrapper from './elements/ModalWrapper'

import { Box, GridItem, useColorModeValue, Text, Image, Flex } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import style from './ProjectItem.module.css'

const ProjectItem = (project) => {
    const [isActive, setIsActive] = useState(false)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const projectDivBg = useColorModeValue('white', 'RGBA(0, 0, 0, 0.80)')

    
    const handleMouseLeave = () => {
        setIsActive(false)
    }

    const inFocus = () => {
        setIsActive(true)
    }

    console.log(project.project)
    return (
        <GridItem 
            colSpan={[12, 12, 6, 6, 4]}
            onMouseOver={inFocus}
            onMouseOut={handleMouseLeave}
            key={project.project.title}
            m='10px'
            minHeight='285px'
            shadow='hover'
        >
            {isActive?   
            <Box 
                bg={projectDivBg} 
                borderRadius='12px'
                shadow='default'
                display='flex'
                flexDirection='column'
                justifyContent='space-between'
                alignItems='center'
                py='40px'
                width='100%'
                height='100%'
            >
                <Box 
                    textAlign='center'
                    className={style.textFromUp}
                    maxWidth='80%'
                >
                    <Text  textStyle='xSmallTitle'>{project.project.title}</Text>
                    <Text textStyle='baseText'>{project.project.technology}</Text>
                </Box>
                <Box display='flex' flexDirection='column' alignItems='center' className={style.textFromBelow}>
                    <ModalWrapper 
                        isOpen={isOpen} 
                        onClose={onClose}
                        blockScrollOnMount={false}
                        color="okBlue"
                        size={'xl'}
                        title={project.project.title}
                        image={project.project.image}
                        url={project.project.link}
                    > 
                        {project.project.text}
                    </ModalWrapper>
                    <ModalButton text='Learn more' type='button' onClick={onOpen}/> 
                </Box>
            </Box> 
            : <Box width='100%' height='100%' backgroundImage={project.project.image} backgroundSize='cover' backgroundPosition='center' backgroundRepeat='no-repeat' borderRadius='12px' shadow='default'/>}
        </GridItem>
    )
}

export default ProjectItem