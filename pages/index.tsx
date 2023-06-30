import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { styled } from "styled-components";
import Header from "@/components/Header";

const PageContent = styled.main``;

export default function Home() {
  return (
    <>
      <Head>
        <title>ChatSQL</title>
        <meta
          name="description"
          content="Talk to your SQL DB using natural language"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageContent className={styles.main}>
        <Header />
      </PageContent>
    </>
  );
}
