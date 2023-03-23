import React, {lazy, Suspense} from "react"
import {ERouteConst} from "./consts"
import FlexWrapper from "../app/components/FlexWrapper"

export function lazyLoadRoutes(componentName: keyof typeof ERouteConst) {
  const LazyElement = lazy(() => import(`app/containers/${componentName}/index.tsx`));

  return (
    <Suspense fallback={<FlexWrapper embedLoader/>}>
      <LazyElement/>
    </Suspense>
  )
}