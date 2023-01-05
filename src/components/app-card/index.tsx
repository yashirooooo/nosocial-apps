import styled from '@emotion/styled';
import AppDetailPanel from '../achievements-detail-card';
import './style.css';

interface Props {
    icon?: string;
    name?: string;
    desc?: string;
}

function AppCard({ icon, name, desc }: Props) {

    return <div className='app_card_container'>
        <div className='app_card'>
            <img className='app_card_icon' src={icon} />
            <div className='app_card_content'>
                <div className='app_card_content_text'>
                    <div className='app_card_content_text_top'>{name}</div>
                    <div className='app_card_content_text_bottom'>
                        {desc}
                    </div>
                </div>
                <div className='app_card_content_button'>
                    Launch
                </div>
            </div>
        </div>
        <div className='app_detail'>
            <AppDetailPanel name={'Posts'} amount={10} />
            <AppDetailPanel name={'Active Days'} amount={7} />
            <AppDetailPanel fontSize={20} name={'Followers'} amount={1000} />
            <AppDetailPanel name={'Videos'} amount={6 / 10} />
        </div>
    </div>
}

export default AppCard;