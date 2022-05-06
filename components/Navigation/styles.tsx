
import styled from "styled-components"


const NavContainer = styled.nav`
  display: flex;
  gap: 20px;
`

const NavItem = styled.div<{ active: boolean }>`
    padding: 5px 10px;
    position: relative;

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

export {
    NavContainer,
    NavLink,
    NavItem
}