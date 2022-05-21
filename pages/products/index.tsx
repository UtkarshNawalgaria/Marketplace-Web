import type { GetStaticProps, NextPage } from 'next'
import styled from 'styled-components'
import { ProductList } from '../../types/product'
import Sidebar from '../../products/ui/Sidebar'
import ProductGrid from '../../products/ui/ProductGrid'
import { DefaultContainer } from '../../styles/global'

const FlexContainer = styled(DefaultContainer)`
  display: flex;
  padding: 15px;
  min-width: 978px;
  max-width: 1680px;
`

const AllProductsPage: NextPage<ProductList> = ({ products }) => {

  return (
    <>
      <FlexContainer>
        <Sidebar />
        <ProductGrid products={products} title={"All Products"}/>
      </FlexContainer>
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