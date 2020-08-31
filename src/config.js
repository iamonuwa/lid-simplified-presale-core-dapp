import WalletConnectProvider from '@walletconnect/web3-provider';
import Fortmatic from 'fortmatic';
import Torus from '@toruslabs/torus-embed';
import Authereum from 'authereum';
import UniLogin from '@unilogin/provider';
import Portis from '@portis/web3';
import Squarelink from 'squarelink';
import MewConnect from '@myetherwallet/mewconnect-web-client';

export const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider, // required
    options: {
      infuraId: process.env.REACT_APP_WALLET_CONNECT_INFURA // required
    }
  },
  fortmatic: {
    package: Fortmatic, // required
    options: {
      key: process.env.REACT_APP_FORTMATIC_KEY // required
    }
  },
  torus: {
    package: Torus // required
  },
  authereum: {
    package: Authereum // required
  },
  unilogin: {
    package: UniLogin // required
  },
  portis: {
    package: Portis, // required
    options: {
      id: process.env.REACT_APP_PORTIS_KEY // required
    }
  },
  squarelink: {
    package: Squarelink, // required
    options: {
      id: process.env.REACT_APP_SQUARELINK_KEY // required
    }
  },
  mewconnect: {
    package: MewConnect, // required
    options: {
      infuraId: process.env.REACT_APP_MEWCONNECT // required
    }
  }
};

export const totalPresale = process.env.REACT_APP_TOTAL_PRESALE || '11400000';

export const infura_ids = [
  '0764bdc3bf3f4eb7b38dc5b45d652bc9',
  '23427d6792604256b324ceaebd638800',
  '14edb7254c744027a0eba88604561a1b',
  '6c3420cb4c214fb1b4c85f7bee4e9288',
  '200a5f18716c42faa4aa99e7d585d2eb',
  '301ca1cb214744b69c68548011cf9e1d'
];

export const referralBP = process.env.REACT_APP_REFERRAL_BP || '250';
export const basisPoint = process.env.REACT_APP_BASISPOINT || '10000';

export const META = {
  TOKEN_NAME: process.env.REACT_APP_TOKEN_NAME || 'LID',
  TOKEN_SYMBOL: process.env.REACT_APP_TOKEN_SYMBOL || 'LID',
  TOKEN_OWNER_WEBSITE:
    process.env.REACT_APP_TOKEN_OWNER_WEBSITE || 'https://lid.sh',
  REFERRAL_LINK: process.env.REACT_APP_SITE || 'https://lid.sh/#/'
};

