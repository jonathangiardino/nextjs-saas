import { Box, Button, Text, Heading } from "@chakra-ui/react";
import DashboardShell from "./DashboardShell";

const FreePlanEmptyState = () => {
  return (
    <DashboardShell>
      <Box
        width="100%"
        backgroundColor="white"
        borderRadius="8px"
        p={8}
        d="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Heading mb={4} size="md">
          Get feedback on your site instantly.
        </Heading>
        <Text mb={6}>Start today, then grow with us 🌱</Text>
        <Button>Upgrade to Starter</Button>
      </Box>
    </DashboardShell>
  );
};

export default FreePlanEmptyState;
