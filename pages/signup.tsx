import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import { DefaultContainer, DefaultTitle } from "../styles/global";

const Container = styled(DefaultContainer)``;

const Heading = styled(DefaultTitle)``;

const SignupPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Signup - Furniture Marketplace</title>
      </Head>
      <Container>
        <Heading>Signup Page</Heading>
      </Container>
    </>
  );
};

export default SignupPage;
