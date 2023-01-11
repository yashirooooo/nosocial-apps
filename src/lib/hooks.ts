import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useContext } from "react";
import store from 'store';

export interface LoginUser {
    address: string;
    profileId: string;
    setLoginUser: (u: User) => void
}

interface User {
    address: string;
    profileId: string;
}

export function useLoginUser(key = 'login'): LoginUser {
    const [address, setAddress] = useState<string>('');
    const [profileId, setProfileId] = useState<string>('');
    const setLoginUser = useCallback((loginUser: User) => {
        setAddress(loginUser.address)
        setProfileId(loginUser.profileId)
        store.set(key, loginUser);
    }, [key])

    useEffect(() => {
        const u = store.get(key) as User;
        if (u) {
            setLoginUser(u)
        }
    }, [key])

    const user: LoginUser = useMemo(() => {
        const loginUser = {
            address,
            profileId,
            setLoginUser
        }
        return loginUser;
    }, [address, profileId, setLoginUser])

    return user;
}

// @ts-ignore
export const ContextLoginUser = React.createContext<LoginUser>(null)

export function useContextLoginUser(): LoginUser {
    return useContext(ContextLoginUser)
}