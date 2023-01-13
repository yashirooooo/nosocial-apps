import styled from '@emotion/styled';
import './style.css';
import { Star, StarHalf, CheckCircle } from "@mui/icons-material";
import { ProfileBaseAchievement } from '../types';

const DetailPanel = styled('div')(({ color = '#FFFFFF' }: PanelProps) => ({
    color: color,
}));

const DetailImgContainer = styled('div')(()=> ({
    height: '120px',
    width: '120px',
    overflow: 'hidden',
    position: 'relative'
}))

const DetailImg = styled('img')(()=> ({
    height: '120px',
    width: '120px',
}))

const StatusIcon = styled('div')(({ color = '#FFFFFF' }: PanelProps)=> ({
    position: 'absolute',
    display: 'flex',
    right: '0px',
    bottom: '0px',
    height: '36px',
    width: '36px',
    color: color,
    fontSize: '20px',
    alignItems: 'center',
    justifyContent: 'center'
}))

const DetailCategory = styled('div')(() => ({
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    alignItems: 'center',
    textAlign: 'center',
    letterSpacing: '0.5px',
    color: '#FFFFFF'
}))

interface PanelProps {
    color?: string;
    fontSize?: number;
}

interface Props {
    achievement: ProfileBaseAchievement;
}

export default function AchievementsDetailCard({ achievement }: Props) {

    return <DetailPanel className='app_detail_panel'>
        <DetailImgContainer>
            <DetailImg src={achievement.picture} />
            { achievement.status === 'inprogress' && <StatusIcon color='#abd7a8'> <StarHalf className='status_icon' /> </StatusIcon>}
            { achievement.status === 'achieved' && <StatusIcon color='#66ff59'> <CheckCircle className='status_icon' /> </StatusIcon>}
            { achievement.status === 'ready' && <StatusIcon color='#66ff59'> <Star className='status_icon' /> </StatusIcon>}
        </DetailImgContainer>
        <DetailCategory>{achievement.name}</DetailCategory>
        <DetailCategory>{achievement.status}</DetailCategory>
    </DetailPanel>
}