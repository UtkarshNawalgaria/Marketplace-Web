import Link from "next/link";
import React from "react";
import { IProduct } from "../../types/product";
import {
  Title,
  ProductGridItem,
  ProductGridContainer,
  ProductGridItemImage,
  ProductGridItemDetails,
  ProductListPageContainer,
} from "../styles";
import ProductPrice from "./ProductPrice";

interface Props {
  products: IProduct[];
  sectionTitle: string;
}

function ProductGrid({ products, sectionTitle }: Props) {
  return (
    <ProductListPageContainer>
      <Title>{sectionTitle}</Title>
      <ProductGridContainer>
        {products.map((product: any) => {
          return (
            <ProductGridItem key={product.slug}>
              <Link href={`/products/${product.slug}/`}>
                <a>
                  <ProductGridItemImage
                    src={
                      product.media.length
                        ? product.media[0].image.thumbnail
                        : "/images/placeholders/placeholder_320.png"
                    }
                    alt={
                      product.media.length
                        ? product.media[0].image.image_alt_text
                        : product.name
                    }
                  />
                  <ProductGridItemDetails>
                    <div className="product-list-item-title">
                      <h3>{product.name}</h3>
                    </div>
                    <div className="product-list-item-price">
                      <ProductPrice
                        retailPrice={product.retail_price}
                        salePrice={product.sale_price}
                      />
                    </div>
                  </ProductGridItemDetails>
                </a>
              </Link>
            </ProductGridItem>
          );
        })}
      </ProductGridContainer>
    </ProductListPageContainer>
  );
}

export default ProductGrid;
