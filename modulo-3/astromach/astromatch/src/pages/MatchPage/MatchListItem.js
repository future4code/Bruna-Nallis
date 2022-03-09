import React from "react"
import { ListItemContainer, Avatar } from "./styled"


export function MatchListItem(props) {
  const profile = props.profile
  return (
    <ListItemContainer>
      <Avatar src={profile.photo} />
      <p>{profile.name}</p>
    </ListItemContainer>
  )
}