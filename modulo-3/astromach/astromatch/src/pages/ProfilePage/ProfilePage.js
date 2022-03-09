import React, { useEffect, useState } from "react"
import { Box } from "@material-ui/core"
import { ProfileButton } from "./ProfileButton"
import { ProfileCard } from './ProfileCard'
import { getProfile, profileRequest } from "../../endpoints/query"

export default function ProfilePage() {

  const [profileToChoose, setProfileToChoose] = useState(undefined);

  const Profile = async () => {
    const response = await getProfile()
    setProfileToChoose(response)
  }

  useEffect(() => {
    Profile()
  }, []);

  const chooseProfile = choice => {
    setProfileToChoose(undefined);

    profileRequest(choice, profileToChoose.id)

    Profile();

  };

  const onClickNo = () => {
    chooseProfile(false)
  };

  const onClickYes = () => {
    chooseProfile(true)
  };

  return (
    <Box component="span" m={1}>

      {profileToChoose ? (
        <>
          <ProfileCard profile={profileToChoose} />
          <ProfileButton onClickNo={onClickNo} onClickYes={onClickYes} />
        </>

      ) : (
        <p>Carregando...</p>
      )}
    </Box>
  )

}