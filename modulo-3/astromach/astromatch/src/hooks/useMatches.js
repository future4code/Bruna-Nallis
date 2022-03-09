import { useState, useEffect } from "react";
import { getMatches } from "../endpoints/query";

export const useMatches = () => {

    const [matches, setMatches] = useState([])

    useEffect(async () => {

        const response = await getMatches()

        setMatches(response)


    }, [])

    return matches

}