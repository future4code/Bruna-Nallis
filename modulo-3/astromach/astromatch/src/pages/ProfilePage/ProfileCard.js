import React from "react";
import { ProfileCardContainer, ProfilePicture, ProfileInfo } from "./styled"
import { Container } from "@material-ui/core";
export function ProfileCard(props) {

  const { name, age, bio, photo } = props.profile

  return (
    <Container maxWidth="sm">
      <ProfileCardContainer>
        <ProfilePicture src={photo} />
        <ProfileInfo>
          <p>
            {name}, {age}
          </p>
          <p>{bio}</p>
        </ProfileInfo>
      </ProfileCardContainer>
    </Container>
  )
}