import React from 'react'
import {useLazyQuery} from "@apollo/client"
import {GET_ANIME_PAGE} from "../../services/animeService/queries"
import {useAppDispatch, useAppSelector} from "../../hooks"
import {makeSelectAnimePage} from "./selectors"
import ListedPageBase from "../general/ListedPageBase"
import {useOnLoadHandler} from "../../../features/hooks/useOnLoadHandler"
import {getAnimeList} from "./homePageSlice"
import {resetSearchPage} from "../SearchPage/searchPageSlice"

const HomePage = () => {
  const {nextPage, hasNextPage, isSearch} = useAppSelector(makeSelectAnimePage)
  const [fetchNewData, {loading}] = useLazyQuery(GET_ANIME_PAGE, {
    variables: {
      page: nextPage,
      perPage: 12
    }
  })
  const dispatch = useAppDispatch()

  React.useEffect(() => {
    if (isSearch) {
      dispatch(resetSearchPage())
    }
    if (nextPage === 1) {
      dispatch(getAnimeList(null))
    }
  }, [dispatch, isSearch, nextPage])

  const onLoadHandler = useOnLoadHandler({fetchNewData, setSomePage: "setAnimePage"})

  return (
    <ListedPageBase
      title={"Hot Anime"}
      onLoadHandler={onLoadHandler}
      makeSelector={makeSelectAnimePage}
      initialDataLoading={nextPage === 1}
      hasNextPage={hasNextPage}
      lazyDataLoading={loading}
    />
  )
}

export default HomePage