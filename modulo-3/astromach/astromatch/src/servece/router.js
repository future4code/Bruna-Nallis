import React, { useState } from "react"
import ToolBar from "../components/ToolBar/ToolBar"
import MatchPage from "../pages/MatchPage/MatchPage"
import ProfilePage from "../pages/ProfilePage/ProfilePage"
import { Container } from "@material-ui/core"
import styled from "styled-components"

const AppStyle = styled(Container)`

.border{
display: flex;
flex-direction: column ;
justify-content: space-around;
align-items: center;
border: 1px solid black;
padding:0;
}
`


export default function Router() {

  const [choosePage, setChoosePage] = useState('choose-profile')


  const renderSelectedPage = () => {
    switch (choosePage) {
      case 'choose-profile':
        return <ProfilePage />
      case 'match-list':
        return <MatchPage />
      default:
        return <ProfilePage />
    }
  }


  const goToProfilePage = () => {
    setChoosePage('choose-profile')
  };

  const goToMatchPage = () => {
    setChoosePage('match-list')
  };

  return (
    <AppStyle>
      <Container fixed className="border" >
        <ToolBar
          goToProfilePage={goToProfilePage}
          goToMatchPage={goToMatchPage}
        />
        {renderSelectedPage()}
      </Container>
    </AppStyle>

  )
}