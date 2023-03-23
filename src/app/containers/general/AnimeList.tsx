import React from 'react'
import {useAppSelector} from "../../hooks"
import {Media} from "../../graphql/__generated__/graphql"
import ListWrapper from "../../components/ListWrapper"
import Card from "../../components/Card"
import {IHomePageState} from "./types"
import {IRootState} from "../../types"

interface IAnimeList {
  makeSelector: (state: IRootState) => IHomePageState
}

const AnimeList = ({makeSelector}: IAnimeList) => {
  const {animePage} = useAppSelector(makeSelector)

  const isEmptyAnimePage = !animePage || !animePage.media || animePage.media.length === 0

  if (isEmptyAnimePage) {
    return (
      <p>
        <i>No data that satisfy your request</i>
      </p>
    )
  }

  return (
    <ListWrapper>
      {
        animePage?.media?.map((anime) => anime && (<Card mediaList={anime as Media} key={anime.id}/>))
      }
    </ListWrapper>
  )
}

export default AnimeList