import Head from 'next/head';
import styles from '../styles/Home.module.css';

import Header from '../components/Header.js';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>First Theme</title>
      </Head>
      <Header />
      <main className={styles.main}>
        <div class={styles.grid}>
          <h1>Welcome to First Theme.</h1>
          <p>The very first theme of Theme Garden.</p>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="https://next.new" target="_blank" rel="noopener noreferrer">
          Check out this template on your own!
        </a>
      </footer>
    </div>
  );
}
