import { Link, useLocation } from 'react-router-dom'
import ToggleThemeButton from './elements/ToggleTheamButton'
import Res from '../res/Res'
import SideDrawer from './elements/SideDrawer'

import {
    Menu,
    Flex,
    Box,
    Image,
    Text,
    useColorModeValue
} from '@chakra-ui/react'


const navItems = [
    { href: '/', title: 'Home' },
    { href: '/about', title: 'About me' },
    { href: '/projects', title: 'Projects' },
    { href: '/contact', title: 'Contact me' },
  
]

const Header = () => {

    const bgColor = useColorModeValue('white', 'black')
    
    
    return (
        <Menu >
            <Box bg={bgColor}>
                <Flex justifyContent='space-between' maxWidth='90%' margin='auto' alignItems='center'>
                    <Box my='20px' display='flex' alignItems='center'>
                        <Text textStyle='smallText' >DraganaB</Text>
                        <Link to='/'>
                            <Image alt='logo' borderRadius='100%' boxSize='70px' src={Res.images.logo} ml={['10px', '10px', '30px']} />
                        </Link>
                    </Box>
                    <Box display={['none', 'none', 'none', 'flex']}>
                        <MenuItems direction='row'  />
                    </Box>
                

                    <SideDrawer display={['flex', 'flex', 'flex', 'none', 'none']} padding="4">
                        <Box  d="flex" justifyContent="center">
                            <Box d='flex' flexDirection={['column', 'column', 'column', '', '']} mt='50px'>
                                <MenuItems direction='column' align='center' />
                            </Box>
                        </Box>
                    </SideDrawer>
                </Flex>
            </Box>
            
        </Menu>
    )
}

const MenuItems = ({ direction, align=''}) => {

    let location = useLocation()
    let path = location.pathname

    const menuItemsColor = useColorModeValue('black', 'white')

    return (
        <Box display='flex' flexDirection={direction} alignItems={align}> 
            {navItems.map((item, index) => (
            <Link to={item.href} key={`${item.title}_${index}`}>
                <Text
                    mr='20px'
                    my={['20px', '20px', '20px', '0']}    
                    fontSize='24px'
                    _hover={{ color: '#FBD38D' }}
                    color={path === item.href? '#FBD38D': menuItemsColor}
                    textStyle='menu'
                >
                    {item.title}
                </Text>
            </Link>
            ))}
            <ToggleThemeButton />
           
        </Box>
    )
}

export default Header

