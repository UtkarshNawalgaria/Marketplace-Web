import styled from "styled-components";

const GridContainer = styled.section`
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, auto));
`;

const Container = styled.div`
  width: 100%;
  padding: 0 15px 15px;
`;

const Title = styled.h1`
  padding: 0;
  margin: 0 0 10px 0;
`;

export {
    GridContainer,
    Container,
    Title,
}