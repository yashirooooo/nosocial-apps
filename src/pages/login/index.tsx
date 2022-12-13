import Button from '@mui/material/Button';
import useMetaMask from '../../components/wallets/metamask';
import metamaskIcon from '../../assets/images/metamask.png';
import './style.css';

function LoginPage() {
    const { connect, disconnect, account, isConnected } = useMetaMask()
    return (
        <div className="Login">
            <header className="Login-header">
                <Button variant="outlined" onClick={connect} disabled={isConnected}>
                    <img src={metamaskIcon} alt="MetaMask" width="50" height="50" /> Connect to MetaMask
                </Button>
            </header>
        </div>
    );
}

export default LoginPage;