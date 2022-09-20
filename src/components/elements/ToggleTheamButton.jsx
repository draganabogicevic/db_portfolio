import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { IoMoon, IoSunnySharp } from 'react-icons/io5'

function ToggleThemeButton() {
    const { toggleColorMode } = useColorMode()
    const Icon = useColorModeValue(IoMoon, IoSunnySharp)
    const iconColor = useColorModeValue('black', '#FBD38D')
    const iconBg = useColorModeValue('white', 'dark')

    return (
        <IconButton onClick={toggleColorMode} aria-label="change theme" bg={iconBg} icon={<Icon color={iconColor} size='30px' />}  />
    )
}

export default ToggleThemeButton