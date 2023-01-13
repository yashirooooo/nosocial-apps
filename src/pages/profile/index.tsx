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
// components

import mock_basicInfo from 'src/_mock/basic_info';

// ----------------------------------------------------------------------

interface Props {
  profileInfo?: ProfileInfo;
}

export default function ProfileAppPage({ profileInfo }: Props) {

  return (
    <>
      <Helmet>
        <title> Profile | NoSocial Apps </title>
      </Helmet>
      <div>
        <div className='cover_img' >
          <img src={'https://images.hdqwalls.com/wallpapers/colorful-neon-city-4k-tx.jpg'} />
        </div>
        <div className='container'>
          <BasicInfo
            info={profileInfo?.info}
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
                {
                  (profileInfo?.achievements && profileInfo.achievements.length) ?
                  profileInfo.achievements.map(
                    (achievement, key) => 
                    <AchievementsDetailCard
                      key={key}
                      achievement={achievement} 
                    />)
                  : <></>
                }
                {
                  (mock_basicInfo.achievements && mock_basicInfo.achievements.length) ?
                  mock_basicInfo.achievements.map(
                    (achievement, key) => 
                    <AchievementsDetailCard
                      key={key}
                      achievement={achievement} 
                    />)
                  : <></>
                }
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
                <AITagsCard img={profileInfo?.aiTags[0]?.picture} url={profileInfo?.aiTags[0]?.url} />
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
                <ActivityCard
                  name={`Posts`}
                  number={profileInfo?.activities?.posts?.total}
                  lastweek={profileInfo?.activities?.posts?.lastWeek}
                />
                <ActivityCard
                  name={`Mirrors`}
                  number={profileInfo?.activities?.mirrors?.total}
                  lastweek={profileInfo?.activities?.mirrors?.lastWeek}
                />
                <ActivityCard
                  name={`Comments`}
                  number={profileInfo?.activities?.comments?.total}
                  lastweek={profileInfo?.activities?.comments?.lastWeek}
                />
                <ActivityCard
                  name={`Collects`}
                  number={profileInfo?.activities?.collects?.total}
                  lastweek={profileInfo?.activities?.collects?.lastWeek}
                />
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
                {
                  (profileInfo?.benefits && profileInfo.benefits.length) ? 
                  profileInfo.benefits.map((benefit, key) => 
                    <ProfileBenefit
                      key={key}
                      benefit={benefit}
                    />
                  ) : <></>
                }
                {
                  (mock_basicInfo?.benefits && mock_basicInfo.benefits.length) ? 
                  mock_basicInfo.benefits.map((benefit, key) => 
                    <ProfileBenefit
                      key={key}
                      benefit={benefit}
                    />
                  ) : <></>
                }
                {/* <ProfileBenefit
                  icon={'/assets/images/image2.svg'}
                  benefitName={"1.23 Ethers"}
                  author={`lenster`}
                  img={'/assets/images/image1.svg'}
                />
                <ProfileBenefit
                  icon={'/assets/images/image2.svg'}
                  benefitName={"1.23 Ethers"}
                  author={`lenster`}
                  img={'/assets/images/matic.svg'}
                />

                <ProfileBenefit
                  icon={'/assets/images/image2.svg'}
                  benefitName={"1.23 Ethers"}
                  author={'lenster'}
                  img={'/assets/images/fs.svg'}
                />
                <ProfileBenefit
                  icon={'/assets/images/3.svg'}
                  benefitName={"1.23 Ethers"}
                  author={'lenster'}
                  img={'/assets/images/crust.svg'}
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}