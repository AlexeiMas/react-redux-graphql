import {createSelector} from "reselect"
import {IRootState} from "../../types"

const selectHomePage = (state: IRootState) => state.homePage
const selectSearchPage = (state: IRootState) => state.searchPage

export const makeSelectAnimePage = createSelector(
  [selectHomePage, selectSearchPage],
  (homePage, searchPage) => (
    {animePage: homePage.animePage, nextPage: homePage.nextPage, hasNextPage: homePage.hasNextPage, isSearch: Boolean(searchPage.currentSearch)}
  )
)