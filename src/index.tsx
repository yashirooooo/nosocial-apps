import { Web3ReactProvider } from '@web3-react/core';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Web3 from 'web3';
import { MetaMaskProvider } from './components/wallets/metamask';
import './index.css';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <HelmetProvider>
    <BrowserRouter>
      <React.StrictMode>
        <Web3ReactProvider getLibrary={(provider, connector) => { new Web3(provider) }}>
          <MetaMaskProvider>
            <App />
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

// If you want to enable client cache, register instead.
serviceWorker.unregister();
