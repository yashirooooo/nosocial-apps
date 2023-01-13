import styled from '@emotion/styled';
import './style.css';

const DetailPanel = styled('div')(({ color = '#FFFFFF' }: PanelProps) => ({
    color: color,
}));

const AITagsDetailAmount = styled('div')(({ fontSize = 50 }: PanelProps) => ({
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

const AITagsDetailCategory = styled('div')(() => ({
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
    img?: string;
}

export default function AITagsCard({ img = 'https://data.nosocial.xyz/ai-tags/0x05-1673492263.png' }: Props) {
    return <DetailPanel className='ai_tags_detail_panel'>
        <img src={img} />
    </DetailPanel>
}