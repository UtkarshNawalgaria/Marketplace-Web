import Link from "next/link";
import React from "react";
import styled from "styled-components";

const CenteredBanner = styled.div`
  margin: 1rem;
  cursor: pointer;
  overflow: hidden;
  border-radius: 15px;

  img {
    width: 100%;
    border-radius: 15px;
    transition: all 0.4s ease-in-out;

    &:hover {
      opacity: 0.7;
      transform: scale(1.05);
    }
  }

  @media (min-width: 768px) {
    width: 85%;
    margin: 1rem auto;
  }
`;

const HeroBanner = () => {
  return (
    <CenteredBanner>
      <Link href="/products/">
        <a>
          <img
            src={"/images/hero_banner.webp"}
            alt="Hero Banner"
            layout="responsive"
          />
        </a>
      </Link>
    </CenteredBanner>
  );
};

export default HeroBanner;
