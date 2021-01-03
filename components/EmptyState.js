import { Box, Button, Text, Heading } from "@chakra-ui/core";
import DashboardShell from "./DashboardShell";

const FreePlanEmptyState = () => {
  return (
    <DashboardShell>
      <Box width="100%" backgroundColor="white" borderRadius="8px" p={8}>
        <Heading mb={4} size="md">
          You haven't added any sites.
        </Heading>
        <Text mb={6}>Let's get started 🚀</Text>
        <Button>Add your first site!</Button>
      </Box>
    </DashboardShell>
  );
};

export default FreePlanEmptyState;
