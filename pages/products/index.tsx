import type { GetStaticProps, NextPage } from 'next'
import { ProductList } from '../../types/product'
import Sidebar from '../../products/ui/Sidebar'
import ProductGrid from '../../products/ui/ProductGrid'
import { FlexContainer } from '../../products/styles'

const AllProductsPage: NextPage<ProductList> = ({ products }) => {

  return (
    <>
    <FlexContainer>
      <Sidebar />
      <ProductGrid products={products} sectionTitle={"All Products"}/>
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