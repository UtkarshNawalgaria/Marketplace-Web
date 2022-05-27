import React from "react";
import { ProductDescription, ProductPrice, ProductTitle } from ".";
import { IProduct } from "../../types/product";


interface Props {
  product: IProduct;
}

const ProductDetails = ({ product }: Props) => {

  return (
    <div>
      <ProductTitle title={product.name}/>
      <ProductPrice retailPrice={product.retail_price} salePrice={product.sale_price} />
      <ProductDescription description={product.description} />
    </div>
  );
};

export default ProductDetails;
