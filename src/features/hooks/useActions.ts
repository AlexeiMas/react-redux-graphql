import {HomePageActions} from "../../app/containers/HomePage/homePageSlice"
import {useDispatch} from "react-redux"
import {bindActionCreators} from "@reduxjs/toolkit"
import {SearchPageActions} from "../../app/containers/SearchPage/searchPageSlice"

const actions = {
  ...HomePageActions,
  ...SearchPageActions
}

export type TActionKeys = keyof typeof actions

export const useActions = () => {
  const dispatch = useDispatch()

  return bindActionCreators(actions, dispatch)
}