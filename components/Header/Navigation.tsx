import React, { useState } from "react";
import Link from "next/link";
import links from "../../data/nav-links";
import { useRouter } from "next/router";
import {
  NavContainer,
  NavLink,
  NavItem,
  CartIcon,
  NavIcons,
  HamburgerIcon,
} from "./styles";
import { AiOutlineMenu, AiOutlineShopping } from "react-icons/ai";

interface NavigationProps {
  setOpenDrawer: () => void;
}

function Navigation({ setOpenDrawer }: NavigationProps) {
  const [cartQty, setCartQty] = useState(0);

  const router = useRouter();
  const currentPath = router.asPath;

  return (
    <NavContainer>
      {links.map((navItem, index) => {
        return (
          <NavItem key={index} active={currentPath == navItem.path}>
            <Link href={navItem.path} passHref>
              <NavLink>{navItem.title}</NavLink>
            </Link>
          </NavItem>
        );
      })}
      <NavIcons>
        <CartIcon type="button" onClick={() => setCartQty(qty => qty + 1)}>
          <AiOutlineShopping />
          {cartQty > 0 ? <span className="cart-qty">{cartQty}</span> : null}
        </CartIcon>
        <HamburgerIcon>
          <AiOutlineMenu onClick={setOpenDrawer} />
        </HamburgerIcon>
      </NavIcons>
    </NavContainer>
  );
}

export default Navigation;
