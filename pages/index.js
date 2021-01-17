import Head from "next/head";
import NextLink from "next/link";
import { useAuth } from "@lib/auth";
import styles from "@styles/Home.module.css";
import { Button, Code, Text, Heading, Icon, Link, Box } from "@chakra-ui/react";
import { Logo } from "../styles/theme";

export default function Home() {
  const auth = useAuth();
  return (
    <div className={styles.container}>
      <Head>
        <title>Next Saas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Heading mb={4}>
          {auth.user
            ? `Hello ${auth.user?.name.split(" ").slice(0, 1).join(" ")}`
            : "Please Log in"}
        </Heading>
        <Logo boxSize={12}></Logo>

        {auth.user ? (
          <Box d="flex" flexDirection="column">
            <NextLink href="/dashboard" passHref>
              <Button mt={4}>Go to dashboard</Button>
            </NextLink>
            <Button variant="ghost" mt={4} onClick={(e) => auth.signout()}>
              Sign Out
            </Button>
          </Box>
        ) : (
          <Button mt={4} onClick={(e) => auth.signinWithGitHub()}>
            Sign in
          </Button>
        )}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
