import React from "react";
import NextLink from "next/link";
import { Box, Button, Flex, Link, Avatar, Icon, Text } from "@chakra-ui/react";
import { useAuth } from "@lib/auth";
import { Logo } from "@styles/theme";

const DashboardShell = ({ children }) => {
  const auth = useAuth();
  return (
    <Box backgroundColor="gray.100" h="100vh">
      <Flex
        backgroundColor="white"
        mb={[8, 16]}
        w="full"
        borderTop="5px solid #0AF5F4"
      >
        <Flex
          alignItems="center"
          justifyContent="space-between"
          pt={4}
          pb={4}
          maxW="1250px"
          margin="0 auto"
          w="full"
          px={8}
          h="60px"
        >
          <Flex align="center">
            <NextLink href="/" passHref>
              <Link>
                <Logo boxSize={8} mr={8}></Logo>
              </Link>
            </NextLink>
            <NextLink href="/dashboard" passHref>
              <Link mr={4}>Sites</Link>
            </NextLink>
            <NextLink href="/feedback" passHref>
              <Link>Feedback</Link>
            </NextLink>
          </Flex>
          <Flex justifyContent="center" alignItems="center">
            {auth.user && (
              <NextLink href="/" passHref>
                <Link mr="4" onClick={(e) => auth.signout()}>
                  Log out
                </Link>
              </NextLink>
            )}
            <NextLink href="/account" passHref>
              <Link>
                <Avatar size="sm" src={auth?.user?.photoUrl} />
              </Link>
            </NextLink>
          </Flex>
        </Flex>
      </Flex>
      <Flex margin="0 auto" direction="column" maxW="1250px" px={[0, 8, 8]}>
        {children}
      </Flex>
    </Box>
  );
};

export default DashboardShell;
