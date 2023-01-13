import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import AchievementDetailCard from '../achievements-detail-card';
import { AppBase } from '../types';
import './style.css';
import _ from 'lodash';

interface Props {
    icon?: string;
    name?: string;
    desc?: string;
    link?: string;
    appBase: AppBase;
}

function AppCard({ icon, name, desc, link, appBase }: Props) {

    const [tipsCount, setTipsCount] = useState<string>('0');

    useEffect(() => {
        const sum = _.sum([appBase.activities.collects, appBase.activities.comments, appBase.activities.mirrors, appBase.activities.posts]);
        if (sum >= 99) {
            setTipsCount('99+')
        } else {
            setTipsCount(sum + '')
        }
    }, [appBase.activities.collects, appBase.activities.comments, appBase.activities.mirrors, appBase.activities.posts])

    const navigate = () => {
        if (link) {
            window.open(appBase.url)
        }
    }

    return <div className='app_card_container'>
        <div className='summary_tip'>{tipsCount}</div>
        <div className='app_card'>
            <img className='app_card_icon' src={appBase?.picture} />
            <div className='app_card_content'>
                <div className='app_card_content_text'>
                    <div className='app_card_content_text_top'>{appBase.name}</div>
                    <div className='app_card_content_text_bottom'>
                        {appBase.description}
                    </div>
                </div>
            </div>
        </div>
        <div className='app_card_content_button' onClick={navigate}>
            Launch
        </div>
        <div className='app_detail'>
            {
                (appBase.achievements && appBase.achievements.length) ?
                appBase.achievements.map(achievement => 
                    <AchievementDetailCard achievement={achievement} 
                />) : <></>
            }
            {/* <AchievementDetailCard name={'Posts'} status="achieved" achievement={achievement} />
            <AchievementDetailCard name={'Active Days'} status="ready" achievement={achievement} />
            <AchievementDetailCard name={'Followers'} status="ready" achievement={achievement} />
            <AchievementDetailCard name={'Videos'} status="inprogress" achievement={achievement} />
            <AchievementDetailCard name={'Videos'} status="inprogress" achievement={achievement} />
            <AchievementDetailCard name={'Videos'} status="inprogress" achievement={achievement} />
            <AchievementDetailCard name={'Videos'} status="inprogress" achievement={achievement} />
            <AchievementDetailCard name={'Videos'} status="inprogress" achievement={achievement} />
            <AchievementDetailCard name={'Videos'} status="inprogress" achievement={achievement} />
            <AchievementDetailCard name={'Videos'} status="inprogress" achievement={achievement} />
            <AchievementDetailCard name={'Videos'} status="inprogress" achievement={achievement} />
            <AchievementDetailCard name={'Videos'} status="inprogress" achievement={achievement} /> */}
        </div>
    </div>
}

export default AppCard;