import {IHomePageState, ISearchPageState} from "./containers/general/types"

export interface IRootState {
  homePage: IHomePageState
  searchPage: ISearchPageState
}