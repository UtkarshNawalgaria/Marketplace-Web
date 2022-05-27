import styled from "styled-components"
import { DefaultContainer } from '../styles/global'

// Product List Page Styles
const FlexContainer = styled(DefaultContainer)`
  display: flex;
  flex-wrap: wrap;
  padding: 15px;
  max-width: 1680px;
`

const ProductListPageContainer = styled.div`
  flex: 1 1 75%;
  padding: 0 15px 15px;

  @media (max-width: 768px) {
    padding: 0
  }
`

const ProductGridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1rem;
  overflow: hidden;
`

// Product Grid Item Styles
const ProductGridItem = styled.div`
  width: 100%;
  padding-bottom: 1rem;
  border: solid 1px #d8d3d3;
  border-radius: 5px;

  & .product-list-details {
    padding: 2px 8px;
  }
`

const ProductGridItemImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  border-radius: 5px 5px 0 0;
`

const ProductGridItemDetails = styled.div`
  padding: 0 8px;

  & h3 {
    color: black;
    font-weight: 500;
    font-size: 18px;
  }

  & .product-list-item-price {
    margin-top: 5px;
  }
`

// Sidebar styles
const Side = styled.aside`
  flex: 1 1 25%;
  max-width: 280px;

  @media (max-width: 768px) {
    display: none;
  }
`

// Other Styles
const Title = styled.h1`
  padding: 0;
  margin: 0 0 10px 0;
`

export {
  Side,
  Title,
  FlexContainer,
  ProductGridItem,
  ProductGridContainer,
  ProductGridItemImage,
  ProductGridItemDetails,
  ProductListPageContainer,
}