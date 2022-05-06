import React from 'react'
import Link from 'next/link'
import links from '../../data/nav-links'
import { useRouter } from 'next/router'
import {NavContainer, NavLink, NavItem} from './styles'


function Navigation() {

    const router = useRouter()
    const currentPath = router.asPath

    return (
        <NavContainer>
            {links.map((navItem, index) => {
                return (
                    <NavItem key={index} active={currentPath == navItem.path}>
                        <Link href={navItem.path} passHref>
                            <NavLink>{navItem.title}</NavLink>
                        </Link>
                    </NavItem>
                )
            })}
        </NavContainer>
    )
}

export default Navigation