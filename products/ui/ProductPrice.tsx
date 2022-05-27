import React from 'react'

interface Props {
  retailPrice: string;
  salePrice: string;
  discount?: string;
}

const ProductPrice = (props: Props) => {
  return (
    <div>₹{props.retailPrice}</div>
  )
}

export default ProductPrice