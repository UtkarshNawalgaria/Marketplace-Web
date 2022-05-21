import React from 'react'
import styled from 'styled-components'

const Side = styled.aside`
    width: 15%;
    max-width: 280px;

    @media (max-width: 768px) {
      display: none;
    }
`


function Sidebar() {
  return (
    <Side>Sidebar</Side>
  )
}

export default Sidebar