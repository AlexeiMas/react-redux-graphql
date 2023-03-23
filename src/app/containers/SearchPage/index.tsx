import React from 'react'
import {useLazyQuery} from "@apollo/client"
import {SEARCH_BY_TITLE} from "../../services/animeService/queries"
import {useAppDispatch, useAppSelector} from "../../hooks"
import {useOnLoadHandler} from "../../../features/hooks/useOnLoadHandler"
import {makeSelectSearchPage} from "./selectors"
import ListedPageBase from "../general/ListedPageBase"
import {searchByTitleList} from "./searchPageSlice"
import {useActions} from "../../../features/hooks/useActions"
import {useSearch} from "../../../features/hooks/useSearch"

const SearchPage = () => {
  const {search} = useSearch()
  const {resetSearchPage} = useActions()
  const {nextPage, hasNextPage, currentSearch} = useAppSelector(makeSelectSearchPage)
  const [fetchNewData, {loading}] = useLazyQuery(SEARCH_BY_TITLE, {
    variables: {
      page: nextPage,
      perPage: 12,
      search
    }
  })
  const dispatch = useAppDispatch()

  React.useEffect(() => {
    if (search !== currentSearch) {
      dispatch(resetSearchPage())
    }
    if (nextPage === 1) {
      dispatch(searchByTitleList(search))
    }
  }, [search, nextPage, dispatch, currentSearch, resetSearchPage])

  const onLoadHandler = useOnLoadHandler({fetchNewData, setSomePage: "setSearchPage", currentSearch: search})

  return (
    <ListedPageBase
      title={"Search Results"}
      onLoadHandler={onLoadHandler}
      makeSelector={makeSelectSearchPage}
      initialDataLoading={nextPage === 1}
      hasNextPage={hasNextPage}
      lazyDataLoading={loading}
    />
  )
}

export default SearchPage