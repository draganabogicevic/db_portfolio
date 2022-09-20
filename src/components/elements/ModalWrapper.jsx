import { LinkButton } from '../UI'

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Box,
  Image,
} from '@chakra-ui/react'




const ModalWrapper = ({children, title, image, url, ...props}) => {
  
  return (
      <Modal {...props}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalHeader>{title}</ModalHeader>
          <ModalBody >
            <Box>
                <Image src={image} alt='Project image' />
            </Box>
            <Box py='20px'>{children}</Box>
            <Box pb='20px'>
                <LinkButton link={url} text='Visit site' type='button'/>
            </Box>
            
          </ModalBody>
        </ModalContent>
      </Modal>
  )
}

export default ModalWrapper