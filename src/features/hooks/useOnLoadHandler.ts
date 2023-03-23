import React from "react"
import {LazyQueryExecFunction} from "@apollo/client"
import {TActionKeys, useActions} from "./useActions"
import {GetAnimePageQuery, SearchByTitleQuery} from "../../app/graphql/__generated__/graphql"

export interface IUseOnLoadHandler<T> {
  fetchNewData: LazyQueryExecFunction<GetAnimePageQuery | SearchByTitleQuery, {page: number, perPage: number} & T>
  setSomePage: TActionKeys
  currentSearch?: string
}

export const useOnLoadHandler = <T extends {search?: string}>({fetchNewData, setSomePage, currentSearch}: IUseOnLoadHandler<T>) => {
  const actions = useActions()
  const setPage = actions[setSomePage]
  return React.useCallback(() => {
    fetchNewData()
      .then((res) => {
        if (res.data) {
          setSomePage === 'setAnimePage'
            ? setPage(res.data.Page)
            : setPage({data: res.data.Page, currentSearch})
        }
      })
  }, [fetchNewData, setPage, setSomePage, currentSearch])
}