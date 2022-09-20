import {  useRef } from 'react'
import { useDisclosure } from '@chakra-ui/hooks'
import { Box, Image, Text } from '@chakra-ui/react'

import MenuBurger from '../icons/MenuBurger'
import Drawer from './Drawer'
import Res from '../../res/Res'

const SideDrawer = ({ display, padding, children }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()

    return (
        <Box display={display}>
            <MenuBurger onClick={onOpen} fontSize="32px" width="32px" height="32px" />
            <Drawer
                Header={<DrawerHeader onClose={onClose} />}
                isOpen={isOpen}
                onClose={onClose}
                finalFocusRef={btnRef}
                size="full"
            >
                <Box h="100%" p={padding}>
                    {children}
                </Box>
            </Drawer>
        </Box>
    )
}


const DrawerHeader = ({ onClose }) => (
    <Box maxWidth='90%' m='auto' display='flex' justifyContent='space-between'>
        <Box my='20px' display='flex' alignItems='center'>
            <Image alt='logo' borderRadius='100%' boxSize='70px' src={Res.images.logo} />
            <Text textStyle='smallText' ml='30px'>DaDaBo</Text>
        </Box>
        <Box display='flex' alignItems='center'>
            <MenuBurger onClick={onClose} fontSize="32px" width="32px" height="32px" />
        </Box>
    </Box>
)
export default SideDrawer