import styled from '@emotion/styled';
import AchievementDetailCard from '../achievements-detail-card';
import './style.css';

interface Props {
    icon?: string;
    name?: string;
    desc?: string;
}

function AppCard({ icon, name, desc }: Props) {

    return <div className='app_card_container'>
        <div className='summary_tip'>99+</div>
        <div className='app_card'>
            <img className='app_card_icon' src={icon} />
            <div className='app_card_content'>
                <div className='app_card_content_text'>
                    <div className='app_card_content_text_top'>{name}</div>
                    <div className='app_card_content_text_bottom'>
                        {desc}
                    </div>
                </div>
                
            </div>
        </div>
        <div className='app_card_content_button' onClick={() => {console.log('hehe')}}>
            Launch
        </div>
        <div className='app_detail'>
            <AchievementDetailCard name={'Posts'} status="achieved" />
            <AchievementDetailCard name={'Active Days'} status="ready" />
            <AchievementDetailCard name={'Followers'} status="ready" />
            <AchievementDetailCard name={'Videos'} status="inprogress" />
        </div>
    </div>
}

export default AppCard;