import React from 'react'
import styled from "styled-components"
import Loader from "../UI/Loader"
import BtnLoad from "../UI/BtnLoad"

const LoadContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export interface ILoadMore {
  loading: boolean
  onClick: () => void
}

const LoadMore = ({loading = false, onClick}: ILoadMore) => {
  return (
    <LoadContainer>
      {
        loading ? <Loader/> : <BtnLoad onClickHandler={onClick}/>
      }
    </LoadContainer>
  )
}

export default LoadMore