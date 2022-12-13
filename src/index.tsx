import { Web3ReactProvider } from '@web3-react/core';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Web3 from 'web3';
import { MetaMaskProvider } from './components/wallets/metamask';
import './index.css';
import Router from './routes';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <HelmetProvider>
    <BrowserRouter>
      <React.StrictMode>
        <Web3ReactProvider getLibrary={(provider, connector) => { new Web3(provider) }}>
          <MetaMaskProvider>
            <Router />
          </MetaMaskProvider>
        </Web3ReactProvider>
      </React.StrictMode>
    </BrowserRouter>
  </HelmetProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
