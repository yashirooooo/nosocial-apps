import { Helmet } from 'react-helmet-async';
// @mui
import { TextField } from '@mui/material';
import './style.css';
import ActivityCard from 'src/components/activity-card';
import ProfileBenefit from 'src/components/profile-benefit';
import AchievementsDetailCard from 'src/components/achievements-detail-card';
import AITagsCard from 'src/components/AITags-card';
import BasicInfo from 'src/components/basic-info';
import { ProfileInfo } from 'src/components/types';
import basic_info from '../../_mock/basic_info';
import { useEffect, useState } from 'react';
import profileId from 'src/_mock/profile_id';
import { profileInfo } from 'src/api';
// components

// ----------------------------------------------------------------------
import { useContextLoginUser } from 'src/lib/hooks';

interface Props {
  info: ProfileInfo;
}

const defaultProfile = basic_info

export default function ProfileAppPage() {

  const user = useContextLoginUser();
  // const [ basicInfo, setBasicInfo ] = useState<ProfileInfo>(defaultProfile);
  // console.log('user::::', user)

  // useEffect(() => {
  //   if (user) {
  //     profileInfo(user.profileId).then(res => {
  //       if (res) {
  //         setBasicInfo({
  //           info: res
  //         })
  //       }
  //     })
  //   }
  // }, [user])

  return (
    <>
      <Helmet>
        <title> Profile | NoSocial Apps </title>
      </Helmet>
      <div>
        <div className='cover_img' >
          <img src={user.basicInfo.info.coverPicture} />
        </div>
        <div className='container'>
          <BasicInfo
            info={user.basicInfo.info}
          />
          <div className='profile_list'>
            <div className='category_container'>
              <div>
                <TextField
                  id="standard-read-only-input"
                  defaultValue="Achievements"
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="standard"
                />
              </div>
              <div className='category_data_list'>
                <AchievementsDetailCard name={'Posts'} status='achieved' img='/assets/images/achieved.png' />
                <AchievementsDetailCard name={'Active Days'} status='ready' img='/assets/images/ready.png' />
                <AchievementsDetailCard name={'Followers'} status='ready' img='/assets/images/ready.png' />
                <AchievementsDetailCard name={'Videos'} status='inprogress' img='/assets/images/ongoing.png' />
              </div>
            </div>
            <div className='category_container'>
              <div>
                <TextField
                  id="standard-read-only-input"
                  defaultValue="AI Tags"
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="standard"
                />
              </div>
              <div className='category_data_list'>
                <AITagsCard
                  name={'ETH'}
                  type={'Analyzed'}
                  date={'Sep 2022'}
                />
                <AITagsCard
                  name={'dSocial'}
                  type={'Analyzed'}
                  date={'Sep 2022'}
                  fontSize={30}
                />
              </div>
            </div>
            <div className='category_container'>
              <div>
                <TextField
                  id="standard-read-only-input"
                  defaultValue="Activities"
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="standard"
                />
              </div>
              <div className='category_data_list'>
                <div className='category_data_list_cl'>
                  <ActivityCard
                    name={`Posts`}
                    number={76}
                    variation={11}
                  />
                  <ActivityCard
                    name={`Mirrors`}
                    number={19231}
                    variation={-56.6}
                  />
                  <ActivityCard
                    name={`Comments`}
                    number={156}
                    variation={17}
                  />
                </div>
              </div>
            </div>
            <div className='category_container'>
              <div>
                <TextField
                  id="standard-read-only-input"
                  defaultValue="Benefits"
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="standard"
                />
              </div>
              <div className='category_data_list cl'>
                <div className='category_data_list_cl'>
                  <ProfileBenefit
                    icon={'/assets/images/image2.svg'}
                    amount={1.23}
                    unit={`Ethers`}
                    author={`lenster`}
                    img={'/assets/images/image1.svg'}
                  />
                  <ProfileBenefit
                    icon={'/assets/images/image2.svg'}
                    amount={1.23}
                    unit={`Ethers`}
                    author={`lenster`}
                    img={'/assets/images/matic.svg'}
                  />
                </div>
                <div className='category_data_list_cl'>
                  <ProfileBenefit
                    icon={'/assets/images/image2.svg'}
                    amount={1.23}
                    unit={'Ethers'}
                    author={'lenster'}
                    img={'/assets/images/fs.svg'}
                  />
                  <ProfileBenefit
                    icon={'/assets/images/3.svg'}
                    amount={1.23}
                    unit={'Ethers'}
                    author={'lenster'}
                    img={'/assets/images/crust.svg'}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}