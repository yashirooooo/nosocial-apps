import Button from '@mui/material/Button';
import useMetaMask from '../../components/wallets/metamask';
import metamaskIcon from '../../assets/images/metamask.png';
import Logo from '../../components/logo';
import './style.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { whiteList } from 'src/api';
import Snackbar from '@mui/material/Snackbar';
import React from 'react';

function LoginPage() {
    const { connect, account, isConnected } = useMetaMask();
    const navigate = useNavigate();
    const [resultOpen, setResultOpen] = React.useState(false);
    const [message, setMessage] = React.useState('');

    useEffect(() => {
        if (account) {
            whiteList(account).then(res => {
                // TODO: !res.inWhitelist => res.inWhitelist
                if (res && res.inWhitelist) {
                    navigate('/login/select', { state: { address: account } })
                } else {
                    setMessage('Not in allowlist');
                    setResultOpen(true)
                }
            })
        }
    }, [account])

    const handleResultClose = () => {
        setResultOpen(false);
    };

    return (
        <div className="login">
            <div className="login-logo"><Logo /></div>
            <Button className="login-button" variant="outlined" onClick={connect} disabled={isConnected}>
                <img className="login-metamask-logo" src={metamaskIcon} /> Connect to MetaMask
            </Button>
            <div className="login-copyright">© 2022 Build with 💛 by NoSocial Labs</div>
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'center'}}
                open={resultOpen}
                onClose={handleResultClose}
                message={message}
                key={'top' + 'center'}
            />
        </div>
    );
}

export default LoginPage;