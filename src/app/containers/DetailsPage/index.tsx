import React from 'react'
import {useParams} from "react-router-dom"
import {useQuery} from "@apollo/client"
import {GET_DETAILS_BY_ID} from "../../services/animeService/queries"
import {localDate, resolveBRinString} from "../../../features/helpers/formatData"
import Container from "../../components/UI/Container"
import styled, {keyframes} from "styled-components"
import FlexWrapper from "../../components/FlexWrapper"

const DetailsLayout = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr minmax(300px, 50%);
  h5 {
    margin-bottom: -1rem;
  }
  @media (max-width: 960px) and (min-width: 760px) {
    grid-template-columns: 1fr 40%;
  }
  @media(max-width: 760px) {
    grid-template-columns: 1fr;
  }
`

const shine = keyframes`
  to {
    background-position-x: -200%;
  }
`

const Poster = styled.img`
  object-fit: cover;
  aspect-ratio: 460 / 640;
  width: 100%;
  height: 100%;
  -webkit-user-drag: none;
  background: linear-gradient(90deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
  background-size: 200% 100%;
  animation: 1.5s ${shine} linear infinite;
`

const DetailsPage = () => {
  const {id} = useParams<{id: string}>()
  const {loading, data} = useQuery(GET_DETAILS_BY_ID, {
    skip: !id,
    variables: {
      id: Number(id)
    }
  })

  if (loading) {
    return <FlexWrapper embedLoader/>
  }

  const {title, coverImage, description, duration, averageScore, genres, startDate, endDate, episodes} = data?.Media!
  const {year: yearS, month: monthS, day: dayS} = startDate as Required<{[key: string]: number}>
  const {year: yearE, month: monthE, day: dayE} = endDate as Required<{[key: string]: number}>
  return (
    <>
        <Container>
          <DetailsLayout>
            <Poster src={coverImage?.extraLarge || ''} alt="Poster"/>
            <div>
              <h1>{title?.english || title?.userPreferred}</h1>
              {resolveBRinString(description)}

              <h5>Duration</h5>
              <p>{duration} min.</p>
              <h5>Genres</h5>
              <p>{genres?.join(', ')}</p>
              <h5>Average score</h5>
              <p>{averageScore}</p>
              <h5>Episodes</h5>
              <p>{episodes}</p>
              <h5>Original release</h5>
              <p>{localDate(yearS, monthS, dayS)} - {localDate(yearE, monthE, dayE)}</p>
            </div>
          </DetailsLayout>
        </Container>
    </>
  )
}

export default DetailsPage