import Head from "next/head";
import { GetStaticProps, NextPage } from "next/types";
import React from "react";
import { IProduct } from "../../types/product";

interface Props {
  product: any;
}

const SingleProductPage: NextPage<Props> = ({ product }) => {
  return (
    <>
      <Head>
        <title>{product.name}</title>
      </Head>
      <p>Product Detail Page - {product.name}</p>
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
