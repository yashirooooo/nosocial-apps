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
    type: string;
    name: string;
    fontSize?: number;
    date: string;
}

export default function AITagsCard({ name, type, fontSize, date }: Props) {
    return <DetailPanel className='ai_tags_detail_panel'>
        <AITagsDetailAmount fontSize={fontSize}>{name}</AITagsDetailAmount>
        <AITagsDetailCategory>{type}</AITagsDetailCategory>
        <AITagsDetailCategory>{date}</AITagsDetailCategory>
    </DetailPanel>
}