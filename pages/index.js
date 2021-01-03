import Head from "next/head";
import { useAuth } from "@lib/auth";
import styles from "@styles/Home.module.css";
import { Button, Code, Text, Heading, Icon } from "@chakra-ui/core";

export default function Home() {
  const auth = useAuth();
  return (
    <div className={styles.container}>
      <Head>
        <title>Next Saas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Heading mb={4}>Hello There</Heading>
        <Icon name="logo" size="48px"></Icon>

        {auth.user ? (
          <Button mt={4} onClick={(e) => auth.signout()}>
            Sign Out
          </Button>
        ) : (
          <Button mt={4} onClick={(e) => auth.signinWithGitHub()}>
            Sign in
          </Button>
        )}
        <Text mt={4}>
          <Code>{auth.user?.email}</Code>
        </Text>
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
