import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import {IHomePageState} from "../general/types"
import {GET_ANIME_PAGE} from "../../services/animeService/queries"
import {GetAnimePageQuery} from "../../graphql/__generated__/graphql"
import {RootState} from "../../store"
import {apolloClient} from "../../graphql"

export const getAnimeList = createAsyncThunk<GetAnimePageQuery | null | boolean, null, { state: RootState }>(
  "homePage/getAnimeList",
  async (_, {getState, dispatch}) => {
    const {nextPage} = getState().homePage
    if (nextPage === 1) {
      const {data, loading} = await apolloClient.query({
        query: GET_ANIME_PAGE,
        variables: {
          page: 1,
          perPage: 12
        }
      })
      if (loading) {
        return loading
      }
      if (data) {
        dispatch(setAnimePage(data.Page))
        return data
      }
    }
    return null
  }
)

const initialState: IHomePageState = {
  animePage: null,
  nextPage: 1,
  hasNextPage: false
}

const HomePageSlice = createSlice({
  name: "homePage",
  initialState,
  reducers: {
    setAnimePage(state, action) {
      state.animePage = state.animePage?.media
        ? {...state.animePage, media: [...state.animePage.media, ...action.payload.media]}
        : action.payload
      state.nextPage++
      state.hasNextPage = action.payload.pageInfo.hasNextPage
    }
  }
})

export const HomePageActions = HomePageSlice.actions
export const {setAnimePage} = HomePageSlice.actions
export default HomePageSlice.reducer