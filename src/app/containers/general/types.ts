import {GetAnimePageQuery} from "../../graphql/__generated__/graphql"

export interface IHomePageState {
  animePage: GetAnimePageQuery["Page"]
  nextPage: number
  hasNextPage: boolean
}

export interface ISearchPageState extends IHomePageState {
  currentSearch: string
}