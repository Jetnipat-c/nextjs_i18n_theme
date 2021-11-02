import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import { indexLanguage } from "../language/indexLg";

const Home: NextPage = () => {
  const { locale, locales, defaultLocale, asPath } = useRouter();
  const router = useRouter();
  const {
    title,
    subtitle,
    document,
    subDoc,
    learn,
    subLearn,
    examples,
    subExamples,
    deploy,
    subDeploy,
  } = indexLanguage[locale!];
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>{title}</h1>

        <p className={styles.description}>{subtitle}</p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>{document} &rarr;</h2>
            <p>{subDoc}</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>{learn} &rarr;</h2>
            <p>{subLearn}</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>{examples} &rarr;</h2>
            <p>{subExamples}</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>{deploy} &rarr;</h2>
            <p>{subDeploy}</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
