import { useContext } from "react";
import { AuthenticationContext } from "../contexts/AuthenticationContextProvider";

export function useAuthentication() {
    return useContext(AuthenticationContext)
}