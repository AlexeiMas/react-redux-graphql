import {useNavigate, useSearchParams} from "react-router-dom"
import {ERouteConst} from "../../routes/consts"

interface IUseSearch {
  search: string
  setSearch: (value: string) => void
}

export const useSearch = (): IUseSearch => {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const search = searchParams.get('request') ?? ''
  const serializeValue = (value: string) => {
    navigate(ERouteConst.SearchPage + '?request=' + encodeURIComponent(value))
  }

  return {
    search,
    setSearch: (value) => serializeValue(value)
  }
}