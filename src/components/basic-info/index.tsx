import { fNumber } from 'src/utils/formatNumber';
import { fMonthlyDate } from 'src/utils/formatTime';
import { ProfileBaseInfo } from '../types';
import './style.css';

interface Props {
  info?: ProfileBaseInfo
}

export default function BasicInfo({ info } : Props) {
    return <div className='basic_info_container'>
    <div className='basic'>
      <div className='basic_info'>
        <div className='basic_info_avatar'>
          <img src={info?.picture}></img>
        </div>
      </div>
    </div>
    <div className='basic_info_data'>
      <div id='name'>{info?.name}</div>
      <div id='handle'>{info?.handle}</div>
      <div className='basic_info_data_up'>
        <div>{info?.bio}</div>
      </div>
      <div className='basic_info_data_up'>
        <div>{fNumber(info?.following)} Followings</div>
        <div>{fNumber(info?.followers)} Followers</div>
      </div>
      <div className='basic_info_data_down'>
        <div id='address'>{info?.id} |</div>
        {info?.attributes?.location && <div id='location'><img src='/assets/icons/location.svg' /> {info.attributes.location} |</div>}
        {info?.attributes?.twitter && <div id='followings'><img src='/assets/icons/twitter.svg' /> {info.attributes.twitter} |</div>}
        {info?.attributes?.website && <div id='followers'><img src='/assets/icons/link.svg' /> {info.attributes.website} |</div>}
        {info?.createdAt && <div id='created_at'><img src='/assets/icons/calendar.svg' /> Joined {fMonthlyDate(info.createdAt)}</div>}
      </div>
    </div>
  </div>
}