import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { styled } from "styled-components";
import Header from "@/components/Header";
import MessageList from "@/components/MessageList";
import ChatUI from "@/components/ChatUI";

const PageContent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  height: 100vh;
  width: 100vw;
  overflow: auto;
  background-color: #fafafa;
`;

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
      <PageContent>
        <Header />
        <ChatUI />
      </PageContent>
    </>
  );
}
