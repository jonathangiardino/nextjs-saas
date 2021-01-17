import { useRef } from "react";
import { useForm } from "react-hook-form";
import { addSite } from "@lib/db";
import { useAuth } from "@lib/auth";
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
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";

const AddSiteModal = ({ text }) => {
  // Get auth
  const auth = useAuth();
  // Modal
  const { isOpen, onOpen, onClose } = useDisclosure();
  // React-hook-form
  const { register, handleSubmit, errors } = useForm();

  // Toast message on site added
  const toast = useToast();
  const onCreateSite = ({ site, url }) => {
    addSite({
      authorId: auth.user.uid,
      createdAt: new Date().toISOString(),
      site,
      url,
    });
    toast({
      title: "Super!",
      description: "New site added.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    onClose();
  };

  return (
    <>
      <Button
        backgroundColor="#E7ECF3"
        fontWeight="600"
        variant="solid"
        onClick={onOpen}
      >
        {text}
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent as="form" onSubmit={handleSubmit(onCreateSite)}>
          <ModalHeader>Add a new site</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Site Name</FormLabel>
              <Input
                placeholder="My site"
                name="site"
                ref={register({ required: "Required" })}
              />
              {errors.Site && (
                <small>Please fill in a site name for your site</small>
              )}
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Site Link</FormLabel>
              <Input
                placeholder="https://mysite.com"
                name="url"
                ref={register({ required: "Required" })}
              />
              {errors.URL && <small>Please fill in a URL for your site</small>}
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              onClick={onClose}
              fontWeight="medium"
              color="#222"
              variant="ghost"
              mr={4}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              fontWeight="medium"
              color="#222"
              loadingText="Adding..."
              // isLoading
              // #10F4F4
            >
              Add site
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddSiteModal;
