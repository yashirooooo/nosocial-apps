import Button from '@mui/material/Button';
import useMetaMask from '../../components/wallets/metamask';
import metamaskIcon from '../../assets/images/metamask.png';
import Logo from '../../components/logo';
import './style.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
    const { connect, disconnect, account, isConnected } = useMetaMask();
    const navigate = useNavigate();

    useEffect(() => {
        if (account) {
            //TODO: Query whether it is in the whitelist 
            navigate('/login/select', { state: { account } })
        }
    }, [account])

    return (
        <div className="login">
            <div className="login-logo"><Logo /></div>
            <Button className="login-button" variant="outlined" onClick={connect} disabled={isConnected}>
                <img className="login-metamask-logo" src={metamaskIcon} /> Connect to MetaMask
            </Button>
            <div className="login-copyright">© 2022 Build with 💛 by NoSocial Labs</div>
        </div>
    );
}

export default LoginPage;