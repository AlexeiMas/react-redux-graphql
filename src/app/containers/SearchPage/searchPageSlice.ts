import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit"
import {ISearchPageState} from "../general/types"
import {SearchByTitleQuery} from "../../graphql/__generated__/graphql"
import {RootState} from "../../store"
import {apolloClient} from "../../graphql"
import {SEARCH_BY_TITLE} from "../../services/animeService/queries"

export const searchByTitleList = createAsyncThunk<SearchByTitleQuery | null | boolean, string, { state: RootState }>(
  "searchPage/searchByTitleList",
  async (search, {getState, dispatch}) => {
    const {nextPage} = getState().searchPage
    if (nextPage === 1) {
      const {data, loading} = await apolloClient.query({
        query: SEARCH_BY_TITLE,
        variables: {
          page: 1,
          perPage: 12,
          search
        }
      })
      if (loading) {
        return loading
      }
      if (data) {
        dispatch(setSearchPage({data: data.Page, currentSearch: search}))
        return data
      }
    }
    return null
  }
)

const initialState: ISearchPageState = {
  animePage: null,
  nextPage: 1,
  hasNextPage: false,
  currentSearch: ''
}

const SearchPageSlice = createSlice({
  name: "searchPage",
  initialState,
  reducers: {
    setSearchPage(state, action: PayloadAction<{data: SearchByTitleQuery["Page"], currentSearch: string}>) {
      state.animePage = state.animePage?.media
        ? {...state.animePage, media: [...state.animePage.media, ...action.payload.data!.media!]}
        : action.payload.data;
      state.nextPage++
      state.hasNextPage = action.payload.data!.pageInfo!.hasNextPage!
      state.currentSearch = action.payload.currentSearch
    },
    resetSearchPage() {
      return initialState
    }
  }
})

export const SearchPageActions = SearchPageSlice.actions
export const {setSearchPage, resetSearchPage} = SearchPageSlice.actions
export default SearchPageSlice.reducer