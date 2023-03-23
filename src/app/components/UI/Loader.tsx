import React from 'react'
import styled from "styled-components"

const LoaderBase = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;
  margin: 2rem 0;
  position: relative;
  pointer-events: none;

  :after {
    content: '';
    position: absolute;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    border-width: 6px;
    border-style: solid;
    border-color: #111 transparent #111 transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }

  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

const Loader = () => {
  return <LoaderBase/>
}

export default Loader