import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: Cera, "Helvetica Neue", Helvetica, Arial, sans-serif;
    }

    a {
      all: unset;
      cursor: pointer;
    }

    button {
      all: unset;
    }
`

export const DefaultTitle = styled.h1`
  font-size: 24px;
`

export const DefaultContainer = styled.div`
  margin: 0 auto;
`
