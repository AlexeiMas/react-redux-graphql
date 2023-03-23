import {createBrowserRouter} from "react-router-dom"
import {lazyLoadRoutes} from "./LazyLoadRoutes"
import {ERouteConst} from "./consts"
import MainLayout from "../app/layouts/MainLayout"

const router = createBrowserRouter([
  {
    element: <MainLayout/>,
    children: [
      {
        path: ERouteConst.HomePage,
        element: lazyLoadRoutes("HomePage")
      },
      {
        path: ERouteConst.DetailsPage,
        element: lazyLoadRoutes('DetailsPage')
      },
      {
        path: ERouteConst.SearchPage,
        element: lazyLoadRoutes('SearchPage')
      }
    ]
  }
])

export default router