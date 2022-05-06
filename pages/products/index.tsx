import type { GetStaticProps, NextPage } from 'next'
import styled from 'styled-components'
import Link from 'next/link'
import { IProduct } from './types'

const GridContainer = styled.section`
  margin: 0 auto;
  max-width: 75%;
  display: grid;
`

interface Props {
  products: IProduct[];
}

const AllProductsPage: NextPage<Props> = ({products}) => {
  
  return (
    <>
      <GridContainer>
        {products.map((product: any, index: number) => {
          return (
            <div key={index}>
              <Link href={`products/${product.slug}`}>
                <a>{product.name}</a>
              </Link>
            </div>
          )
        })}
        {JSON.stringify(products)}
      </GridContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {

  const response = await fetch("http://127.0.0.1:8000/api/v1/products/")
  const data = await response.json()
  
  return {
      props: {
        products: data,
      }
  }
}

export default AllProductsPage