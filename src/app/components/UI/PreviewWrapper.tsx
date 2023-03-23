import React from 'react'
import styled, {keyframes} from "styled-components"

const shine = keyframes`
  to {
    background-position-x: -200%;
  }
`

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  :hover {
    :before {
      content: "Details";
      font-size: 2rem;
      background: rgba(0, 0, 0, .8);
      color: white;
      position: absolute;
      border-radius: 10px;
      padding: .1em .5em .2em;
      text-transform: uppercase;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  img {
    object-fit: cover;
    aspect-ratio: 460 / 640;
    width: 100%;
    height: 100%;
    -webkit-user-drag: none;
    background: linear-gradient(90deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
    background-size: 200% 100%;
    animation: 1.5s ${shine} linear infinite;
  }
`

const PreviewWrapper = ({children}: {children: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>}) => {
  if (!React.isValidElement(children) || children.type !== 'img') {
    throw new Error('PreviewWrapper only accepts img tag as children');
  }

  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

export default PreviewWrapper