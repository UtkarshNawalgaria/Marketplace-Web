import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IProduct } from "../../types/product";
import { Container, GridContainer, Title } from "../styles";

interface Props {
  products: IProduct[];
  title: string;
}

function ProductGrid({ products, title }: Props) {
  return (
    <Container>
      <Title>{title}</Title>
      <GridContainer>
        {products.map((product: any) => {
          return (
            <div key={product.slug}>
              <Link href={`/products/${product.slug}/`}>
                <a>
                  <Image
                    src={
                      product.media.length
                        ? product.media[0].image.thumbnail
                        : "/images/placeholders/placeholder_250x250.png"
                    }
                    alt={
                      product.media.length
                        ? product.media[0].image.image_alt_text
                        : product.name
                    }
                    height={250}
                    width={250}
                  />
                  <p>{product.name}</p>
                </a>
              </Link>
            </div>
          );
        })}
      </GridContainer>
    </Container>
  );
}

export default ProductGrid;
