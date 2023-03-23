import React from 'react'
import styled from "styled-components"
import {RouterProvider} from "react-router-dom"
import router from "./routes"

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

function App() {
  return (
    <AppContainer>
      <RouterProvider router={router}/>
    </AppContainer>
  );
}

export default App;
