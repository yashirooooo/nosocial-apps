import { ProfileInfo } from '../types';
import './style.css';

type Props = ProfileInfo

export default function BasicInfo({ info: { id, picture, name, handle, bio, followers, following, attributes: { location, twitter, website } } }: Props) {
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
        <div>{following} Followings</div>
        <div>{followers} Followers</div>
      </div>
      <div className='basic_info_data_down'>
        <div id='address'>{id} |</div>
        <div id='location'><img src='/assets/icons/location.svg' /> {location} |</div>
        <div id='followings'><img src='/assets/icons/twitter.svg' /> {twitter} |</div>
        <div id='followers'><img src='/assets/icons/link.svg' /> {website} |</div>
        <div id='birthday'><img src='/assets/icons/calendar.svg' /> Joined March 2020</div>
      </div>
    </div>
  </div>
}