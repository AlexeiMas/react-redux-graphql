import styled from "styled-components"
import {Media} from "../../graphql/__generated__/graphql"
import React from "react"
import {Link} from "react-router-dom"
import PreviewWrapper from "../UI/PreviewWrapper"

const AnimeItemContainer = styled.div<{loading: string}>`
  width: 100%;
  pointer-events: ${({loading}) => loading === 'true' ? "none" : "unset"};
  :hover {
    cursor: pointer;
    transform: scale(1.1);
  }

  a {
    all: unset;
  }
`

const AnimeTitle = styled.div`
  margin-top: 8px;
  font-size: 15px;
  color: #000;
  font-weight: 500;
  text-align: center;
  padding: 0 2em;
  flex-grow: 1;
`

interface ICard {
  mediaList: Media
}

const Card = ({mediaList}: ICard) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(true)

  const handleImageLoad = () => {
    setIsLoading(false)
  }

  return (
    <AnimeItemContainer loading={isLoading.toString()}>
      <Link to={`/${mediaList.id}`}>
        <PreviewWrapper>
          <img src={mediaList.coverImage?.extraLarge || ""} alt="Poster" loading={"lazy"} onLoad={handleImageLoad}/>
        </PreviewWrapper>
        <AnimeTitle>{mediaList.title?.english || mediaList.title?.userPreferred}</AnimeTitle>
      </Link>
    </AnimeItemContainer>
  )
}

export default Card