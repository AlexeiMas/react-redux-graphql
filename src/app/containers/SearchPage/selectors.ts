import {createSelector} from "reselect"
import {IRootState} from "../../types"

const selectSearchPage = (state: IRootState) => state.searchPage

export const makeSelectSearchPage = createSelector(
  [selectSearchPage],
  (searchPage) => ({animePage: searchPage.animePage, nextPage: searchPage.nextPage, hasNextPage: searchPage.hasNextPage, currentSearch: searchPage.currentSearch})
)