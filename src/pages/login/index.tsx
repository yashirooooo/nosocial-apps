import Button from '@mui/material/Button';
import useMetaMask, { MetaMaskProvider } from '../../components/wallets/metamask';
import metamaskIcon from '../../assets/svgs/metamask.svg';
import nounWavingIcon from '../../assets/svgs/noun_waving.svg';
import './style.css';

function LoginPage() {
    const { connect, disconnect, account, isConnected } = useMetaMask()
    return (
        <div className="Login">
            <header className="Login-header">
                <Button variant="contained" onClick={connect} disabled={isConnected}>
                    <img src={metamaskIcon} alt="MetaMask" width="50" height="50" /> Connect to MetaMask
                </Button>
                <div className="mt-2 mb-2">
                    Connected Account: {isConnected ? account : ''}
                </div>
                <Button variant="contained" onClick={disconnect}>
                    <img src={nounWavingIcon} width="50" height="50" /> Disconnect MetaMask
                </Button>
            </header>
        </div>
    );
}

export default LoginPage;