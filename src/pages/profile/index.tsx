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

// ----------------------------------------------------------------------

interface Props {
  profileInfo: ProfileInfo;
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
            info={profileInfo.info}
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
                  (profileInfo.achievements && profileInfo.achievements.length) ?
                  profileInfo.achievements.map(
                    (achievement, key) => 
                    <AchievementsDetailCard
                      key={key}
                      name={'Posts'} 
                      status='achieved' 
                      img='/assets/images/achieved.png' 
                      achievement={achievement} 
                    />)
                  : <></>
                }
                {/* <AchievementsDetailCard name={'Posts'} status='achieved' img='/assets/images/achieved.png' />
                <AchievementsDetailCard name={'Active Days'} status='ready' img='/assets/images/ready.png' />
                <AchievementsDetailCard name={'Followers'} status='ready' img='/assets/images/ready.png' />
                <AchievementsDetailCard name={'Videos'} status='inprogress' img='/assets/images/ongoing.png' />
                <AchievementsDetailCard name={'Videos'} status='inprogress' img='/assets/images/ongoing.png' />
                <AchievementsDetailCard name={'Videos'} status='inprogress' img='/assets/images/ongoing.png' />
                <AchievementsDetailCard name={'Videos'} status='inprogress' img='/assets/images/ongoing.png' />
                <AchievementsDetailCard name={'Videos'} status='inprogress' img='/assets/images/ongoing.png' />
                <AchievementsDetailCard name={'Videos'} status='inprogress' img='/assets/images/ongoing.png' />
                <AchievementsDetailCard name={'Videos'} status='inprogress' img='/assets/images/ongoing.png' />
                <AchievementsDetailCard name={'Videos'} status='inprogress' img='/assets/images/ongoing.png' />
                <AchievementsDetailCard name={'Videos'} status='inprogress' img='/assets/images/ongoing.png' />
                <AchievementsDetailCard name={'Videos'} status='inprogress' img='/assets/images/ongoing.png' />
                <AchievementsDetailCard name={'Videos'} status='inprogress' img='/assets/images/ongoing.png' /> */}
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
                <AITagsCard />
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
                  lastweek={profileInfo?.activities?.posts?.lastweek}
                />
                <ActivityCard
                  name={`Mirrors`}
                  number={profileInfo?.activities?.mirrors?.total}
                  lastweek={profileInfo?.activities?.mirrors?.lastweek}
                />
                <ActivityCard
                  name={`Comments`}
                  number={profileInfo?.activities?.comments?.total}
                  lastweek={profileInfo?.activities?.comments?.lastweek}
                />
                <ActivityCard
                  name={`Collects`}
                  number={profileInfo?.activities?.collects?.total}
                  lastweek={profileInfo.activities?.collects?.lastweek}
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
                  (profileInfo.benefits && profileInfo.benefits.length) ? 
                  profileInfo.benefits.map((benefit, key) => 
                    <ProfileBenefit
                      key={key}
                      icon={'/assets/images/image2.svg'}
                      amount={1.23}
                      unit={`Ethers`}
                      author={`lenster`}
                      img={'/assets/images/image1.svg'}
                      benefit={benefit}
                    />
                  ) : <></>
                }
                {/* <ProfileBenefit
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
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}