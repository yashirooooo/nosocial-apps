import styled from '@emotion/styled';
import './style.css';
import { Star, StarHalf, CheckCircle } from "@mui/icons-material";

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
    desc?: string;
    name: string;
    status?: string;
    img?: string;
}

export default function AchievementsDetailCard({ name, desc, status, img }: Props) {

    return <DetailPanel className='app_detail_panel'>
        <DetailImgContainer>
            <DetailImg src={img} />
            { status === 'inprogress' && <StatusIcon color='#abd7a8'> <StarHalf className='status_icon' /> </StatusIcon>}
            { status === 'achieved' && <StatusIcon color='#66ff59'> <CheckCircle className='status_icon' /> </StatusIcon>}
            { status === 'ready' && <StatusIcon color='#66ff59'> <Star className='status_icon' /> </StatusIcon>}
        </DetailImgContainer>
        <DetailCategory>{name}</DetailCategory>
        <DetailCategory>{status}</DetailCategory>
    </DetailPanel>
}