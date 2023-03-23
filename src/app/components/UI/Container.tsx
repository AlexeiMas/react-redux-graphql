import React from 'react'
import styled from "styled-components"

const ContainerWrapper =styled.div`
  width: min(100% - 15px, 1280px);
`

const Container = ({children}: React.PropsWithChildren) => {
  return (
    <ContainerWrapper>
      {children}
    </ContainerWrapper>
  )
}

export default Container