import React, { useState } from 'react';
import logo from '../../assets/images/logo160.png';
import Button from '@mui/material/Button';
import './style.css';
import Connect from '../connect';


function Home() {
    const [isConnectOpen, setConnectOpen] = useState(false);

    return (
        <div className="Home">
            <header className="Home-header">
                <img src={logo} className="Home-logo" alt="logo" />
                <p>
                    Not Only Social
                </p>
                <div>
                    <Button onClick={()=> {setConnectOpen(true)}} variant="contained">Connect Wallet</Button>
                </div>
            </header>
            <Connect open={isConnectOpen} setOpen={setConnectOpen} />
        </div>
    );
}

export default Home;