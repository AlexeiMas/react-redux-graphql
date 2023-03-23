import React from 'react'
import styled from "styled-components"
import {IHeader} from "../Header"

const PageBaseWrapper = styled.main<IHeader>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${props => props.height ? props.height + 30 + 'px' : "100px"};
  padding-bottom: 2rem;
`

const PageBase = ({children, height}: React.PropsWithChildren & IHeader) => {
  return (
    <PageBaseWrapper height={height}>
      {children}
    </PageBaseWrapper>
  )
}

export default PageBase