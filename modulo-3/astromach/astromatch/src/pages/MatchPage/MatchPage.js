import React from "react";
import {ListContainer} from "./styled"
import { MatchListItem } from "./MatchListItem"
import { useMatches } from "../../hooks/useMatches";

export default function MatchPage () {
    
    const matches = useMatches();

return(
    <ListContainer>
    {matches.map(profile => {
      return <MatchListItem profile={profile} />;
    })}
  </ListContainer>
)

}