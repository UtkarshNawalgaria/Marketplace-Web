import Head from "next/head";
import { GetStaticProps, NextPage } from "next/types";
import React from "react";
import styled from "styled-components";
import { ImageGallery, ProductDetails } from "../../products/ui";
import { DefaultContainer } from "../../styles/global";
import { IProduct } from "../../types/product";

interface Props {
  product: any;
}

const Container = styled(DefaultContainer)`
  display: flex;
  gap: 2rem;
  width: 75%;
  margin-top: 2rem;

  & > * {
    flex-basis: 100%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    padding: 1rem;
    margin-top: 0;
  }
`

const SingleProductPage: NextPage<Props> = ({ product }) => {
  return (
    <>
      <Head>
        <title>{product.name}</title>
      </Head>
      <Container>
        <ImageGallery media={product.media} />
        <ProductDetails product={product} />
      </Container>
    </>
  );
};

export const getStaticPaths = async () => {
  const response = await fetch("http://127.0.0.1:8000/api/v1/products/");
  const products = await response.json();

  return {
    paths: products.map((product: IProduct) => ({
        params: { slug: product.slug }
    })),
    fallback: false
  }
};

export const getStaticProps: GetStaticProps = async (context) => {
  const response = await fetch(
    `http://127.0.0.1:8000/api/v1/products/${context?.params?.slug}/`
  )
  const product = await response.json();

  return {
    props: {
      product: product,
    },
    revalidate: 30
  };
};

export default SingleProductPage;
