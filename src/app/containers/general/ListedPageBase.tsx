import React from 'react'
import FlexWrapper from "../../components/FlexWrapper"
import AnimeList from "./AnimeList"
import LoadMore from "../../components/LoadMore"
import {IRootState} from "../../types"
import {IHomePageState} from "./types"

type TListedPageBase = {
  title: string
  onLoadHandler: () => void
  makeSelector: (state: IRootState) => IHomePageState
} & Record<"initialDataLoading" | "hasNextPage" | "lazyDataLoading", boolean>

const ListedPageBase = (
  {title, initialDataLoading: loadingInit, makeSelector, hasNextPage, lazyDataLoading: loading, onLoadHandler}: TListedPageBase
) => {
  return (
    <>
      <h1>{title}</h1>
      {
        loadingInit
          ? <FlexWrapper embedLoader/>
          : (
            <>
              <AnimeList makeSelector={makeSelector}/>
              {hasNextPage && <LoadMore loading={loading} onClick={onLoadHandler}/>}
            </>
          )
      }
    </>
  )
}

export default ListedPageBase