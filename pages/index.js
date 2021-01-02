import Head from "next/head";
import { useAuth } from "../lib/auth";
import styles from "../styles/Home.module.css";

export default function Home() {
  const auth = useAuth();
  return (
    <div className={styles.container}>
      <Head>
        <title>Next Saas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Next Saas</h1>
        <div>
          <button onClick={(e) => auth.signinWithGitHub()}>Sign in</button>
          {auth?.user && (
            <button onClick={(e) => auth.signout()}>Sign Out</button>
          )}
          <h3>{auth.user?.email}</h3>
        </div>
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
