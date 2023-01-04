import Button from '@mui/material/Button';
import useMetaMask from '../../components/wallets/metamask';
import metamaskIcon from '../../assets/images/metamask.png';
import Logo from '../../components/logo';
import './style.css';

function LoginPage() {
    const { connect, disconnect, account, isConnected } = useMetaMask()
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