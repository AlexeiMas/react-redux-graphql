import React from 'react'
import Header from "../components/Header"
import {Outlet} from "react-router-dom"
import PageBase from "../components/UI/PageBase"

const MainLayout = () => {
  return (
    <>
      <Header/>
      <PageBase>
        <Outlet/>
      </PageBase>
    </>
  )
}

export default MainLayout