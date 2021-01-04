import { useRef } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/core";

const AddSiteModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef();
  const finalRef = useRef();

  return (
    <>
      <Button onClick={onOpen}>Add your first site!</Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add your first site!</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Site Name</FormLabel>
              <Input ref={initialRef} placeholder="My site" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Site Link</FormLabel>
              <Input placeholder="https://mysite.com" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose} fontWeight="medium" color="#222">
              Cancel
            </Button>
            <Button
              backgroundColor="#10F4F4"
              color="#222"
              fontWeight="medium"
              ml={3}
            >
              Add Site
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddSiteModal;
