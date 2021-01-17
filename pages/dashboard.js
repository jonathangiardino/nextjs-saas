import {
  Box,
  Button,
  Flex,
  Text,
  Avatar,
  Spinner,
  Heading,
} from "@chakra-ui/react";
import { useAuth } from "@lib/auth";

import EmptyState from "@components/EmptyState";
import FreePlanEmptyState from "@components/FreePlanEmptyState";

const Dashboard = () => {
  const auth = useAuth();

  if (!auth.user) {
    return (
      <Flex
        h="100vh"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Spinner size="xl" />
      </Flex>
    );
  }
  return (
    <>
      <EmptyState />;
    </>
  );
};

export default Dashboard;
