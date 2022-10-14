import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.goerliTestnet,
  mainnet: Networks.ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'OLDSCHOOLVIBEZ',
  tokenName: 'OldSchoolVibez',
  tokenSymbol: 'OSVBZ',
  hiddenMetadataUri: 'ipfs://bafybeidewpgqunylifs6wixpagzwcp4ngvybxwxovv4rkn3xcyxcogqgqy/hidden.json',
  maxSupply: 3333,
  whitelistSale: {
    price: 0.0019,
    maxMintAmountPerTx: 3333,
  },
  preSale: {
    price: 0.0027,
    maxMintAmountPerTx: 3333,
  },
  publicSale: {
    price: 0.0027,
    maxMintAmountPerTx: 3333,
  },
  contractAddress: '0xB5bC966Dc8F7c601012Bb81a5A5780794CC74133',
  marketplaceIdentifier: 'old-school-vibez',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
