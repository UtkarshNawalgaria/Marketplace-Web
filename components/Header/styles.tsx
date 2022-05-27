import styled from "styled-components";


const Container = styled.header`
  background-color: #2874f0;
  padding: 20px;
  position: relative;
`

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 75%;
  margin: 0 auto;

  @media (max-width: 768px) {
    justify-content: space-between;
    max-width: 100%;
  }
`

const NavContainer = styled.nav`
  display: flex;
  gap: 1rem;
`

const NavItem = styled.div<{ active: boolean }>`
  padding: 5px 10px;
  position: relative;
  cursor: pointer;

  @media (max-width: 768px) {
    display: none;
  }

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: white;
    transform: ${props => props.active ? "scaleX(1)" : "scaleX(0)"};
    transform-origin: bottom left;
    transition: transform 0.25s ease-out;
  }

  &:hover::after {
    transform: scaleX(1);
  }
`

const NavLink = styled.a`
  color: ${props => props.color ? props.color : "white"};
  text-decoration: none;
  font-weight: 500;
`

const NavIcons = styled.div`
  display: flex;
  gap: 1rem;
`

const HamburgerIcon = styled.button`
  cursor: pointer;
  font-size: 20px;
  color: white;
  position: relative;
  transition: transform .4s ease;
  border: none;
  background-color: transparent;

  @media (min-width: 768px) {
    display: none;
  }
`

const CartIcon = styled.button`
  cursor: pointer;
  font-size: 20px;
  color: white;
  position: relative;
  transition: transform .4s ease;
  border: none;
  background-color: transparent;

  &:hover {
    transform: scale(1.2);
  }

  .cart-qty {
    position: absolute;
    right: -8px;
    font-size: 12px;
    color: #eee;
    background-color: #f02d34;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    text-align: center;
    font-weight: 600;
  }
`

const Logo = styled.div``

const DrawerContainer = styled.aside<{ openDrawer: boolean }>`
  display: ${props => props.openDrawer ? 'block' : 'none'};
  position: fixed;
  z-index: 40;
  top: 0;
  bottom: 0;
  right: 0;
  height: 100%;
  width: 50%;
  overflow: hidden;
  background-color: #ffffff;

  @media (min-width: 768px) {
    display: none;
  }

  div {
    cursor: pointer;
  }
`

export {
    Container,
    FlexContainer,
    HamburgerIcon,
    NavIcons,
    Logo,
    NavContainer,
    NavLink,
    NavItem,
    CartIcon,
    DrawerContainer
}