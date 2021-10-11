import { createContext, ReactNode, useState, useEffect } from "react";
import { auth, GoogleAuthProvider, signInWithPopup } from "../services/firebase";

type Authentication = {
    id: string;
    name: string;
    avatar: string;
}

type AuthenticationContextType = {
    authentication: Authentication | undefined;
    signInWithGoogle: () => Promise<void>;
}

type AuthenticationContextProps = {
    children: ReactNode
}

export const AuthenticationContext = createContext({} as AuthenticationContextType);

export function AuthenticationContextProvider(props: AuthenticationContextProps) {
    const { children } = props
    const [authentication, setAuthentication] = useState<Authentication>()
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                const { displayName, photoURL, uid } = user;
                if (!displayName || !photoURL) throw new Error('Missing information from Google Account')
                setAuthentication({
                    id: uid,
                    name: displayName,
                    avatar: photoURL
                })
            }
        })

        return () => {
            unsubscribe()
        }
    })

    const signInWithGoogle = async () => {
        const provider = new GoogleAuthProvider()
        const result = await signInWithPopup(auth, provider)
        const { user } = result;
        if (user) {
            const { displayName, photoURL, uid } = user;
            if (!displayName || !photoURL) throw new Error('Missing information from Google Account')
            setAuthentication({
                id: uid,
                name: displayName,
                avatar: photoURL
            })
        }
    }
    return (
        <AuthenticationContext.Provider value={{ authentication, signInWithGoogle }}>
            {children}
        </AuthenticationContext.Provider>
    )
}
