import { Box, Text, Heading, Flex } from "@chakra-ui/react";
import DashboardShell from "./DashboardShell";
import AddSiteModal from "./AddSiteModal";

const EmptyState = () => {
  return (
    <DashboardShell>
      <Flex mb={6} justifyContent="space-between" alignItems="flex-end">
        <Box>
          <Text fontSize="s">Sites</Text>
          <Heading>My Sites</Heading>
        </Box>
        <Box>
          <AddSiteModal text="+ Add a site" />
        </Box>
      </Flex>
      <Box
        width="100%"
        backgroundColor="white"
        borderRadius="8px"
        p={8}
        d="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Heading mb={4} size="lg">
          You haven't added any sites yet.
        </Heading>
        <Text mb={6}>Let's get started 🚀</Text>
        <AddSiteModal text="Add your first site" />
      </Box>
    </DashboardShell>
  );
};

export default EmptyState;
