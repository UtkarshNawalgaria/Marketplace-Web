import Head from "next/head"
import { NextPage } from "next/types"
import React from "react"

interface Props {
    product: any
}

const SingleProductPage: NextPage<Props> = ({ product }) => {

    return (
        <>
            <Head>
                <title>{product.name}</title>
            </Head>
            <p>Product Detail Page - {product.name}</p>
        </>
    )
}

export const getServerSideProps = async (context: any) => {
    const { slug } = context.query

    const response = await fetch(`http://127.0.0.1:8000/api/v1/products/${slug}/`)
    const product = await response.json()

    return {
        props: {
            product: product
        }
    }
}

export default SingleProductPage