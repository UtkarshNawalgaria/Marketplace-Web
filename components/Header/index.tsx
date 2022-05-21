import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import Navigation from "./Navigation";
import Drawer from "./Drawer";
import { Container, FlexContainer, Logo } from "./styles";


function Header() {

  const [openDrawer, setOpenDrawer] = useState(false)

  return (
    <Container>
      <FlexContainer>
        <Logo>
          <Link href="/">
            <a>
              <Image
                src="/images/flipkart-logo.png"
                alt="Logo"
                width={75}
                height={20}
              ></Image>
            </a>
          </Link>
        </Logo>
        <Navigation setOpenDrawer={() => setOpenDrawer(state => !state)} />
      </FlexContainer>
      <Drawer openDrawer={openDrawer} setOpenDrawer={() => setOpenDrawer(state => !state)} />
    </Container>
  );
}

export default Header;
