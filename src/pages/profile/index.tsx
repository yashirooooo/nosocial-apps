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
// components

// ----------------------------------------------------------------------

interface Props {
  info: ProfileInfo;
}

export default function ProfileAppPage() {

  return (
    <>
      <Helmet>
        <title> Profile | NoSocial Apps </title>
      </Helmet>
      <div>
        <div className='cover_img' >
          <img src={basic_info.info.coverPicture} />
        </div>
        <div className='container'>
          <BasicInfo
            info={basic_info.info}
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
                <AchievementsDetailCard name={'Posts'} amount={10} />
                <AchievementsDetailCard name={'Active Days'} amount={7} />
                <AchievementsDetailCard fontSize={20} name={'Followers'} amount={1000} />
                <AchievementsDetailCard name={'Videos'} amount={6 / 10} />
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