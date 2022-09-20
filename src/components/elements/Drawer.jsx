import {
    Drawer as CDrawer,
    DrawerBody,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
} from '@chakra-ui/react'

const Drawer = ({ isOpen, onClose, Footer, Header, ...props }) => {
   
    return (
        <CDrawer isOpen={isOpen} onClose={onClose} {...props}>
            <DrawerContent>
                <DrawerHeader p="0">{Header}</DrawerHeader>
                <DrawerBody p="0" onClick={onClose}>
                    {props.children}
                </DrawerBody>
                {Footer && <DrawerFooter>{Footer}</DrawerFooter>}
            </DrawerContent>
        </CDrawer>
    )
}

export default Drawer