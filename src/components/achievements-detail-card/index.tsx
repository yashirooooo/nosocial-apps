import styled from '@emotion/styled';
import { fNumber } from 'src/utils/formatNumber';
import './style.css';

const DetailPanel = styled('div')(({ color = '#FFFFFF' }: PanelProps) => ({
    color: color,
}));

const DetailAmount = styled('div')(({ fontSize = 50 }: PanelProps)=> ({
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: fontSize + 'px',
    lineHeight: '24px',
    /* or 48% */

    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    letterSpacing: '0.5px',
    height: '48px',
    color: '#FFFFFF',
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
    amount: number;
    name: string;
    fontSize?: number
}

export default function AchievementsDetailCard({ name, amount, fontSize }: Props) {
    return <DetailPanel className='app_detail_panel'>
        <DetailAmount fontSize={fontSize}>{fNumber(amount)}</DetailAmount>
        <DetailCategory>{name}</DetailCategory>
    </DetailPanel>
}