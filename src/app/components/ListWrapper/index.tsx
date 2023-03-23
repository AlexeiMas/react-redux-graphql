import React from 'react'
import Container from "../UI/Container"
import styled from "styled-components"

const ListContainer =styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(200px, 400px));
  gap: 1em;
  @media (max-width: 1280px) {
    grid-template-columns: repeat(4, minmax(200px, 400px));
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(200px, 400px));
  }
  @media (max-width: 400px) {
    grid-template-columns: minmax(200px, 380px);
  }
`

const ListWrapper = ({children}: React.PropsWithChildren) => {
  return (
    <Container>
      <ListContainer>
        {children}
      </ListContainer>
    </Container>
  )
}

export default ListWrapper