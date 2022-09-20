import { useState, useEffect } from 'react'

import { Button, FormControl, TextArea} from '../../components/UI'
import apiKey from '../../emailkey'
import emailjs from '@emailjs/browser'

import {
    Box,
    Flex,
    Text,
    useColorModeValue,
} from '@chakra-ui/react'

const Contact = () => {
    const [values, setValues] = useState({
        user_name: '',
        user_email: '',
        message: ''
      });
      const [status, setStatus] = useState('');
    
    const formBg = useColorModeValue('white', 'black')

    const handleSubmit = (e) => {
        e.preventDefault()
        emailjs.send(apiKey.SERVICE_ID, apiKey.TEMPLATE_ID, values, apiKey.USER_ID)
          .then(response => {
            console.log('SUCCESS!', response)
            setValues({
              user_name: '',
              user_email: '',
              message: ''
            });
            setStatus('SUCCESS')
          }, error => {
            console.log('FAILED...', error)
          });
      }

      useEffect(() => {
        if(status === 'SUCCESS') {
          setTimeout(() => {
            setStatus('');
          }, 3000);
        }
      }, [status]);

      const handleChange = (e) => {
        setValues(values => ({
          ...values,
          [e.target.name]: e.target.value
        }))
      }

    return (
        <Box py={['50px', '50px', '50px', '150px']} px='20px'>
            <Flex direction='column' alignItems='center' maxWidth='80%' m='auto' >
                <Text textStyle='subTitle'>CONTACT ME</Text>
                <Text mt='30px' textStyle='mainText' textAlign={['center', 'center', '']}>
                    Feel free to contact me by submitting form below or sending me an email on dragana.bogicevic83@gmail.com if you have any questions or job proposal.
                </Text>
            </Flex>
            <Flex maxWidth={['100%', '100%', '80%', '60%']} bg={formBg} m='auto' my='80px' borderRadius='12px' py='80px' direction='column'>
                <form onSubmit={handleSubmit}>
                    <FormControl label='Name' inputType='text' name='user_name' value={values.user_name} handler={handleChange} />
                    <FormControl label='Email address' inputType='email' name='user_email'  value={values.user_email} handler={handleChange} />   
                    <TextArea label='Message' height='200px' name='message'  value={values.message} handler={handleChange}/>
                    <Box maxWidth='80%' m='auto'>
                        <Button text='Submit' type='submit' url='#' onClick={handleSubmit}/>
                    </Box>
                </form>
            </Flex>
            <Flex width={['100%', '100%', '80%']} m='auto' justifyContent='center'>
              <Text textStyle='mainText'>Thank you!</Text>
            </Flex>
        </Box>
    )
}

export default Contact