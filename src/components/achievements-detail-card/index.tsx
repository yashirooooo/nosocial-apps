import styled from '@emotion/styled';
import './style.css';
import { Star, StarHalf, CheckCircle } from "@mui/icons-material";
import { ProfileBaseAchievement } from '../types';
import { useContextLoginUser } from 'src/lib/hooks';
import { collect } from 'src/api';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import React from 'react';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';

const DetailPanel = styled('div')(({ color = '#FFFFFF' }: PanelProps) => ({
    color: color,
}));

const DetailImgContainer = styled('div')(() => ({
    height: '120px',
    width: '120px',
    overflow: 'hidden',
    position: 'relative'
}))

const DetailImg = styled('img')(() => ({
    height: '120px',
    width: '120px',
}))

const StatusIcon = styled('div')(({ color = '#FFFFFF' }: PanelProps) => ({
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

    const user = useContextLoginUser();
    const [open, setOpen] = React.useState(false);
    const [resultOpen, setResultOpen] = React.useState(false);
    const [message, setMessage] = React.useState('success');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleResultClose = () => {
        setResultOpen(false);
    };

    const navigate = () => {
        if (achievement.url) {
            window.open(achievement.url)
        }
    }

    const doCollect = () => {
        console.log('user.profileId', user.profileId)
        collect(user.profileId, achievement.id).then((res) => {
            setMessage(res?.message)
            setResultOpen(true);
            setOpen(false);
        })
        setOpen(false);
    }

    return <DetailPanel className='app_detail_panel'>
        <DetailImgContainer>
            {/* <DetailImg src={achievement.picture} /> */}
            {achievement.status === 'inProgress' && <DetailImg src={achievement.picture} />}
            {achievement.status === 'achieved' && <DetailImg src={achievement.picture} onClick={navigate} />}
            {achievement.status === 'ready' && <DetailImg src={achievement.picture} onClick={handleClickOpen} />}
            {achievement.status === 'inProgress' && <StatusIcon color='#abd7a8'> <StarHalf className='status_icon' /> </StatusIcon>}
            {achievement.status === 'achieved' && <StatusIcon color='#66ff59'> <CheckCircle className='status_icon' /> </StatusIcon>}
            {achievement.status === 'ready' && <StatusIcon color='#66ff59'> <Star className='status_icon' /> </StatusIcon>}
        </DetailImgContainer>
        <DetailCategory>{achievement.name}</DetailCategory>
        <DetailCategory>{achievement.status}</DetailCategory>
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {"Confirm"}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Are you sure to claim this achievement?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Disagree</Button>
                <Button onClick={doCollect} autoFocus>
                    Agree
                </Button>
            </DialogActions>
        </Dialog>

        <Snackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'center'}}
            open={resultOpen}
            onClose={handleResultClose}
            message={message}
            key={'top' + 'center'}
        />
    </DetailPanel>
}