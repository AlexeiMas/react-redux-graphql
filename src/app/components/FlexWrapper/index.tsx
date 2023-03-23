import React from 'react'
import styled from "styled-components"
import Loader from "../UI/Loader"

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const FlexWrapper = ({children, embedLoader}: React.PropsWithChildren & {embedLoader?: boolean}) => {
  return (
    <Flex>
      {embedLoader && <Loader/>}
      {children}
    </Flex>
  )
}

export default FlexWrapper