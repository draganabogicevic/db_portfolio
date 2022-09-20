import { Link } from 'react-router-dom'

import {
    Flex,
    Stack,
    Text,
    Box,
    Circle,
    Icon,
    Divider,
    Button as CButton,
    FormControl as CFormControl,
    useColorModeValue,
    FormLabel,
    Input,
    Textarea as CTextArea,
    FormErrorMessage,
} from '@chakra-ui/react'

export const Button = ({ url, text, type, ...props }) => {

    const btnBg = useColorModeValue('#FBD38D', '#2D3748')
     
        return (
            <Link to={url}>
                <CButton
                    type={type}
                    bg={btnBg}
                    shadow='default'
                    borderRadius='12px'
                    p='30px'
                    _hover={{ background: 'darkOrange', shadow: 'hover' }}
                    {...props}
                >
                    <Text textStyle='button'>{text}</Text>
                </CButton>
            </Link>
    )
}

export const ModalButton = ({ text, type, ...props }) => {

    const btnBg = useColorModeValue('#FBD38D', '#2D3748')
     
        return (
            <CButton
                type={type}
                bg={btnBg}
                shadow='default'
                borderRadius='12px'
                p='30px'
                _hover={{ background: 'darkOrange', shadow: 'hover' }}
                {...props}
            >
                <Text textStyle='button'>{text}</Text>
            </CButton>
    )
}
export const LinkButton = ({ text, type, link, ...props }) => {

    const btnBg = useColorModeValue('#FBD38D', '#2D3748')
     
        return (
            <CButton
                type={type}
                bg={btnBg}
                shadow='default'
                borderRadius='12px'
                p='30px'
                _hover={{ background: 'darkOrange', shadow: 'hover' }}
                {...props}
            >
                <a href={link} target='blanck'><Text textStyle='button'>{text}</Text></a>
            </CButton>
    )
}
export const FormControl = ({ label, inputType, name, value, handler }) => {

        const inputBgColor = useColorModeValue('white', '#2D3748' )
    
        return(
            <CFormControl maxWidth='80%' m='auto' mb='30px'>
                <FormLabel>
                    <Text textStyle='formLabel'>{label}</Text>
                </FormLabel>
                <Input type={inputType} bg={inputBgColor} borderRadius='12px' name={name} value={value} onChange={handler}/>
            </CFormControl>
        )    
}

export const TextArea = ({ label, name, value, handler, ...props }) => {

        const inputBgColor = useColorModeValue('white', '#2D3748' )
    
        return(
            <CFormControl maxWidth='80%' m='auto' mb='30px'>
                <FormLabel>
                    <Text textStyle='formLabel'>{label}</Text>
                </FormLabel>
                <CTextArea bg={inputBgColor} borderRadius='12px' {...props} name={name} value={value} onChange={handler}/>
            </CFormControl>
        )    
}

