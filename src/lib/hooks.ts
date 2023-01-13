import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useContext } from "react";
import { appsBase, benefitsBase, profileInfo } from "src/api";
import { AppBaseInfo, ProfileInfo, BenefitBaseInfo } from "src/components/types";
import store from 'store';
import basic_info from 'src/_mock/basic_info';
import apps from "src/_mock/apps";
import benefits from "src/_mock/benefits";

export interface LoginUser {
    address: string;
    profileId: string;
    basicInfo?: ProfileInfo;
    appBaseInfo?: AppBaseInfo;
    benefitBaseInfo?: BenefitBaseInfo;
    setLoginUser: (u: User) => void
}

interface User {
    address: string;
    profileId: string;
}

const defaultProfile = basic_info
const defaultApps = apps
const defaultBenefits = benefits

export function useLoginUser(key = 'login'): LoginUser {
    const [address, setAddress] = useState<string>('');
    const [profileId, setProfileId] = useState<string>('');
    const [basicInfo, setBasicInfo] = useState<ProfileInfo>();
    const [appBaseInfo, setAppBaseInfo] = useState<AppBaseInfo>();
    const [benefitBaseInfo, setBenefitBaseInfo] = useState<BenefitBaseInfo>();

    const setLoginUser = useCallback((loginUser: User) => {
        setAddress(loginUser.address)
        setProfileId(loginUser.profileId)
        if (loginUser.profileId) {
            profileInfo(loginUser.profileId).then(res => {
              if (res) {
                setBasicInfo(res)
              } else {
                setBasicInfo(defaultProfile)
              }
            })
            
            appsBase(loginUser.profileId).then(res => {
                if (res) {
                    setAppBaseInfo(res)
                } else {
                    setAppBaseInfo(defaultApps)
                }
            })

            benefitsBase(loginUser.profileId).then(res => {
                if (res) {
                    setBenefitBaseInfo(res)
                } else {
                    setBenefitBaseInfo(defaultBenefits)
                }
            })
        }
        store.set(key, loginUser);
    }, [key, profileId])

    useEffect(() => {
        const u = store.get(key) as User;
        if (u) {
            setLoginUser(u)
        }
    }, [key, profileId])

    const user: LoginUser = useMemo(() => {
        const loginUser = {
            address,
            profileId,
            basicInfo,
            appBaseInfo,
            benefitBaseInfo,
            setLoginUser
        }
        return loginUser;
    }, [address, profileId, setLoginUser, basicInfo, appBaseInfo, benefitBaseInfo])

    return user;
}

// @ts-ignore
export const ContextLoginUser = React.createContext<LoginUser>(null)

export function useContextLoginUser(): LoginUser {
    return useContext(ContextLoginUser)
}