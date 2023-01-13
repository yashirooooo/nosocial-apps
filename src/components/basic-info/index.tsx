import { fNumber } from 'src/utils/formatNumber';
import { fMonthlyDate } from 'src/utils/formatTime';
import { ProfileBaseInfo } from '../types';
import './style.css';

interface Props {
  info: ProfileBaseInfo
}

export default function BasicInfo({info: { id, picture, name, handle, bio, followers, following, attributes: { location, twitter, website }, createdAt }} : Props) {
    return <div className='basic_info_container'>
    <div className='basic'>
      <div className='basic_info'>
        <div className='basic_info_avatar'>
          <img src={picture}></img>
        </div>
      </div>
    </div>
    <div className='basic_info_data'>
      <div id='name'>{name}</div>
      <div id='handle'>{handle}</div>
      <div className='basic_info_data_up'>
        <div>{bio}</div>
      </div>
      <div className='basic_info_data_up'>
        <div>{fNumber(following)} Followings</div>
        <div>{fNumber(followers)} Followers</div>
      </div>
      <div className='basic_info_data_down'>
        <div id='address'>{id} |</div>
        {location && <div id='location'><img src='/assets/icons/location.svg' /> {location} |</div>}
        {twitter && <div id='followings'><img src='/assets/icons/twitter.svg' /> {twitter} |</div>}
        {website && <div id='followers'><img src='/assets/icons/link.svg' /> {website} |</div>}
        {createdAt && <div id='created_at'><img src='/assets/icons/calendar.svg' /> Joined {fMonthlyDate(createdAt)}</div>}
      </div>
    </div>
  </div>
}