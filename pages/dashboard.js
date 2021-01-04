import { Box, Button, Flex, Text, Avatar, Icon } from "@chakra-ui/core";
import { useAuth } from "@lib/auth";

import EmptyState from "@components/EmptyState";
import FreePlanEmptyState from "@components/FreePlanEmptyState";

const Dashboard = () => {
  const auth = useAuth();

  if (!auth.user) {
    return <Text>Loading...</Text>;
  }
  return <EmptyState />;
};

export default Dashboard;
