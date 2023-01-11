import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useContext } from "react";
import { profileInfo } from "src/api";
import { ProfileInfo } from "src/components/types";
import store from 'store';
import basic_info from 'src/_mock/basic_info';

export interface LoginUser {
    address: string;
    profileId: string;
    basicInfo: ProfileInfo;
    setLoginUser: (u: User) => void
}

interface User {
    address: string;
    profileId: string;
}

const defaultProfile = basic_info

export function useLoginUser(key = 'login'): LoginUser {
    const [address, setAddress] = useState<string>('');
    const [profileId, setProfileId] = useState<string>('');
    const [basicInfo, setBasicInfo] = useState<ProfileInfo>(defaultProfile);

    const setLoginUser = useCallback((loginUser: User) => {
        setAddress(loginUser.address)
        setProfileId(loginUser.profileId)
        if (loginUser.profileId) {
            profileInfo(loginUser.profileId).then(res => {
              if (res) {
                setBasicInfo({
                  info: res
                })
              }
            })
        }
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
            basicInfo,
            setLoginUser
        }
        return loginUser;
    }, [address, profileId, setLoginUser, basicInfo])

    return user;
}

// @ts-ignore
export const ContextLoginUser = React.createContext<LoginUser>(null)

export function useContextLoginUser(): LoginUser {
    return useContext(ContextLoginUser)
}